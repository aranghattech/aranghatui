import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Attachment Group — a horizontally scrolling row of attachments (a composer's file strip).
 * Focusable so the strip can be scrolled with the keyboard.
 *
 * @slot - `<art-attachment>`s.
 */
@Component({ tag: 'art-attachment-group', styleUrl: 'art-attachment-group.css', shadow: true })
export class ArtAttachmentGroup {
  @Element() host!: HTMLElement;
  /** Accessible name of the group. */
  @Prop() label = 'Attachments';

  componentWillRender() {
    this.host.setAttribute('role', 'group');
    this.host.setAttribute('aria-label', this.label);
    if (!this.host.hasAttribute('tabindex')) this.host.setAttribute('tabindex', '0');
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
