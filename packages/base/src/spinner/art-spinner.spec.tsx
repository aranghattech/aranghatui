import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-spinner', () => {
  it('is a status region with a label and a spinning svg on the icon scale', async () => {
    const { root } = await render(<art-spinner size="lg" label="Saving"></art-spinner>);
    expect(root.getAttribute('role')).toBe('status');
    expect(root.getAttribute('aria-label')).toBe('Saving');
    const svg = root.shadowRoot!.querySelector('svg')!;
    expect(svg.getAttribute('class')).toContain('icon-lg');
    expect(svg.getAttribute('class')).toContain('animate-spin');
  });
});
