import { Component, Element, Host, forceUpdate, h } from '@stencil/core';

/**
 * Card — shadcn/ui parity. A bordered surface with an optional header (title, description,
 * action), content and footer. Regions render only when their slot is filled, so a card with
 * just content has no empty header or footer space.
 *
 * @slot title - Heading (`<h3 slot="title">`).
 * @slot description - Text under the title.
 * @slot action - Top-right action (a button, a badge).
 * @slot - Content.
 * @slot footer - Footer row (buttons).
 * @part card - The surface.
 * @part header - Title, description and action.
 * @part content - The default slot wrapper.
 * @part footer - The footer row.
 */
@Component({ tag: 'art-card', styleUrl: 'art-card.css', shadow: true })
export class ArtCard {
  @Element() host!: HTMLElement;

  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', () => forceUpdate(this));
  }
  private has(name: string): boolean {
    return Array.from(this.host.children).some((c) => (name ? c.getAttribute('slot') === name : !c.hasAttribute('slot')));
  }

  render() {
    const header = this.has('title') || this.has('description') || this.has('action');
    return (
      <Host>
        <div part="card" class="flex flex-col gap-6 rounded-xl border-default bg-surface py-6 text-fg shadow-raised">
          {header && (
            <div part="header" class="flex items-start justify-between gap-2 px-6">
              <div class="flex min-w-0 flex-1 flex-col gap-2">
                <slot name="title" />
                <slot name="description" />
              </div>
              <slot name="action" />
            </div>
          )}
          {this.has('') && (
            <div part="content" class="px-6">
              <slot />
            </div>
          )}
          {this.has('footer') && (
            <div part="footer" class="flex items-center gap-2 px-6">
              <slot name="footer" />
            </div>
          )}
        </div>
      </Host>
    );
  }
}
