import { createTypeahead, type Typeahead } from '@aranghat/primitives/typeahead';

/**
 * Keyboard and pointer behaviour of one menu level (APG menu): arrows move focus between the
 * enabled items and wrap, Home / End jump, typing jumps to a matching item, Enter / Space
 * activate. Shared by Dropdown Menu, its submenus, Context Menu and Menubar — in this tier
 * rather than in primitives because all its consumers live here.
 */
export interface MenuListOptions {
  /** The item hosts of this level, in order (disabled ones included). */
  getItems: () => HTMLElement[];
  isDisabled?: (item: HTMLElement) => boolean;
  /** ArrowRight (ArrowLeft in RTL) on an item: open a submenu. Return true when handled. */
  onOpenSub?: (item: HTMLElement) => boolean;
  /** ArrowLeft (ArrowRight in RTL) / Escape: close this level. */
  onClose?: (reason: 'escape' | 'back' | 'tab') => void;
  isRtl?: () => boolean;
}
export interface MenuList {
  items(): HTMLElement[];
  focus(index: number): void;
  first(): void;
  last(): void;
  handleKey(event: KeyboardEvent): boolean;
  destroy(): void;
}

const text = (el: HTMLElement) => (el.getAttribute('data-text') ?? el.textContent ?? '').trim();

export function createMenuList(options: MenuListOptions): MenuList {
  const { getItems, isDisabled = (el) => el.hasAttribute('disabled') || el.getAttribute('aria-disabled') === 'true', onOpenSub, onClose, isRtl = () => false } = options;
  const enabled = () => getItems().filter((el) => !isDisabled(el));
  const activeIndex = () => { const a = document.activeElement; return getItems().findIndex((el) => el === a || el.contains(a) || el.shadowRoot?.activeElement === a); };
  function focus(index: number) {
    const el = getItems()[index];
    if (el && !isDisabled(el)) el.focus({ preventScroll: false });
  }
  function move(delta: number) {
    const list = enabled();
    if (!list.length) return;
    const all = getItems();
    const cur = activeIndex();
    const pos = list.findIndex((el) => all.indexOf(el) === cur);
    const next = pos < 0 ? (delta > 0 ? 0 : list.length - 1) : (pos + delta + list.length) % list.length;
    list[next]!.focus();
  }
  const ta: Typeahead = createTypeahead({
    getItems: () => getItems().map((el) => ({ text: text(el), disabled: isDisabled(el) })),
    getActiveIndex: activeIndex,
    onMatch: (i) => focus(i),
  });
  return {
    items: getItems,
    focus,
    first: () => { const l = enabled(); l[0]?.focus(); },
    last: () => { const l = enabled(); l[l.length - 1]?.focus(); },
    handleKey(e) {
      const rtl = isRtl();
      const open = rtl ? 'ArrowLeft' : 'ArrowRight';
      const back = rtl ? 'ArrowRight' : 'ArrowLeft';
      switch (e.key) {
        case 'ArrowDown': move(1); return true;
        case 'ArrowUp': move(-1); return true;
        case 'Home': this.first(); return true;
        case 'End': this.last(); return true;
        case 'Escape': onClose?.('escape'); return true;
        case 'Tab': onClose?.('tab'); return false;
        default: break;
      }
      if (e.key === open) { const el = getItems()[activeIndex()]; return !!el && !!onOpenSub?.(el); }
      if (e.key === back) { if (onClose) { onClose('back'); return true; } return false; }
      if (e.key === 'Enter' || e.key === ' ') { const el = getItems()[activeIndex()]; if (el && !isDisabled(el)) { el.click(); return true; } return false; }
      return ta.handleKey(e);
    },
    destroy() { ta.destroy(); },
  };
}

/** Item hosts that belong to `level`: its own items plus the trigger items of its direct submenus (a submenu's trigger sits in the parent level). */
export function levelItems(level: Element, selector: string, levelSelector: string): HTMLElement[] {
  return Array.from(level.querySelectorAll<HTMLElement>(selector)).filter((el) => {
    if (el.hidden) return false;
    const own = el.closest(levelSelector);
    const belongs = el.getAttribute('slot') === 'trigger' ? own?.parentElement?.closest(levelSelector) : own;
    return belongs === level;
  });
}
