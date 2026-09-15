import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-bubble', () => {
  it('renders the content surface, reflects variant and align, and hides an empty reactions pill', async () => {
    const { root, waitForChanges } = await render(<art-bubble variant="muted" align="end">Hi</art-bubble>);
    await waitForChanges();
    expect(root.getAttribute('variant')).toBe('muted');
    expect(root.getAttribute('align')).toBe('end');
    expect(root.shadowRoot!.querySelector('div[part="content"]')).not.toBeNull();
    expect(root.shadowRoot!.querySelector('[part="reactions"]')!.querySelector('slot')!.getAttribute('name')).toBe('reactions');
  });
  it('renders a link surface with href', async () => {
    const { root, waitForChanges } = await render(<art-bubble href="https://example.com" target="_blank">Go</art-bubble>);
    await waitForChanges();
    const a = root.shadowRoot!.querySelector('a[part="content"]')!;
    expect(a.getAttribute('href')).toBe('https://example.com');
    expect(a.getAttribute('target')).toBe('_blank');
  });
});
