import { Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h } from '@stencil/core';
import { createDismissable, type Dismissable } from '@aranghat/primitives/dismissable';
import { createHoverIntent, type HoverIntent } from '@aranghat/primitives/hover-intent';
import { uniqueId } from '@aranghat/primitives/id';
import { createOverlay, type Overlay } from '@aranghat/primitives/overlay';
import { createMenuList, levelItems, type MenuList } from '../menu/menu-list';

/**
 * Dropdown Menu Sub — a submenu: an item in the `trigger` slot opens a nested `role="menu"`
 * beside it on hover, ArrowRight, Enter or Space; ArrowLeft or Escape closes it and returns
 * to the trigger.
 *
 * @slot trigger - An `art-menu-item` that opens the submenu.
 * @slot - The submenu's items.
 * @part content - The nested `role="menu"` panel.
 */
@Component({ tag: 'art-menu-sub', styleUrl: 'art-menu-sub.css', shadow: true })
export class ArtMenuSub {
  @Element() host!: HTMLElement;
  private panel?: HTMLDivElement;
  private overlay?: Overlay;
  private dismiss?: Dismissable;
  private hover?: HoverIntent;
  private list?: MenuList;
  private opening?: Promise<void>;
  private menuId = uniqueId('art-menu-sub');

  @Prop({ mutable: true, reflect: true }) open = false;
  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;

  /** Whether the submenu is open (read by the parent menu's key handling). */
  get isOpen() { return this.open; }
  private trigger(): HTMLElement | null { return this.host.querySelector(':scope > [slot="trigger"]'); }
  private items(): HTMLElement[] { return levelItems(this.host, 'art-menu-item', 'art-dropdown-menu, art-context-menu, art-menubar-menu, art-menu-sub'); }

  connectedCallback() {
    this.host.setAttribute('role', 'none');
    this.host.addEventListener('keydown', this.onKeydown);
    this.host.addEventListener('click', this.onClick);
  }
  componentDidLoad() {
    const t = this.trigger();
    if (t) {
      t.setAttribute('aria-haspopup', 'menu');
      t.setAttribute('aria-expanded', 'false'); // no aria-controls across the shadow boundary
      this.hover = createHoverIntent(t, { onOpen: () => this.set(true), onClose: () => this.set(false), focus: false, touch: false, also: () => [this.panel] });
    }
    this.list = createMenuList({
      getItems: () => this.items(),
      onOpenSub: (item) => { const sub = item.closest('art-menu-sub') as (HTMLElement & { openSub?: () => Promise<void> }) | null; if (item.getAttribute('slot') === 'trigger' && sub && sub !== this.host && sub.parentElement?.closest('art-menu-sub') === this.host) { void sub.openSub?.(); return true; } return false; },
      onClose: (reason) => { this.set(false); if (reason !== 'tab') this.trigger()?.focus({ preventScroll: true }); },
      isRtl: () => this.host.matches(':dir(rtl)'),
    });
    if (this.open) this.onOpen(true);
  }
  disconnectedCallback() {
    this.host.removeEventListener('keydown', this.onKeydown);
    this.host.removeEventListener('click', this.onClick);
    this.hover?.destroy();
    this.list?.destroy();
    this.dismiss?.destroy();
    this.overlay?.destroy();
    this.overlay = undefined;
  }

  /** Open and focus the first item (keyboard). */
  @Method() async openSub() { this.set(true); await this.opening; if (this.open) this.list?.first(); }

  private set(open: boolean) {
    if (this.open === open) return;
    this.open = open;
    this.openChange.emit({ open });
  }
  @Watch('open')
  onOpen(open: boolean) {
    const t = this.trigger();
    t?.setAttribute('aria-expanded', String(open));
    if (!this.panel || !t) return;
    if (open) {
      this.overlay ??= createOverlay(t, this.panel, { placement: this.host.matches(':dir(rtl)') ? 'left-start' : 'right-start', offset: 0 });
      this.opening = this.overlay.open(); // resolves once the panel is placed and visible (focus only then)
      this.dismiss ??= createDismissable(this.panel, { escape: true, pointerOutside: false, focusOutside: false, onDismiss: () => { this.set(false); t.focus({ preventScroll: true }); } });
    } else {
      this.dismiss?.destroy();
      this.dismiss = undefined;
      void this.overlay?.close();
    }
  }
  private onClick = (e: MouseEvent) => {
    const t = this.trigger();
    if (t && e.composedPath().includes(t)) {
      // the trigger itself is not an action: it opens the submenu and keeps the menu open
      e.stopPropagation();
      void this.openSub();
    }
  };
  private onKeydown = (e: KeyboardEvent) => {
    const t = this.trigger();
    if (t && e.composedPath().includes(t)) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); void this.openSub(); }
      return; // ArrowRight on the trigger is handled by the parent level (onOpenSub)
    }
    if (!this.open) return;
    // keys inside a deeper submenu belong to it
    const deeper = (e.target as Element).closest?.('art-menu-sub');
    if (deeper && deeper !== this.host && (deeper as HTMLElement & { isOpen?: boolean }).isOpen) return;
    if (this.list?.handleKey(e)) { e.preventDefault(); e.stopPropagation(); }
  };

  render() {
    return (
      <Host>
        <slot name="trigger" />
        {/* a group keeps the parent menu's children valid (a menu may not be a direct child of a menu) */}
        <div role="group" aria-label={this.trigger()?.textContent?.trim() ?? undefined}>
          <div part="content" id={this.menuId} role="menu" tabindex="-1" popover="manual" aria-label={this.trigger()?.textContent?.trim() ?? undefined} ref={(el) => (this.panel = el)} class="content min-w-32 overflow-hidden rounded-md border-default bg-popover p-1 text-fg shadow-popover outline-none">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
