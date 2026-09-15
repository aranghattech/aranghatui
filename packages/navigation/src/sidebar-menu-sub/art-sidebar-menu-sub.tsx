import { Component, Element, Host, State, h } from '@stencil/core';
import { isIconMode, watchState } from '../sidebar/context';

/**
 * Sidebar Menu Sub — a nested list under an `art-sidebar-menu-item` (shown while the item is
 * `open`; hidden when the sidebar collapses to icons). Holds `art-sidebar-menu-item`s whose
 * buttons render in the smaller sub style.
 *
 * @slot - `art-sidebar-menu-item`s.
 * @part list - The `<ul>`.
 */
@Component({ tag: 'art-sidebar-menu-sub', styleUrl: 'art-sidebar-menu-sub.css', shadow: true })
export class ArtSidebarMenuSub {
  @Element() host!: HTMLElement;
  private sidebar: HTMLElement | null = null;
  private unwatch?: () => void;
  @State() icon = false;

  connectedCallback() {
    this.sidebar = this.host.closest('art-sidebar');
    this.unwatch = watchState(this.sidebar, () => { this.icon = isIconMode(this.sidebar); });
  }
  disconnectedCallback() {
    this.unwatch?.();
    this.unwatch = undefined;
  }

  render() {
    return (
      <Host data-icon={this.icon ? '' : undefined}>
        <ul part="list" role="list" class="list m-0 flex min-w-0 list-none flex-col gap-1 px-2.5 py-0.5">
          <slot />
        </ul>
      </Host>
    );
  }
}
