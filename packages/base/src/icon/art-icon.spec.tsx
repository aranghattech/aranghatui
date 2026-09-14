import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-icon', () => {
  it('is decorative without a label and renders paths from icon data', async () => {
    const { root, waitForChanges } = await render(<art-icon></art-icon>);
    (root as any).icon = { name: 'check', children: [['path', { d: 'M20 6 9 17l-5-5' }]] };
    await waitForChanges();
    expect(root).toHaveAttribute('aria-hidden', 'true');
    expect(root.shadowRoot!.querySelector('svg path')!.getAttribute('d')).toBe('M20 6 9 17l-5-5');
  });
  it('exposes role=img with a label', async () => {
    const { root } = await render(<art-icon label="Done"></art-icon>);
    expect(root).toHaveAttribute('role', 'img');
    expect(root).toHaveAttribute('aria-label', 'Done');
  });
});
