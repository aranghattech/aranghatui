import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-tooltip', () => {
  it('renders the trigger slot, a role=tooltip bubble and describes the trigger', async () => {
    const { root } = await render(
      <art-tooltip>
        <button slot="trigger">Hover</button>
        Add to library
      </art-tooltip>,
    );
    const bubble = root.shadowRoot!.querySelector('[part="content"]')!;
    expect(bubble.getAttribute('role')).toBe('tooltip');
    expect(root.querySelector('button')!.getAttribute('aria-description')).toBe('Add to library');
    expect(root.shadowRoot!.querySelector('[part="arrow"]')).not.toBeNull();
  });

  it('open marks the bubble open; closing marks it closed', async () => {
    const { root, waitForChanges } = await render(
      <art-tooltip open>
        <button slot="trigger">Hover</button>
        Text
      </art-tooltip>,
    );
    const bubble = root.shadowRoot!.querySelector('[part="content"]') as HTMLElement;
    expect(bubble.dataset.state).toBe('open');
    (root as any).open = false;
    await waitForChanges();
    await new Promise((r) => setTimeout(r)); // no exit animation in jsdom: the panel hides right away
    expect(bubble.dataset.state).toBeUndefined();
  });
});
