import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-hover-card', () => {
  it('renders trigger and card, and reflects open onto the card state', async () => {
    const { root, waitForChanges } = await render(
      <art-hover-card>
        <a slot="trigger" href="#">@nextjs</a>
        <p>Card</p>
      </art-hover-card>,
    );
    const card = root.shadowRoot!.querySelector('[part="content"]') as HTMLElement;
    expect(card.dataset.state).toBeUndefined();
    (root as any).open = true;
    await waitForChanges();
    expect(card.dataset.state).toBe('open');
  });
});
