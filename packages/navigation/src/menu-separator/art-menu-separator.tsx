import { Component, Element, Host, h } from '@stencil/core';

/** Dropdown Menu Separator — a rule between runs of items. */
@Component({ tag: 'art-menu-separator', styleUrl: 'art-menu-separator.css', shadow: true })
export class ArtMenuSeparator {
  @Element() host!: HTMLElement;
  connectedCallback() { this.host.setAttribute('role', 'separator'); }
  render() { return <Host />; }
}
