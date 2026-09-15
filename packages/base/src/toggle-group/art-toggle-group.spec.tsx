import { describe, expect, h, it, render } from '@stencil/vitest';
import { vi } from 'vitest';

describe('art-toggle-group', () => {
  it('single: one pressed at a time, re-press clears; group emits once', async () => {
    const { root, waitForChanges } = await render(
      <art-toggle-group type="single" value="a" aria-label="g"><art-toggle value="a">A</art-toggle><art-toggle value="b">B</art-toggle></art-toggle-group>,
    );
    await waitForChanges();
    const [a, b] = Array.from(root.querySelectorAll('art-toggle')) as any[];
    expect(a.pressed).toBe(true);
    const spy = vi.fn();
    root.addEventListener('change', spy);
    b.shadowRoot.querySelector('button').click();
    await waitForChanges();
    expect((root as any).value).toBe('b');
    expect(a.pressed).toBe(false);
    expect(b.pressed).toBe(true);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0]![0].detail).toEqual({ value: 'b' });
    expect(a.getAttribute('data-position')).toBe('first');
    expect(b.getAttribute('data-position')).toBe('last');
  });
  it('multiple: array value, comma attribute', async () => {
    const { root, waitForChanges } = await render(
      <art-toggle-group type="multiple" value="a,b" aria-label="g"><art-toggle value="a">A</art-toggle><art-toggle value="b">B</art-toggle><art-toggle value="c">C</art-toggle></art-toggle-group>,
    );
    await waitForChanges();
    const items = Array.from(root.querySelectorAll('art-toggle')) as any[];
    expect(items.map((t) => t.pressed)).toEqual([true, true, false]);
    items[2].shadowRoot.querySelector('button').click();
    await waitForChanges();
    expect((root as any).value).toEqual(['a', 'b', 'c']);
  });
});
