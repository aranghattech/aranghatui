import { Component, Element, Host, Prop, h } from '@stencil/core';
import { child } from '@aranghat/primitives/dom';

/**
 * Navigation Menu Link — a link inside a panel (or in the bar): a title line and an optional
 * description, tinted when `active`.
 *
 * @slot - The title.
 * @slot description - Secondary text.
 * @part link - The `<a>`.
 */
@Component({ tag: 'art-navigation-menu-link', styleUrl: 'art-navigation-menu-link.css', shadow: true })
export class ArtNavigationMenuLink {
  @Element() host!: HTMLElement;
  @Prop() href = '#';
  @Prop() target?: string;
  /** The current page. */
  @Prop({ reflect: true }) active = false;

  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.sync);
    this.sync();
  }
  private sync = () => { this.host.toggleAttribute('data-has-description', !!child(this.host, '[slot="description"]')); };

  render() {
    return (
      <Host>
        <a part="link" class="link flex flex-col gap-1 rounded-sm p-2 text-sm text-fg transition-interactive motion-fast hover:bg-accent focus-ring" href={this.href} target={this.target} aria-current={this.active ? 'page' : undefined} data-active={this.active ? '' : undefined}>
          <span class="font-medium leading-none"><slot /></span>
          <span class="description text-fg-muted"><slot name="description" /></span>
        </a>
      </Host>
    );
  }
}
