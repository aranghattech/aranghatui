import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-aspect-ratio', () => {
  it('sets aspect-ratio from the prop and slots its content', async () => {
    const { root } = await render(<art-aspect-ratio ratio="16/9"><div>x</div></art-aspect-ratio>);
    expect(root.getAttribute('style')).toContain('aspect-ratio: 16/9');
    expect(root.shadowRoot!.querySelector('slot')).not.toBeNull();
  });
  it('defaults to a square', async () => {
    const { root } = await render(<art-aspect-ratio></art-aspect-ratio>);
    expect((root as any).ratio).toBe('1');
  });
});
