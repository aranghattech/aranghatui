import { AttachInternals, Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { resolveAria } from '@aranghat/primitives/aria';
import { uniqueId } from '@aranghat/primitives/id';

/**
 * Checkbox — shadcn/ui parity. A `role="checkbox"` button with checked / indeterminate states,
 * form-associated (submits `value` when checked). `change` is emitted from the host with
 * `detail.checked`; Vue `v-model:checked`, Angular `ngModel` (boolean) work out of the box.
 *
 * @part control - The `role="checkbox"` button.
 */
@Component({ tag: 'art-checkbox', styleUrl: 'art-checkbox.css', shadow: { delegatesFocus: true }, formAssociated: true })
export class ArtCheckbox {
  @Element() host!: HTMLElement;
  @AttachInternals() internals?: ElementInternals;
  private defaultChecked = false;

  @Prop({ mutable: true, reflect: true }) checked = false;
  /** Mixed state (e.g. "select all" with a partial selection). Cleared by the next toggle. */
  @Prop({ mutable: true, reflect: true }) indeterminate = false;
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  /** Submitted with the form when checked. */
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
  syncForm() {
    this.internals?.setFormValue?.(this.checked ? this.value : null);
    if (this.internals?.setValidity) {
      if (this.required && !this.checked) this.internals.setValidity({ valueMissing: true }, 'Please check this box.', this.host.shadowRoot?.querySelector('button') ?? undefined);
      else this.internals.setValidity({});
    }
  }
  connectedCallback() {
    this.defaultChecked = this.checked;
    if (!this.host.id) this.host.id = uniqueId('art-checkbox');
    // art-label calls host.click(): toggle when the click did not originate from the inner control
    this.host.addEventListener('click', this.onHostClick);
  }
  disconnectedCallback() { this.host.removeEventListener('click', this.onHostClick); }
  componentDidLoad() { this.syncForm(); }
  formResetCallback() { this.checked = this.defaultChecked; this.indeterminate = false; }
  formDisabledCallback(disabled: boolean) { this.disabled = disabled; }

  private toggle() {
    if (this.disabled) return;
    this.checked = this.indeterminate ? true : !this.checked;
    this.indeterminate = false;
    this.changeEvent.emit({ checked: this.checked });
  }
  private onHostClick = (e: MouseEvent) => {
    if (e.composedPath().some((n) => (n as Element).tagName === 'BUTTON')) return; // handled by the control
    this.toggle();
  };
  private onControlClick = (e: MouseEvent) => { e.stopPropagation(); this.toggle(); };
  private onKeydown = (e: KeyboardEvent) => { if (e.key === 'Enter') e.preventDefault(); }; // APG: only Space toggles

  render() {
    const on = this.checked || this.indeterminate;
    return (
      <Host>
        <button
          part="control"
          type="button"
          role="checkbox"
          aria-checked={this.indeterminate ? 'mixed' : this.checked ? 'true' : 'false'}
          aria-required={this.required ? 'true' : undefined}
          aria-invalid={this.invalid ? 'true' : undefined}
          aria-label={this.ariaLabel}
          aria-description={this.ariaDescription}
          disabled={this.disabled}
          class={{
            'inline-flex shrink-0 items-center justify-center rounded-xs border-default bg-transparent shadow-raised transition-interactive motion-fast focus-ring disabled:opacity-50 aria-invalid:invalid-ring': true,
            // safelist: icon-sm icon-md icon-lg
            [`icon-${this.size}`]: true,
            'border-primary bg-primary text-primary-fg': on,
            'text-transparent': !on,
          }}
          onClick={this.onControlClick}
          onKeyDown={this.onKeydown}
        >
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
            {this.indeterminate ? <path d="M5 12h14" /> : <path d="M20 6 9 17l-5-5" />}
          </svg>
        </button>
      </Host>
    );
  }
}
