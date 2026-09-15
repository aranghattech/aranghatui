import { Component, Host, h } from '@stencil/core';

/**
 * Typography — shadcn/ui parity. A prose container that styles the native elements inside it:
 * headings, paragraphs, lists, blockquotes, inline code, links, rules and images, plus the
 * `lead`, `large`, `small` and `muted` text classes. Light DOM on purpose (ADR-0021): prose is
 * nested native markup a shadow stylesheet could never reach.
 *
 * @slot - Prose: `<h1>`–`<h4>`, `<p>`, `<ul>`/`<ol>`, `<blockquote>`, `<code>`, `<a>`, `<hr>`, `<img>`.
 */
@Component({ tag: 'art-typography', styleUrl: 'art-typography.css', shadow: false })
export class ArtTypography {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
