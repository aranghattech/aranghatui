import { AttachInternals, Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { resolveAria } from '@aranghat/primitives/aria';
import { uniqueId } from '@aranghat/primitives/id';

/**
 * Checkbox — shadcn/ui parity on a native `<input type="checkbox">` (ADR-0021: native controls,
 * styled). Checked / indeterminate states, form-associated (submits `value` when checked).
 * `change` is emitted from the host with `detail.checked`; Vue `v-model:checked` and Angular
 * `ngModel` work out of the box.
 *
 * @part control - The native `<input type="checkbox">`.
 */
@Component({ tag: 'art-checkbox', styleUrl: 'art-checkbox.css', shadow: { delegatesFocus: true }, formAssociated: true })
export class ArtCheckbox {
  @Element() host!: HTMLElement;
  @AttachInternals() internals?: ElementInternals;
  private input?: HTMLInputElement;
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

  @Watch('checked') @Watch('indeterminate') @Watch('value') @Watch('required')
  sync() {
    if (this.input) { this.input.checked = this.checked; this.input.indeterminate = this.indeterminate; }
    this.internals?.setFormValue?.(this.checked ? this.value : null);
    if (this.internals?.setValidity) {
      if (this.required && !this.checked) this.internals.setValidity({ valueMissing: true }, 'Please check this box.', this.input);
      else this.internals.setValidity({});
    }
  }
  connectedCallback() {
    this.defaultChecked = this.checked;
    if (!this.host.id) this.host.id = uniqueId('art-checkbox');
    this.host.addEventListener('click', this.onHostClick);
  }
  disconnectedCallback() { this.host.removeEventListener('click', this.onHostClick); }
  componentDidLoad() { this.sync(); }
  formResetCallback() { this.checked = this.defaultChecked; this.indeterminate = false; }
  formDisabledCallback(disabled: boolean) { this.disabled = disabled; }

  /** `art-label` (and consumers) call `host.click()`: forward to the native input. */
  private onHostClick = (e: MouseEvent) => { if (this.input && !e.composedPath().includes(this.input)) this.input.click(); };
  private onChange = (e: Event) => {
    e.stopPropagation();
    this.checked = this.input!.checked;
    this.indeterminate = false;
    this.changeEvent.emit({ checked: this.checked });
  };

  render() {
    return (
      <Host>
        <input
          part="control"
          type="checkbox"
          ref={(el) => (this.input = el)}
          checked={this.checked}
          disabled={this.disabled}
          required={this.required}
          aria-invalid={this.invalid ? 'true' : undefined}
          aria-label={this.ariaLabel}
          aria-description={this.ariaDescription}
          class={{
            'appearance-none shrink-0 rounded-xs border-default bg-transparent shadow-raised transition-interactive motion-fast focus-ring disabled:opacity-50 aria-invalid:invalid-ring': true,
            'checked:border-primary checked:bg-primary checked:text-primary-fg indeterminate:border-primary indeterminate:bg-primary indeterminate:text-primary-fg': true,
            // safelist: icon-sm icon-md icon-lg
            [`icon-${this.size}`]: true,
          }}
          onChange={this.onChange}
        />
      </Host>
    );
  }
}
