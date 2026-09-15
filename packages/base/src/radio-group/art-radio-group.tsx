import { AttachInternals, Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { createRovingTabindex, type RovingTabindex } from '@aranghat/primitives/roving-tabindex';

/** Structural view of an `<art-radio>` (the generated global element type is not available on a first build). */
type RadioEl = HTMLElement & { value: string; disabled: boolean; checked: boolean; size: 'sm' | 'md' | 'lg'; groupDisabled: boolean; name?: string; tabbable: boolean };

/**
 * Radio Group — shadcn/ui parity. Owns the selected `value`, form association and keyboard
 * navigation for its `<art-radio>` children (arrows move focus and select, APG radio group).
 * The host carries `role="radiogroup"`, so `aria-label` / `aria-labelledby` go straight on it.
 *
 * @slot - `<art-radio>` items.
 */
@Component({ tag: 'art-radio-group', styleUrl: 'art-radio-group.css', shadow: true, formAssociated: true })
export class ArtRadioGroup {
  @Element() host!: HTMLElement;
  @AttachInternals() internals?: ElementInternals;
  private roving?: RovingTabindex;
  private observer?: MutationObserver;
  private defaultValue?: string;

  /** Selected item value. */
  @Prop({ mutable: true, reflect: true }) value?: string;
  @Prop({ reflect: true }) name?: string;
  @Prop({ reflect: true }) disabled = false;
  @Prop() required = false;
  @Prop({ reflect: true }) invalid = false;
  /** Layout and arrow-key axis. */
  @Prop({ reflect: true }) orientation: 'vertical' | 'horizontal' = 'vertical';
  /** Item size, applied to every `<art-radio>`. */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';

  /** Emitted after a user selection; `detail.value` mirrors `target.value`. */
  @Event({ eventName: 'change', bubbles: true, composed: true }) changeEvent!: EventEmitter<{ value: string }>;

  private radios(): RadioEl[] { return Array.from(this.host.querySelectorAll('art-radio')); }

  connectedCallback() {
    this.defaultValue = this.value;
    this.host.setAttribute('role', 'radiogroup');
    this.host.addEventListener('click', this.onClick);
  }
  componentDidLoad() {
    this.roving = createRovingTabindex(this.host, {
      getItems: () => this.radios(),
      orientation: this.orientation,
      isDisabled: (r) => (r as RadioEl).disabled || this.disabled,
      setTabbable: (r, t) => { (r as RadioEl).tabbable = t; },
      // APG: moving focus with the arrows also selects
      onChange: (r) => this.select((r as RadioEl).value),
    });
    if (typeof MutationObserver !== 'undefined') {
      this.observer = new MutationObserver(() => this.sync());
      this.observer.observe(this.host, { childList: true, subtree: true, attributes: true, attributeFilter: ['value', 'disabled'] });
    }
    this.sync();
  }
  disconnectedCallback() {
    this.roving?.destroy();
    this.observer?.disconnect();
    this.host.removeEventListener('click', this.onClick);
  }

  @Watch('value') @Watch('disabled') @Watch('size') @Watch('name') @Watch('required')
  sync() {
    const radios = this.radios();
    const checkedIndex = radios.findIndex((r) => r.value === this.value);
    radios.forEach((r) => {
      r.checked = r.value === this.value;
      r.size = this.size;
      r.groupDisabled = this.disabled;
      r.name = this.name;
    });
    // the checked item (or the first enabled one) is the single tab stop
    const first = radios.findIndex((r) => !r.disabled && !this.disabled);
    this.roving?.setActive(checkedIndex >= 0 ? checkedIndex : Math.max(first, 0), false);
    this.internals?.setFormValue?.(this.value ?? null);
    if (this.internals?.setValidity) {
      if (this.required && this.value == null) this.internals.setValidity({ valueMissing: true }, 'Please select one of these options.', this.host);
      else this.internals.setValidity({});
    }
  }

  private select(value: string) {
    if (this.disabled || value === this.value) return;
    this.value = value;
    this.changeEvent.emit({ value });
  }
  private onClick = (e: MouseEvent) => {
    // the event is retargeted to the item host at this level, so closest() is enough (composedPath is a bonus)
    const radio = ((e.composedPath?.() ?? []).find((n) => (n as Element).tagName === 'ART-RADIO') ?? (e.target as Element).closest?.('art-radio')) as RadioEl | null | undefined;
    if (!radio || radio.disabled) return;
    this.select(radio.value);
  };

  formResetCallback() { this.value = this.defaultValue; }
  formDisabledCallback(disabled: boolean) { this.disabled = disabled; }

  render() {
    return (
      <Host aria-required={this.required ? 'true' : undefined} aria-invalid={this.invalid ? 'true' : undefined} aria-orientation={this.orientation}>
        <slot />
      </Host>
    );
  }
}
