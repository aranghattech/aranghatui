import { Component, Host, h } from '@stencil/core';

/**
 * Kbd Group — a row of `<art-kbd>` keys and separators (`⌘` `K`, `Ctrl` + `B`).
 *
 * @slot - `<art-kbd>` keys and plain text separators.
 */
@Component({ tag: 'art-kbd-group', styleUrl: 'art-kbd-group.css', shadow: true })
export class ArtKbdGroup {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
