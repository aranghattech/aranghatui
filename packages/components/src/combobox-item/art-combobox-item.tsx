import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Combobox Item — one option of an `<art-combobox>`. Any content; `item` carries the data
 * object handed back in the combobox's `change` event.
 *
 * @slot - The option content.
 * @part check - The checkmark shown on a selected option.
 */
@Component({ tag: 'art-combobox-item', styleUrl: '../select-item/art-select-item.css', shadow: true })
export class ArtComboboxItem {
  @Element() host!: HTMLElement;

  /** The option's value. */
  @Prop() value = '';
  /** Data object for this option; reported as `detail.item`. */
  @Prop() item?: unknown;
  /** Plain-text label shown in the field when chosen (defaults to the content's text); also matched by the filter. */
  @Prop() label?: string;
  /** Extra words the filter should match. */
  @Prop() keywords?: string;
  @Prop({ reflect: true }) disabled = false;
  /** Set by the combobox. */
  @Prop({ reflect: true }) selected = false;

  connectedCallback() {
    this.host.setAttribute('role', 'option');
  }

  render() {
    return (
      <Host aria-selected={this.selected ? 'true' : 'false'} aria-disabled={this.disabled ? 'true' : undefined} aria-label={this.label}>
        <slot />
        {this.selected && (
          <svg part="check" class="check icon-sm shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20 6 9 17l-5-5" /></svg>
        )}
      </Host>
    );
  }
}
