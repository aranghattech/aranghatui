import { Component, Host, h } from '@stencil/core';

/**
 * Bubble Group — stacks consecutive bubbles from the same sender.
 *
 * @slot - `<art-bubble>`s.
 */
@Component({ tag: 'art-bubble-group', styleUrl: 'art-bubble-group.css', shadow: true })
export class ArtBubbleGroup {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
