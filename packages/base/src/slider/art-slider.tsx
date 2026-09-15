import { AttachInternals, Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { resolveAria } from '@aranghat/primitives/aria';

/**
 * Slider — shadcn/ui parity on a native `<input type="range">` (ADR-0021): the platform
 * provides drag, keyboard, screen-reader value announcements and form participation; artui
 * only styles the track, filled range and thumb. Form-associated. `input` fires while moving,
 * `change` on commit; `detail.value` is a number.
 *
 * @part input - The native `<input type="range">`.
 */
@Component({ tag: 'art-slider', styleUrl: 'art-slider.css', shadow: { delegatesFocus: true }, formAssociated: true })
export class ArtSlider {
  @Element() host!: HTMLElement;
  @AttachInternals() internals?: ElementInternals;
  private input?: HTMLInputElement;
  private defaultValue: number | string = 0;

  @Prop({ mutable: true }) value: number | string = 0;
  @Prop() min = 0;
  @Prop() max = 100;
  @Prop() step = 1;
  @Prop({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  /** Track and thumb thickness. */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @Prop({ reflect: true }) disabled = false;
  @Prop({ reflect: true }) name?: string;

  /** Emitted while the value changes (drag, keys); `detail.value` mirrors `target.value`. */
  @Event({ eventName: 'input', bubbles: true, composed: true }) inputEvent!: EventEmitter<{ value: number }>;
  /** Emitted when the interaction ends. */
  @Event({ eventName: 'change', bubbles: true, composed: true }) changeEvent!: EventEmitter<{ value: number }>;

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

  private num(): number { const n = Number(this.value); return Math.min(this.max, Math.max(this.min, Number.isFinite(n) ? n : this.min)); }
  private pct(): number { return ((this.num() - this.min) / (this.max - this.min || 1)) * 100; }

  @Watch('value')
  sync() {
    if (this.input && Number(this.input.value) !== this.num()) this.input.value = String(this.num());
    this.internals?.setFormValue?.(String(this.num()));
  }
  connectedCallback() { this.defaultValue = this.value; }
  componentDidLoad() { this.sync(); }
  formResetCallback() { this.value = this.defaultValue; }
  formDisabledCallback(disabled: boolean) { this.disabled = disabled; }

  private onInput = (e: Event) => { e.stopPropagation(); this.value = Number(this.input!.value); this.inputEvent.emit({ value: this.num() }); };
  private onChange = (e: Event) => { e.stopPropagation(); this.changeEvent.emit({ value: this.num() }); };

  render() {
    return (
      <Host>
        <input
          part="input"
          type="range"
          ref={(el) => (this.input = el)}
          min={this.min}
          max={this.max}
          step={this.step}
          value={this.num()}
          disabled={this.disabled}
          aria-label={this.ariaLabel}
          aria-description={this.ariaDescription}
          aria-orientation={this.orientation === 'vertical' ? 'vertical' : undefined}
          class="appearance-none bg-transparent transition-interactive motion-fast disabled:opacity-50"
          style={{ '--fill': `${this.pct()}%` }}
          onInput={this.onInput}
          onChange={this.onChange}
        />
      </Host>
    );
  }
}
