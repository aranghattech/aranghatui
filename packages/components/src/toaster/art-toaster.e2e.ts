import { expect, test } from '@artui/e2e';

test.describe('art-toaster', () => {
  test('declarative toasts: timer dismisses, hover pauses, action button dismisses with the reason', async ({ page }) => {
    await page.setContent(`<art-toaster inline><art-toast id="t1" duration="600">Quick</art-toast><art-toast id="t2" duration="0" action-label="Undo" cancel-label="Dismiss">Deleted</art-toast></art-toaster>`);
    const dismiss = await page.spyOnEvent('dismiss');
    const t2 = page.locator('#t2');
    await t2.hover(); // hovering t2 must not affect t1
    await expect(page.locator('#t1')).toBeHidden({ timeout: 3000 });
    expect(dismiss.lastEvent.detail.reason).toBe('timeout');
    await expect(t2).toBeVisible();
    await t2.locator('art-button').first().click(); // "Dismiss" (cancel)
    await expect(t2).toBeHidden();
    expect(dismiss.lastEvent.detail.reason).toBe('cancel');
  });

  test('hover pauses the timer', async ({ page }) => {
    await page.setContent(`<art-toaster inline><art-toast id="t" duration="500">Hold</art-toast></art-toaster>`);
    const t = page.locator('#t');
    await t.hover();
    await page.waitForTimeout(900);
    await expect(t).toBeVisible();
    await page.mouse.move(0, 0);
    await expect(t).toBeHidden({ timeout: 3000 });
  });
});
