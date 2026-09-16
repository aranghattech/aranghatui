import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { isRtl, child } from '@aranghat/primitives/dom';
import { uniqueId } from '@aranghat/primitives/id';
import { createModal, type Modal, type ModalReason } from '../dialog/modal';

/**
 * Sheet — shadcn/ui parity on the native `<dialog>`: a panel that slides in from an edge
 * (`side`) over a scrim, for content that complements the page (filters, a form, a mobile
 * menu). Same modal behaviour as Dialog: page inert, scroll locked, Escape / backdrop / close
 * button / `dialog-close` elements close it, focus returns to the trigger. `left` and `right`
 * are logical (mirrored in RTL) and share the motion of the Sidebar's off-canvas mode.
 *
 * @slot trigger - The element that opens the sheet.
 * @slot title - The heading (required for an accessible name; or set `label`).
 * @slot description - Supporting text under the title.
 * @slot - The body (scrolls).
 * @slot footer - Actions at the end (`<art-button slot="footer" dialog-close>`).
 * @part content - The `<dialog>`.
 * @part header - Title + description.
 * @part title - The `<h2>`.
 * @part description - The `<p>`.
 * @part body - The scrolling body.
 * @part footer - The footer.
 * @part close - The close button.
 */
@Component({ tag: 'art-sheet', styleUrl: 'art-sheet.css', shadow: true })
export class ArtSheet {
  @Element() host!: HTMLElement;
  private dialog?: HTMLDialogElement;
  private modal?: Modal;
  private titleId = uniqueId('art-sheet-title');
  private descId = uniqueId('art-sheet-description');

  @Prop({ mutable: true, reflect: true }) open = false;
  /** Edge the sheet slides in from; `left` / `right` follow the writing direction. */
  @Prop({ reflect: true }) side: 'top' | 'right' | 'bottom' | 'left' = 'right';
  /** Accessible name when there is no `title` slot. */
  @Prop() label?: string;
  /** Remove the close button in the corner. */
  @Prop({ reflect: true, attribute: 'hide-close' }) hideClose = false;
  @Prop({ attribute: 'close-label' }) closeLabel = 'Close';
  @State() hasTitle = false;
  @State() hasDescription = false;
  @State() hasFooter = false;

  /** Emitted when the user opens or closes the sheet; `detail.open`. */
  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;

  connectedCallback() {
    this.host.addEventListener('click', this.onClick);
  }
  componentWillLoad() {
    this.wire();
  }
  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.wire);
    if (this.dialog) this.modal = createModal(this.dialog, { onRequestClose: (r) => this.set(false, r) });
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
  /** Slide vector: the panel enters from its edge (physical, so RTL mirrors `left` / `right`). */
  private slide(): string {
    const rtl = isRtl(this.host);
    switch (this.side) {
      case 'top': return '0 -100%';
      case 'bottom': return '0 100%';
      case 'left': return rtl ? '100% 0' : '-100% 0';
      default: return rtl ? '-100% 0' : '100% 0';
    }
  }
  @Watch('open')
  onOpen(open: boolean) {
    this.trigger()?.setAttribute('aria-expanded', String(open));
    if (open) { this.dialog?.style.setProperty('--art-overlay-slide', this.slide()); this.modal?.open(); }
    else void this.modal?.close();
  }

  render() {
    return (
      <Host>
        <slot name="trigger" />
        <dialog part="content" class="content flex flex-col gap-4" ref={(el) => (this.dialog = el)} aria-labelledby={this.hasTitle ? this.titleId : undefined} aria-label={this.hasTitle ? undefined : this.label} aria-describedby={this.hasDescription ? this.descId : undefined}>
          <div part="header" class="header flex flex-col gap-1.5 p-4" hidden={!this.hasTitle && !this.hasDescription}>
            <h2 part="title" id={this.titleId} class="m-0 text-base font-semibold" hidden={!this.hasTitle}><slot name="title" /></h2>
            <p part="description" id={this.descId} class="m-0 text-sm text-fg-muted" hidden={!this.hasDescription}><slot name="description" /></p>
          </div>
          <div part="body" class="body grid min-h-0 flex-1 auto-rows-min gap-4 overflow-auto px-4"><slot /></div>
          <div part="footer" class="footer mt-auto flex flex-col gap-2 p-4" hidden={!this.hasFooter}><slot name="footer" /></div>
          {!this.hideClose && (
            <button part="close" type="button" class="close absolute flex items-center justify-center rounded-xs opacity-70 transition-opacity motion-fast hover:opacity-100 focus-ring" aria-label={this.closeLabel} onClick={() => this.set(false, 'close')}>
              <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          )}
        </dialog>
      </Host>
    );
  }
}
