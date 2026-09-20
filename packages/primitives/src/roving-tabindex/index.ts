import { isRtl } from '../dom/index.js';

export interface RovingTabindexOptions {
  /** Items in tab order. Re-read on every keystroke, so dynamic lists work. */
  getItems: () => HTMLElement[];
  /** @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical' | 'both';
  /** Wrap from last to first. @default true */
  loop?: boolean;
  /** @default 0 */
  initialIndex?: number;
  /** Fires when the user moves the active item (keys, click); not for silent `setActive(i, false)` syncs. */
  onChange?: (item: HTMLElement, index: number) => void;
  /**
   * How to mark an item (non-)tabbable. Defaults to `item.tabIndex`. Shadow-DOM items whose
   * inner control renders `tabindex` from a prop pass a setter here instead.
   */
  setTabbable?: (item: HTMLElement, tabbable: boolean) => void;
  /** Items to skip (disabled). */
  isDisabled?: (item: HTMLElement) => boolean;
}

export interface RovingTabindex {
  readonly activeIndex: number;
  setActive(index: number, focus?: boolean): void;
  refresh(): void;
  destroy(): void;
}

/**
 * Roving tabindex (APG toolbar / tabs / menu / tree): one item is tabbable, arrows move
 * focus, Home/End jump, RTL swaps left/right. Clicking an item makes it the active one.
 */
export function createRovingTabindex(container: HTMLElement, options: RovingTabindexOptions): RovingTabindex {
  const { getItems, orientation = 'horizontal', loop = true, onChange, isDisabled = () => false } = options;
  const setTabbable = options.setTabbable ?? ((item, t) => { item.tabIndex = t ? 0 : -1; });
  let active = options.initialIndex ?? 0;

  const apply = () => {
    const items = getItems();
    if (active >= items.length) active = Math.max(0, items.length - 1);
    items.forEach((item, i) => setTabbable(item, i === active));
  };
  const setActive = (index: number, focus = true, direction: 1 | -1 = 1) => {
    const items = getItems();
    if (items.length === 0) return;
    let next = loop ? (index + items.length) % items.length : Math.min(Math.max(index, 0), items.length - 1);
    // skip disabled items in the direction of travel
    for (let guard = 0; guard < items.length && isDisabled(items[next]!); guard++) {
      next = loop ? (next + direction + items.length) % items.length : Math.min(Math.max(next + direction, 0), items.length - 1);
    }
    if (isDisabled(items[next]!)) return;
    active = next;
    apply();
    if (focus) {
      items[next]!.focus();
      onChange?.(items[next]!, next);
    }
  };

  const onKeydown = (e: KeyboardEvent) => {
    const items = getItems();
    if (items.length === 0) return;
    const rtl = isRtl(container);
    const horizontal = orientation !== 'vertical';
    const vertical = orientation !== 'horizontal';
    const forward = rtl ? 'ArrowLeft' : 'ArrowRight';
    const backward = rtl ? 'ArrowRight' : 'ArrowLeft';
    let next: number | null = null;
    // Direction in which disabled items are skipped: Home looks forward, End backward (to the last enabled item).
    let direction: 1 | -1 = 1;
    if (horizontal && e.key === forward) next = active + 1;
    else if (horizontal && e.key === backward) { next = active - 1; direction = -1; }
    else if (vertical && e.key === 'ArrowDown') next = active + 1;
    else if (vertical && e.key === 'ArrowUp') { next = active - 1; direction = -1; }
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') { next = items.length - 1; direction = -1; }
    if (next === null) return;
    if (!loop && (next < 0 || next >= items.length)) { e.preventDefault(); return; }
    e.preventDefault();
    setActive(next, true, direction);
  };
  const onFocusin = (e: FocusEvent) => {
    const items = getItems();
    const i = items.findIndex((item) => e.composedPath().includes(item));
    if (i >= 0 && i !== active) { active = i; apply(); onChange?.(items[i]!, i); }
  };

  container.addEventListener('keydown', onKeydown);
  container.addEventListener('focusin', onFocusin);
  apply();

  return {
    get activeIndex() { return active; },
    setActive,
    refresh: apply,
    destroy() {
      container.removeEventListener('keydown', onKeydown);
      container.removeEventListener('focusin', onFocusin);
    },
  };
}
