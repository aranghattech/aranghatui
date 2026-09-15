import { describe, expect, h, it, render } from '@stencil/vitest';
import { vi } from 'vitest';

describe('art-switch', () => {
  it('renders role=switch and toggles emitting change', async () => {
    const { root, waitForChanges } = await render(<art-switch aria-label="Wi-Fi"></art-switch>);
    const btn = root.shadowRoot!.querySelector('button')!;
    expect(btn.getAttribute('role')).toBe('switch');
    expect(btn.getAttribute('aria-checked')).toBe('false');
    const spy = vi.fn();
    root.addEventListener('change', spy);
    btn.click();
    await waitForChanges();
    expect(btn.getAttribute('aria-checked')).toBe('true');
    expect(spy.mock.calls[0]![0].detail).toEqual({ checked: true });
    expect(root.shadowRoot!.querySelector('[part="thumb"]')!.className).toContain('translate-x-4');
  });
});
