import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { isRtl, child } from '@aranghat/primitives/dom';
import { uniqueId } from '@aranghat/primitives/id';
import { createModal, type Modal, type ModalReason } from '../dialog/modal';

interface Drag { id: number; start: number; size: number; delta: number; last: number; lastT: number; velocity: number }
const INTERACTIVE = /^(BUTTON|A|INPUT|TEXTAREA|SELECT|LABEL)$/;

/**
 * Drawer — shadcn/ui parity on the native `<dialog>`: a panel that slides in from an edge
 * (`side`, bottom by default) with a swipe handle; drag it towards its edge to dismiss. Same
 * modal behaviour as Dialog (page inert, scroll locked, Escape / backdrop / `dialog-close`
 * elements close it, focus returns to the trigger); `persistent` keeps it open until a
 * `dialog-close` element or `open` says otherwise.
 *
 * @slot trigger - The element that opens the drawer.
 * @slot title - The heading (required for an accessible name; or set `label`).
 * @slot description - Supporting text under the title.
 * @slot - The body (scrolls).
 * @slot footer - Actions (`<art-button slot="footer" dialog-close>`).
 * @part content - The `<dialog>`.
 * @part handle - The swipe handle.
 * @part header - Title + description.
 * @part title - The `<h2>`.
 * @part description - The `<p>`.
 * @part body - The scrolling body.
 * @part footer - The footer.
 */
@Component({ tag: 'art-drawer', styleUrl: 'art-drawer.css', shadow: true })
export class ArtDrawer {
  @Element() host!: HTMLElement;
  private dialog?: HTMLDialogElement;
  private handle?: HTMLDivElement;
  private header?: HTMLDivElement;
  private body?: HTMLDivElement;
  private footer?: HTMLDivElement;
  private modal?: Modal;
  private drag?: Drag;
  private titleId = uniqueId('art-drawer-title');
  private descId = uniqueId('art-drawer-description');

  @Prop({ mutable: true, reflect: true }) open = false;
  /** Edge the drawer slides in from; `left` / `right` follow the writing direction. */
  @Prop({ reflect: true }) side: 'bottom' | 'top' | 'left' | 'right' = 'bottom';
  /** Accessible name when there is no `title` slot. */
  @Prop() label?: string;
  /** No dismissal by Escape, the backdrop or a swipe — only `dialog-close` elements or `open`. */
  @Prop({ reflect: true }) persistent = false;
  /** Remove the swipe handle (swiping still works from the header and footer). */
  @Prop({ reflect: true, attribute: 'hide-handle' }) hideHandle = false;
  @State() hasTitle = false;
  @State() hasDescription = false;
  @State() hasFooter = false;

  /** Emitted when the user opens or closes the drawer; `detail.open`. */
  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;

  connectedCallback() {
    this.host.addEventListener('click', this.onClick);
  }
  componentWillLoad() {
    this.wire();
  }
  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.wire);
    const d = this.dialog;
    if (d) {
      this.modal = createModal(d, { onRequestClose: (r) => { if (this.persistent && r !== 'close' && d.open) return; this.set(false, r); } });
      d.addEventListener('pointerdown', this.onPointerDown);
      d.addEventListener('pointermove', this.onPointerMove);
      d.addEventListener('pointerup', this.onPointerUp);
      d.addEventListener('pointercancel', this.onPointerUp);
    }
    if (this.open) this.onOpen(true);
  }
  disconnectedCallback() {
    this.host.removeEventListener('click', this.onClick);
    this.modal?.destroy();
    this.modal = undefined;
  }

  private trigger(): HTMLElement | null { return child(this.host, '[slot="trigger"]'); }
  private wire = () => {
    this.hasTitle = !!child(this.host, '[slot="title"]');
    this.hasDescription = !!child(this.host, '[slot="description"]');
    this.hasFooter = !!child(this.host, '[slot="footer"]');
    const t = this.trigger();
    t?.setAttribute('aria-haspopup', 'dialog');
    t?.setAttribute('aria-expanded', String(this.open));
  };
  private onClick = (e: MouseEvent) => {
    const path = e.composedPath();
    const t = this.trigger();
    if (t && path.includes(t)) { this.set(true); return; }
    if (this.open && path.some((n) => (n as Element).nodeType === 1 && (n as Element).hasAttribute('dialog-close') && this.host.contains(n as Node))) this.set(false, 'close');
  };
  private set(open: boolean, _reason?: ModalReason) {
    if (this.open === open) return;
    this.open = open;
    this.openChange.emit({ open });
  }
  /** Physical direction the panel leaves towards (and slides in from). */
  private vector(): { axis: 'x' | 'y'; sign: 1 | -1 } {
    const rtl = isRtl(this.host);
    switch (this.side) {
      case 'top': return { axis: 'y', sign: -1 };
      case 'bottom': return { axis: 'y', sign: 1 };
      case 'left': return { axis: 'x', sign: rtl ? 1 : -1 };
      default: return { axis: 'x', sign: rtl ? -1 : 1 };
    }
  }
  private slide(): string {
    const { axis, sign } = this.vector();
    return axis === 'y' ? `0 ${sign * 100}%` : `${sign * 100}% 0`;
  }
  @Watch('open')
  onOpen(open: boolean) {
    this.trigger()?.setAttribute('aria-expanded', String(open));
    if (open) { this.dialog?.style.setProperty('--art-overlay-slide', this.slide()); this.modal?.open(); }
    else void this.modal?.close().then(() => { if (this.dialog) this.dialog.style.translate = ''; });
  }

  // ---- swipe to dismiss: from the handle, header, footer, or a body that does not scroll
  private onPointerDown = (e: PointerEvent) => {
    const d = this.dialog;
    if (!d || this.persistent || e.button !== 0 || !this.open) return;
    const path = e.composedPath() as Element[];
    // only what sits inside the panel counts: the host and the page above it are ancestors too
    const inside = path.slice(0, path.indexOf(d));
    if (inside.some((n) => n.nodeType === 1 && (INTERACTIVE.test(n.tagName) || n.tagName.startsWith('ART-')))) return;
    const scrollable = !!this.body && this.body.scrollHeight > this.body.clientHeight;
    if (!(path.includes(this.handle!) || path.includes(this.header!) || path.includes(this.footer!) || (path.includes(this.body!) && !scrollable) || e.target === d)) return;
    const { axis } = this.vector();
    const pos = axis === 'y' ? e.clientY : e.clientX;
    this.drag = { id: e.pointerId, start: pos, size: axis === 'y' ? d.offsetHeight : d.offsetWidth, delta: 0, last: pos, lastT: e.timeStamp, velocity: 0 };
    d.setPointerCapture(e.pointerId);
    d.dataset.dragging = '';
  };
  private onPointerMove = (e: PointerEvent) => {
    const drag = this.drag;
    const d = this.dialog;
    if (!drag || !d || e.pointerId !== drag.id) return;
    const { axis, sign } = this.vector();
    const pos = axis === 'y' ? e.clientY : e.clientX;
    const delta = Math.max(0, (pos - drag.start) * sign);
    const dt = Math.max(1, e.timeStamp - drag.lastT);
    drag.velocity = ((pos - drag.last) * sign) / dt;
    drag.last = pos;
    drag.lastT = e.timeStamp;
    drag.delta = delta;
    d.style.translate = axis === 'y' ? `0 ${delta * sign}px` : `${delta * sign}px 0`;
  };
  private onPointerUp = (e: PointerEvent) => {
    const drag = this.drag;
    const d = this.dialog;
    if (!drag || !d || e.pointerId !== drag.id) return;
    this.drag = undefined;
    if (d.hasPointerCapture(e.pointerId)) d.releasePointerCapture(e.pointerId);
    delete d.dataset.dragging;
    if (drag.delta > drag.size * 0.25 || (drag.delta > 16 && drag.velocity > 0.4)) { this.set(false, 'close'); return; }
    d.style.translate = ''; // springs back through the transition in the stylesheet
  };

  render() {
    return (
      <Host>
        <slot name="trigger" />
        <dialog part="content" class="content" ref={(el) => (this.dialog = el)} aria-labelledby={this.hasTitle ? this.titleId : undefined} aria-label={this.hasTitle ? undefined : this.label} aria-describedby={this.hasDescription ? this.descId : undefined}>
          <div part="handle" class="handle shrink-0" ref={(el) => (this.handle = el)} hidden={this.hideHandle} aria-hidden="true" />
          <div part="header" class="header flex flex-col gap-1.5 p-4 text-center sm:text-start" ref={(el) => (this.header = el)} hidden={!this.hasTitle && !this.hasDescription}>
            <h2 part="title" id={this.titleId} class="m-0 text-base font-semibold" hidden={!this.hasTitle}><slot name="title" /></h2>
            <p part="description" id={this.descId} class="m-0 text-sm text-fg-muted" hidden={!this.hasDescription}><slot name="description" /></p>
          </div>
          <div part="body" class="body grid min-h-0 flex-1 auto-rows-min gap-4 overflow-auto px-4" ref={(el) => (this.body = el)}><slot /></div>
          <div part="footer" class="footer mt-auto flex flex-col gap-2 p-4" ref={(el) => (this.footer = el)} hidden={!this.hasFooter}><slot name="footer" /></div>
        </dialog>
      </Host>
    );
  }
}
