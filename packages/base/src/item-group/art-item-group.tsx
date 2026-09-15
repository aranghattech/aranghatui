import { Component, Element, Host, h } from '@stencil/core';

/**
 * Item Group — a list of `<art-item>`s, optionally divided by `<art-separator>`s.
 *
 * @slot - Items and separators.
 */
@Component({ tag: 'art-item-group', styleUrl: 'art-item-group.css', shadow: true })
export class ArtItemGroup {
  @Element() host!: HTMLElement;

  connectedCallback() {
    this.host.setAttribute('role', 'list');
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
