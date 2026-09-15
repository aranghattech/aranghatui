import { createTypeahead, type Typeahead } from '../typeahead/index.js';

export interface ListboxOptions {
  /** The option elements, in order. Re-read on every interaction so dynamic lists work. */
  getItems: () => HTMLElement[];
  /** Fired whenever the highlighted option changes (`null` when nothing is highlighted). */
  onHighlight: (item: HTMLElement | null, index: number) => void;
  /** Enter / Space / click on an option. */
  onSelect: (item: HTMLElement, index: number) => void;
  isDisabled?: (item: HTMLElement) => boolean;
  /** Text used for type-ahead; defaults to the item's text content. */
  getText?: (item: HTMLElement) => string;
  /** Wrap from last to first. @default true */
  loop?: boolean;
  /** Type-ahead on printable keys (off when a text input owns typing, e.g. Combobox). @default true */
  typeahead?: boolean;
  /** Space selects (off when a text input owns typing). @default true */
  space?: boolean;
}

export interface Listbox {
  /** Index of the highlighted option, -1 for none. */
  readonly index: number;
  /** `scroll` (default true) scrolls the option into view — pass false for highlights the user did not ask for:
   *  Chromium's `scrollIntoView` moves the sequential focus navigation starting point, so a load-time
   *  scroll would make the next Tab skip everything before that option. */
  highlight(index: number, scroll?: boolean): void;
  first(scroll?: boolean): void;
  last(scroll?: boolean): void;
  next(): void;
  prev(): void;
  /** Handle a keydown; returns true when the key was consumed (the caller should preventDefault). */
  handleKey(event: KeyboardEvent): boolean;
  /** Select the highlighted option (Enter). */
  selectHighlighted(): boolean;
  clear(): void;
  destroy(): void;
}

/**
 * Listbox behaviour shared by Select, Combobox, Command and (later) menus: a highlighted
 * option moved by the arrow keys (skipping disabled ones), Home / End, Page Up / Down,
 * optional type-ahead, and selection with Enter or Space. Highlighting sets
 * `data-highlighted` on the option and scrolls it into view; ARIA (`role="option"`,
 * `aria-selected`, `aria-activedescendant`) stays with the component, which owns the markup.
 */
export function createListbox(options: ListboxOptions): Listbox {
  const { getItems, onHighlight, onSelect, isDisabled = (el) => el.hasAttribute('disabled') || el.getAttribute('aria-disabled') === 'true', getText = (el) => el.textContent?.trim() ?? '', loop = true, typeahead = true, space = true } = options;
  let index = -1;
  let ta: Typeahead | undefined;

  const enabled = () => getItems().map((el, i) => ({ el, i })).filter(({ el }) => !isDisabled(el));

  function highlight(next: number, scroll = true) {
    const items = getItems();
    for (const el of items) el.removeAttribute('data-highlighted');
    const el = items[next];
    if (!el || isDisabled(el)) { index = -1; onHighlight(null, -1); return; }
    index = next;
    el.setAttribute('data-highlighted', '');
    if (scroll) el.scrollIntoView?.({ block: 'nearest' });
    onHighlight(el, next);
  }
  function step(delta: number) {
    const list = enabled();
    if (!list.length) return;
    const pos = list.findIndex(({ i }) => i === index);
    let n = pos < 0 ? (delta > 0 ? 0 : list.length - 1) : pos + delta;
    if (n < 0) n = loop ? list.length - 1 : 0;
    if (n >= list.length) n = loop ? 0 : list.length - 1;
    highlight(list[n]!.i);
  }
  function first(scroll = true) { const l = enabled(); if (l.length) highlight(l[0]!.i, scroll); }
  function last(scroll = true) { const l = enabled(); if (l.length) highlight(l[l.length - 1]!.i, scroll); }
  function page(delta: number) {
    const list = enabled();
    if (!list.length) return;
    const pos = Math.max(0, list.findIndex(({ i }) => i === index));
    const n = Math.min(list.length - 1, Math.max(0, pos + delta));
    highlight(list[n]!.i);
  }
  function selectHighlighted(): boolean {
    const el = getItems()[index];
    if (!el || isDisabled(el)) return false;
    onSelect(el, index);
    return true;
  }
  if (typeahead) {
    ta = createTypeahead({
      getItems: () => getItems().map((el) => ({ text: getText(el), disabled: isDisabled(el) })),
      getActiveIndex: () => index,
      onMatch: (i) => highlight(i),
    });
  }

  return {
    get index() { return index; },
    highlight,
    first,
    last,
    next: () => step(1),
    prev: () => step(-1),
    selectHighlighted,
    clear() { highlight(-1, false); },
    handleKey(e) {
      switch (e.key) {
        case 'ArrowDown': step(1); return true;
        case 'ArrowUp': step(-1); return true;
        case 'Home': first(true); return true;
        case 'End': last(true); return true;
        case 'PageDown': page(10); return true;
        case 'PageUp': page(-10); return true;
        case 'Enter': return selectHighlighted();
        case ' ': return space ? selectHighlighted() : false;
        default: return ta?.handleKey(e) ?? false;
      }
    },
    destroy() { ta?.destroy(); },
  };
}
