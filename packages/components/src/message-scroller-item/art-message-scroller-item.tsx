import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Message Scroller Item — one row of the transcript. `message-id` makes it a jump target;
 * `scroll-anchor` marks a turn boundary that the scroller places near the top when appended.
 *
 * @slot - The message.
 */
@Component({ tag: 'art-message-scroller-item', styleUrl: 'art-message-scroller-item.css', shadow: true })
export class ArtMessageScrollerItem {
  /** Stable id for `scrollToMessage()`. */
  @Prop({ attribute: 'message-id', reflect: true }) messageId?: string;
  /** A turn boundary: when appended while following, it is positioned near the top of the viewport. */
  @Prop({ attribute: 'scroll-anchor', reflect: true }) scrollAnchor = false;

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
