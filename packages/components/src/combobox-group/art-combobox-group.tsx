import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Combobox Group — a labelled group of `<art-combobox-item>`s; hides itself when none of its
 * items match the query.
 *
 * @slot - The items.
 * @part label - The group heading.
 */
@Component({ tag: 'art-combobox-group', styleUrl: '../select-group/art-select-group.css', shadow: true })
export class ArtComboboxGroup {
  @Element() host!: HTMLElement;
  @Prop() label?: string;

  connectedCallback() {
    this.host.setAttribute('role', 'group');
  }

  render() {
    return (
      <Host aria-label={this.label}>
        {this.label && <div part="label" class="px-2 py-1.5 text-xs text-fg-muted">{this.label}</div>}
        <slot />
      </Host>
    );
  }
}
