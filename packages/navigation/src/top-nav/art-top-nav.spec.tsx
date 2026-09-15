import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-top-nav', () => {
  it('renders the header, a named nav with the slotted links, brand and end regions', async () => {
    const { root, waitForChanges } = await render(
      <art-top-nav label="Site">
        <span slot="brand">Acme</span>
        <a href="#" aria-current="page">Home</a>
        <a href="#docs">Docs</a>
        <button slot="end">Sign in</button>
      </art-top-nav>,
    );
    await waitForChanges();
    const sr = root.shadowRoot!;
    expect(sr.querySelector('header')).not.toBeNull();
    expect(sr.querySelector('nav')!.getAttribute('aria-label')).toBe('Site');
    expect((sr.querySelector('[part="brand"]') as HTMLElement).hidden).toBe(false);
    expect((sr.querySelector('[part="end"]') as HTMLElement).hidden).toBe(false);
    expect(sr.querySelector('[part="toggle"]')).toBeNull();
    expect(root.hasAttribute('data-collapsed')).toBe(false);
  });

  it('collapse="always" renders the menu button that opens and closes the panel', async () => {
    const { root, waitForChanges } = await render(
      <art-top-nav collapse="always">
        <a href="#">Home</a>
      </art-top-nav>,
    );
    await waitForChanges();
    expect(root.hasAttribute('data-collapsed')).toBe(true);
    const toggle = root.shadowRoot!.querySelector<HTMLButtonElement>('[part="toggle"]')!;
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(toggle.getAttribute('aria-controls')).toBe('links');
    const opens: boolean[] = [];
    root.addEventListener('open-change', (e) => opens.push((e as CustomEvent<{ open: boolean }>).detail.open));
    toggle.click();
    await waitForChanges();
    expect(root.hasAttribute('open')).toBe(true);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    toggle.click();
    await waitForChanges();
    expect(root.hasAttribute('open')).toBe(false);
    expect(opens).toEqual([true, false]);
  });
});
