import { describe, expect, h, it, render } from '@stencil/vitest';
import { vi } from 'vitest';

const ev = (root: Element, type: string) => { const e = root.ownerDocument.createEvent('Event'); e.initEvent(type, true, false); return e; };

describe('art-native-select', () => {
  it('mirrors options into the shadow select, adopts value and emits change', async () => {
    const { root, waitForChanges } = await render(
      <art-native-select value="b" aria-label="Pick">
        <option value="a">A</option>
        <option value="b">B</option>
      </art-native-select>,
    );
    await waitForChanges();
    const sel = root.shadowRoot!.querySelector('select')!;
    expect(sel.querySelectorAll('option').length).toBe(2);
    expect(sel.value).toBe('b');
    expect(sel.getAttribute('aria-label')).toBe('Pick');
    const spy = vi.fn();
    root.addEventListener('change', spy);
    sel.value = 'a';
    sel.dispatchEvent(ev(root, 'change'));
    expect((root as any).value).toBe('a');
    expect(spy.mock.calls[0]![0].detail).toEqual({ value: 'a' });
  });
});
