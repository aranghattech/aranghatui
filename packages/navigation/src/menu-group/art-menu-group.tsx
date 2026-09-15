import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Dropdown Menu Group — groups items under an accessible name.
 *
 * @slot - Items (and an `art-menu-label`).
 */
@Component({ tag: 'art-menu-group', styleUrl: 'art-menu-group.css', shadow: true })
export class ArtMenuGroup {
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
