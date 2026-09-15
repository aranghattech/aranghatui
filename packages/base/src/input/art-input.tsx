import { AttachInternals, Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h } from '@stencil/core';
import { resolveAria } from '@aranghat/primitives/aria';
import { uniqueId } from '@aranghat/primitives/id';

/**
 * Input — shadcn/ui parity. Wraps a native `<input>`; form-associated (FormData, validation,
 * reset); `input` / `change` are emitted from the host in response to the native events with
 * `event.target` being `<art-input>` and `detail.value` mirroring `target.value` (§3a). Sizes
 * share the control-height tokens so inputs align with buttons. `start` / `end` slots place an
 * icon or short text inside the same frame (shadcn Input Group addons): the frame — not the native
 * input — carries the border, focus ring and invalid ring, so the addons read as part of the field.
 *
 * @slot start - Leading addon inside the field: an icon (`<art-icon slot="start">`) or short text.
 * @slot end - Trailing addon inside the field.
 * @part field - The bordered frame around the input and its addons.
 * @part input - The native `<input>`.
 */
@Component({ tag: 'art-input', styleUrl: 'art-input.css', shadow: { delegatesFocus: true }, formAssociated: true })
export class ArtInput {
  @Element() host!: HTMLElement;
  @AttachInternals() internals?: ElementInternals;
  private input?: HTMLInputElement;
  private defaultValue = '';

  /** Current value. */
  @Prop({ mutable: true }) value = '';
  /** Native input type. */
  @Prop() type: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url' | 'date' | 'time' | 'file' = 'text';
  /** Control size; aligns with Button. */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @Prop() placeholder?: string;
  /** Form field name (submitted with the value). */
  @Prop({ reflect: true }) name?: string;
  @Prop({ reflect: true }) disabled = false;
  @Prop({ reflect: true }) readonly = false;
  @Prop() required = false;
  /** Marks the field invalid (`aria-invalid` + destructive ring). Field sets it from validation. */
  @Prop({ reflect: true }) invalid = false;
  @Prop() autocomplete?: string;
  @Prop() inputmode?: string;
  @Prop() pattern?: string;
  @Prop() min?: string | number;
  @Prop() max?: string | number;
  @Prop() step?: string | number;
  @Prop() minlength?: number;
  @Prop() maxlength?: number;

  /** Emitted on every keystroke; `detail.value` mirrors `target.value`. Kept native-named so `addEventListener('input')`, `onInput`, `@input` and `(input)` all work. */
  @Event({ eventName: 'input', bubbles: true, composed: true }) inputEvent!: EventEmitter<{ value: string }>;
  /** Emitted when the value is committed (blur / Enter). */
  @Event({ eventName: 'change', bubbles: true, composed: true }) changeEvent!: EventEmitter<{ value: string }>;

  // ---- cross-shadow ARIA naming: idrefs cannot cross the boundary, so referenced text is resolved ----
  @Prop({ attribute: 'aria-label' }) hostAriaLabel?: string | null;
  @Prop({ attribute: 'aria-labelledby' }) hostAriaLabelledby?: string | null;
  @Prop({ attribute: 'aria-describedby' }) hostAriaDescribedby?: string | null;
  private directLabel?: string;
  private ariaLabel?: string;
  private ariaDescription?: string;

  /**
   * Runs before every render (not in a watcher: an attribute set by `art-label` between
   * instance creation and load would otherwise never be recomputed).
   */
  componentWillRender() {
    if (this.hostAriaLabel != null) {
      this.directLabel = this.hostAriaLabel; // a generic host must not keep aria-label (axe aria-prohibited-attr)
      this.host.removeAttribute('aria-label');
    }
    const r = resolveAria(this.host, { labelledby: this.hostAriaLabelledby, describedby: this.hostAriaDescribedby }, this.directLabel);
    this.ariaLabel = r.label;
    this.ariaDescription = r.description;
  }

  @Watch('value')
  onValue(v: string) {
    if (this.input && this.input.value !== v) this.input.value = v;
    this.internals?.setFormValue?.(v);
    this.mirrorValidity();
  }

  connectedCallback() {
    this.defaultValue = this.value;
    if (!this.host.id) this.host.id = uniqueId('art-input');
  }
  componentDidLoad() {
    this.onValue(this.value);
  }

  /** Focus the native input. */
  @Method() async setFocus() { this.input?.focus(); }
  /** Select all text. */
  @Method() async select() { this.input?.select(); }

  formResetCallback() { this.value = this.defaultValue; }
  formDisabledCallback(disabled: boolean) { this.disabled = disabled; }

  private mirrorValidity() {
    if (!this.internals?.setValidity || !this.input) return;
    const v = this.input.validity;
    if (v.valid) this.internals.setValidity({});
    else this.internals.setValidity({ valueMissing: v.valueMissing, typeMismatch: v.typeMismatch, patternMismatch: v.patternMismatch, tooLong: v.tooLong, tooShort: v.tooShort, rangeUnderflow: v.rangeUnderflow, rangeOverflow: v.rangeOverflow, stepMismatch: v.stepMismatch, badInput: v.badInput }, this.input.validationMessage, this.input);
  }

  private onInput = (e: Event) => {
    e.stopPropagation(); // the host re-emits a composed `input` with detail
    this.value = (e.target as HTMLInputElement).value;
    this.inputEvent.emit({ value: this.value });
  };
  private onChange = (e: Event) => {
    e.stopPropagation();
    this.changeEvent.emit({ value: this.value });
  };

  render() {
    return (
      <Host>
        <div
          part="field"
          class={{
            'flex w-full items-center border-default bg-transparent shadow-raised transition-interactive motion-fast focus-ring-within has-disabled:opacity-50 has-aria-invalid:invalid-ring': true,
            // safelist for the scanner: field-frame-sm field-frame-md field-frame-lg
            [`field-frame-${this.size}`]: true,
          }}
        >
          <slot name="start" />
          <input
            part="input"
            ref={(el) => (this.input = el)}
            class={{
              'h-full min-w-0 flex-1 text-md md:text-sm text-fg outline-none placeholder:text-fg-muted selection:bg-primary selection:text-primary-fg': true,
              'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-fg': true,
              // safelist for the scanner: field-pad-sm field-pad-md field-pad-lg
              [`field-pad-${this.size}`]: true,
            }}
            type={this.type}
            value={this.value}
            placeholder={this.placeholder}
            name={this.name}
            disabled={this.disabled}
            readOnly={this.readonly}
            required={this.required}
            autocomplete={this.autocomplete}
            inputmode={this.inputmode}
            pattern={this.pattern}
            min={this.min}
            max={this.max}
            step={this.step}
            minlength={this.minlength}
            maxlength={this.maxlength}
            aria-invalid={this.invalid ? 'true' : undefined}
            aria-label={this.ariaLabel}
            aria-description={this.ariaDescription}
            onInput={this.onInput}
            onChange={this.onChange}
          />
          <slot name="end" />
        </div>
      </Host>
    );
  }
}
