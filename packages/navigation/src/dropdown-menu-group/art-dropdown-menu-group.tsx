import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Dropdown Menu Group — groups items under an accessible name.
 *
 * @slot - Items (and an `art-dropdown-menu-label`).
 */
@Component({ tag: 'art-dropdown-menu-group', styleUrl: 'art-dropdown-menu-group.css', shadow: true })
export class ArtDropdownMenuGroup {
  @Element() host!: HTMLElement;
  @Prop() label?: string;
  componentWillRender() {
    this.host.setAttribute('role', 'group');
    if (this.label) this.host.setAttribute('aria-label', this.label);
  }
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
