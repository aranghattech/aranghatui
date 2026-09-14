import { describe, expect, it, vi } from 'vitest';
import { createTypeahead } from './index.js';

const items = ['Apple', 'Apricot', 'Banana', 'Blueberry', 'Cherry'].map((text) => ({ text }));
const k = (key: string, init: KeyboardEventInit = {}) => new KeyboardEvent('keydown', { key, ...init });

describe('createTypeahead', () => {
  it('matches prefixes after the active item and cycles on repeated characters', () => {
    vi.useFakeTimers();
    let active = -1;
    const onMatch = vi.fn((i: number) => (active = i));
    const t = createTypeahead({ getItems: () => items, getActiveIndex: () => active, onMatch });
    expect(t.handleKey(k('b'))).toBe(true);
    expect(active).toBe(2);
    t.handleKey(k('b'));
    expect(active).toBe(3); // repeat cycles to the next B
    t.handleKey(k('b'));
    expect(active).toBe(2); // wraps
    vi.advanceTimersByTime(600);
    t.handleKey(k('a')); t.handleKey(k('p')); t.handleKey(k('r'));
    expect(active).toBe(1); // "apr" → Apricot
    expect(t.handleKey(k('x', { ctrlKey: true }))).toBe(false);
    t.destroy();
    vi.useRealTimers();
  });
});
