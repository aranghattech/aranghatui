import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Tab Panel — the content for one `<art-tab>`; the parent shows the panel whose `value`
 * matches and links it to its tab.
 *
 * @slot - The panel content.
 */
@Component({ tag: 'art-tab-panel', styleUrl: 'art-tab-panel.css', shadow: true })
export class ArtTabPanel {
  @Element() host!: HTMLElement;

  /** Matches the `value` of its tab. */
  @Prop() value = '';

  connectedCallback() {
    this.host.setAttribute('role', 'tabpanel');
    if (!this.host.hasAttribute('tabindex')) this.host.tabIndex = 0;
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
