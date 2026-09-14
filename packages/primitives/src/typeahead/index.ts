export interface TypeaheadItem {
  text: string;
  disabled?: boolean;
}

export interface TypeaheadOptions {
  getItems: () => TypeaheadItem[];
  /** Currently active index (search starts after it). */
  getActiveIndex: () => number;
  onMatch: (index: number) => void;
  /** Buffer reset delay. @default 500 */
  resetAfterMs?: number;
}

export interface Typeahead {
  /** Feed keydown events; returns true when the key was consumed (call `preventDefault`). */
  handleKey(event: KeyboardEvent): boolean;
  reset(): void;
  destroy(): void;
}

/**
 * Listbox / menu type-to-select (APG): typing a prefix jumps to the next matching item after
 * the active one; repeating the same character cycles through items starting with it.
 */
export function createTypeahead(options: TypeaheadOptions): Typeahead {
  const { getItems, getActiveIndex, onMatch, resetAfterMs = 500 } = options;
  let buffer = '';
  let timer: ReturnType<typeof setTimeout> | undefined;

  const reset = () => { buffer = ''; if (timer) clearTimeout(timer); timer = undefined; };

  return {
    handleKey(e) {
      if (e.key.length !== 1 || e.ctrlKey || e.metaKey || e.altKey) return false;
      if (e.key === ' ' && buffer === '') return false; // Space alone activates; only part of a phrase mid-search
      const items = getItems();
      if (items.length === 0) return false;
      const key = e.key.toLowerCase();
      const repeated = buffer.length > 0 && buffer.split('').every((c) => c === key);
      buffer = repeated ? key : buffer + key;
      if (timer) clearTimeout(timer);
      timer = setTimeout(reset, resetAfterMs);

      const start = getActiveIndex();
      const order = Array.from({ length: items.length }, (_, i) => (start + 1 + i) % items.length);
      // With a fresh single character, also allow the active item itself when nothing after it matches.
      const match = order.find((i) => !items[i]!.disabled && items[i]!.text.toLowerCase().startsWith(buffer));
      if (match === undefined) return true;
      onMatch(match);
      return true;
    },
    reset,
    destroy: reset,
  };
}
