import { expect, test } from '@artui/e2e';

const list = `<art-select-item value="apple">Apple</art-select-item><art-select-item value="banana">Banana</art-select-item><art-select-item value="cherry" disabled>Cherry</art-select-item><art-select-item value="date">Date</art-select-item>`;

test.describe('art-select', () => {
  test('keyboard: opens on ArrowDown, moves, skips disabled, Enter chooses, Escape closes; change carries item', async ({ page }) => {
    await page.setContent(`<div style="padding:24px"><art-select placeholder="Fruit" aria-label="Fruit">${list}</art-select></div>`);
    const host = page.locator('art-select');
    await page.evaluate(() => { (document.querySelector('art-select-item[value="banana"]') as any).item = { id: 2, name: 'Banana' }; });
    const change = await page.spyOnEvent('change');
    await page.keyboard.press('Tab');
    await expect(host.locator('[part="trigger"]')).toBeFocused();
    await page.keyboard.press('ArrowDown');
    await expect(host).toHaveAttribute('open');
    await expect(host.locator('[part="listbox"]')).toBeFocused();
    await expect(page.locator('art-select-item[value="apple"]')).toHaveAttribute('data-highlighted');
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('art-select-item[value="banana"]')).toHaveAttribute('data-highlighted');
    await page.keyboard.press('ArrowDown'); // skips cherry
    await expect(page.locator('art-select-item[value="date"]')).toHaveAttribute('data-highlighted');
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('Enter');
    await expect(host).toHaveAttribute('value', 'banana');
    await expect(host).not.toHaveAttribute('open');
    await expect(host.locator('[part="trigger"]')).toBeFocused();
    expect(change.lastEvent.detail.value).toBe('banana');
    expect(change.lastEvent.detail.item).toEqual({ id: 2, name: 'Banana' });
    await expect(host.locator('[part="value"]')).toHaveText('Banana');
    await page.keyboard.press('Space');
    await expect(host).toHaveAttribute('open');
    await page.keyboard.press('Escape');
    await expect(host).not.toHaveAttribute('open');
    await expect(host.locator('[part="trigger"]')).toBeFocused();
  });

  test('pointer: click opens, click on an item chooses; outside click closes; form value and reset', async ({ page }) => {
    await page.setContent(`<form id="f"><art-select name="fruit" value="apple" aria-label="Fruit" required>${list}</art-select></form><button id="out" style="position:fixed;bottom:0;right:0">out</button>`);
    const host = page.locator('art-select');
    await host.locator('[part="trigger"]').click();
    await expect(host).toHaveAttribute('open');
    await page.locator('art-select-item[value="date"]').click();
    await expect(host).toHaveAttribute('value', 'date');
    expect(await page.evaluate(() => Object.fromEntries(new FormData(document.getElementById('f') as HTMLFormElement)))).toEqual({ fruit: 'date' });
    await host.locator('[part="trigger"]').click();
    await page.locator('#out').click();
    await expect(host).not.toHaveAttribute('open');
    await page.evaluate(() => (document.getElementById('f') as HTMLFormElement).reset());
    await expect(host).toHaveAttribute('value', 'apple');
  });
});
