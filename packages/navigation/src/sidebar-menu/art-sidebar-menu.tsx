import { Component, Host, h } from '@stencil/core';

/**
 * Sidebar Menu — a list of `art-sidebar-menu-item`s.
 *
 * @slot - `art-sidebar-menu-item`s.
 * @part list - The `<ul>`.
 */
@Component({ tag: 'art-sidebar-menu', styleUrl: 'art-sidebar-menu.css', shadow: true })
export class ArtSidebarMenu {
  render() {
    return (
      <Host>
        <ul part="list" role="list" class="m-0 flex w-full min-w-0 list-none flex-col gap-1 p-0">
          <slot />
        </ul>
      </Host>
    );
  }
}
