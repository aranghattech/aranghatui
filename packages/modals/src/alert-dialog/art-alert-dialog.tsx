import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { uniqueId } from '@aranghat/primitives/id';
import { createModal, type Modal, type ModalReason } from '../dialog/modal';

/**
 * Alert Dialog — shadcn/ui parity on the native `<dialog>`: a `role="alertdialog"` that
 * interrupts the user and expects a decision. No close button, no backdrop dismissal; Escape
 * cancels. Focus starts on the `cancel` button and returns to the trigger on close.
 *
 * @slot trigger - The element that opens the dialog.
 * @slot media - An icon or image before the title.
 * @slot title - The heading (required for an accessible name; or set `label`).
 * @slot description - The question or consequence.
 * @slot - Extra body content.
 * @slot cancel - The cancel button (closes).
 * @slot action - The confirming button (emits `action`, then closes unless prevented).
 * @part content - The `<dialog>`.
 * @part header - Media + title + description.
 * @part media - The media wrapper.
 * @part title - The `<h2>`.
 * @part description - The `<p>`.
 * @part body - The body wrapper.
 * @part footer - Cancel + action.
 */
@Component({ tag: 'art-alert-dialog', styleUrl: 'art-alert-dialog.css', shadow: true })
export class ArtAlertDialog {
  @Element() host!: HTMLElement;
  private dialog?: HTMLDialogElement;
  private modal?: Modal;
  private titleId = uniqueId('art-alert-dialog-title');
  private descId = uniqueId('art-alert-dialog-description');

  @Prop({ mutable: true, reflect: true }) open = false;
  /** Accessible name when there is no `title` slot. */
  @Prop() label?: string;
  /** `sm` is a narrower panel for a short question. */
  @Prop({ reflect: true }) size: 'sm' | 'md' = 'md';
  @State() hasMedia = false;
  @State() hasTitle = false;
  @State() hasDescription = false;
  @State() hasBody = false;

  /** Emitted when the user opens or closes the dialog; `detail.open`. */
  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;
  /** Emitted when the `action` button is pressed. Cancelable — `preventDefault()` keeps the dialog open (e.g. while saving). */
  @Event({ eventName: 'action', bubbles: true, composed: true, cancelable: true }) actionEvent!: EventEmitter<void>;

  connectedCallback() {
    this.host.addEventListener('click', this.onClick);
  }
  componentWillLoad() {
    this.wire();
  }
  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.wire);
    if (this.dialog) this.modal = createModal(this.dialog, { outside: false, onRequestClose: (r) => this.set(false, r) });
    if (this.open) this.onOpen(true);
  }
  disconnectedCallback() {
    this.host.removeEventListener('click', this.onClick);
    this.modal?.destroy();
    this.modal = undefined;
  }

  private slotted(name: string): HTMLElement | null { return this.host.querySelector(`:scope > [slot="${name}"]`); }
  private wire = () => {
    this.hasMedia = !!this.slotted('media');
    this.hasTitle = !!this.slotted('title');
    this.hasDescription = !!this.slotted('description');
    this.hasBody = !!this.host.querySelector(':scope > :not([slot])');
    const t = this.slotted('trigger');
    t?.setAttribute('aria-haspopup', 'dialog');
    t?.setAttribute('aria-expanded', String(this.open));
  };
  private onClick = (e: MouseEvent) => {
    const path = e.composedPath();
    const t = this.slotted('trigger');
    if (t && path.includes(t)) { this.set(true); return; }
    if (!this.open) return;
    const cancel = this.slotted('cancel');
    const action = this.slotted('action');
    if (cancel && path.includes(cancel)) this.set(false, 'close');
    else if (action && path.includes(action)) { if (!this.actionEvent.emit().defaultPrevented) this.set(false, 'close'); }
  };
  private set(open: boolean, _reason?: ModalReason) {
    if (this.open === open) return;
    this.open = open;
    this.openChange.emit({ open });
  }
  @Watch('open')
  onOpen(open: boolean) {
    this.slotted('trigger')?.setAttribute('aria-expanded', String(open));
    if (open) {
      this.modal?.open();
      // the safe choice takes focus first (Radix / shadcn behaviour)
      (this.slotted('cancel') ?? this.slotted('action'))?.focus({ preventScroll: true });
    } else void this.modal?.close();
  }

  render() {
    return (
      <Host>
        <slot name="trigger" />
        <dialog part="content" class="content" role="alertdialog" ref={(el) => (this.dialog = el)} aria-labelledby={this.hasTitle ? this.titleId : undefined} aria-label={this.hasTitle ? undefined : this.label} aria-describedby={this.hasDescription ? this.descId : undefined}>
          <div part="header" class="header flex flex-col gap-2 text-center sm:flex-row sm:items-start sm:text-start">
            <div part="media" class="media mx-auto flex shrink-0 items-center justify-center rounded-md bg-muted text-fg sm:mx-0" hidden={!this.hasMedia}><slot name="media" /></div>
            <div class="flex flex-col gap-2">
              <h2 part="title" id={this.titleId} class="m-0 text-lg leading-none font-semibold" hidden={!this.hasTitle}><slot name="title" /></h2>
              <p part="description" id={this.descId} class="m-0 text-sm text-fg-muted" hidden={!this.hasDescription}><slot name="description" /></p>
            </div>
          </div>
          <div part="body" class="body grid gap-4" hidden={!this.hasBody}><slot /></div>
          <div part="footer" class="footer flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <slot name="cancel" />
            <slot name="action" />
          </div>
        </dialog>
      </Host>
    );
  }
}
