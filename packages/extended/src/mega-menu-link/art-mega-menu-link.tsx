import { Component, Element, Host, Prop, h } from '@stencil/core';
import { child } from '@aranghat/primitives/dom';

/**
 * Mega Menu Link — one destination in a group: an optional leading icon, a title and an optional
 * line of description, tinted when `active`.
 *
 * @slot icon - The leading icon (`<art-icon>` or an inline `<svg>`).
 * @slot - The title.
 * @slot description - A short line under the title.
 * @part link - The `<a>`.
 * @part icon - The icon box.
 */
@Component({ tag: 'art-mega-menu-link', styleUrl: 'art-mega-menu-link.css', shadow: true })
export class ArtMegaMenuLink {
  @Element() host!: HTMLElement;

  /** Destination. */
  @Prop() href?: string;
  /** Link target. */
  @Prop() target?: string;
  /** Link rel. */
  @Prop() rel?: string;
  /** Marks the current page (`aria-current="page"`). */
  @Prop({ reflect: true }) active = false;

  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.sync);
    this.sync();
  }
  /** Mirror the filled slots on the host: a shadow stylesheet cannot see slotted content. */
  private sync = () => {
    this.host.toggleAttribute('data-has-icon', !!child(this.host, '[slot="icon"]'));
    this.host.toggleAttribute('data-has-description', !!child(this.host, '[slot="description"]'));
  };

  render() {
    return (
      <Host role="listitem">
        <a part="link" class="link flex items-start gap-3 rounded-md p-2 text-sm text-fg transition-interactive motion-fast hover:bg-accent focus-ring" href={this.href} target={this.target} rel={this.rel} aria-current={this.active ? 'page' : undefined} data-active={this.active ? '' : undefined}>
          <span part="icon" class="icon flex shrink-0 items-center justify-center text-fg-muted">
            <slot name="icon" />
          </span>
          <span class="flex min-w-0 flex-col gap-1">
            <span class="title font-medium leading-none">
              <slot />
            </span>
            <span class="description text-fg-muted">
              <slot name="description" />
            </span>
          </span>
        </a>
      </Host>
    );
  }
}
