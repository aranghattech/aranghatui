import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-breadcrumb', () => {
  it('renders a labelled nav with list items, separators except after the last, and aria-current on the page', async () => {
    const { root, waitForChanges } = await render(
      <art-breadcrumb>
        <art-breadcrumb-item><a href="#">Home</a></art-breadcrumb-item>
        <art-breadcrumb-item current>Here</art-breadcrumb-item>
      </art-breadcrumb>,
    );
    await waitForChanges();
    expect(root.shadowRoot!.querySelector('nav')!.getAttribute('aria-label')).toBe('breadcrumb');
    const items = Array.from(root.querySelectorAll('art-breadcrumb-item'));
    expect(items.map((i) => i.getAttribute('role'))).toEqual(['listitem', 'listitem']);
    expect(items[0]!.hasAttribute('data-last')).toBe(false);
    expect(items[1]!.hasAttribute('data-last')).toBe(true);
    expect(items[1]!.shadowRoot!.querySelector('[aria-current="page"]')!.textContent).toBe('');
    expect(items[1]!.shadowRoot!.querySelector('[aria-current="page"] slot')).not.toBeNull();
  });
});
