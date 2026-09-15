import { AttachInternals, Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h } from '@stencil/core';
import { resolveAria } from '@aranghat/primitives/aria';
import { uniqueId } from '@aranghat/primitives/id';

/**
 * Native Select — shadcn/ui parity. A styled native `<select>`; write plain `<option>` /
 * `<optgroup>` children and they are mirrored into the control (and kept in sync).
 * Form-associated; `change` (and `input`) emitted from the host with `detail.value`.
 *
 * @slot - `<option>` and `<optgroup>` elements.
 * @part select - The native `<select>`.
 */
@Component({ tag: 'art-native-select', styleUrl: 'art-native-select.css', shadow: { delegatesFocus: true }, formAssociated: true })
export class ArtNativeSelect {
  @Element() host!: HTMLElement;
  @AttachInternals() internals?: ElementInternals;
  private select?: HTMLSelectElement;
  private observer?: MutationObserver;
  private defaultValue = '';

  @Prop({ mutable: true }) value = '';
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @Prop({ reflect: true }) name?: string;
  @Prop({ reflect: true }) disabled = false;
  @Prop() required = false;
  @Prop({ reflect: true }) invalid = false;

  @Event({ eventName: 'change', bubbles: true, composed: true }) changeEvent!: EventEmitter<{ value: string }>;
  @Event({ eventName: 'input', bubbles: true, composed: true }) inputEvent!: EventEmitter<{ value: string }>;

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

  connectedCallback() {
    this.defaultValue = this.value;
    if (!this.host.id) this.host.id = uniqueId('art-native-select');
  }
  componentDidLoad() {
    this.mirrorOptions();
    if (typeof MutationObserver !== 'undefined') {
      this.observer = new MutationObserver(() => this.mirrorOptions());
      this.observer.observe(this.host, { childList: true, subtree: true, characterData: true, attributes: true });
    }
  }
  disconnectedCallback() { this.observer?.disconnect(); }

  /** Copies light-DOM options into the shadow select (slots cannot project into a select). */
  private mirrorOptions() {
    if (!this.select) return;
    while (this.select.firstChild) this.select.removeChild(this.select.firstChild);
    for (const c of Array.from(this.host.children)) if (/^(OPTION|OPTGROUP)$/.test(c.tagName)) this.select.appendChild(c.cloneNode(true));
    if (!this.value) this.value = this.select.value; // adopt the browser's default selection
    else this.select.value = this.value;
    this.syncForm();
  }
  @Watch('value')
  onValue(v: string) {
    if (this.select && this.select.value !== v) this.select.value = v;
    this.syncForm();
  }
  private syncForm() {
    this.internals?.setFormValue?.(this.value);
    if (this.internals?.setValidity && this.select) {
      const v = this.select.validity;
      if (v.valid) this.internals.setValidity({});
      else this.internals.setValidity({ valueMissing: v.valueMissing }, this.select.validationMessage, this.select);
    }
  }
  @Method() async setFocus() { this.select?.focus(); }
  formResetCallback() { this.value = this.defaultValue; }
  formDisabledCallback(disabled: boolean) { this.disabled = disabled; }

  private onChange = (e: Event) => {
    e.stopPropagation();
    this.value = (e.target as HTMLSelectElement).value;
    this.inputEvent.emit({ value: this.value });
    this.changeEvent.emit({ value: this.value });
  };

  render() {
    return (
      <Host>
        <div class="relative">
          <select
            part="select"
            ref={(el) => (this.select = el)}
            class={{
              'w-full min-w-0 appearance-none rounded-md border-default bg-transparent pe-9 text-md md:text-sm text-fg shadow-raised transition-interactive motion-fast focus-ring disabled:opacity-50 aria-invalid:invalid-ring': true,
              // safelist: field-sm field-md field-lg
              [`field-${this.size}`]: true,
            }}
            name={this.name}
            disabled={this.disabled}
            required={this.required}
            aria-invalid={this.invalid ? 'true' : undefined}
            aria-label={this.ariaLabel}
            aria-description={this.ariaDescription}
            onChange={this.onChange}
          />
          <svg class="pointer-events-none absolute end-3 top-1/2 icon-md -translate-y-1/2 text-fg-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
        <slot />
      </Host>
    );
  }
}
