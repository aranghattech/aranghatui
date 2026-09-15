import { expect, test } from '@artui/e2e';

test.describe('art-popover', () => {
  test('click toggles, focus moves in and back, Escape and outside click close', async ({ page }) => {
    await page.setContent(`<div style="padding:40px"><art-popover><button slot="trigger">Open</button><p>Content</p><input aria-label="Width" value="100%"></art-popover><button id="outside">outside</button></div>`);
    const host = page.locator('art-popover');
    const panel = host.locator('[part="content"]');
    const change = await page.spyOnEvent('open-change');
    await page.locator('button[slot="trigger"]').click();
    await expect(host).toHaveAttribute('open');
    await expect(panel).toBeVisible();
    await expect(panel).toBeFocused();
    await expect(page.locator('button[slot="trigger"]')).toHaveAttribute('aria-expanded', 'true');
    await panel.evaluate((el) => Promise.all(el.getAnimations().map((a) => a.finished))); // let the enter motion settle
    const [t, p] = await Promise.all([page.locator('button[slot="trigger"]').boundingBox(), panel.boundingBox()]);
    expect(p!.y).toBeGreaterThanOrEqual(t!.y + t!.height); // below the trigger
    await page.keyboard.press('Escape');
    await expect(host).not.toHaveAttribute('open');
    await expect(page.locator('button[slot="trigger"]')).toBeFocused();
    await page.locator('button[slot="trigger"]').click();
    await expect(host).toHaveAttribute('open');
    await page.locator('#outside').click();
    await expect(host).not.toHaveAttribute('open');
    await expect(panel).toBeHidden();
    expect(change.length).toBe(4);
  });
});
