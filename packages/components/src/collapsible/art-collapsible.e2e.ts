import { expect, test } from '@artui/e2e';

test.describe('art-collapsible', () => {
  test('click, Enter and Space toggle natively; open-change reports; disabled is inert', async ({ page }) => {
    await page.setContent(`<art-collapsible><span slot="trigger">More</span><p id="body">Body</p></art-collapsible><art-collapsible disabled id="d"><span slot="trigger">Off</span><p>Never</p></art-collapsible>`);
    const host = page.locator('art-collapsible').first();
    const change = await page.spyOnEvent('open-change');
    await expect(page.locator('#body')).toBeHidden();
    await host.locator('summary').click();
    await expect(host).toHaveAttribute('open');
    await expect(page.locator('#body')).toBeVisible();
    expect(change.lastEvent.detail).toEqual({ open: true });
    await page.keyboard.press('Enter');
    await expect(host).not.toHaveAttribute('open');
    await page.keyboard.press('Space');
    await expect(host).toHaveAttribute('open');
    expect(change.length).toBe(3);
    await page.locator('#d summary').click({ force: true });
    await expect(page.locator('#d')).not.toHaveAttribute('open');
  });
});
