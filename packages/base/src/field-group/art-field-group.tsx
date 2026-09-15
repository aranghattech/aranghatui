import { Component, Host, h } from '@stencil/core';

/**
 * Field Group — a vertical stack of `<art-field>`s (and `<art-field-set>`s) with form spacing.
 *
 * @slot - Fields.
 */
@Component({ tag: 'art-field-group', styleUrl: 'art-field-group.css', shadow: true })
export class ArtFieldGroup {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
