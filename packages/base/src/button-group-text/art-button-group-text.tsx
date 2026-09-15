import { Component, Host, h } from '@stencil/core';

/**
 * Button Group Text — a muted, bordered label that joins a Button Group like a button
 * (a unit, a prefix, an icon + word). Stretches to the height of its neighbours.
 *
 * @slot - Text; an `<art-icon>` or `<svg>` takes the medium icon size.
 */
@Component({ tag: 'art-button-group-text', styleUrl: 'art-button-group-text.css', shadow: true })
export class ArtButtonGroupText {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
