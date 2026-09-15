import { expect, test } from '@artui/e2e';

const dialog = `<art-dialog><button slot="trigger" id="t">Open</button><span slot="title">Edit profile</span><span slot="description">Make changes.</span><label>Name <input id="name" value="Pedro"></label><button slot="footer" dialog-close id="cancel">Cancel</button></art-dialog><p style="height:1500px">Page</p>`;

test.describe('art-dialog', () => {
  test('opens modal on the top layer, focuses inside, locks scroll; Escape closes and returns focus', async ({ page }) => {
    await page.setContent(dialog);
    const content = page.locator('art-dialog [part="content"]');
    await page.locator('#t').click();
    await expect(content).toBeVisible();
    expect(await content.evaluate((el) => el.matches(':modal'))).toBe(true);
    await expect(page.locator('#name')).toBeFocused();
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).overflow)).toBe('hidden');
    await page.keyboard.press('Escape');
    await expect(content).toBeHidden();
    await expect(page.locator('art-dialog')).not.toHaveAttribute('open');
    await expect(page.locator('#t')).toBeFocused();
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).overflow)).not.toBe('hidden');
  });

  test('backdrop click, the close button and dialog-close elements close it; open-change reports', async ({ page }) => {
    await page.setContent(dialog);
    const host = page.locator('art-dialog');
    const content = host.locator('[part="content"]');
    const change = await page.spyOnEvent('open-change');
    await page.locator('#t').click();
    await expect(content).toBeVisible();
    expect(change.lastEvent.detail.open).toBe(true);
    await page.mouse.click(5, 5);
    await expect(content).toBeHidden();
    expect(change.lastEvent.detail.open).toBe(false);
    await page.locator('#t').click();
    await expect(content).toBeVisible();
    await content.locator('[part="close"]').click();
    await expect(content).toBeHidden();
    await page.locator('#t').click();
    await expect(content).toBeVisible();
    await page.locator('#cancel').click();
    await expect(content).toBeHidden();
    expect(change.events.length).toBe(6);
  });
});
