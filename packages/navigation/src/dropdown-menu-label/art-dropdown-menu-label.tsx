import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Dropdown Menu Label — a heading for a run of items.
 *
 * @slot - The label text.
 */
@Component({ tag: 'art-dropdown-menu-label', styleUrl: 'art-dropdown-menu-label.css', shadow: true })
export class ArtDropdownMenuLabel {
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
