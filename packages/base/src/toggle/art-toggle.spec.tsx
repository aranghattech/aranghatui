import { describe, expect, h, it, render } from '@stencil/vitest';
import { vi } from 'vitest';

describe('art-toggle', () => {
  it('toggles aria-pressed on click and emits change', async () => {
    const { root, waitForChanges } = await render(<art-toggle aria-label="Bold">B</art-toggle>);
    const btn = root.shadowRoot!.querySelector('button')!;
    expect(btn.getAttribute('aria-pressed')).toBe('false');
    expect(btn.getAttribute('aria-label')).toBe('Bold');
    const spy = vi.fn();
    root.addEventListener('change', spy);
    btn.click();
    await waitForChanges();
    expect(btn.getAttribute('aria-pressed')).toBe('true');
    expect(btn.className).toContain('bg-accent');
    expect(spy.mock.calls[0]![0].detail).toEqual({ pressed: true });
  });
  it('outline variant and sizes', async () => {
    const { root } = await render(<art-toggle variant="outline" size="lg" icon></art-toggle>);
    const btn = root.shadowRoot!.querySelector('button')!;
    expect(btn.className).toContain('border-default');
    expect(btn.className).toContain('control-icon-lg');
  });
});
