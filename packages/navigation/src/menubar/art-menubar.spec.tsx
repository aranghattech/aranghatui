import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-menubar', () => {
  it('renders a menubar with menuitem triggers, one in the tab order', async () => {
    const { root, waitForChanges } = await render(
      <art-menubar aria-label="App">
        <art-menubar-menu label="File"><art-menu-item value="a">A</art-menu-item></art-menubar-menu>
        <art-menubar-menu label="Edit"><art-menu-item value="b">B</art-menu-item></art-menubar-menu>
      </art-menubar>,
    );
    await waitForChanges();
    expect(root.getAttribute('role')).toBe('menubar');
    const triggers = Array.from(root.querySelectorAll('art-menubar-menu')).map((m) => m.shadowRoot!.querySelector('[part="trigger"]')!);
    expect(triggers.map((t) => t.textContent)).toEqual(['File', 'Edit']);
    expect(triggers.map((t) => t.getAttribute('role'))).toEqual(['menuitem', 'menuitem']);
    expect(triggers.map((t) => t.getAttribute('aria-haspopup'))).toEqual(['menu', 'menu']);
    expect(triggers.filter((t) => t.getAttribute('tabindex') === '0').length).toBe(1);
  });
});
