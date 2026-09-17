import { expect, test } from '@artui/e2e';

const menu = `<div style="padding:40px"><art-context-menu><div id="area" style="height:120px;width:240px;border:1px dashed gray" tabindex="0">Area</div><art-menu-item slot="menu" value="back">Back</art-menu-item><art-menu-item slot="menu" value="reload">Reload</art-menu-item></art-context-menu></div>`;

test.describe('art-context-menu', () => {
  test('right-click opens at the pointer, arrows move, Enter selects and closes; Shift+F10 opens by keyboard', async ({ page }) => {
    await page.setContent(menu);
    const cm = page.locator('art-context-menu');
    const select = await page.spyOnEvent('select');
    await page.locator('#area').click({ button: 'right', position: { x: 50, y: 40 } });
    await expect(cm).toHaveAttribute('open');
    const panel = cm.locator('[part="content"]');
    await panel.evaluate((el) => Promise.all(el.getAnimations().map((a) => a.finished.catch(() => {}))));
    const area = (await page.locator('#area').boundingBox())!;
    const pb = (await panel.boundingBox())!;
    expect(pb.x).toBeGreaterThanOrEqual(area.x + 50 - 2);
    expect(pb.y).toBeGreaterThanOrEqual(area.y + 40);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    expect(select.lastEvent.detail.value).toBe('reload');
    await expect(cm).not.toHaveAttribute('open');
    await page.locator('#area').focus();
    await page.keyboard.press('Shift+F10');
    await expect(cm).toHaveAttribute('open');
    await expect.poll(() => page.evaluate(() => document.activeElement?.getAttribute('value'))).toBe('back');
    await page.keyboard.press('Escape');
    await expect(cm).not.toHaveAttribute('open');
    await expect(page.locator('#area')).toBeFocused();
  });

  const rows = Array.from({ length: 10 }, (_, i) => `<art-menu-item slot="menu" value="i${i}">Item ${i + 1}</art-menu-item>`).join('');
  const area = `<div id="area" style="height:120px;width:240px;border:1px dashed gray">Area</div>`;
  const read = (page: import('@playwright/test').Page) =>
    page.locator('art-context-menu').evaluate((el: HTMLElement) => {
      const p = el.shadowRoot!.querySelector('[part="content"]') as HTMLElement;
      const cs = getComputedStyle(p);
      const r = p.getBoundingClientRect();
      const host = el.getBoundingClientRect();
      const item = el.querySelector('art-menu-item')!;
      return { client: p.clientHeight, scroll: p.scrollHeight, cap: p.style.getPropertyValue('--art-menu-max-height'), dx: Math.round(r.left - host.left), dy: Math.round(r.top - host.top), pad: parseFloat(cs.paddingBlockStart) + parseFloat(cs.paddingBlockEnd), row: item.getBoundingClientRect().height };
    });

  test('a menu written with `open` opens at the corner of its area and is as tall as its items', async ({ page }) => {
    await page.setContent(`<div style="padding:120px"><art-context-menu open>${area}${rows}</art-context-menu></div>`);
    // no pointer to anchor to: the panel takes the area's own corner
    await expect.poll(async () => (await read(page)).client > 0).toBe(true);
    const open = await read(page);
    expect(Math.abs(open.dx)).toBeLessThanOrEqual(2);
    expect(open.dy).toBeGreaterThanOrEqual(0);
    expect(open.scroll).toBe(open.client); // ten rows fit on this viewport: no scrollbar
  });

  test('`visible-items` caps the menu at that many rows', async ({ page }) => {
    await page.setContent(`<div style="padding:120px"><art-context-menu open visible-items="4">${area}${rows}</art-context-menu></div>`);
    // the cap settles a frame or two after the items upgrade, so poll on the height it lands at
    await expect.poll(async () => { const r = await read(page); return Math.abs(r.client - (r.row * 4 + r.pad)); }).toBeLessThanOrEqual(1);
    const capped = await read(page);
    expect(capped.scroll).toBeGreaterThan(capped.client); // the other six rows are behind a scrollbar
    expect(capped.cap).not.toBe('');
  });
});
