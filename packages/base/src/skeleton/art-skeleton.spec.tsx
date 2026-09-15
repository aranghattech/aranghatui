import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-skeleton', () => {
  it('renders an aria-hidden pulsing box', async () => {
    const { root } = await render(<art-skeleton></art-skeleton>);
    expect(root.getAttribute('aria-hidden')).toBe('true');
    expect(root.shadowRoot!.querySelector('[part="skeleton"]')!.className).toContain('animate-pulse');
  });
});
