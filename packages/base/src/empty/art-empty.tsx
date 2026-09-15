import { Component, Host, h } from '@stencil/core';

/**
 * Empty — shadcn/ui parity. A centred empty state: media (an icon in a muted box, an image),
 * title, description and content (actions, a search field).
 *
 * @slot media - `<art-icon slot="media" size="lg">` (boxed) or any element.
 * @slot title - The heading.
 * @slot description - Supporting text.
 * @slot - Actions or other content under the header.
 * @part empty - The wrapper.
 * @part header - Media, title and description.
 * @part content - The default slot wrapper.
 */
@Component({ tag: 'art-empty', styleUrl: 'art-empty.css', shadow: true })
export class ArtEmpty {
  render() {
    return (
      <Host>
        <div part="empty" class="flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg p-6 text-center md:p-12">
          <div part="header" class="flex max-w-sm flex-col items-center gap-2 text-center">
            <slot name="media" />
            <slot name="title" />
            <slot name="description" />
          </div>
          <div part="content" class="flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-sm">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
