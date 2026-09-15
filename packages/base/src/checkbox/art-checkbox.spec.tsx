import { describe, expect, h, it, render } from '@stencil/vitest';
import { vi } from 'vitest';

describe('art-checkbox', () => {
  it('renders a native checkbox, toggles on click and emits change', async () => {
    const { root, waitForChanges } = await render(<art-checkbox aria-label="Accept"></art-checkbox>);
    const input = root.shadowRoot!.querySelector('input')!;
    expect(input.type).toBe('checkbox');
    expect(input.getAttribute('aria-label')).toBe('Accept');
    const spy = vi.fn();
    root.addEventListener('change', spy);
    input.click();
    await waitForChanges();
    expect((root as any).checked).toBe(true);
    expect(input.checked).toBe(true);
    expect(root).toHaveAttribute('checked');
    expect(spy.mock.calls[0]![0].detail).toEqual({ checked: true });
  });
  it('indeterminate is set on the native input and resolves to checked on toggle', async () => {
    const { root, waitForChanges } = await render(<art-checkbox indeterminate></art-checkbox>);
    const input = root.shadowRoot!.querySelector('input')!;
    expect(input.indeterminate).toBe(true);
    input.click();
    await waitForChanges();
    expect((root as any).checked).toBe(true);
    expect((root as any).indeterminate).toBe(false);
    expect(input.indeterminate).toBe(false);
  });
  it('disabled does not toggle; host click (from a label) forwards to the input', async () => {
    const { root } = await render(<art-checkbox disabled></art-checkbox>);
    root.shadowRoot!.querySelector('input')!.click();
    expect((root as any).checked).toBe(false);
    const { root: r2, waitForChanges: w2 } = await render(<art-checkbox></art-checkbox>);
    r2.click();
    await w2();
    expect((r2 as any).checked).toBe(true);
  });
});
