import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Select Item — one option of an `<art-select>`. Any content (text, an avatar with name and
 * email); `item` carries the data object handed back in the select's `change` event.
 *
 * @slot - The option content.
 * @part check - The checkmark shown on the selected option.
 */
@Component({ tag: 'art-select-item', styleUrl: 'art-select-item.css', shadow: true })
export class ArtSelectItem {
  @Element() host!: HTMLElement;

  /** The option's value (what the select's `value` becomes). */
  @Prop() value = '';
  /** Data object for this option; reported as `detail.item` on selection. */
  @Prop() item?: unknown;
  /** Plain-text label: shown in the trigger instead of a copy of the content, and used for type-ahead. */
  @Prop() label?: string;
  @Prop({ reflect: true }) disabled = false;
  /** Set by the select. */
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
