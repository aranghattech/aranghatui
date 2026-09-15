import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-item', () => {
  it('renders the slots in order and marks a description for media alignment', async () => {
    const { root } = await render(
      <art-item variant="outline">
        <span slot="media">m</span>
        <p slot="title">T</p>
        <p slot="description">D</p>
        <button slot="actions">a</button>
      </art-item>,
    );
    const names = Array.from(root.shadowRoot!.querySelectorAll('slot')).map((s) => s.getAttribute('name'));
    expect(names).toEqual(['header', 'media', 'title', 'description', 'actions', 'footer']);
    expect(root.hasAttribute('data-description')).toBe(true);
    expect(root.shadowRoot!.querySelector('[part="item"]')!.tagName).toBe('DIV');
  });
  it('href renders a link; items in a group are list items', async () => {
    const { root } = await render(
      <art-item-group>
        <art-item href="/x"><p slot="title">T</p></art-item>
      </art-item-group>,
    );
    expect(root.getAttribute('role')).toBe('list');
    const item = root.querySelector('art-item')!;
    expect(item.getAttribute('role')).toBe('listitem');
    expect(item.shadowRoot!.querySelector('a[part="item"]')!.getAttribute('href')).toBe('/x');
  });
});
