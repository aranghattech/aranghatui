import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-separator', () => {
  it('renders a decorative <hr> by default', async () => {
    const { root } = await render(<art-separator></art-separator>);
    const hr = root.shadowRoot!.querySelector('hr')!;
    expect(hr.getAttribute('role')).toBe('none');
    expect(hr.hasAttribute('aria-orientation')).toBe(false);
    expect(root).toHaveAttribute('orientation');
  });

  it('semantic vertical exposes the separator role with aria-orientation', async () => {
    const { root } = await render(<art-separator orientation="vertical" semantic></art-separator>);
    const hr = root.shadowRoot!.querySelector('hr')!;
    expect(hr.hasAttribute('role')).toBe(false);
    expect(hr.getAttribute('aria-orientation')).toBe('vertical');
  });
});
