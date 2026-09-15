import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-collapsible', () => {
  it('renders a native details/summary and mirrors open', async () => {
    const { root, waitForChanges } = await render(
      <art-collapsible>
        <span slot="trigger">More</span>
        <p>Body</p>
      </art-collapsible>,
    );
    const details = root.shadowRoot!.querySelector('details')!;
    expect(details.open).toBe(false);
    (root as any).open = true;
    await waitForChanges();
    expect(details.open).toBe(true);
    expect(root.shadowRoot!.querySelector('summary slot')!.getAttribute('name')).toBe('trigger');
  });
});
