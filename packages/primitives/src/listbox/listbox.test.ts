import { describe, expect, it, vi } from 'vitest';
import { createListbox } from './index.js';

const make = (labels: string[], disabled: number[] = []) => {
  const root = document.createElement('div');
  const items = labels.map((l, i) => { const li = document.createElement('div'); li.textContent = l; if (disabled.includes(i)) li.setAttribute('disabled', ''); root.append(li); return li; });
  document.body.append(root);
  return { root, items };
};
const key = (k: string) => new KeyboardEvent('keydown', { key: k });

describe('createListbox', () => {
  it('arrows move the highlight, skipping disabled and looping; Home / End jump', () => {
    const { items } = make(['a', 'b', 'c', 'd'], [1]);
    const onHighlight = vi.fn(); const onSelect = vi.fn();
    const lb = createListbox({ getItems: () => items, onHighlight, onSelect });
    expect(lb.handleKey(key('ArrowDown'))).toBe(true); expect(lb.index).toBe(0);
    lb.handleKey(key('ArrowDown')); expect(lb.index).toBe(2); // skips b
    expect(items[2]!.hasAttribute('data-highlighted')).toBe(true);
    expect(items[0]!.hasAttribute('data-highlighted')).toBe(false);
    lb.handleKey(key('ArrowDown')); expect(lb.index).toBe(3);
    lb.handleKey(key('ArrowDown')); expect(lb.index).toBe(0); // loops
    lb.handleKey(key('End')); expect(lb.index).toBe(3);
    lb.handleKey(key('Home')); expect(lb.index).toBe(0);
    lb.handleKey(key('ArrowUp')); expect(lb.index).toBe(3);
    expect(onHighlight).toHaveBeenLastCalledWith(items[3], 3);
    lb.destroy();
  });

  it('Enter selects the highlighted option; Space only when enabled; type-ahead highlights by text', () => {
    const { items } = make(['Apple', 'Banana', 'Cherry']);
    const onSelect = vi.fn();
    const lb = createListbox({ getItems: () => items, onHighlight: () => {}, onSelect, space: false });
    expect(lb.handleKey(key('Enter'))).toBe(false); // nothing highlighted
    expect(lb.handleKey(key('c'))).toBe(true); expect(lb.index).toBe(2);
    expect(lb.handleKey(key(' '))).toBe(false);
    expect(lb.handleKey(key('Enter'))).toBe(true);
    expect(onSelect).toHaveBeenCalledWith(items[2], 2);
    lb.clear(); expect(lb.index).toBe(-1);
    expect(items.some((i) => i.hasAttribute('data-highlighted'))).toBe(false);
    lb.destroy();
  });
});
