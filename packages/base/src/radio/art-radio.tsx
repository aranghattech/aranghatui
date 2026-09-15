import { Component, Element, Host, Prop, Watch, h } from '@stencil/core';
import { resolveAria } from '@aranghat/primitives/aria';

/**
 * Radio item — a native `<input type="radio">` (ADR-0021) used inside `<art-radio-group>`,
 * which owns selection and keyboard navigation (native radio grouping does not cross shadow
 * roots). The label is the default slot, so no wrapper markup is needed.
 *
 * @slot - Label text.
 * @part control - The native `<input type="radio">`.
 * @part label - The wrapping `<label>`.
 */
@Component({ tag: 'art-radio', styleUrl: 'art-radio.css', shadow: { delegatesFocus: true } })
export class ArtRadio {
  @Element() host!: HTMLElement;
  private input?: HTMLInputElement;

  /** Value reported by the group when this item is selected. */
  @Prop() value!: string;
  @Prop({ reflect: true }) disabled = false;
  /** Managed by the group. */
  @Prop({ mutable: true, reflect: true }) checked = false;
  /** Managed by the group. */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  /** @internal set by the group */
  @Prop() tabbable = false;
  /** @internal set by the group */
  @Prop() groupDisabled = false;
  /** @internal mirrored from the group (informational) */
  @Prop() name?: string;

  @Prop({ attribute: 'aria-label' }) hostAriaLabel?: string | null;
  @Prop({ attribute: 'aria-labelledby' }) hostAriaLabelledby?: string | null;
  private directLabel?: string;
  private ariaLabel?: string;

  componentWillRender() {
    if (this.hostAriaLabel != null) { this.directLabel = this.hostAriaLabel; this.host.removeAttribute('aria-label'); }
    this.ariaLabel = resolveAria(this.host, { labelledby: this.hostAriaLabelledby }, this.directLabel).label;
  }
  @Watch('checked')
  syncChecked() { if (this.input) this.input.checked = this.checked; }
  componentDidLoad() { this.syncChecked(); }

  // A lone native radio can be un-toggled by nothing but the group; stop its change from leaking.
  private onChange = (e: Event) => { e.stopPropagation(); this.syncChecked(); };

  render() {
    const disabled = this.disabled || this.groupDisabled;
    return (
      <Host>
        <label part="label" class={{ 'inline-flex items-center gap-2 text-sm font-medium select-none': true, 'text-fg-muted': disabled }}>
          <input
            part="control"
            type="radio"
            ref={(el) => (this.input = el)}
            checked={this.checked}
            disabled={disabled}
            tabindex={this.tabbable ? 0 : -1}
            aria-label={this.ariaLabel}
            class={{
              'appearance-none shrink-0 rounded-full border-default bg-transparent text-transparent shadow-raised transition-interactive motion-fast focus-ring disabled:opacity-50 checked:border-primary checked:text-primary': true,
              // safelist: icon-sm icon-md icon-lg
              [`icon-${this.size}`]: true,
            }}
            onChange={this.onChange}
          />
          <slot />
        </label>
      </Host>
    );
  }
}
