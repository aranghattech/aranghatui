import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-popover', () => {
  it('marks the trigger with haspopup / expanded and renders a dialog panel', async () => {
    const { root, waitForChanges } = await render(
      <art-popover>
        <button slot="trigger">Open</button>
        <p>Content</p>
      </art-popover>,
    );
    const trigger = root.querySelector('button')!;
    expect(trigger.getAttribute('aria-haspopup')).toBe('dialog');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    const panel = root.shadowRoot!.querySelector('[part="content"]') as HTMLElement;
    expect(panel.getAttribute('role')).toBe('dialog');
    (root as any).open = true;
    await waitForChanges();
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    expect(panel.dataset.state).toBe('open');
  });
});
