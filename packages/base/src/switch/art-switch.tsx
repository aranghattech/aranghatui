import { AttachInternals, Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { resolveAria } from '@aranghat/primitives/aria';
import { uniqueId } from '@aranghat/primitives/id';

/**
 * Switch — shadcn/ui parity on a native `<input type="checkbox" role="switch">` (ADR-0021).
 * Form-associated (submits `value` when on); `change` is emitted from the host with `detail.checked`.
 *
 * @part control - The native input (the track); the thumb is its `::before`.
 */
@Component({ tag: 'art-switch', styleUrl: 'art-switch.css', shadow: { delegatesFocus: true }, formAssociated: true })
export class ArtSwitch {
  @Element() host!: HTMLElement;
  @AttachInternals() internals?: ElementInternals;
  private input?: HTMLInputElement;
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
  private hostLabel?: string;
  private hostDescription?: string;

  componentWillRender() {
    if (this.hostAriaLabel != null) { this.directLabel = this.hostAriaLabel; this.host.removeAttribute('aria-label'); }
    const r = resolveAria(this.host, { labelledby: this.hostAriaLabelledby, describedby: this.hostAriaDescribedby }, this.directLabel);
    this.hostLabel = r.label;
    this.hostDescription = r.description;
  }

  @Watch('checked') @Watch('value')
  sync() {
    if (this.input) this.input.checked = this.checked;
    this.internals?.setFormValue?.(this.checked ? this.value : null);
  }
  connectedCallback() {
    this.defaultChecked = this.checked;
    if (!this.host.id) this.host.id = uniqueId('art-switch');
    this.host.addEventListener('click', this.onHostClick);
  }
  disconnectedCallback() { this.host.removeEventListener('click', this.onHostClick); }
  componentDidLoad() { this.sync(); }
  formResetCallback() { this.checked = this.defaultChecked; }
  formDisabledCallback(disabled: boolean) { this.disabled = disabled; }

  private onHostClick = (e: MouseEvent) => { if (this.input && !e.composedPath().includes(this.input)) this.input.click(); };
  private onChange = (e: Event) => {
    e.stopPropagation();
    this.checked = this.input!.checked;
    this.changeEvent.emit({ checked: this.checked });
  };

  render() {
    return (
      <Host>
        <input
          part="control"
          type="checkbox"
          role="switch"
          ref={(el) => (this.input = el)}
          checked={this.checked}
          disabled={this.disabled}
          required={this.required}
          aria-invalid={this.invalid ? 'true' : undefined}
          aria-label={this.hostLabel}
          aria-description={this.hostDescription}
          class={{
            'appearance-none shrink-0 rounded-full p-0.5 bg-border checked:bg-primary shadow-raised transition-interactive motion-fast focus-ring disabled:opacity-50 aria-invalid:invalid-ring': true,
            'h-4 w-7': this.size === 'sm',
            'h-5 w-9': this.size === 'md',
            'h-6 w-11': this.size === 'lg',
          }}
          onChange={this.onChange}
        />
      </Host>
    );
  }
}
