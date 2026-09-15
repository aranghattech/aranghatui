import { Component, Element, Host, Prop, h } from '@stencil/core';
import { resolveAria } from '@aranghat/primitives/aria';

/**
 * Radio item — used inside `<art-radio-group>`, which owns selection. The label is the
 * default slot: `<art-radio value="a">Option A</art-radio>` — clicking the text selects,
 * and the control is named by it (native `<label>`), so no wrapper markup is ever needed.
 *
 * @slot - Label text.
 * @part control - The `role="radio"` button.
 * @part label - The wrapping `<label>`.
 */
@Component({ tag: 'art-radio', styleUrl: 'art-radio.css', shadow: { delegatesFocus: true } })
export class ArtRadio {
  @Element() host!: HTMLElement;

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

  private onKeydown = (e: KeyboardEvent) => { if (e.key === 'Enter') e.preventDefault(); };

  render() {
    const disabled = this.disabled || this.groupDisabled;
    return (
      <Host>
        <label part="label" class={{ 'inline-flex items-center gap-2 text-sm font-medium select-none': true, 'text-fg-muted': disabled }}>
          <button
            part="control"
            type="button"
            role="radio"
            aria-checked={this.checked ? 'true' : 'false'}
            aria-label={this.ariaLabel}
            disabled={disabled}
            tabindex={this.tabbable ? 0 : -1}
            class={{
              'inline-flex shrink-0 items-center justify-center rounded-full shadow-raised transition-interactive motion-fast focus-ring disabled:opacity-50': true,
              // safelist: icon-sm icon-md icon-lg
              [`icon-${this.size}`]: true,
              'border-primary bg-transparent text-primary': this.checked,
              'border-default bg-transparent text-transparent': !this.checked,
            }}
            onKeyDown={this.onKeydown}
          >
            <svg class="size-1/2" viewBox="0 0 8 8" aria-hidden="true" focusable="false"><circle cx="4" cy="4" r="4" fill="currentColor" /></svg>
          </button>
          <slot />
        </label>
      </Host>
    );
  }
}
