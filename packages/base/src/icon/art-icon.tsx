import { Component, Host, Prop, h } from '@stencil/core';
import type { IconData } from '@aranghat/icons';

/**
 * Renders an icon from `@aranghat/icons` (ADR-0007). Icons are never bundled
 * into components: import the icon module you need and pass it as `icon`.
 *
 * @slot - Raw SVG fallback when no `icon` data is provided.
 */
@Component({ tag: 'art-icon', styleUrl: 'art-icon.css', shadow: true })
export class ArtIcon {
  /** Icon data imported from `@aranghat/icons/<name>`. */
  @Prop() icon?: IconData;
  /** Visual size; matches the control size scale. */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  /** Accessible label. When omitted the icon is decorative (`aria-hidden`). */
  @Prop() label?: string;

  render() {
    const decorative = !this.label;
    return (
      <Host role={decorative ? undefined : 'img'} aria-label={this.label} aria-hidden={decorative ? 'true' : undefined}>
        {this.icon ? (
          <svg
            class={{ 'icon-sm': this.size === 'sm', 'icon-md': this.size === 'md', 'icon-lg': this.size === 'lg' }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            {this.icon.children.map(([tag, attrs]) => h(tag, { ...attrs }))}
          </svg>
        ) : (
          <slot />
        )}
      </Host>
    );
  }
}
