import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-scroll-area', () => {
  it('renders a focusable viewport around the slot and reflects orientation', async () => {
    const { root } = await render(<art-scroll-area orientation="horizontal"><p>x</p></art-scroll-area>);
    const vp = root.shadowRoot!.querySelector('[part="viewport"]')!;
    expect(vp.getAttribute('tabindex')).toBe('0');
    expect(vp.querySelector('slot')).not.toBeNull();
    expect(root).toHaveAttribute('orientation');
  });
});
