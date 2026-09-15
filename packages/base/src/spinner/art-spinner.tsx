import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Spinner — shadcn/ui parity. An indeterminate loading indicator on the icon size scale.
 * Announced as a `status` region named `label` (default "Loading").
 *
 * @part spinner - The rotating `<svg>`.
 */
@Component({ tag: 'art-spinner', styleUrl: 'art-spinner.css', shadow: true })
export class ArtSpinner {
  /** Icon size scale. */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  /** Accessible name. */
  @Prop() label = 'Loading';

  render() {
    return (
      <Host role="status" aria-label={this.label}>
        {/* safelist: icon-sm icon-md icon-lg */}
        <svg part="spinner" class={{ 'animate-spin': true, [`icon-${this.size}`]: true }} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </Host>
    );
  }
}
