import { describe, expect, h, it, render } from '@stencil/vitest';
import { vi } from 'vitest';

describe('art-switch', () => {
  it('renders a native checkbox with role=switch and toggles emitting change', async () => {
    const { root, waitForChanges } = await render(<art-switch aria-label="Wi-Fi"></art-switch>);
    const input = root.shadowRoot!.querySelector('input')!;
    expect(input.getAttribute('role')).toBe('switch');
    expect(input.checked).toBe(false);
    const spy = vi.fn();
    root.addEventListener('change', spy);
    input.click();
    await waitForChanges();
    expect(input.checked).toBe(true);
    expect((root as any).checked).toBe(true);
    expect(input.className).toContain('checked:bg-primary');
    expect(spy.mock.calls[0]![0].detail).toEqual({ checked: true });
  });
});
