import { describe, expect, h, it, render } from '@stencil/vitest';

type Item = HTMLElement & { open: boolean; layout: string; maxColumns?: number; maxRows?: number; fullWidth: boolean };

const groups = (n: number) =>
  Array.from({ length: n }, (_, i) => (
    <art-mega-menu-group label={`Group ${i + 1}`}>
      <art-mega-menu-link href={`#g${i}`}>Link</art-mega-menu-link>
    </art-mega-menu-group>
  ));
/** The grid the item computed: columns, rows and fill order. */
const grid = (item: Element) => {
  const el = item.shadowRoot!.querySelector<HTMLElement>('[part="groups"]')!;
  return { cols: el.style.getPropertyValue('--_cols'), rows: el.style.getPropertyValue('--_rows'), flow: el.getAttribute('data-flow') };
};

describe('art-mega-menu', () => {
  it('renders a labelled nav with trigger and link entries', async () => {
    const { root, waitForChanges } = await render(
      <art-mega-menu label="Main">
        <art-mega-menu-item label="Platform">{groups(1)}</art-mega-menu-item>
        <art-mega-menu-item label="Pricing" href="#pricing" active />
      </art-mega-menu>,
    );
    await waitForChanges();
    expect(root.shadowRoot!.querySelector('nav')!.getAttribute('aria-label')).toBe('Main');
    const [trigger, link] = Array.from(root.querySelectorAll('art-mega-menu-item'));
    expect(trigger!.getAttribute('role')).toBe('listitem');
    const button = trigger!.shadowRoot!.querySelector('button[part="trigger"]')!;
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(button.getAttribute('aria-controls')).toBe(trigger!.shadowRoot!.querySelector('[part="content"]')!.id);
    const a = link!.shadowRoot!.querySelector('a[part="trigger"]')!;
    expect(a.getAttribute('href')).toBe('#pricing');
    expect(a.getAttribute('aria-current')).toBe('page');
    expect(link!.shadowRoot!.querySelector('[part="content"]')).toBeNull();
  });

  it('columns: every group side by side, or max-columns per line filled left to right', async () => {
    const { root, waitForChanges } = await render(<art-mega-menu-item label="Products">{groups(5)}</art-mega-menu-item>);
    await waitForChanges();
    expect(grid(root)).toEqual({ cols: '5', rows: '1', flow: 'row' });
    (root as Item).maxColumns = 3;
    await waitForChanges();
    expect(grid(root)).toEqual({ cols: '3', rows: '2', flow: 'row' });
    (root as Item).maxColumns = 9; // a cap above the group count changes nothing
    await waitForChanges();
    expect(grid(root)).toEqual({ cols: '5', rows: '1', flow: 'row' });
  });

  it('rows: every group stacked, or max-rows per column filled top to bottom', async () => {
    const { root, waitForChanges } = await render(<art-mega-menu-item label="Products" layout="rows">{groups(5)}</art-mega-menu-item>);
    await waitForChanges();
    expect(grid(root)).toEqual({ cols: '1', rows: '5', flow: 'column' });
    (root as Item).maxRows = 2;
    await waitForChanges();
    expect(grid(root)).toEqual({ cols: '3', rows: '2', flow: 'column' });
  });

  it('the group count follows the slot', async () => {
    const { root, waitForChanges } = await render(<art-mega-menu-item label="Products">{groups(2)}</art-mega-menu-item>);
    await waitForChanges();
    expect(grid(root).cols).toBe('2');
    const extra = document.createElement('art-mega-menu-group');
    root.appendChild(extra);
    await new Promise((r) => setTimeout(r));
    await waitForChanges();
    expect(grid(root).cols).toBe('3');
  });

  it('counts a slot set after the item connects, before its first render (React sets `slot` in a layout effect)', async () => {
    const item = document.createElement('art-mega-menu-item') as Item;
    item.setAttribute('label', 'Products');
    item.setAttribute('layout', 'rows');
    item.setAttribute('max-rows', '2');
    for (const label of ['A', 'B', 'C', 'D']) item.append(Object.assign(document.createElement('art-mega-menu-group'), { label }));
    const promo = Object.assign(document.createElement('div'), { textContent: 'Promo' });
    item.append(promo);
    document.body.append(item);
    promo.slot = 'aside'; // connected, not rendered yet
    await new Promise((r) => setTimeout(r, 50));
    expect(grid(item)).toEqual({ cols: '2', rows: '2', flow: 'column' });
    expect((item.shadowRoot!.querySelector('[part="aside"]') as HTMLElement).hidden).toBe(false);
    item.remove();
  });

  it('full-width and full-width-content come from the item or from the bar', async () => {
    const { root, waitForChanges } = await render(
      <art-mega-menu>
        <art-mega-menu-item label="A">{groups(1)}</art-mega-menu-item>
        <art-mega-menu-item label="B" full-width>{groups(1)}</art-mega-menu-item>
      </art-mega-menu>,
    );
    await waitForChanges();
    const [a, b] = Array.from(root.querySelectorAll('art-mega-menu-item'));
    const panel = (i: Element) => i.shadowRoot!.querySelector('[part="content"]')!;
    const inner = (i: Element) => i.shadowRoot!.querySelector('[part="inner"]')!;
    expect(panel(a!).hasAttribute('data-full')).toBe(false);
    expect(panel(b!).hasAttribute('data-full')).toBe(true);
    expect(inner(b!).hasAttribute('data-contained')).toBe(true); // full panel, content in the container

    (root as HTMLElement & { fullWidth: boolean; fullWidthContent: boolean }).fullWidth = true;
    await waitForChanges();
    expect(panel(a!).hasAttribute('data-full')).toBe(true);
    (root as HTMLElement & { fullWidthContent: boolean }).fullWidthContent = true;
    await waitForChanges();
    expect(inner(a!).hasAttribute('data-contained')).toBe(false);
    expect(inner(b!).hasAttribute('data-contained')).toBe(false);
  });

  it('a trigger slot replaces the label, which then names the control; hide-chevron drops the chevron', async () => {
    const { root, waitForChanges } = await render(
      <art-mega-menu>
        <art-mega-menu-item label="Menu" hide-chevron>
          <svg slot="trigger" />
          {groups(1)}
        </art-mega-menu-item>
        <art-mega-menu-item label="Acme">
          <svg slot="trigger" />
          <span slot="trigger">Acme</span>
          {groups(1)}
        </art-mega-menu-item>
        <art-mega-menu-item label="Home" href="/">
          <svg slot="trigger" />
        </art-mega-menu-item>
        <art-mega-menu-item label="Plain">{groups(2)}</art-mega-menu-item>
      </art-mega-menu>,
    );
    await waitForChanges();
    const [burger, logo, home, plain] = Array.from(root.querySelectorAll('art-mega-menu-item'));
    const control = (i: Element) => i.shadowRoot!.querySelector('[part="trigger"]')!;
    // icon only: a square control named by `label`, no chevron with hide-chevron
    expect(control(burger!).getAttribute('aria-label')).toBe('Menu');
    expect(control(burger!).hasAttribute('data-icon')).toBe(true);
    expect(burger!.shadowRoot!.querySelector('[part="chevron"]')).toBeNull();
    expect(grid(burger!).cols).toBe('1'); // trigger content is not a group
    // a logo and a name: not icon-only, and the chevron stays
    expect(control(logo!).hasAttribute('data-icon')).toBe(false);
    expect(logo!.shadowRoot!.querySelector('[part="chevron"]')).not.toBeNull();
    // a link can take a trigger too
    expect(control(home!).tagName).toBe('A');
    expect(control(home!).getAttribute('aria-label')).toBe('Home');
    // no trigger slot: the label is the content, and nothing overrides it
    expect(control(plain!).hasAttribute('aria-label')).toBe(false);
    expect(control(plain!).textContent).toBe('Plain');
    expect(control(burger!).textContent).toBe(''); // the label is the name, not the content
  });

  it('the aside and footer regions show only when filled', async () => {
    const { root, waitForChanges } = await render(
      <art-mega-menu-item label="Products">
        {groups(1)}
        <div slot="aside">Promo</div>
      </art-mega-menu-item>,
    );
    await waitForChanges();
    expect((root.shadowRoot!.querySelector('[part="aside"]') as HTMLElement).hidden).toBe(false);
    expect((root.shadowRoot!.querySelector('[part="footer"]') as HTMLElement).hidden).toBe(true);
  });
});

describe('art-mega-menu-group', () => {
  it('names its list with the label and spreads links over `columns`', async () => {
    const { root } = await render(
      <art-mega-menu-group label="Resources" columns={3}>
        <art-mega-menu-link href="#docs">Docs</art-mega-menu-link>
      </art-mega-menu-group>,
    );
    const label = root.shadowRoot!.querySelector('[part="label"]')!;
    const list = root.shadowRoot!.querySelector<HTMLElement>('[part="list"]')!;
    expect(label.textContent).toBe('Resources');
    expect(list.getAttribute('role')).toBe('list');
    expect(list.getAttribute('aria-labelledby')).toBe(label.id);
    expect(list.style.getPropertyValue('--_cols')).toBe('3');
    const { root: bare } = await render(<art-mega-menu-group />);
    expect(bare.shadowRoot!.querySelector('[part="label"]')).toBeNull();
    expect(bare.shadowRoot!.querySelector('[part="list"]')!.hasAttribute('aria-labelledby')).toBe(false);
  });
});

describe('art-mega-menu-link', () => {
  it('is a list item holding a link, marks the current page and mirrors its filled slots', async () => {
    const { root } = await render(
      <art-mega-menu-link href="/analytics" active>
        <svg slot="icon" />
        Analytics
        <span slot="description">Real-time insights</span>
      </art-mega-menu-link>,
    );
    expect(root.getAttribute('role')).toBe('listitem');
    const a = root.shadowRoot!.querySelector('a')!;
    expect(a.getAttribute('href')).toBe('/analytics');
    expect(a.getAttribute('aria-current')).toBe('page');
    expect(root.hasAttribute('data-has-icon')).toBe(true);
    expect(root.hasAttribute('data-has-description')).toBe(true);
    const { root: plain } = await render(<art-mega-menu-link href="#about">About</art-mega-menu-link>);
    expect(plain.hasAttribute('data-has-icon')).toBe(false);
    expect(plain.hasAttribute('data-has-description')).toBe(false);
  });
});
