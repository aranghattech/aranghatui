import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Scroll Area — shadcn/ui parity on native overflow: a scroll container with thin, token-
 * coloured scrollbars. Scrolling, wheel, touch and keyboard behaviour stay platform
 * behaviour; size the host and the content scrolls inside it.
 *
 * @slot - The scrolling content.
 * @part viewport - The scroll container.
 */
@Component({ tag: 'art-scroll-area', styleUrl: 'art-scroll-area.css', shadow: true })
export class ArtScrollArea {
  /** Which axis scrolls. */
  @Prop({ reflect: true }) orientation: 'vertical' | 'horizontal' | 'both' = 'vertical';

  render() {
    return (
      <Host>
        <div part="viewport" tabindex="0" class="viewport size-full outline-none focus-ring">
          <slot />
        </div>
      </Host>
    );
  }
}
