import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Item — shadcn/ui parity. A flexible row: media (icon or image), title, description and
 * actions, with optional header and footer rows. Renders as a link when `href` is set. Stack
 * items in `<art-item-group>` (a list) with `<art-separator>`s between them.
 *
 * @slot media - `<art-icon slot="media">` (boxed) or `<img slot="media">` (thumbnail).
 * @slot title - The title.
 * @slot description - Secondary text (clamped to two lines).
 * @slot actions - Buttons at the end.
 * @slot header - A full-width row above.
 * @slot footer - A full-width row below.
 * @part item - The row (`<div>` or `<a>` when `href` is set).
 * @part content - Title + description column.
 */
@Component({ tag: 'art-item', styleUrl: 'art-item.css', shadow: true })
export class ArtItem {
  @Element() host!: HTMLElement;

  @Prop({ reflect: true }) variant: 'default' | 'outline' | 'muted' = 'default';
  @Prop({ reflect: true }) size: 'sm' | 'md' = 'md';
  /** Renders the row as an `<a>`. */
  @Prop() href?: string;
  @Prop() target?: string;
  @Prop() rel?: string;

  connectedCallback() {
    if (this.host.parentElement?.tagName === 'ART-ITEM-GROUP') this.host.setAttribute('role', 'listitem');
  }
  componentWillRender() {
    // With a description the media sits on the title line; the content column is offset so the
    // media box and the title's line box share a centre (the offset depends on the media size).
    const kids = Array.from(this.host.children);
    this.host.toggleAttribute('data-description', kids.some((c) => c.getAttribute('slot') === 'description'));
    const media = kids.find((c) => c.getAttribute('slot') === 'media');
    const kind = !media ? null : media.tagName === 'IMG' ? 'image' : media.tagName === 'ART-ICON' || media.tagName === 'SVG' ? 'icon' : null;
    if (kind) this.host.setAttribute('data-media', kind);
    else this.host.removeAttribute('data-media');
  }

  render() {
    const cls = {
      'flex flex-wrap items-center rounded-md text-sm text-fg transition-interactive motion-fast outline-none': true,
      'gap-4 p-4': this.size === 'md',
      'gap-2.5 px-4 py-3': this.size === 'sm',
      'focus-ring hover:bg-accent': !!this.href,
    };
    const body = [
      <slot name="header" />,
      <slot name="media" />,
      <div part="content" class="flex min-w-0 flex-1 flex-col gap-1">
        <slot name="title" />
        <slot name="description" />
      </div>,
      <slot name="actions" />,
      <slot name="footer" />,
    ];
    return (
      <Host>
        {this.href ? (
          <a part="item" class={cls} href={this.href} target={this.target} rel={this.rel}>
            {body}
          </a>
        ) : (
          <div part="item" class={cls}>
            {body}
          </div>
        )}
      </Host>
    );
  }
}
