import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-navigation-menu', () => {
  it('renders a labelled nav with trigger and link entries', async () => {
    const { root, waitForChanges } = await render(
      <art-navigation-menu label="Main">
        <art-navigation-menu-item label="Products"><a href="#a">A</a></art-navigation-menu-item>
        <art-navigation-menu-item label="Docs" href="#docs" active />
      </art-navigation-menu>,
    );
    await waitForChanges();
    expect(root.shadowRoot!.querySelector('nav')!.getAttribute('aria-label')).toBe('Main');
    const [t, l] = Array.from(root.querySelectorAll('art-navigation-menu-item'));
    expect(t!.shadowRoot!.querySelector('button[part="trigger"]')!.getAttribute('aria-expanded')).toBe('false');
    expect(t!.shadowRoot!.querySelector('[part="content"]')).not.toBeNull();
    const a = l!.shadowRoot!.querySelector('a[part="trigger"]')!;
    expect(a.getAttribute('href')).toBe('#docs');
    expect(a.getAttribute('aria-current')).toBe('page');
  });
});
