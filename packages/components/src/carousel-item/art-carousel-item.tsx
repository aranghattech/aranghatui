import { Component, Element, Host, h } from '@stencil/core';

/**
 * Carousel Item — one slide of an `<art-carousel>`. Its width is `--art-carousel-basis`
 * (100 % by default; set `33.333%` for three slides per view).
 *
 * @slot - The slide content.
 */
@Component({ tag: 'art-carousel-item', styleUrl: 'art-carousel-item.css', shadow: true })
export class ArtCarouselItem {
  @Element() host!: HTMLElement;

  connectedCallback() {
    this.host.setAttribute('role', 'group');
    this.host.setAttribute('aria-roledescription', 'slide');
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
