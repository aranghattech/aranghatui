import { describe, expect, h, it, render } from '@stencil/vitest';
import { vi } from 'vitest';

describe('art-textarea', () => {
  it('renders a native textarea with size padding and value', async () => {
    const { root } = await render(<art-textarea size="lg" value="hi"></art-textarea>);
    const ta = root.shadowRoot!.querySelector('textarea')!;
    expect(ta.className).toContain('textarea-lg');
    expect(ta.value).toBe('hi');
  });
  it('emits input/change from the host with detail.value', async () => {
    const { root } = await render(<art-textarea></art-textarea>);
    const ta = root.shadowRoot!.querySelector('textarea')!;
    const spy = vi.fn();
    root.addEventListener('input', spy);
    ta.value = 'x';
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    expect(spy.mock.calls[0]![0].detail).toEqual({ value: 'x' });
    expect((root as any).value).toBe('x');
  });
  it('invalid + disabled', async () => {
    const { root } = await render(<art-textarea invalid disabled></art-textarea>);
    const ta = root.shadowRoot!.querySelector('textarea')!;
    expect(ta.getAttribute('aria-invalid')).toBe('true');
    expect(ta.hasAttribute('disabled')).toBe(true);
  });
});
