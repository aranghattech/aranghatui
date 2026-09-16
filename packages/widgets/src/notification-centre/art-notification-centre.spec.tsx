import { describe, expect, h, it, render } from '@stencil/vitest';

const centre = (attrs: Record<string, unknown> = {}) => (
  <art-notification-centre inline {...attrs}>
    <art-notification-item value="a" heading="One" time="2m" unread></art-notification-item>
    <art-notification-item value="b" heading="Two" description="Details" unread></art-notification-item>
    <art-notification-item value="c" heading="Three" href="#c"></art-notification-item>
  </art-notification-centre>
);

describe('art-notification-centre', () => {
  it('counts unread items, filters, marks all read and follows item selection', async () => {
    const { root, waitForChanges } = await render(centre());
    await waitForChanges();
    const sr = root.shadowRoot!;
    expect(sr.querySelector('[part="trigger"]')).toBeNull();
    expect(sr.querySelector('[part="filters"] art-button:last-child')!.textContent).toContain('(2)');
    expect((sr.querySelector('[part="list"]') as HTMLElement).hidden).toBe(false);
    const items = Array.from(root.querySelectorAll('art-notification-item')) as (HTMLElement & { unread: boolean })[];
    expect(items[0].getAttribute('role')).toBe('listitem');
    expect(items[2].shadowRoot!.querySelector('a[part="heading"]')!.getAttribute('href')).toBe('#c');
    let selected = '';
    root.addEventListener('select', (e) => (selected = (e as CustomEvent<{ value: string }>).detail.value));
    (items[0].shadowRoot!.querySelector('[part="heading"]') as HTMLElement).click();
    await waitForChanges();
    await new Promise((r) => setTimeout(r, 0));
    expect(selected).toBe('a');
    expect(items[0].unread).toBe(false);
    expect(sr.querySelector('[part="filters"] art-button:last-child')!.textContent).toContain('(1)');
    let readAll = 0;
    root.addEventListener('read-all', () => (readAll += 1));
    (sr.querySelector('[part="header"] art-button') as HTMLElement).click();
    await waitForChanges();
    expect(readAll).toBe(1);
    expect(items.every((i) => !i.unread)).toBe(true);
    (root as HTMLElement & { filter: string }).filter = 'unread';
    await waitForChanges();
    expect((sr.querySelector('[part="list"]') as HTMLElement).hidden).toBe(true);
    expect((sr.querySelector('[part="empty"]') as HTMLElement).hidden).toBe(false);
  });

  it('renders the bell with the unread count when not inline', async () => {
    const { root, waitForChanges } = await render(
      <art-notification-centre>
        <art-notification-item heading="One" unread></art-notification-item>
      </art-notification-centre>,
    );
    await waitForChanges();
    const sr = root.shadowRoot!;
    expect(sr.querySelector('[part="badge"]')!.textContent).toBe('1');
    expect(sr.querySelector('[part="trigger"]')!.getAttribute('aria-label')).toBe('Notifications, 1 unread');
    expect(sr.querySelector('[part="panel"]')!.getAttribute('role')).toBe('dialog');
  });
});
