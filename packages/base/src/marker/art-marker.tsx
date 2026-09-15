import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Marker — shadcn/ui parity. An inline conversation marker: a status line, a system note, a
 * bordered row or a labelled separator between messages. Renders as a link when `href` is set.
 * For streaming updates set `role="status"` on the host.
 *
 * @slot icon - A leading `<art-icon>`, `<svg>` or `<art-spinner>` (decorative).
 * @slot - The text.
 * @part marker - The row (`<div>` or `<a>` when `href` is set).
 * @part content - The text wrapper.
 */
@Component({ tag: 'art-marker', styleUrl: 'art-marker.css', shadow: true })
export class ArtMarker {
  /** `default`: inline line. `border`: with a bottom rule. `separator`: centred label between two rules. */
  @Prop({ reflect: true }) variant: 'default' | 'border' | 'separator' = 'default';
  /** Renders the marker as an `<a>`. */
  @Prop() href?: string;
  @Prop() target?: string;
  @Prop() rel?: string;

  render() {
    const cls = { 'relative flex min-h-4 w-full items-center gap-2 text-left text-sm text-fg-muted': true, 'focus-ring hover:text-fg': !!this.href };
    const body = [
      <slot name="icon" />,
      <span part="content" class="min-w-0 break-words">
        <slot />
      </span>,
    ];
    return (
      <Host>
        {this.href ? (
          <a part="marker" class={cls} href={this.href} target={this.target} rel={this.rel}>
            {body}
          </a>
        ) : (
          <div part="marker" class={cls}>
            {body}
          </div>
        )}
      </Host>
    );
  }
}
