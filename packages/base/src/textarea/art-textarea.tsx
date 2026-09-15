import { AttachInternals, Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h } from '@stencil/core';
import { resolveAria } from '@aranghat/primitives/aria';
import { uniqueId } from '@aranghat/primitives/id';

/**
 * Textarea — shadcn/ui parity. Multi-line text field; grows with content (`field-sizing: content`),
 * form-associated, `input` / `change` emitted from the host with `detail.value` (§3a).
 *
 * @part textarea - The native `<textarea>`.
 */
@Component({ tag: 'art-textarea', styleUrl: 'art-textarea.css', shadow: { delegatesFocus: true }, formAssociated: true })
export class ArtTextarea {
  @Element() host!: HTMLElement;
  @AttachInternals() internals?: ElementInternals;
  private textarea?: HTMLTextAreaElement;
  private defaultValue = '';

  @Prop({ mutable: true }) value = '';
  /** Density; changes inline padding only (height follows content). */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @Prop() placeholder?: string;
  @Prop({ reflect: true }) name?: string;
  @Prop({ reflect: true }) disabled = false;
  @Prop({ reflect: true }) readonly = false;
  @Prop() required = false;
  @Prop({ reflect: true }) invalid = false;
  /** Initial visible rows; the field still grows with content. */
  @Prop() rows?: number;
  @Prop() minlength?: number;
  @Prop() maxlength?: number;
  @Prop() autocomplete?: string;

  @Event({ eventName: 'input', bubbles: true, composed: true }) inputEvent!: EventEmitter<{ value: string }>;
  @Event({ eventName: 'change', bubbles: true, composed: true }) changeEvent!: EventEmitter<{ value: string }>;

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

  @Watch('value')
  onValue(v: string) {
    if (this.textarea && this.textarea.value !== v) this.textarea.value = v;
    this.internals?.setFormValue?.(v);
    this.mirrorValidity();
  }
  connectedCallback() {
    this.defaultValue = this.value;
    if (!this.host.id) this.host.id = uniqueId('art-textarea');
  }
  componentDidLoad() { this.onValue(this.value); }

  @Method() async setFocus() { this.textarea?.focus(); }
  formResetCallback() { this.value = this.defaultValue; }
  formDisabledCallback(disabled: boolean) { this.disabled = disabled; }

  private mirrorValidity() {
    if (!this.internals?.setValidity || !this.textarea) return;
    const v = this.textarea.validity;
    if (v.valid) this.internals.setValidity({});
    else this.internals.setValidity({ valueMissing: v.valueMissing, tooLong: v.tooLong, tooShort: v.tooShort }, this.textarea.validationMessage, this.textarea);
  }
  private onInput = (e: Event) => { e.stopPropagation(); this.value = (e.target as HTMLTextAreaElement).value; this.inputEvent.emit({ value: this.value }); };
  private onChange = (e: Event) => { e.stopPropagation(); this.changeEvent.emit({ value: this.value }); };

  render() {
    return (
      <Host>
        <textarea
          part="textarea"
          ref={(el) => (this.textarea = el)}
          class={{
            'field-sizing-content block min-h-16 w-full min-w-0 rounded-md border-default bg-transparent py-2 text-md md:text-sm text-fg shadow-raised transition-interactive motion-fast focus-ring': true,
            'placeholder:text-fg-muted selection:bg-primary selection:text-primary-fg disabled:opacity-50 aria-invalid:invalid-ring': true,
            // safelist for the scanner: textarea-sm textarea-md textarea-lg
            [`textarea-${this.size}`]: true,
          }}
          placeholder={this.placeholder}
          name={this.name}
          disabled={this.disabled}
          readOnly={this.readonly}
          required={this.required}
          rows={this.rows}
          minlength={this.minlength}
          maxlength={this.maxlength}
          autocomplete={this.autocomplete}
          aria-invalid={this.invalid ? 'true' : undefined}
          aria-label={this.ariaLabel}
          aria-description={this.ariaDescription}
          onInput={this.onInput}
          onChange={this.onChange}
        >
          {this.value}
        </textarea>
      </Host>
    );
  }
}
