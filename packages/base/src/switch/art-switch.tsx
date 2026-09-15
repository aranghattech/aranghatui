import { AttachInternals, Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { resolveAria } from '@aranghat/primitives/aria';
import { uniqueId } from '@aranghat/primitives/id';

/**
 * Switch — shadcn/ui parity. A `role="switch"` toggle, form-associated (submits `value` when on).
 * `change` is emitted from the host with `detail.checked`.
 *
 * @part control - The `role="switch"` button (track).
 * @part thumb - The thumb.
 */
@Component({ tag: 'art-switch', styleUrl: 'art-switch.css', shadow: { delegatesFocus: true }, formAssociated: true })
export class ArtSwitch {
  @Element() host!: HTMLElement;
  @AttachInternals() internals?: ElementInternals;
  private defaultChecked = false;

  @Prop({ mutable: true, reflect: true }) checked = false;
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @Prop() value = 'on';
  @Prop({ reflect: true }) name?: string;
  @Prop({ reflect: true }) disabled = false;
  @Prop() required = false;
  @Prop({ reflect: true }) invalid = false;

  /** Emitted after a user toggle; `detail.checked` mirrors `target.checked`. */
  @Event({ eventName: 'change', bubbles: true, composed: true }) changeEvent!: EventEmitter<{ checked: boolean }>;

  @Prop({ attribute: 'aria-label' }) hostAriaLabel?: string | null;
  @Prop({ attribute: 'aria-labelledby' }) hostAriaLabelledby?: string | null;
  @Prop({ attribute: 'aria-describedby' }) hostAriaDescribedby?: string | null;
  private directLabel?: string;
  private ariaLabel?: string;
  private ariaDescription?: string;

  componentWillRender() {
    if (this.hostAriaLabel != null) { this.directLabel = this.hostAriaLabel; this.host.removeAttribute('aria-label'); }
    const r = resolveAria(this.host, { labelledby: this.hostAriaLabelledby, describedby: this.hostAriaDescribedby }, this.directLabel);
    this.ariaLabel = r.label;
    this.ariaDescription = r.description;
  }

  @Watch('checked')
  @Watch('value')
  syncForm() { this.internals?.setFormValue?.(this.checked ? this.value : null); }
  connectedCallback() {
    this.defaultChecked = this.checked;
    if (!this.host.id) this.host.id = uniqueId('art-switch');
    this.host.addEventListener('click', this.onHostClick);
  }
  disconnectedCallback() { this.host.removeEventListener('click', this.onHostClick); }
  componentDidLoad() { this.syncForm(); }
  formResetCallback() { this.checked = this.defaultChecked; }
  formDisabledCallback(disabled: boolean) { this.disabled = disabled; }

  private toggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.changeEvent.emit({ checked: this.checked });
  }
  private onHostClick = (e: MouseEvent) => { if (e.composedPath().some((n) => (n as Element).tagName === 'BUTTON')) return; this.toggle(); };
  private onControlClick = (e: MouseEvent) => { e.stopPropagation(); this.toggle(); };

  render() {
    return (
      <Host>
        <button
          part="control"
          type="button"
          role="switch"
          aria-checked={this.checked ? 'true' : 'false'}
          aria-required={this.required ? 'true' : undefined}
          aria-invalid={this.invalid ? 'true' : undefined}
          aria-label={this.ariaLabel}
          aria-description={this.ariaDescription}
          disabled={this.disabled}
          class={{
            // p-0.5 (space token) is the thumb inset; no border utilities, so no cascade conflict
            'inline-flex shrink-0 items-center rounded-full p-0.5 shadow-raised transition-interactive motion-fast focus-ring disabled:opacity-50 aria-invalid:invalid-ring': true,
            // safelist: h-4 w-7 h-5 w-9 h-6 w-11
            'h-4 w-7': this.size === 'sm',
            'h-5 w-9': this.size === 'md',
            'h-6 w-11': this.size === 'lg',
            'bg-primary': this.checked,
            'bg-border': !this.checked,
          }}
          onClick={this.onControlClick}
        >
          <span
            part="thumb"
            class={{
              'pointer-events-none block rounded-full bg-canvas shadow-raised transition-interactive motion-fast': true,
              // safelist: size-3 size-4 size-5 translate-x-3 translate-x-4 translate-x-5 translate-x-0
              'size-3': this.size === 'sm',
              'size-4': this.size === 'md',
              'size-5': this.size === 'lg',
              'translate-x-3': this.checked && this.size === 'sm',
              'translate-x-4': this.checked && this.size === 'md',
              'translate-x-5': this.checked && this.size === 'lg',
              'translate-x-0': !this.checked,
            }}
          />
        </button>
      </Host>
    );
  }
}
