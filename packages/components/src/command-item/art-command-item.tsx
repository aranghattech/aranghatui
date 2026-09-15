import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Command Item — one entry of an `<art-command>`: an optional leading icon, the label and an
 * optional shortcut. `item` carries the data object handed back in the command's `select` event.
 *
 * @slot - The label (with an `<art-icon>` or `<svg>` before it).
 * @slot shortcut - A keyboard hint at the end (`<art-kbd-group>` or text).
 */
@Component({ tag: 'art-command-item', styleUrl: 'art-command-item.css', shadow: true })
export class ArtCommandItem {
  @Element() host!: HTMLElement;

  /** Reported as `detail.value` when run. */
  @Prop() value = '';
  /** Data object for this entry; reported as `detail.item`. */
  @Prop() item?: unknown;
  /** Extra words the filter should match besides the visible text. */
  @Prop() keywords?: string;
  @Prop({ reflect: true }) disabled = false;

  connectedCallback() {
    this.host.setAttribute('role', 'option');
    if (!this.host.hasAttribute('aria-selected')) this.host.setAttribute('aria-selected', 'false'); // the command flips it with the highlight
  }

  render() {
    return (
      <Host aria-disabled={this.disabled ? 'true' : undefined}>
        <slot />
        <slot name="shortcut" />
      </Host>
    );
  }
}
