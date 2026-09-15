import { describe, expect, h, it, render } from '@stencil/vitest';
import { vi } from 'vitest';

describe('art-checkbox', () => {
  it('renders role=checkbox with aria-checked and toggles on click emitting change', async () => {
    const { root, waitForChanges } = await render(<art-checkbox aria-label="Accept"></art-checkbox>);
    const btn = root.shadowRoot!.querySelector('button')!;
    expect(btn.getAttribute('role')).toBe('checkbox');
    expect(btn.getAttribute('aria-checked')).toBe('false');
    expect(btn.getAttribute('aria-label')).toBe('Accept');
    const spy = vi.fn();
    root.addEventListener('change', spy);
    btn.click();
    await waitForChanges();
    expect((root as any).checked).toBe(true);
    expect(btn.getAttribute('aria-checked')).toBe('true');
    expect(spy.mock.calls[0]![0].detail).toEqual({ checked: true });
  });
  it('indeterminate renders mixed and resolves to checked on toggle', async () => {
    const { root, waitForChanges } = await render(<art-checkbox indeterminate></art-checkbox>);
    const btn = root.shadowRoot!.querySelector('button')!;
    expect(btn.getAttribute('aria-checked')).toBe('mixed');
    btn.click();
    await waitForChanges();
    expect((root as any).checked).toBe(true);
    expect((root as any).indeterminate).toBe(false);
  });
  it('disabled does not toggle; host click (from a label) toggles', async () => {
    const { root, waitForChanges } = await render(<art-checkbox disabled></art-checkbox>);
    root.shadowRoot!.querySelector('button')!.click();
    expect((root as any).checked).toBe(false);
    const { root: r2, waitForChanges: w2 } = await render(<art-checkbox></art-checkbox>);
    r2.click();
    await w2();
    expect((r2 as any).checked).toBe(true);
    await waitForChanges();
  });
});
