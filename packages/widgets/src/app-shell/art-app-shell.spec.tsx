import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-app-shell', () => {
  it('composes provider, sidebar, inset and trigger; slotted groups find the sidebar through the flat tree', async () => {
    const { root, waitForChanges } = await render(
      <art-app-shell collapsible="icon">
        <art-sidebar-group slot="sidebar" label="Platform">
          <art-sidebar-menu>
            <art-sidebar-menu-item>
              <art-sidebar-menu-button tooltip="Home"><span>Home</span></art-sidebar-menu-button>
            </art-sidebar-menu-item>
          </art-sidebar-menu>
        </art-sidebar-group>
        <span slot="header">Title</span>
        <p>Page</p>
      </art-app-shell>,
    );
    await waitForChanges();
    const sr = root.shadowRoot!;
    const provider = sr.querySelector('art-sidebar-provider') as HTMLElement & { setOpen(o: boolean): Promise<void> };
    expect(provider).not.toBeNull();
    expect(sr.querySelector('art-sidebar')!.getAttribute('collapsible')).toBe('icon');
    expect(sr.querySelector('art-sidebar-inset')!.shadowRoot!.querySelector('main')).not.toBeNull();
    expect(sr.querySelector('art-sidebar-trigger')).not.toBeNull();
    expect(root.querySelector('art-sidebar-group')!.hasAttribute('data-icon')).toBe(false);
    let opens: boolean[] = [];
    root.addEventListener('open-change', (e) => opens.push((e as CustomEvent<{ open: boolean }>).detail.open));
    await provider.setOpen(false);
    await waitForChanges();
    expect(root.hasAttribute('open')).toBe(false);
    expect(opens).toEqual([false]);
    expect(sr.querySelector('art-sidebar')!.getAttribute('data-collapsible')).toBe('icon');
    // the slotted family's icon mode (flat-tree binding through the widget's slots) is asserted in the e2e: jsdom does not flatten nested slot assignment
  });
});
