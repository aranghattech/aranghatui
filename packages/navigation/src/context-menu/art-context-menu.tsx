import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { createDismissable, type Dismissable } from '@aranghat/primitives/dismissable';
import { uniqueId } from '@aranghat/primitives/id';
import { createOverlay, type Overlay } from '@aranghat/primitives/overlay';
import { createMenuList, levelItems, type MenuList } from '../menu/menu-list';
import { isRtl } from '@aranghat/primitives/dom';

const LEVEL = 'art-dropdown-menu, art-context-menu, art-menubar-menu, art-menu-sub';

/**
 * Context Menu — shadcn/ui parity. Right-click (or Shift+F10 / the Menu key) anywhere on the
 * wrapped content opens a menu at the pointer, on the platform top layer. Same items as
 * Dropdown Menu: `art-menu-item`, `-label`, `-separator`, `-group`, `-radio-group`, `-sub`.
 *
 * @slot - The area that owns the context menu (any content).
 * @slot menu - The menu's items.
 * @part content - The `role="menu"` panel.
 */
@Component({ tag: 'art-context-menu', styleUrl: 'art-context-menu.css', shadow: true })
export class ArtContextMenu {
  @Element() host!: HTMLElement;
  private panel?: HTMLDivElement;
  private overlay?: Overlay;
  private dismiss?: Dismissable;
  private list?: MenuList;
  private menuId = uniqueId('art-context-menu');
  private point = { x: 0, y: 0 };
  private byKeyboard = false;
  private lastFocus: HTMLElement | null = null;

  @Prop({ mutable: true, reflect: true }) open = false;
  /** Accessible name of the menu. */
  @Prop() label = 'Context menu';
  @Prop({ reflect: true }) disabled = false;

  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;

  private items(): HTMLElement[] { return levelItems(this.host, 'art-menu-item', LEVEL); }

  connectedCallback() {
    this.host.addEventListener('contextmenu', this.onContextMenu);
    this.host.addEventListener('keydown', this.onKeydown);
    this.host.addEventListener('select', this.onSelect);
    this.host.addEventListener('pointermove', this.onPointerMove);
  }
  componentDidLoad() {
    this.list = createMenuList({
      getItems: () => this.items(),
      onOpenSub: (item) => { const sub = item.closest('art-menu-sub') as (HTMLElement & { openSub?: () => Promise<void> }) | null; if (item.getAttribute('slot') === 'trigger' && sub && sub.parentElement?.closest(LEVEL) === this.host) { void sub.openSub?.(); return true; } return false; },
      onClose: (reason) => this.close(reason !== 'tab'),
      isRtl: () => isRtl(this.host),
    });
  }
  disconnectedCallback() {
    this.host.removeEventListener('contextmenu', this.onContextMenu);
    this.host.removeEventListener('keydown', this.onKeydown);
    this.host.removeEventListener('select', this.onSelect);
    this.host.removeEventListener('pointermove', this.onPointerMove);
    this.list?.destroy();
    this.dismiss?.destroy();
    this.overlay?.destroy();
    this.overlay = undefined;
  }

  /** The menu anchors to a point: a virtual element for floating-ui. */
  private anchor(): Element {
    const rect = () => new DOMRect(this.point.x, this.point.y, 0, 0);
    return { getBoundingClientRect: rect, contextElement: this.host } as unknown as Element;
  }
  private openAt(x: number, y: number, byKeyboard: boolean) {
    if (this.disabled) return;
    this.point = { x, y };
    this.byKeyboard = byKeyboard;
    this.lastFocus = document.activeElement as HTMLElement | null;
    // a new position needs a new overlay (the anchor is a value, not an element)
    this.overlay?.destroy();
    this.overlay = undefined;
    if (this.open) { this.onOpen(true); return; }
    this.open = true;
    this.openChange.emit({ open: true });
  }
  private close(restoreFocus: boolean) {
    if (!this.open) return;
    this.open = false;
    this.openChange.emit({ open: false });
    if (restoreFocus) this.lastFocus?.focus({ preventScroll: true });
  }
  @Watch('open')
  onOpen(open: boolean) {
    if (!this.panel) return;
    if (open) {
      this.overlay ??= createOverlay(this.anchor(), this.panel, { placement: 'bottom-start', offset: 2 });
      const byKeyboard = this.byKeyboard;
      void this.overlay.open().then(() => {
        if (!this.open) return;
        if (byKeyboard) this.list?.first(); else this.panel?.focus({ preventScroll: true });
      });
      this.dismiss ??= createDismissable(this.panel, { escape: true, pointerOutside: true, focusOutside: true, onDismiss: (r) => this.close(r === 'escape') });
    } else {
      this.dismiss?.destroy();
      this.dismiss = undefined;
      void this.overlay?.close();
    }
  }
  private onContextMenu = (e: MouseEvent) => {
    if (this.disabled || this.panel?.contains(e.target as Node)) return;
    e.preventDefault();
    // keyboard-invoked context menus arrive with no coordinates: anchor to the focused element
    const kb = e.button !== 2 && e.clientX === 0 && e.clientY === 0;
    if (kb) { const r = (document.activeElement ?? this.host).getBoundingClientRect(); this.openAt(r.left, r.bottom, true); }
    else this.openAt(e.clientX, e.clientY, false);
  };
  private onKeydown = (e: KeyboardEvent) => {
    const inPanel = e.composedPath().includes(this.panel as EventTarget); // events from the shadow panel are retargeted to the host
    if (!this.open || !inPanel) {
      if ((e.key === 'F10' && e.shiftKey) || e.key === 'ContextMenu') { e.preventDefault(); const r = (e.target as Element).getBoundingClientRect(); this.openAt(r.left, r.bottom, true); }
      return;
    }
    const sub = (e.target as Element).closest?.('art-menu-sub');
    if (sub && sub.parentElement?.closest(LEVEL) === this.host && (sub as HTMLElement & { isOpen?: boolean }).isOpen) return;
    if (this.list?.handleKey(e)) e.preventDefault();
  };
  private onPointerMove = (e: PointerEvent) => {
    if (!this.open || e.pointerType !== 'mouse') return;
    const item = (e.target as Element).closest?.('art-menu-item') as HTMLElement | null;
    if (item && this.items().includes(item) && !item.hasAttribute('disabled') && document.activeElement !== item) item.focus({ preventScroll: true });
  };
  private onSelect = (e: Event) => { if (!e.defaultPrevented) this.close(true); };

  render() {
    return (
      <Host>
        <slot />
        <div part="content" id={this.menuId} role="menu" tabindex="-1" popover="manual" aria-label={this.label} ref={(el) => (this.panel = el)} class="content max-h-72 min-w-32 overflow-x-hidden overflow-y-auto rounded-md border-default bg-popover p-1 text-fg shadow-popover outline-none">
          <slot name="menu" />
        </div>
      </Host>
    );
  }
}
