import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-message-scroller', () => {
  it('renders the region / log structure and an inert hidden button when at the end', async () => {
    const { root, waitForChanges } = await render(
      <art-message-scroller label="Chat">
        <art-message-scroller-item message-id="a" scroll-anchor>one</art-message-scroller-item>
        <art-message-scroller-item message-id="b">two</art-message-scroller-item>
      </art-message-scroller>,
    );
    await waitForChanges();
    const vp = root.shadowRoot!.querySelector('[part="viewport"]')!;
    expect(vp.getAttribute('role')).toBe('region');
    expect(vp.getAttribute('aria-label')).toBe('Chat');
    expect(vp.getAttribute('tabindex')).toBe('0');
    expect(vp.hasAttribute('data-pending-scroll')).toBe(false);
    expect(root.shadowRoot!.querySelector('[part="content"]')!.getAttribute('role')).toBe('log');
    const btn = root.shadowRoot!.querySelector('[part="button"]')!;
    expect(btn.getAttribute('data-active')).toBe('false');
    expect(btn.getAttribute('tabindex')).toBe('-1');
    expect(root.querySelector('art-message-scroller-item')!.getAttribute('scroll-anchor')).not.toBeNull();
  });
});
