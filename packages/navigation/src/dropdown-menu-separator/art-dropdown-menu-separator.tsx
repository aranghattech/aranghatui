import { Component, Element, Host, h } from '@stencil/core';

/** Dropdown Menu Separator — a rule between runs of items. */
@Component({ tag: 'art-dropdown-menu-separator', styleUrl: 'art-dropdown-menu-separator.css', shadow: true })
export class ArtDropdownMenuSeparator {
  @Element() host!: HTMLElement;
  connectedCallback() { this.host.setAttribute('role', 'separator'); }
  render() { return <Host />; }
}
