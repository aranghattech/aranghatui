import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-marker', () => {
  it('renders icon slot and content, reflects variant', async () => {
    const { root } = await render(<art-marker variant="separator">Today</art-marker>);
    expect(root).toHaveAttribute('variant');
    const sr = root.shadowRoot!;
    expect(sr.querySelector('slot[name="icon"]')).not.toBeNull();
    expect(sr.querySelector('[part="content"] slot')).not.toBeNull();
    expect(sr.querySelector('[part="marker"]')!.tagName).toBe('DIV');
  });
  it('href renders a link', async () => {
    const { root } = await render(<art-marker href="/r">Report</art-marker>);
    expect(root.shadowRoot!.querySelector('a[part="marker"]')!.getAttribute('href')).toBe('/r');
  });
});
