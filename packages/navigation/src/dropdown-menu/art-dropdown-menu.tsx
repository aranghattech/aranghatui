import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { createDismissable, type Dismissable } from '@aranghat/primitives/dismissable';
import type { Placement } from '@aranghat/primitives/floating';
import { uniqueId } from '@aranghat/primitives/id';
import { createOverlay, type Overlay } from '@aranghat/primitives/overlay';
import { applyVisibleItems, setRestingTabStop } from '../menu/visible-items';
import { createMenuList, levelItems, type MenuList } from '../menu/menu-list';
import { child, isRtl } from '@aranghat/primitives/dom';

const MENU_ITEM_SELECTOR = 'art-menu-item';
const MENU_LEVEL_SELECTOR = 'art-dropdown-menu, art-context-menu, art-menubar-menu, art-menu-sub';

/**
 * Dropdown Menu — shadcn/ui parity. A menu of actions opened from a trigger, on the platform
 * top layer: items, checkbox and radio items, labels, groups, separators, shortcuts and
 * submenus. Arrow keys move, typing jumps, Enter / Space activate, Escape closes and returns
 * focus to the trigger.
 *
 * @slot trigger - The button that opens the menu.
 * @slot - `art-menu-item`s, `-label`s, `-separator`s, `-group`s, `-radio-group`s and `-sub`s.
 * @part content - The `role="menu"` panel.
 */
@Component({ tag: 'art-dropdown-menu', styleUrl: 'art-dropdown-menu.css', shadow: true })
export class ArtDropdownMenu {
  @Element() host!: HTMLElement;
  private panel?: HTMLDivElement;
  private overlay?: Overlay;
  private dismiss?: Dismissable;
  private list?: MenuList;
  private stopCap?: () => void;
  private menuId = uniqueId('art-dropdown-menu');
  private openedByKeyboard = false;

  @Prop({ mutable: true, reflect: true }) open = false;
  /** Preferred side / alignment of the panel. */
  @Prop() placement: Placement = 'bottom-start';
  /** Accessible name of the menu; defaults to the trigger's text. */
  @Prop() label?: string;
  /**
   * Show this many rows before the menu scrolls. Measured from a real row, so it follows the
   * control height; leave it unset and the menu is as tall as its items, capped by the viewport.
   */
  @Prop({ attribute: 'visible-items' }) visibleItems?: number;

  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;

  private trigger(): HTMLElement | null { return child(this.host, '[slot="trigger"]'); }
  private items(): HTMLElement[] { return levelItems(this.host, MENU_ITEM_SELECTOR, MENU_LEVEL_SELECTOR); }

  connectedCallback() {
    this.host.addEventListener('click', this.onClick);
    this.host.addEventListener('keydown', this.onKeydown);
    this.host.addEventListener('select', this.onSelect);
    this.host.addEventListener('pointermove', this.onPointerOver);
  }
  componentDidLoad() {
    this.wire();
    this.host.shadowRoot?.addEventListener('slotchange', this.wire);
    this.list = createMenuList({
      getItems: () => this.items(),
      onOpenSub: (item) => { const sub = item.closest('art-menu-sub') as (HTMLElement & { openSub?: () => Promise<void> }) | null; if (item.getAttribute('slot') === 'trigger' && sub && sub.parentElement?.closest(MENU_LEVEL_SELECTOR) === this.host) { void sub.openSub?.(); return true; } return false; },
      onClose: (reason) => { this.set(false); if (reason !== 'tab') this.trigger()?.focus({ preventScroll: true }); },
      isRtl: () => isRtl(this.host),
    });
    if (this.open) this.onOpen(true);
  }
  disconnectedCallback() {
    this.host.removeEventListener('click', this.onClick);
    this.host.removeEventListener('keydown', this.onKeydown);
    this.host.removeEventListener('select', this.onSelect);
    this.host.removeEventListener('pointermove', this.onPointerOver);
    this.list?.destroy();
    this.stopCap?.();
    this.dismiss?.destroy();
    this.overlay?.destroy();
    this.overlay = undefined;
  }
  private wire = () => {
    const t = this.trigger();
    if (!t) return;
    t.setAttribute('aria-haspopup', 'menu');
    t.setAttribute('aria-expanded', String(this.open)); // no aria-controls: the menu lives in this shadow root, an idref from the light DOM cannot reach it
  };
  private set(open: boolean, byKeyboard = false) {
    if (this.open === open) return;
    this.openedByKeyboard = byKeyboard;
    this.open = open;
    this.openChange.emit({ open });
  }
  @Watch('open')
  onOpen(open: boolean) {
    const t = this.trigger();
    t?.setAttribute('aria-expanded', String(open));
    if (!this.panel || !t) return;
    if (open) {
      this.overlay ??= createOverlay(t, this.panel, { placement: this.placement, offset: 4, availableHeight: true });
      const byKeyboard = this.openedByKeyboard;
      void this.overlay.open().then(() => {
        if (!this.open) return;
        this.stopCap?.();
        this.stopCap = applyVisibleItems(this.panel, this.host, this.visibleItems);
        setRestingTabStop(this.host, true);
        if (byKeyboard) this.list?.first(); else this.panel?.focus({ preventScroll: true });
      });
      this.dismiss ??= createDismissable(this.panel, { escape: true, pointerOutside: true, focusOutside: true, ignore: () => [t], onDismiss: (r) => { this.set(false); if (r === 'escape') t.focus({ preventScroll: true }); } });
    } else {
      setRestingTabStop(this.host, false);
      this.stopCap?.();
      this.stopCap = undefined;
      this.dismiss?.destroy();
      this.dismiss = undefined;
      void this.overlay?.close();
    }
  }
  private onClick = (e: MouseEvent) => {
    const t = this.trigger();
    if (t && e.composedPath().includes(t)) this.set(!this.open, (e as PointerEvent).pointerType === '' || e.detail === 0);
  };
  private onKeydown = (e: KeyboardEvent) => {
    const t = this.trigger();
    const onTrigger = !!t && e.composedPath().includes(t);
    if (onTrigger) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || (!this.open && (e.key === 'Enter' || e.key === ' '))) {
        e.preventDefault();
        if (!this.open) this.set(true, true); else if (e.key === 'ArrowUp') this.list?.last(); else this.list?.first();
      }
      return;
    }
    if (!this.open) return;
    // keys inside a submenu belong to it
    const sub = (e.target as Element).closest?.('art-menu-sub');
    if (sub && sub.closest('art-dropdown-menu') === this.host && (sub as HTMLElement & { isOpen?: boolean }).isOpen) return;
    if (this.list?.handleKey(e)) e.preventDefault();
  };
  /** Moving the pointer over an item moves focus to it (pointer and keyboard share one highlight). `pointermove`, not `pointerover`: a panel opening under a resting pointer must not steal the keyboard's focus. */
  private onPointerOver = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    const item = (e.target as Element).closest?.(MENU_ITEM_SELECTOR) as HTMLElement | null;
    if (item && this.items().includes(item) && !item.hasAttribute('disabled') && document.activeElement !== item) item.focus({ preventScroll: true });
  };
  /** An item was activated (anywhere in the tree): close unless the handler called `preventDefault()`. */
  private onSelect = (e: Event) => {
    if (e.defaultPrevented) return;
    this.set(false);
    this.trigger()?.focus({ preventScroll: true });
  };

  render() {
    return (
      <Host>
        <slot name="trigger" />
        <div part="content" id={this.menuId} role="menu" tabindex="-1" popover="manual" aria-label={this.label ?? this.trigger()?.textContent?.trim() ?? undefined} ref={(el) => (this.panel = el)} class="content min-w-32 overflow-x-hidden overflow-y-auto rounded-md border-default bg-popover p-1 text-fg shadow-popover outline-none">
          <slot />
        </div>
      </Host>
    );
  }
}
