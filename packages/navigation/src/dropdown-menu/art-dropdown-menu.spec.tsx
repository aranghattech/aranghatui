import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-dropdown-menu', () => {
  it('wires the trigger and renders a menu with typed items', async () => {
    const { root, waitForChanges } = await render(
      <art-dropdown-menu>
        <button slot="trigger">Open</button>
        <art-dropdown-menu-label>Group</art-dropdown-menu-label>
        <art-dropdown-menu-item value="a">A</art-dropdown-menu-item>
        <art-dropdown-menu-item type="checkbox" value="b" checked>B</art-dropdown-menu-item>
        <art-dropdown-menu-separator />
        <art-dropdown-menu-item href="#c">C</art-dropdown-menu-item>
      </art-dropdown-menu>,
    );
    await waitForChanges();
    const t = root.querySelector('button')!;
    expect(t.getAttribute('aria-haspopup')).toBe('menu');
    expect(t.getAttribute('aria-expanded')).toBe('false');
    expect(root.shadowRoot!.querySelector('[part="content"]')!.getAttribute('role')).toBe('menu');
    const items = Array.from(root.querySelectorAll('art-dropdown-menu-item'));
    expect(items.map((i) => i.getAttribute('role'))).toEqual(['menuitem', 'menuitemcheckbox', 'menuitem']);
    expect(items[1]!.getAttribute('aria-checked')).toBe('true');
    expect(items[2]!.shadowRoot!.querySelector('a[part="item"]')!.getAttribute('href')).toBe('#c');
    expect(root.querySelector('art-dropdown-menu-separator')!.getAttribute('role')).toBe('separator');
  });
});
