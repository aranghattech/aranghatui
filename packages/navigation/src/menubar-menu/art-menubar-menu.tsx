import { Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h } from '@stencil/core';
import { createDismissable, type Dismissable } from '@aranghat/primitives/dismissable';
import { uniqueId } from '@aranghat/primitives/id';
import { createOverlay, type Overlay } from '@aranghat/primitives/overlay';
import { createMenuList, levelItems, type MenuList } from '../menu/menu-list';

const LEVEL = 'art-dropdown-menu, art-context-menu, art-menubar-menu, art-menu-sub';
type Menu = HTMLElement & { open: boolean; disabled: boolean; setOpen(open: boolean, byKeyboard?: boolean): Promise<void> };

/**
 * Menubar Menu — one menu of an `<art-menubar>`: the trigger (`label`) and its items.
 *
 * @slot - `art-menu-item`s, `-label`s, `-separator`s, `-group`s, `-radio-group`s and `-sub`s.
 * @part trigger - The trigger button (`role="menuitem"` in the bar).
 * @part content - The `role="menu"` panel.
 */
@Component({ tag: 'art-menubar-menu', styleUrl: 'art-menubar-menu.css', shadow: { delegatesFocus: true } })
export class ArtMenubarMenu {
  @Element() host!: HTMLElement;
  private button?: HTMLButtonElement;
  private panel?: HTMLDivElement;
  private overlay?: Overlay;
  private dismiss?: Dismissable;
  private list?: MenuList;
  private menuId = uniqueId('art-menubar-menu');
  private byKeyboard = false;

  /** Trigger text. */
  @Prop() label = '';
  @Prop({ mutable: true, reflect: true }) open = false;
  @Prop({ reflect: true }) disabled = false;

  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;
  /** Internal: tells the bar to close its other menus. */
  @Event({ eventName: 'menubar-open', bubbles: true, composed: false }) barOpen!: EventEmitter<void>;

  private siblings(): Menu[] { return Array.from(this.host.closest('art-menubar')?.querySelectorAll(':scope > art-menubar-menu') ?? []) as Menu[]; }
  private anyOpen(): boolean { return this.siblings().some((m) => m.open); }
  /** Move to the previous / next enabled menu; an open menu stays open on the new one. */
  private step(delta: number) {
    const menus = this.siblings().filter((m) => !m.disabled || m === this.host);
    const i = menus.indexOf(this.host as Menu);
    const next = menus[(i + delta + menus.length) % menus.length];
    if (!next || next === this.host) return;
    const wasOpen = this.open;
    if (wasOpen) void this.setOpen(false);
    next.shadowRoot?.querySelector<HTMLButtonElement>('[part="trigger"]')?.focus();
    if (wasOpen) void next.setOpen(true, true);
  }
  private items(): HTMLElement[] { return levelItems(this.host, 'art-menu-item', LEVEL); }

  connectedCallback() {
    this.host.setAttribute('role', 'none');
    this.host.addEventListener('keydown', this.onKeydown);
    this.host.addEventListener('select', this.onSelect);
    this.host.addEventListener('pointermove', this.onPointerMove);
  }
  componentDidLoad() {
    this.list = createMenuList({
      getItems: () => this.items(),
      onOpenSub: (item) => { const sub = item.closest('art-menu-sub') as (HTMLElement & { openSub?: () => Promise<void> }) | null; if (item.getAttribute('slot') === 'trigger' && sub && sub.parentElement?.closest(LEVEL) === this.host) { void sub.openSub?.(); return true; } return false; },
      onClose: (reason) => { this.setOpen(false); if (reason !== 'tab') this.button?.focus({ preventScroll: true }); },
      isRtl: () => this.host.matches(':dir(rtl)'),
    });
    if (this.open) this.onOpen(true);
  }
  disconnectedCallback() {
    this.host.removeEventListener('keydown', this.onKeydown);
    this.host.removeEventListener('select', this.onSelect);
    this.host.removeEventListener('pointermove', this.onPointerMove);
    this.list?.destroy();
    this.dismiss?.destroy();
    this.overlay?.destroy();
    this.overlay = undefined;
  }

  /** Open or close (the bar calls it to switch menus). */
  @Method() async setOpen(open: boolean, byKeyboard = false) {
    if (this.open === open || (open && this.disabled)) return;
    this.byKeyboard = byKeyboard;
    this.open = open;
    this.openChange.emit({ open });
  }
  @Watch('open')
  onOpen(open: boolean) {
    if (!this.panel || !this.button) return;
    if (open) {
      this.barOpen.emit();
      this.overlay ??= createOverlay(this.button, this.panel, { placement: 'bottom-start', offset: 8 });
      const byKeyboard = this.byKeyboard;
      void this.overlay.open().then(() => {
        if (!this.open) return;
        if (byKeyboard) this.list?.first(); else this.panel?.focus({ preventScroll: true });
      });
      this.dismiss ??= createDismissable(this.panel, { escape: true, pointerOutside: true, focusOutside: true, ignore: () => [this.button], onDismiss: (r) => { void this.setOpen(false); if (r === 'escape') this.button?.focus({ preventScroll: true }); } });
    } else {
      this.dismiss?.destroy();
      this.dismiss = undefined;
      void this.overlay?.close();
    }
  }
  private onTriggerClick = () => void this.setOpen(!this.open, false);
  /** While a sibling menu is open, pointing at this trigger switches to it (Windows / macOS menubar behaviour). */
  private onTriggerEnter = () => { if (!this.open && this.anyOpen()) void this.setOpen(true, false); };
  private onKeydown = (e: KeyboardEvent) => {
    const rtl = this.host.matches(':dir(rtl)');
    const prev = rtl ? 'ArrowRight' : 'ArrowLeft', next = rtl ? 'ArrowLeft' : 'ArrowRight';
    const onTrigger = e.composedPath().includes(this.button as EventTarget);
    if (onTrigger) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); void this.setOpen(true, true); return; }
      if (e.key === prev || e.key === next) { e.preventDefault(); e.stopPropagation(); this.step(e.key === next ? 1 : -1); return; }
      return;
    }
    if (!this.open) return;
    const sub = (e.target as Element).closest?.('art-menu-sub');
    if (sub && sub.parentElement?.closest(LEVEL) === this.host && (sub as HTMLElement & { isOpen?: boolean }).isOpen) return;
    // ← / → at the top level of an open menu move to the neighbouring menu (unless → opens a submenu)
    if (e.key === prev || e.key === next) {
      const item = (e.target as Element).closest?.('art-menu-item');
      const isSubTrigger = item?.getAttribute('slot') === 'trigger';
      if (!(e.key === next && isSubTrigger)) { e.preventDefault(); e.stopPropagation(); this.step(e.key === next ? 1 : -1); return; }
    }
    if (this.list?.handleKey(e)) e.preventDefault();
  };
  private onPointerMove = (e: PointerEvent) => {
    if (!this.open || e.pointerType !== 'mouse') return;
    const item = (e.target as Element).closest?.('art-menu-item') as HTMLElement | null;
    if (item && this.items().includes(item) && !item.hasAttribute('disabled') && document.activeElement !== item) item.focus({ preventScroll: true });
  };
  private onSelect = (e: Event) => { if (!e.defaultPrevented) { void this.setOpen(false); this.button?.focus({ preventScroll: true }); } };

  render() {
    return (
      <Host>
        <button part="trigger" type="button" role="menuitem" ref={(el) => (this.button = el)} class="trigger flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-none select-none transition-interactive motion-fast" aria-haspopup="menu" aria-expanded={this.open ? 'true' : 'false'} disabled={this.disabled} data-state={this.open ? 'open' : 'closed'} onClick={this.onTriggerClick} onPointerEnter={this.onTriggerEnter}>
          {this.label}
        </button>
        <div part="content" id={this.menuId} role="menu" tabindex="-1" popover="manual" aria-label={this.label} ref={(el) => (this.panel = el)} class="content min-w-48 overflow-hidden rounded-md border-default bg-popover p-1 text-fg shadow-popover outline-none">
          <slot />
        </div>
      </Host>
    );
  }
}
