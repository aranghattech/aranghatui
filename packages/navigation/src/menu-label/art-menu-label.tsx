import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Dropdown Menu Label — a heading for a run of items.
 *
 * @slot - The label text.
 */
@Component({ tag: 'art-menu-label', styleUrl: 'art-menu-label.css', shadow: true })
export class ArtMenuLabel {
  /** Indent to align with checkbox / radio items. */
  @Prop({ reflect: true }) inset = false;
  render() {
    return (
      <Host>
        <div class="label px-2 py-1.5 text-sm font-medium"><slot /></div>
      </Host>
    );
  }
}
