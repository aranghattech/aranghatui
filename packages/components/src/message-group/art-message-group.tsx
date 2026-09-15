import { Component, Host, h } from '@stencil/core';

/**
 * Message Group — stacks consecutive messages from the same sender.
 *
 * @slot - `<art-message>`s.
 */
@Component({ tag: 'art-message-group', styleUrl: 'art-message-group.css', shadow: true })
export class ArtMessageGroup {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
