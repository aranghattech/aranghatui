import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-nav-rail', () => {
  it('renders two named landmarks and the collapse toggle', async () => {
    const { root } = await render(
      <art-nav-rail label="Portfolio" rail-label="Workspaces">
        <art-nav-section label="Portfolio">
          <art-nav-link href="#a">Dashboard</art-nav-link>
        </art-nav-section>
      </art-nav-rail>,
    );
    const navs = Array.from(root.shadowRoot!.querySelectorAll('nav'));
    expect(navs.map((n) => n.getAttribute('aria-label'))).toEqual(['Workspaces', 'Portfolio']);
    const toggle = root.shadowRoot!.querySelector('[part="toggle"]')!;
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(toggle.getAttribute('aria-label')).toBe('Toggle the navigation panel');
  });

  it('the toggle flips collapsed and reports it', async () => {
    const { root, waitForChanges } = await render(<art-nav-rail />);
    const events: boolean[] = [];
    root.addEventListener('collapsed-change', (e) => events.push((e as CustomEvent<{ collapsed: boolean }>).detail.collapsed));
    (root.shadowRoot!.querySelector('[part="toggle"]') as HTMLButtonElement).click();
    await waitForChanges();
    expect((root as HTMLElement & { collapsed: boolean }).collapsed).toBe(true);
    expect(root.getAttribute('aria-expanded')).toBeNull(); // the state lives on the toggle, not the host
    expect(root.shadowRoot!.querySelector('[part="toggle"]')!.getAttribute('aria-expanded')).toBe('false');
    expect(events).toEqual([true]);
  });

  it('hide-toggle removes the button', async () => {
    const { root } = await render(<art-nav-rail hide-toggle />);
    expect(root.shadowRoot!.querySelector('[part="toggle"]')).toBeNull();
  });
});

describe('art-nav-section', () => {
  it('labels a list of links and drops the label when collapsed', async () => {
    const { root } = await render(
      <art-nav-section label="Operations">
        <art-nav-link href="#a">Reporting</art-nav-link>
      </art-nav-section>,
    );
    expect(root.shadowRoot!.querySelector('[part="label"]')!.textContent).toBe('Operations');
    expect(root.shadowRoot!.querySelector('[part="list"]')!.getAttribute('role')).toBe('list');
    const { root: bare } = await render(<art-nav-section />);
    expect(bare.shadowRoot!.querySelector('[part="label"]')).toBeNull();
  });
});

describe('art-nav-link', () => {
  it('renders an anchor with href, a button without, and marks the current page', async () => {
    const { root } = await render(<art-nav-link href="/reports" active>Reports</art-nav-link>);
    const a = root.shadowRoot!.querySelector('a')!;
    expect(a.getAttribute('href')).toBe('/reports');
    expect(a.getAttribute('aria-current')).toBe('page');
    expect(root.getAttribute('role')).toBe('listitem');

    const { root: plain } = await render(<art-nav-link>Forecast</art-nav-link>);
    expect(plain.shadowRoot!.querySelector('button')).not.toBeNull();
    expect(plain.shadowRoot!.querySelector('a')).toBeNull();
  });

  it('a disabled link is a button that says why, never a link', async () => {
    const { root } = await render(<art-nav-link href="/soon" disabled badge="Soon">Forecast</art-nav-link>);
    const button = root.shadowRoot!.querySelector('button')!;
    expect(button.disabled).toBe(true);
    expect(root.shadowRoot!.querySelector('a')).toBeNull();
    expect(root.shadowRoot!.querySelector('[part="badge"]')!.textContent).toBe('Soon');
  });
});

describe('art-nav-rail-item', () => {
  it('carries its label as the accessible name and repeats it in the tooltip', async () => {
    const { root } = await render(<art-nav-rail-item label="Inbox" href="/inbox" active />);
    const a = root.shadowRoot!.querySelector('a')!;
    expect(a.getAttribute('aria-label')).toBe('Inbox');
    expect(a.getAttribute('aria-current')).toBe('page');
    expect(root.shadowRoot!.querySelector('[part="tooltip"]')!.textContent).toBe('Inbox');
    expect(root.shadowRoot!.querySelector('[part="tooltip"]')!.getAttribute('role')).toBe('tooltip');
  });
});
