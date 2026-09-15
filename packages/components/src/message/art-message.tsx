import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Message — shadcn/ui parity. A row in a conversation: an avatar anchored to the bottom, then
 * a column with an optional header (name, time), the bubble, and an optional footer (status,
 * actions). `align="end"` mirrors the row for the current user.
 *
 * @slot avatar - `<art-avatar>` (anchored to the bottom of the row).
 * @slot header - Sender name or metadata above the bubble.
 * @slot - The `<art-bubble>` (or bubbles) and attachments.
 * @slot footer - Status, timestamps or action buttons below the bubble.
 * @part avatar - The avatar column.
 * @part content - The header / bubble / footer column.
 * @part header - The header row.
 * @part footer - The footer row.
 */
@Component({ tag: 'art-message', styleUrl: 'art-message.css', shadow: true })
export class ArtMessage {
  @Element() host!: HTMLElement;

  /** `end` puts the avatar on the end side and right-aligns the column (the current user). */
  @Prop({ reflect: true }) align: 'start' | 'end' = 'start';

  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.sync);
    this.sync();
  }
  /** `:host(:has(…))` cannot see slotted state, so the parts that change layout are mirrored as data attributes. */
  private sync = () => {
    const has = (s: string) => !!this.host.querySelector(`:scope > [slot="${s}"]`);
    this.host.toggleAttribute('data-has-footer', has('footer'));
    this.host.toggleAttribute('data-has-header', has('header'));
    this.host.toggleAttribute('data-has-avatar', has('avatar'));
    this.host.toggleAttribute('data-ghost', !!this.host.querySelector(':scope > art-bubble[variant="ghost"]'));
  };

  render() {
    return (
      <Host>
        <div part="avatar" class="avatar flex w-fit shrink-0 items-center justify-center self-end">
          <slot name="avatar" />
        </div>
        <div part="content" class="content flex w-full min-w-0 flex-col gap-2.5">
          <div part="header" class="meta header flex min-w-0 max-w-full items-center px-3 text-xs font-medium text-fg-muted">
            <slot name="header" />
          </div>
          <slot />
          <div part="footer" class="meta footer flex min-w-0 max-w-full items-center gap-1 px-3 text-xs font-medium text-fg-muted">
            <slot name="footer" />
          </div>
        </div>
      </Host>
    );
  }
}
