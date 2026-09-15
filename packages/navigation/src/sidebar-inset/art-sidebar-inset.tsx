import { Component, Host, h } from '@stencil/core';

/**
 * Sidebar Inset — the `main` area beside an `art-sidebar`. With the `inset` sidebar variant it
 * floats as a rounded card on the sidebar-coloured frame.
 *
 * @slot - Page content (a top nav, a header with `art-sidebar-trigger`, the page).
 * @part main - The `<main>` element.
 */
@Component({ tag: 'art-sidebar-inset', styleUrl: 'art-sidebar-inset.css', shadow: true })
export class ArtSidebarInset {
  render() {
    return (
      <Host>
        <main part="main" class="main">
          <slot />
        </main>
      </Host>
    );
  }
}
