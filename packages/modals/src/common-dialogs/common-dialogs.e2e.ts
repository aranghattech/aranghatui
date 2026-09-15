import { expect, test } from '@artui/e2e';

declare global { interface Window { __m: any; __r: unknown } }

test.describe('common dialogs', () => {
  test('confirm() opens an alert dialog focused on Cancel and resolves the choice; alert() and prompt() resolve their values', async ({ page }) => {
    await page.setContent('<p>Page</p>');
    await page.evaluate(async () => { window.__m = await import('/build/index.esm.js'); });
    await page.evaluate(() => { window.__r = 'pending'; window.__m.confirm({ title: 'Delete?', description: 'Gone for good.', actionLabel: 'Delete', destructive: true }).then((v: boolean) => (window.__r = v)); });
    const alertDialog = page.locator('art-alert-dialog[data-art-common-dialog]');
    await expect(alertDialog.locator('[part="content"]')).toBeVisible();
    await expect(alertDialog.locator('[slot="cancel"]')).toBeFocused();
    await alertDialog.locator('[slot="action"]').click();
    await expect.poll(() => page.evaluate(() => window.__r)).toBe(true);
    await expect(alertDialog).toHaveCount(0);

    await page.evaluate(() => { window.__r = 'pending'; window.__m.confirm('Again?').then((v: boolean) => (window.__r = v)); });
    await expect(page.locator('art-alert-dialog[data-art-common-dialog] [part="content"]')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect.poll(() => page.evaluate(() => window.__r)).toBe(false);
    await expect(page.locator('art-alert-dialog[data-art-common-dialog]')).toHaveCount(0); // removed after the exit motion

    await page.evaluate(() => { window.__r = 'pending'; window.__m.alert({ title: 'Saved', description: 'All good.' }).then(() => (window.__r = 'closed')); });
    const a = page.locator('art-alert-dialog[data-art-common-dialog]');
    await expect(a.locator('[part="content"]')).toBeVisible();
    await expect(a.locator('[slot="cancel"]')).toHaveCount(0);
    await a.locator('[slot="action"]').click();
    await expect.poll(() => page.evaluate(() => window.__r)).toBe('closed');
    await expect(a).toHaveCount(0);

    await page.evaluate(() => { window.__r = 'pending'; window.__m.prompt({ title: 'Rename', defaultValue: 'Old', required: true }).then((v: string | null) => (window.__r = v)); });
    const d = page.locator('art-dialog[data-art-common-dialog]');
    await expect(d.locator('[part="content"]')).toBeVisible();
    const input = d.locator('art-input input');
    await expect(input).toBeFocused();
    await input.fill('');
    await page.keyboard.press('Enter');
    await expect(d.locator('[part="content"]')).toBeVisible(); // required: stays open
    await input.fill('New name');
    await page.keyboard.press('Enter');
    await expect.poll(() => page.evaluate(() => window.__r)).toBe('New name');
  });
});
