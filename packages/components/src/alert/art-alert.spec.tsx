import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-alert', () => {
  it('is a role=alert host with icon, title and description slots and reflects variant', async () => {
    const { root } = await render(
      <art-alert variant="destructive">
        <span slot="icon">!</span>
        <h5 slot="title">T</h5>
        <p slot="description">D</p>
      </art-alert>,
    );
    expect(root.getAttribute('role')).toBe('alert');
    expect(root).toHaveAttribute('variant');
    expect(Array.from(root.shadowRoot!.querySelectorAll('slot')).map((s) => s.getAttribute('name'))).toEqual(['icon', 'title', 'description']);
    expect(root.shadowRoot!.querySelector('[part="alert"]')!.className).toContain('text-destructive-fg');
  });
});
