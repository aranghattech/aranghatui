import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-badge', () => {
  it('renders a span with the variant classes and reflects variant', async () => {
    const { root } = await render(<art-badge variant="secondary">New</art-badge>);
    const el = root.shadowRoot!.querySelector('[part="badge"]')!;
    expect(el.tagName).toBe('SPAN');
    expect(el.className).toContain('bg-secondary');
    expect(root).toHaveAttribute('variant');
  });

  it('href renders an anchor with the focus ring', async () => {
    const { root } = await render(<art-badge href="/x" target="_blank" rel="noopener">Go</art-badge>);
    const a = root.shadowRoot!.querySelector('a')!;
    expect(a.getAttribute('href')).toBe('/x');
    expect(a.getAttribute('target')).toBe('_blank');
    expect(a.className).toContain('focus-ring');
  });
});
