import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { createDismissable, type Dismissable } from '@aranghat/primitives/dismissable';
import { child, cssLength, getTabbables } from '@aranghat/primitives/dom';
import type { VirtualElement } from '@aranghat/primitives/floating';
import { createHoverIntent, type HoverIntent } from '@aranghat/primitives/hover-intent';
import { uniqueId } from '@aranghat/primitives/id';
import { createOverlay, type Overlay } from '@aranghat/primitives/overlay';

type Bar = HTMLElement & { fullWidth?: boolean; fullWidthContent?: boolean };

/**
 * Mega Menu Item — one entry in the bar: a plain link (`href`), or a trigger (`label`) whose panel
 * holds `art-mega-menu-group`s. The groups flow in columns or rows, capped by `max-columns` /
 * `max-rows`; `aside` content sits beside them and `footer` content below. Below the `md`
 * breakpoint the groups stack in one column and the aside moves under them.
 *
 * @slot trigger - Custom trigger content in place of `label`: a burger icon, a logo, a logo and a name. It
 *   sits inside the item's own button, so keyboard, `aria-expanded` and the focus ring are unchanged; with
 *   an icon-only trigger, `label` becomes the button's accessible name.
 * @slot - The panel's `art-mega-menu-group`s.
 * @slot aside - Beside the groups: a tutorial card, a sales prompt.
 * @slot footer - A strip under the groups: a "view all" link, a changelog note.
 * @part trigger - The trigger button (or the link when `href` is set).
 * @part chevron - The chevron beside the trigger's content (absent with `hide-chevron`).
 * @part content - The panel.
 * @part inner - The panel's content container (centred and capped in a full-width panel).
 * @part groups - The grid the groups flow in.
 * @part aside - The aside column.
 * @part footer - The footer strip.
 */
@Component({ tag: 'art-mega-menu-item', styleUrl: 'art-mega-menu-item.css', shadow: true })
export class ArtMegaMenuItem {
  @Element() host!: HTMLElement;
  private button?: HTMLElement;
  private panel?: HTMLDivElement;
  private overlay?: Overlay;
  /** Whether `overlay` was made for a full-width panel: switching mode needs a new anchor. */
  private overlayFull = false;
  private dismiss?: Dismissable;
  private hover?: HoverIntent;
  private media?: MediaQueryList;
  private panelId = uniqueId('art-mega-menu-item');
  private byKeyboard = false;
  /** Opened by hovering the trigger: a click that lands while the pointer is still there keeps it open. */
  private byHover = false;

  /** Trigger text. With a `trigger` slot it is the button's accessible name instead — required for an icon-only trigger. */
  @Prop() label = '';
  /** Makes the entry a plain link instead of a trigger. */
  @Prop() href?: string;
  /** Marks the link as the current page (`aria-current="page"`). */
  @Prop({ reflect: true }) active = false;
  /** Leave the chevron off the trigger (a burger icon or a logo says "menu" on its own). */
  @Prop({ reflect: true }) hideChevron = false;
  /** Whether the panel is open. */
  @Prop({ mutable: true, reflect: true }) open = false;
  /**
   * How the groups flow. `columns`: side by side, starting a new line after `max-columns`.
   * `rows`: stacked, starting a new column after `max-rows`.
   */
  @Prop({ reflect: true }) layout: 'columns' | 'rows' = 'columns';
  /** With `layout="columns"`, the most groups side by side. Unset: every group in one row. */
  @Prop() maxColumns?: number;
  /** With `layout="rows"`, the most groups stacked in a column. Unset: every group in one column. */
  @Prop() maxRows?: number;
  /** The panel spans the full width of the viewport, hanging from the bottom edge of the bar. Also settable on `art-mega-menu` for every panel. */
  @Prop({ reflect: true }) fullWidth = false;
  /** The content fills the panel instead of sitting in a centred container (`--art-mega-menu-content-width`). Also settable on `art-mega-menu`. */
  @Prop({ reflect: true }) fullWidthContent = false;

  /** Groups in the default slot. */
  @State() count = 0;
  @State() hasAside = false;
  /** The `trigger` slot is filled; `iconTrigger` when that content has no text (a burger, a logo mark). */
  @State() hasTrigger = false;
  @State() iconTrigger = false;
  @State() hasFooter = false;
  /** Below the `md` breakpoint: one column. */
  @State() narrow = false;

  /** Emitted when the panel opens or closes; `detail.open`. */
  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;
  /** Internal: tells the bar to close the other panels. */
  @Event({ eventName: 'mega-menu-open', bubbles: true, composed: false }) menuOpen!: EventEmitter<void>;

  connectedCallback() {
    this.host.setAttribute('role', 'listitem');
    this.host.addEventListener('keydown', this.onKeydown);
    // Listen from the start: a framework wrapper can set `slot` on a child after it connects
    // (React's does, in a layout effect), before this component's first render.
    this.host.shadowRoot?.addEventListener('slotchange', this.sync);
    this.sync();
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function' && typeof getComputedStyle === 'function') {
      const md = cssLength(document.documentElement, '--art-breakpoint-md') || 768;
      this.media = window.matchMedia(`(max-width: ${md - 0.02}px)`);
      this.narrow = this.media.matches;
      this.media.addEventListener?.('change', this.onMedia);
    }
  }
  /** Count again just before the first render, once any late `slot` has landed. */
  componentWillLoad() {
    this.sync();
  }
  componentDidLoad() {
    if (this.button && !this.href) this.hover = createHoverIntent(this.button, { onOpen: () => void this.openByHover(), onClose: () => void this.setOpen(false), focus: false, touch: false, also: () => [this.panel] });
    if (this.open) this.onOpen(true);
  }
  disconnectedCallback() {
    this.host.removeEventListener('keydown', this.onKeydown);
    this.media?.removeEventListener?.('change', this.onMedia);
    this.hover?.destroy();
    this.dismiss?.destroy();
    this.dismiss = undefined;
    this.overlay?.destroy();
    this.overlay = undefined;
  }

  /** Open or close the panel. */
  @Method() async setOpen(open: boolean, byKeyboard = false) {
    if (this.open === open || this.href) return;
    this.byKeyboard = byKeyboard;
    if (!open) this.byHover = false;
    this.open = open;
    this.openChange.emit({ open });
  }
  private openByHover() {
    if (this.open) return;
    this.byHover = true;
    void this.setOpen(true);
  }

  @Watch('open')
  onOpen(open: boolean) {
    if (!this.panel || !this.button) return;
    if (open) {
      this.menuOpen.emit();
      const byKeyboard = this.byKeyboard;
      void this.place().open().then(() => { if (this.open && byKeyboard) getTabbables(this.panel!)[0]?.focus({ preventScroll: true }); });
      this.dismiss ??= createDismissable(this.panel, {
        escape: true,
        pointerOutside: true,
        focusOutside: true,
        ignore: () => [this.button],
        onDismiss: (reason) => {
          void this.setOpen(false);
          if (reason === 'escape') this.button?.focus({ preventScroll: true });
        },
      });
    } else {
      this.dismiss?.destroy();
      this.dismiss = undefined;
      void this.overlay?.close();
    }
  }
  /** Width settings changed while open: re-anchor for the new mode. */
  componentDidRender() {
    if (this.open && this.overlay && this.overlayFull !== this.full()) {
      this.overlay.destroy();
      this.overlay = undefined;
      void this.place().open();
    }
  }

  private bar(): Bar | null {
    return this.host.closest('art-mega-menu') as Bar | null;
  }
  private full(): boolean {
    return this.fullWidth || this.bar()?.fullWidth === true;
  }
  private fullContent(): boolean {
    return this.fullWidthContent || this.bar()?.fullWidthContent === true;
  }

  /**
   * A panel that hugs its content hangs from its trigger. A full-width one anchors to a rectangle
   * as wide as the viewport at the bar's height, and takes that width.
   */
  private place(): Overlay {
    const full = this.full();
    if (this.overlay && this.overlayFull === full) return this.overlay;
    this.overlay?.destroy();
    this.overlayFull = full;
    const offset = cssLength(this.host, '--art-space-1-5');
    this.overlay = full
      ? createOverlay(this.viewportRow(), this.panel!, { placement: 'bottom', offset, matchReferenceWidth: true, availableHeight: true })
      : createOverlay(this.button!, this.panel!, { placement: 'bottom-start', offset, availableHeight: true });
    return this.overlay;
  }
  private viewportRow(): VirtualElement {
    const bar = this.bar() ?? this.host;
    return {
      contextElement: bar,
      getBoundingClientRect: () => {
        const r = bar.getBoundingClientRect();
        const width = document.documentElement.clientWidth;
        return { x: 0, y: r.y, left: 0, top: r.top, right: width, bottom: r.bottom, width, height: r.height, toJSON: () => ({}) } as DOMRect;
      },
    };
  }

  /** What is slotted where: the group count drives the grid, the aside and footer show only when filled. */
  private sync = () => {
    this.count = Array.from(this.host.children).filter((c) => !c.hasAttribute('slot')).length;
    this.hasAside = !!child(this.host, '[slot="aside"]');
    this.hasFooter = !!child(this.host, '[slot="footer"]');
    const trigger = Array.from(this.host.children).filter((c) => c.getAttribute('slot') === 'trigger');
    this.hasTrigger = trigger.length > 0;
    this.iconTrigger = this.hasTrigger && !trigger.some((c) => c.textContent?.trim());
  };
  private onMedia = (e: MediaQueryListEvent) => {
    this.narrow = e.matches;
  };

  /** Columns and rows of the group grid, and the order the groups fill it in. */
  private grid(): { cols: number; rows: number; flow: 'row' | 'column' } {
    const n = Math.max(1, this.count);
    const cap = (max?: number) => (max && max > 0 ? Math.min(Math.floor(max), n) : n);
    if (this.narrow) return { cols: 1, rows: n, flow: 'row' };
    if (this.layout === 'rows') {
      const rows = cap(this.maxRows);
      return { cols: Math.ceil(n / rows), rows, flow: 'column' };
    }
    const cols = cap(this.maxColumns);
    return { cols, rows: Math.ceil(n / cols), flow: 'row' };
  }

  private onKeydown = (e: KeyboardEvent) => {
    if (this.href) return;
    const path = e.composedPath();
    const onTrigger = path.includes(this.button as EventTarget);
    if (onTrigger) {
      if (e.key === 'ArrowDown' || ((e.key === 'Enter' || e.key === ' ') && !this.open)) {
        e.preventDefault();
        if (this.open) getTabbables(this.panel!)[0]?.focus({ preventScroll: true });
        else void this.setOpen(true, true);
      } else if ((e.key === 'Enter' || e.key === ' ') && this.open) {
        e.preventDefault();
        void this.setOpen(false);
      }
      return;
    }
    // ↑ / ↓ / Home / End walk the panel's links in reading order (APG disclosure navigation).
    if (!this.open || !this.panel || !path.includes(this.panel)) return;
    const stops = getTabbables(this.panel);
    const at = stops.findIndex((s) => path.includes(s));
    let to = -1;
    if (e.key === 'ArrowDown') to = Math.min(at + 1, stops.length - 1);
    else if (e.key === 'ArrowUp') to = at - 1;
    else if (e.key === 'Home') to = 0;
    else if (e.key === 'End') to = stops.length - 1;
    else return;
    e.preventDefault();
    if (to < 0) this.button?.focus({ preventScroll: true }); // ↑ from the first link goes back to the trigger
    else stops[to]?.focus({ preventScroll: true });
  };
  private onClick = () => {
    if (this.open && this.byHover) {
      this.byHover = false; // the hover already opened it: this click confirms, the next one closes
      return;
    }
    void this.setOpen(!this.open, false);
  };

  render() {
    const cls = 'top inline-flex h-9 w-max items-center justify-center gap-1 rounded-md bg-canvas px-4 py-2 text-sm font-medium text-fg transition-interactive motion-fast hover:bg-accent focus-ring';
    // `label` is the content until the `trigger` slot is filled; then it names the control instead.
    const face = [<slot name="trigger" />, !this.hasTrigger && this.label];
    const name = this.hasTrigger && this.label ? this.label : undefined;
    const icon = this.iconTrigger ? '' : undefined;
    if (this.href) {
      return (
        <Host>
          <a part="trigger" ref={(el) => (this.button = el)} class={cls} href={this.href} aria-label={name} aria-current={this.active ? 'page' : undefined} data-active={this.active ? '' : undefined} data-icon={icon}>
            {face}
          </a>
        </Host>
      );
    }
    const full = this.full();
    const { cols, rows, flow } = this.grid();
    return (
      <Host>
        <button part="trigger" type="button" ref={(el) => (this.button = el)} class={cls} aria-label={name} aria-expanded={this.open ? 'true' : 'false'} aria-controls={this.panelId} data-state={this.open ? 'open' : 'closed'} data-icon={icon} onClick={this.onClick}>
          {face}
          {!this.hideChevron && (
            <svg part="chevron" class="chevron icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
              <path d="m6 9 6 6 6-6" />
            </svg>
          )}
        </button>
        <div part="content" id={this.panelId} popover="manual" ref={(el) => (this.panel = el)} class="content bg-popover text-fg shadow-popover" data-full={full ? '' : undefined} data-narrow={this.narrow ? '' : undefined}>
          <div part="inner" class="inner" data-contained={full && !this.fullContent() ? '' : undefined}>
            <div class="body">
              <div part="groups" class="groups" data-flow={flow} style={{ '--_cols': String(cols), '--_rows': String(rows) }}>
                <slot />
              </div>
              <div part="aside" class="aside" hidden={!this.hasAside}>
                <slot name="aside" />
              </div>
            </div>
          </div>
          <div part="footer" class="footer" hidden={!this.hasFooter}>
            <div class="footer-inner" data-contained={full && !this.fullContent() ? '' : undefined}>
              <slot name="footer" />
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
