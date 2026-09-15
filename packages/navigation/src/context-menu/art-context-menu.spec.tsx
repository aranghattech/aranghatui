import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-context-menu', () => {
  it('renders the area and a hidden menu panel with the slotted items', async () => {
    const { root, waitForChanges } = await render(
      <art-context-menu>
        <div>Area</div>
        <art-menu-item slot="menu" value="a">A</art-menu-item>
      </art-context-menu>,
    );
    await waitForChanges();
    const panel = root.shadowRoot!.querySelector('[part="content"]')!;
    expect(panel.getAttribute('role')).toBe('menu');
    expect(panel.getAttribute('aria-label')).toBe('Context menu');
    expect(root.getAttribute('open')).toBeNull();
    expect(root.querySelector('art-menu-item')!.getAttribute('role')).toBe('menuitem');
  });
});
