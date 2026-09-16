import { AttachInternals, Component, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { resolveAria } from '@aranghat/primitives/aria';

/**
 * Input OTP — shadcn/ui parity. A one-time-code field: one native `<input>` (so typing, paste,
 * autofill, Backspace and arrows are all platform behaviour) laid invisibly over a row of
 * character slots that render its value, with a caret in the active slot. Form-associated.
 *
 * @part input - The native `<input>` (transparent, on top of the slots).
 * @part slot - A character slot.
 * @part separator - The separator between groups.
 */
@Component({ tag: 'art-input-otp', styleUrl: 'art-input-otp.css', shadow: { delegatesFocus: true }, formAssociated: true })
export class ArtInputOtp {
  @Element() host!: HTMLElement;
  @AttachInternals() internals?: ElementInternals;
  private input?: HTMLInputElement;
  private defaultValue = '';

  /** Number of characters. */
  @Prop() length = 6;
  /** Characters per group; `0` renders one group. A separator is drawn between groups. */
  @Prop({ attribute: 'group-size' }) groupSize = 0;
  /** `numeric` (digits, numeric keyboard) or `alphanumeric`. */
  @Prop() pattern: 'numeric' | 'alphanumeric' = 'numeric';
  @Prop({ mutable: true }) value = '';
  @Prop({ reflect: true }) name?: string;
  @Prop({ reflect: true }) disabled = false;
  @Prop() required = false;
  @Prop({ reflect: true }) invalid = false;

  /** Emitted on every change of the value; `detail.value` mirrors `target.value`. */
  @Event({ eventName: 'input', bubbles: true, composed: true }) inputEvent!: EventEmitter<{ value: string }>;
  /** Emitted when the value is committed (blur). */
  @Event({ eventName: 'change', bubbles: true, composed: true }) changeEvent!: EventEmitter<{ value: string }>;
  /** Emitted when every slot is filled. */
  @Event({ eventName: 'complete', bubbles: true, composed: true }) completeEvent!: EventEmitter<{ value: string }>;

  @Prop({ attribute: 'aria-label' }) hostAriaLabel?: string | null;
  @Prop({ attribute: 'aria-labelledby' }) hostAriaLabelledby?: string | null;
  @Prop({ attribute: 'aria-describedby' }) hostAriaDescribedby?: string | null;
  private directLabel?: string;
  private hostLabel?: string;
  private hostDescription?: string;

  /** Index of the slot holding the caret; -1 when unfocused. */
  @State() active = -1;

  componentWillRender() {
    if (this.hostAriaLabel != null) {
      this.directLabel = this.hostAriaLabel;
      this.host.removeAttribute('aria-label');
    }
    const r = resolveAria(this.host, { labelledby: this.hostAriaLabelledby, describedby: this.hostAriaDescribedby }, this.directLabel);
    this.hostLabel = r.label;
    this.hostDescription = r.description;
  }

  connectedCallback() {
    this.defaultValue = this.value;
  }
  componentDidLoad() {
    this.onValue(this.value);
  }

  /** Filters to the pattern and cuts to `length` — no native maxlength, so a pasted "123 456" is not
   *  truncated before the spaces are stripped. */
  private clean(v: string): string {
    return v.replace(this.pattern === 'numeric' ? /\D/g : /[^a-zA-Z0-9]/g, '').slice(0, this.length);
  }

  @Watch('value')
  onValue(v: string) {
    const c = this.clean(v);
    if (c !== v) { this.value = c; return; }
    if (this.input && this.input.value !== c) this.input.value = c;
    this.internals?.setFormValue?.(c);
    this.internals?.setValidity?.(this.required && !c ? { valueMissing: true } : {}, 'Please fill out this field.', this.input);
  }

  /** Focus the field. */
  @Method() async setFocus() { this.input?.focus(); }

  formResetCallback() { this.value = this.defaultValue; }
  formDisabledCallback(disabled: boolean) { this.disabled = disabled; }

  private track = () => {
    const i = this.input;
    if (!i || this.host.shadowRoot?.activeElement !== i) { this.active = -1; return; }
    const caret = i.selectionStart ?? i.value.length;
    this.active = Math.min(caret, this.length - 1);
  };
  /** The invisible text does not line up with the slots, so focus and clicks always continue at the end. */
  private toEnd = () => {
    const n = this.input?.value.length ?? 0;
    this.input?.setSelectionRange(n, n);
    this.track();
  };
  private onInput = (e: Event) => {
    e.stopPropagation();
    const i = e.target as HTMLInputElement;
    const c = this.clean(i.value);
    if (i.value !== c) i.value = c;
    this.value = c;
    this.track();
    this.inputEvent.emit({ value: c });
    if (c.length === this.length) this.completeEvent.emit({ value: c });
  };
  private onChange = (e: Event) => { e.stopPropagation(); this.changeEvent.emit({ value: this.value }); };

  render() {
    const size = this.groupSize > 0 ? this.groupSize : this.length;
    const groups: number[][] = [];
    for (let i = 0; i < this.length; i++) (groups[Math.floor(i / size)] ??= []).push(i);
    const chars = this.value;
    return (
      <Host>
        <div class="relative inline-flex items-center gap-2">
          <div class="contents" aria-hidden="true">
            {groups.map((g, gi) => [
              gi > 0 && (
                <div part="separator" role="separator" class="text-fg-muted">
                  <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false"><path d="M5 12h14" /></svg>
                </div>
              ),
              <div class="flex items-center">
                {g.map((i) => (
                  <div part="slot" class={{ 'slot control-icon-md relative flex items-center justify-center border-default text-md md:text-sm shadow-raised transition-interactive motion-fast': true, 'active z-10 focus-ring-shadow': i === this.active, invalid: this.invalid }}>
                    {chars[i] ?? ''}
                    {i === this.active && !chars[i] && <div class="caret animate-caret-blink bg-fg" />}
                  </div>
                ))}
              </div>,
            ])}
          </div>
          <input
            part="input"
            ref={(el) => (this.input = el)}
            class="absolute inset-0 h-full w-full opacity-0 text-md"
            value={chars}
            inputmode={this.pattern === 'numeric' ? 'numeric' : 'text'}
            pattern={this.pattern === 'numeric' ? '[0-9]*' : '[a-zA-Z0-9]*'}
            autocomplete="one-time-code"
            name={this.name}
            disabled={this.disabled}
            required={this.required}
            aria-invalid={this.invalid ? 'true' : undefined}
            aria-label={this.hostLabel}
            aria-description={this.hostDescription}
            onInput={this.onInput}
            onChange={this.onChange}
            onFocus={this.toEnd}
            onBlur={this.track}
            onKeyUp={this.track}
            onPointerUp={this.toEnd}
          />
        </div>
      </Host>
    );
  }
}
