import { describe, expect, h, it, render } from '@stencil/vitest';
import { vi } from 'vitest';

describe('art-radio-group', () => {
  it('syncs checked / size to items, selects on click and emits change', async () => {
    const { root, waitForChanges } = await render(
      <art-radio-group value="b" size="lg" aria-label="Density">
        <art-radio value="a">A</art-radio>
        <art-radio value="b">B</art-radio>
      </art-radio-group>,
    );
    await waitForChanges();
    const [a, b] = Array.from(root.querySelectorAll('art-radio')) as any[];
    expect(root.getAttribute('role')).toBe('radiogroup');
    expect(a.shadowRoot.querySelector('input').type).toBe('radio');
    expect(b.checked).toBe(true);
    expect(a.checked).toBe(false);
    expect(a.size).toBe('lg');
    const spy = vi.fn();
    root.addEventListener('change', spy);
    a.shadowRoot.querySelector('input').click();
    await waitForChanges();
    expect((root as any).value).toBe('a');
    expect(spy.mock.calls[0]![0].detail).toEqual({ value: 'a' });
    expect(a.checked).toBe(true);
    expect(b.checked).toBe(false);
  });
  it('one tab stop: the checked item', async () => {
    const { root, waitForChanges } = await render(
      <art-radio-group value="b" aria-label="x"><art-radio value="a">A</art-radio><art-radio value="b">B</art-radio></art-radio-group>,
    );
    await waitForChanges();
    const btns = Array.from(root.querySelectorAll('art-radio')).map((r) => r.shadowRoot!.querySelector('input')!);
    expect(btns.map((b) => b.getAttribute('tabindex'))).toEqual(['-1', '0']);
  });
});
