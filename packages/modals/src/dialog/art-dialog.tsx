import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { uniqueId } from '@aranghat/primitives/id';
import { createModal, type Modal, type ModalReason } from './modal';

/**
 * Dialog — shadcn/ui parity on the native `<dialog>` (ADR-0020): a modal window over the page
 * (top layer, page inert, document scroll locked) opened by the `trigger`, closed by Escape, a
 * click on the backdrop, the close button, or any slotted element with the `dialog-close`
 * attribute. Focus moves into the dialog and returns to the trigger on close.
 *
 * @slot trigger - The element that opens the dialog (a button).
 * @slot title - The heading (required for an accessible name; or set `label`).
 * @slot description - Supporting text under the title.
 * @slot - The body.
 * @slot footer - Actions (`<art-button slot="footer" dialog-close>`).
 * @part content - The `<dialog>`.
 * @part header - Title + description.
 * @part title - The `<h2>`.
 * @part description - The `<p>`.
 * @part body - The body wrapper.
 * @part footer - The footer.
 * @part close - The close button.
 */
@Component({ tag: 'art-dialog', styleUrl: 'art-dialog.css', shadow: true })
export class ArtDialog {
  @Element() host!: HTMLElement;
  private dialog?: HTMLDialogElement;
  private modal?: Modal;
  private titleId = uniqueId('art-dialog-title');
  private descId = uniqueId('art-dialog-description');

  @Prop({ mutable: true, reflect: true }) open = false;
  /** Accessible name when there is no `title` slot. */
  @Prop() label?: string;
  /** Remove the close button in the corner. */
  @Prop({ reflect: true, attribute: 'hide-close' }) hideClose = false;
  @Prop({ attribute: 'close-label' }) closeLabel = 'Close';
  @State() hasTitle = false;
  @State() hasDescription = false;
  @State() hasFooter = false;

  /** Emitted when the user opens or closes the dialog; `detail.open`. */
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

  private trigger(): HTMLElement | null { return this.host.querySelector(':scope > [slot="trigger"]'); }
  private wire = () => {
    this.hasTitle = !!this.host.querySelector(':scope > [slot="title"]');
    this.hasDescription = !!this.host.querySelector(':scope > [slot="description"]');
    this.hasFooter = !!this.host.querySelector(':scope > [slot="footer"]');
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
  @Watch('open')
  onOpen(open: boolean) {
    this.trigger()?.setAttribute('aria-expanded', String(open));
    if (open) this.modal?.open(); else void this.modal?.close();
  }

  render() {
    return (
      <Host>
        <slot name="trigger" />
        <dialog part="content" class="content" ref={(el) => (this.dialog = el)} aria-labelledby={this.hasTitle ? this.titleId : undefined} aria-label={this.hasTitle ? undefined : this.label} aria-describedby={this.hasDescription ? this.descId : undefined}>
          <div part="header" class="header flex flex-col gap-2 text-center sm:text-start" hidden={!this.hasTitle && !this.hasDescription}>
            <h2 part="title" id={this.titleId} class="m-0 text-lg leading-none font-semibold" hidden={!this.hasTitle}><slot name="title" /></h2>
            <p part="description" id={this.descId} class="m-0 text-sm text-fg-muted" hidden={!this.hasDescription}><slot name="description" /></p>
          </div>
          <div part="body" class="body grid gap-4"><slot /></div>
          <div part="footer" class="footer flex flex-col-reverse gap-2 sm:flex-row sm:justify-end" hidden={!this.hasFooter}><slot name="footer" /></div>
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
