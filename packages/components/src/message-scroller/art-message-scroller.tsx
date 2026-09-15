import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, h } from '@stencil/core';

export interface ScrollStateDetail {
  atStart: boolean;
  atEnd: boolean;
  /** Whether new content keeps the end in view. */
  following: boolean;
}

/**
 * Message Scroller — shadcn/ui parity. A transcript viewport for streaming conversations that
 * never moves the reader against their intent: it follows the live edge while the reader is at
 * the end and lets go when they scroll up; a new turn marked `scroll-anchor` is placed near the
 * top with a peek of the previous one; older messages prepended above keep the visible row in
 * place; a "jump to latest" button appears when the end is out of view.
 *
 * @slot - `<art-message-scroller-item>`s (or any rows).
 * @part viewport - The scrollable `role="region"`.
 * @part content - The `role="log"` transcript.
 * @part button - The jump-to-end button.
 */
@Component({ tag: 'art-message-scroller', styleUrl: 'art-message-scroller.css', shadow: true })
export class ArtMessageScroller {
  @Element() host!: HTMLElement;
  private viewport?: HTMLDivElement;
  private content?: HTMLDivElement;
  private mo?: MutationObserver;
  private ro?: ResizeObserver;
  private lastHeight = 0;
  /** Scroll events before this time were caused by the component, not the reader. */
  private programmaticUntil = 0;
  private following = true;
  private firstChild: Element | null = null;
  /** Offset of the first row, tracked continuously so a prepend can be measured against the layout before it. */
  private firstTop = 0;
  /** The row kept in place while rows are added above it (native scroll anchoring does nothing at scrollTop 0). */
  private keep?: { el: HTMLElement; top: number };

  /** Keep the end in view as content streams in (until the reader scrolls away). */
  @Prop({ attribute: 'auto-scroll' }) autoScroll = true;
  /** Where to open: the latest message, the first one, or the last `scroll-anchor` row with context. */
  @Prop({ attribute: 'default-scroll-position' }) defaultScrollPosition: 'start' | 'end' | 'last-anchor' = 'end';
  /** Pixels of the previous row kept visible above an anchored turn. */
  @Prop({ attribute: 'scroll-previous-item-peek' }) scrollPreviousItemPeek = 64;
  /** Accessible name of the viewport. */
  @Prop() label = 'Messages';
  @State() private atEnd = true;
  @State() private atStart = true;
  @State() private pending = true;

  /** Emitted when the reader reaches or leaves the start / end, or following turns on or off. */
  @Event({ eventName: 'scroll-state-change', bubbles: true, composed: true }) scrollStateChange!: EventEmitter<ScrollStateDetail>;

  private items(): HTMLElement[] { return Array.from(this.host.children) as HTMLElement[]; }
  private anchors(): HTMLElement[] { return this.items().filter((i) => i.hasAttribute('scroll-anchor')); }

  componentDidLoad() {
    if (!this.viewport || !this.content) return;
    this.firstChild = this.host.firstElementChild;
    this.trackFirst();
    this.lastHeight = this.viewport.scrollHeight;
    this.mo = new MutationObserver(this.onMutate);
    this.mo.observe(this.host, { childList: true });
    if (typeof ResizeObserver !== 'undefined') {
      this.ro = new ResizeObserver(this.onResize);
      this.ro.observe(this.content);
      this.ro.observe(this.viewport);
    }
    this.viewport.addEventListener('scroll', this.onScroll, { passive: true });
    this.viewport.addEventListener('scrollend', this.onScrollEnd);
    // Initial position, before the first paint of the transcript.
    if (this.defaultScrollPosition === 'start') this.viewport.scrollTop = 0;
    else if (this.defaultScrollPosition === 'last-anchor' && this.anchors().length) this.anchorTo(this.anchors()[this.anchors().length - 1]!, 'instant');
    else this.viewport.scrollTop = this.viewport.scrollHeight;
    this.following = this.autoScroll && this.defaultScrollPosition !== 'start';
    this.pending = false;
    this.measure();
  }
  disconnectedCallback() {
    this.mo?.disconnect();
    this.ro?.disconnect();
    this.viewport?.removeEventListener('scroll', this.onScroll);
    this.viewport?.removeEventListener('scrollend', this.onScrollEnd);
  }

  private distanceFromEnd(): number {
    const v = this.viewport!;
    return v.scrollHeight - v.clientHeight - v.scrollTop;
  }
  private measure() {
    const v = this.viewport;
    if (!v) return;
    const atEnd = this.distanceFromEnd() <= 1;
    const atStart = v.scrollTop <= 1;
    const changed = atEnd !== this.atEnd || atStart !== this.atStart;
    this.atEnd = atEnd;
    this.atStart = atStart;
    if (changed) this.scrollStateChange.emit({ atStart, atEnd, following: this.following });
  }
  private setFollowing(f: boolean) {
    if (this.following === f) return;
    this.following = f;
    this.scrollStateChange.emit({ atStart: this.atStart, atEnd: this.atEnd, following: f });
  }
  private onScroll = () => {
    const v = this.viewport!;
    this.lastHeight = v.scrollHeight;
    this.trackFirst();
    if (Date.now() > this.programmaticUntil) {
      this.keep = undefined;
      // The reader's own scrolling engages or disengages following.
      if (this.distanceFromEnd() <= 1) this.setFollowing(this.autoScroll);
      else if (this.following) this.setFollowing(false);
    }
    this.measure();
  };
  private onScrollEnd = () => {
    if (this.programmaticUntil) { this.programmaticUntil = 0; this.viewport?.removeAttribute('data-autoscrolling'); this.measure(); }
  };
  private onMutate = (records: MutationRecord[]) => {
    const v = this.viewport!;
    const delta = v.scrollHeight - this.lastHeight;
    const oldFirst = this.firstChild as HTMLElement | null;
    const oldFirstTop = this.keep?.el === oldFirst ? this.keep.top : this.firstTop;
    let prepended = false;
    let anchored: HTMLElement | undefined;
    for (const r of records) {
      for (const n of Array.from(r.addedNodes)) {
        if (!(n instanceof HTMLElement)) continue;
        if (oldFirst && oldFirst.isConnected && n.compareDocumentPosition(oldFirst) & Node.DOCUMENT_POSITION_FOLLOWING) prepended = true;
        else if (n.hasAttribute('scroll-anchor')) anchored = n;
      }
    }
    this.firstChild = this.host.firstElementChild;
    if (prepended && oldFirst) {
      // Older messages loaded above: keep the row the reader was looking at where it is. Layout settles over
      // a few frames (the new rows upgrade), so the shift is re-applied from the resize observer until stable.
      this.keep = { el: oldFirst, top: oldFirstTop };
      this.holdPosition();
    } else if (anchored && this.following) {
      this.keep = undefined;
      this.anchorTo(anchored, 'smooth');
    } else if (this.following && delta !== 0) {
      this.keep = undefined;
      this.toEnd('instant');
    }
    this.lastHeight = v.scrollHeight;
    this.trackFirst();
    this.measure();
  };
  private trackFirst() { this.firstTop = (this.host.firstElementChild as HTMLElement | null)?.offsetTop ?? 0; }
  private holdPosition() {
    const v = this.viewport!, k = this.keep;
    if (!k || !k.el.isConnected) { this.keep = undefined; return; }
    const now = k.el.offsetTop;
    const shift = now - k.top;
    if (!shift) return;
    k.top = now;
    this.programmaticUntil = Date.now() + 100;
    v.scrollTop += shift;
  }
  private onResize = () => {
    const v = this.viewport;
    if (!v) return;
    if (this.keep) this.holdPosition();
    else if (this.following && v.scrollHeight !== this.lastHeight) this.toEnd('instant'); // streaming text grows the last row
    this.lastHeight = v.scrollHeight;
    this.trackFirst();
    this.measure();
  };
  /** Places a turn near the top with a peek of the previous row; reserves room below so it can sit there. */
  private anchorTo(item: HTMLElement, behavior: ScrollBehavior) {
    const v = this.viewport!, c = this.content!;
    const top = Math.max(0, item.offsetTop - this.scrollPreviousItemPeek);
    c.style.minHeight = `${top + v.clientHeight}px`;
    this.scrollTo(top, behavior);
  }
  private scrollTo(top: number, behavior: ScrollBehavior) {
    const v = this.viewport!;
    const target = Math.max(0, Math.min(top, v.scrollHeight - v.clientHeight));
    if (Math.abs(target - v.scrollTop) < 1) return; // nothing to move: no scroll events would follow
    const smooth = behavior === 'smooth' && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    // The scroll events this causes must not read as the reader scrolling away (a smooth scroll keeps
    // firing them for a while); `scrollend` (or the safety timeout) closes the window.
    this.programmaticUntil = Date.now() + (smooth ? 1000 : 100);
    v.setAttribute('data-autoscrolling', '');
    v.scrollTo({ top: target, behavior: smooth ? 'smooth' : 'instant' });
    if (smooth) setTimeout(this.onScrollEnd, 1000); else requestAnimationFrame(() => requestAnimationFrame(this.onScrollEnd));
  }
  private toEnd(behavior: ScrollBehavior) { this.scrollTo(this.viewport!.scrollHeight, behavior); }

  /** Jump to the latest message and follow new ones. */
  @Method() async scrollToEnd(behavior: ScrollBehavior = 'smooth') { this.setFollowing(this.autoScroll); this.toEnd(behavior); }
  /** Jump to the first message (following stops). */
  @Method() async scrollToStart(behavior: ScrollBehavior = 'smooth') { this.setFollowing(false); this.scrollTo(0, behavior); }
  /** Bring a row (`message-id`) into view near the top (following stops). */
  @Method() async scrollToMessage(id: string, behavior: ScrollBehavior = 'smooth') {
    const item = this.items().find((i) => i.getAttribute('message-id') === id);
    if (!item) return;
    this.setFollowing(false);
    this.scrollTo(Math.max(0, item.offsetTop - this.scrollPreviousItemPeek), behavior);
  }
  /** Whether the reader is at the end. */
  @Method() async isAtEnd() { return this.atEnd; }

  render() {
    return (
      <Host>
        <div part="viewport" ref={(el) => (this.viewport = el)} role="region" aria-label={this.label} tabindex="0" class="viewport min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-contain focus-ring" data-pending-scroll={this.pending ? '' : undefined}>
          <div part="content" ref={(el) => (this.content = el)} role="log" aria-relevant="additions" class="content flex min-h-full flex-col gap-8">
            <slot />
          </div>
        </div>
        <button part="button" type="button" class="jump absolute inline-flex items-center justify-center rounded-full border-default bg-secondary text-secondary-fg shadow-raised transition-interactive motion-base hover:bg-secondary-hover focus-ring control-icon-sm" aria-label="Scroll to latest message" data-active={!this.pending && !this.atEnd ? 'true' : 'false'} tabindex={this.atEnd ? -1 : 0} inert={this.atEnd} onClick={() => void this.scrollToEnd()}>
          <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
        </button>
      </Host>
    );
  }
}
