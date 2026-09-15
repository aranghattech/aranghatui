import { describe, expect, h, it, render } from '@stencil/vitest';

type Provider = HTMLElement & { setOpen(open: boolean): Promise<void> };

describe('art-sidebar', () => {
  it('renders a nav landmark with header / content / footer, list semantics and an inset main', async () => {
    const { root, waitForChanges } = await render(
      <art-sidebar-provider>
        <art-sidebar label="Main sidebar">
          <div slot="header">Header</div>
          <art-sidebar-group label="Platform">
            <art-sidebar-menu>
              <art-sidebar-menu-item>
                <art-sidebar-menu-button href="#" active><span>Home</span></art-sidebar-menu-button>
              </art-sidebar-menu-item>
            </art-sidebar-menu>
          </art-sidebar-group>
          <div slot="footer">Footer</div>
        </art-sidebar>
        <art-sidebar-inset>Page</art-sidebar-inset>
      </art-sidebar-provider>,
    );
    await waitForChanges();
    const sidebar = root.querySelector('art-sidebar')!;
    expect(sidebar.shadowRoot!.querySelector('nav')!.getAttribute('aria-label')).toBe('Main sidebar');
    expect(sidebar.getAttribute('data-state')).toBe('expanded');
    expect(sidebar.getAttribute('data-variant')).toBe('sidebar');
    expect(root.querySelector('art-sidebar-menu')!.shadowRoot!.querySelector('ul')!.getAttribute('role')).toBe('list');
    expect(root.querySelector('art-sidebar-menu-item')!.getAttribute('role')).toBe('listitem');
    expect(root.querySelector('art-sidebar-menu-button')!.shadowRoot!.querySelector('a')!.getAttribute('aria-current')).toBe('page');
    expect(root.querySelector('art-sidebar-group')!.shadowRoot!.querySelector('[part="label"]')!.textContent).toContain('Platform');
    expect(root.querySelector('art-sidebar-inset')!.shadowRoot!.querySelector('main')).not.toBeNull();
  });

  it('collapses from the provider and fans the icon mode out to buttons, groups and the inset', async () => {
    const { root, waitForChanges } = await render(
      <art-sidebar-provider>
        <art-sidebar collapsible="icon" variant="inset">
          <art-sidebar-group label="Platform">
            <art-sidebar-menu>
              <art-sidebar-menu-item>
                <art-sidebar-menu-button tooltip="Home"><span>Home</span></art-sidebar-menu-button>
              </art-sidebar-menu-item>
            </art-sidebar-menu>
          </art-sidebar-group>
        </art-sidebar>
        <art-sidebar-inset>Page</art-sidebar-inset>
      </art-sidebar-provider>,
    );
    await waitForChanges();
    const provider = root as Provider;
    let changes = 0;
    provider.addEventListener('open-change', () => (changes += 1));
    await provider.setOpen(false);
    await waitForChanges();
    const sidebar = root.querySelector('art-sidebar')!;
    expect(sidebar.getAttribute('data-state')).toBe('collapsed');
    expect(sidebar.getAttribute('data-collapsible')).toBe('icon');
    expect(root.querySelector('art-sidebar-menu-button')!.hasAttribute('data-icon')).toBe(true);
    expect(root.querySelector('art-sidebar-group')!.hasAttribute('data-icon')).toBe(true);
    expect(root.querySelector('art-sidebar-inset')!.getAttribute('data-variant')).toBe('inset');
    expect(root.querySelector('art-sidebar-inset')!.hasAttribute('data-collapsed')).toBe(true);
    expect(provider.hasAttribute('open')).toBe(false);
    expect(changes).toBe(1);
    await provider.setOpen(true);
    await waitForChanges();
    expect(sidebar.getAttribute('data-state')).toBe('expanded');
    expect(root.querySelector('art-sidebar-menu-button')!.hasAttribute('data-icon')).toBe(false);
  });

  it('an item with a nested list is a disclosure toggled by its button', async () => {
    const { root, waitForChanges } = await render(
      <art-sidebar-provider>
        <art-sidebar>
          <art-sidebar-menu>
            <art-sidebar-menu-item>
              <art-sidebar-menu-button><span>Docs</span></art-sidebar-menu-button>
              <art-sidebar-menu-sub>
                <art-sidebar-menu-item>
                  <art-sidebar-menu-button href="#"><span>Install</span></art-sidebar-menu-button>
                </art-sidebar-menu-item>
              </art-sidebar-menu-sub>
            </art-sidebar-menu-item>
          </art-sidebar-menu>
        </art-sidebar>
      </art-sidebar-provider>,
    );
    await waitForChanges();
    const item = root.querySelector('art-sidebar-menu-item')!;
    const sub = root.querySelector('art-sidebar-menu-sub') as HTMLElement;
    const button = root.querySelector('art-sidebar-menu-button')!.shadowRoot!.querySelector('button')!;
    expect(sub.hidden).toBe(true);
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(button.querySelector('[part="chevron"]')).not.toBeNull();
    let open: boolean | undefined;
    item.addEventListener('open-change', (e) => (open = (e as CustomEvent<{ open: boolean }>).detail.open));
    button.click();
    await waitForChanges();
    expect(item.hasAttribute('open')).toBe(true);
    expect(open).toBe(true);
    expect(sub.hidden).toBe(false);
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(root.querySelector('art-sidebar-menu-sub art-sidebar-menu-button')!.hasAttribute('data-sub')).toBe(true);
  });

  it('the trigger toggles the provider and reports the state', async () => {
    const { root, waitForChanges } = await render(
      <art-sidebar-provider>
        <art-sidebar></art-sidebar>
        <art-sidebar-inset><art-sidebar-trigger></art-sidebar-trigger></art-sidebar-inset>
      </art-sidebar-provider>,
    );
    await waitForChanges();
    const button = root.querySelector('art-sidebar-trigger')!.shadowRoot!.querySelector('button')!;
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(button.getAttribute('aria-label')).toBe('Toggle sidebar');
    button.click();
    await waitForChanges();
    expect(root.hasAttribute('open')).toBe(false);
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(root.querySelector('art-sidebar')!.getAttribute('data-state')).toBe('collapsed');
  });
});
