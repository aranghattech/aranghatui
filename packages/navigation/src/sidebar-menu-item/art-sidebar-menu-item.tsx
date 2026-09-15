import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { bindSidebar, isIconMode } from '../sidebar/context';

type MenuButton = HTMLElement & { expanded?: boolean };

/**
 * Sidebar Menu Item — one row of an `art-sidebar-menu`: an `art-sidebar-menu-button`, optionally
 * with an `action` button, a `badge`, and a nested `art-sidebar-menu-sub` that the button
 * toggles (`open`).
 *
 * @slot - The `art-sidebar-menu-button`, followed by an optional `art-sidebar-menu-sub`.
 * @slot action - A small icon button at the end of the row (`art-button variant="ghost" icon size="sm"`).
 * @slot badge - A count or short text at the end of the row.
 * @part item - The row wrapper.
 * @part action - The action wrapper.
 * @part badge - The badge.
 */
@Component({ tag: 'art-sidebar-menu-item', styleUrl: 'art-sidebar-menu-item.css', shadow: true })
export class ArtSidebarMenuItem {
  @Element() host!: HTMLElement;
  private unwatch?: () => void;
  private sub: HTMLElement | null = null;
  private button: MenuButton | null = null;

  /** Whether the nested `art-sidebar-menu-sub` is shown. */
  @Prop({ mutable: true, reflect: true }) open = false;
  /** Show the `action` only while the row is hovered or focused (pointer devices). */
  @Prop({ reflect: true, attribute: 'action-on-hover' }) actionOnHover = false;
  @State() icon = false;
  @State() hasAction = false;
  @State() hasBadge = false;

  /** Emitted when the user opens or closes the nested list; `detail.open`. */
  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;

  connectedCallback() {
    this.host.setAttribute('role', 'listitem');
    this.unwatch = bindSidebar(this.host, (s) => { this.icon = isIconMode(s); });
    this.host.addEventListener('click', this.onClick);
  }
  componentWillLoad() {
    this.wire();
  }
  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.wire);
  }
  disconnectedCallback() {
    this.unwatch?.();
    this.unwatch = undefined;
    this.host.removeEventListener('click', this.onClick);
  }

  private wire = () => {
    this.sub = this.host.querySelector(':scope > art-sidebar-menu-sub');
    this.button = this.host.querySelector(':scope > art-sidebar-menu-button');
    this.hasAction = !!this.host.querySelector(':scope > [slot="action"]');
    this.hasBadge = !!this.host.querySelector(':scope > [slot="badge"]');
    this.applyOpen();
  };
  @Watch('open')
  applyOpen() {
    if (this.sub) this.sub.hidden = !this.open;
    if (this.button) this.button.expanded = this.sub ? this.open : undefined;
  }
  /** The button toggles the nested list (a link button navigates instead). */
  private onClick = (e: MouseEvent) => {
    if (!this.sub || !this.button || !e.composedPath().includes(this.button) || this.button.hasAttribute('href') || e.defaultPrevented) return;
    this.open = !this.open;
    this.openChange.emit({ open: this.open });
  };

  render() {
    return (
      <Host data-icon={this.icon ? '' : undefined}>
        <div part="item" class="item relative">
          <slot />
          <div part="action" class="action absolute flex items-center justify-center" hidden={!this.hasAction}>
            <slot name="action" />
          </div>
          <div part="badge" class="badge pointer-events-none absolute flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-fg tabular-nums select-none" hidden={!this.hasBadge}>
            <slot name="badge" />
          </div>
        </div>
      </Host>
    );
  }
}
