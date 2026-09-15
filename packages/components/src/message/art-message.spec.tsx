import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-message', () => {
  it('mirrors slotted parts as data attributes and reflects align', async () => {
    const { root, waitForChanges } = await render(
      <art-message align="end">
        <art-avatar slot="avatar">A</art-avatar>
        <art-bubble variant="ghost">Hi</art-bubble>
        <span slot="footer">Sent</span>
      </art-message>,
    );
    await waitForChanges();
    expect(root.getAttribute('align')).toBe('end');
    expect(root.hasAttribute('data-has-avatar')).toBe(true);
    expect(root.hasAttribute('data-has-footer')).toBe(true);
    expect(root.hasAttribute('data-ghost')).toBe(true);
  });
  it('a bare bubble message has no avatar or footer flags', async () => {
    const { root, waitForChanges } = await render(<art-message><art-bubble>Hi</art-bubble></art-message>);
    await waitForChanges();
    expect(root.hasAttribute('data-has-avatar')).toBe(false);
    expect(root.hasAttribute('data-has-footer')).toBe(false);
  });
});
