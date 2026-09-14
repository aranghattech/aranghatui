import { expect, test } from '@artui/e2e';

test.describe('art-hello-overlay', () => {
  test('renders the base tier element inside its shadow root', async ({ page }) => {
    await page.setContent(`<art-hello-overlay name="Ada" open></art-hello-overlay>`);
    await expect(page.locator('art-hello-overlay art-hello button')).toHaveText(/Greet Ada/);
  });

  test('Escape closes and emits open-change', async ({ page }) => {
    await page.setContent(`<art-hello-overlay name="Ada" open></art-hello-overlay>`);
    const overlay = page.locator('art-hello-overlay');
    await expect(overlay.locator('[role=dialog]')).toBeVisible();
    const changed = await page.spyOnEvent('open-change');
    await page.keyboard.press('Escape');
    await changed.next();
    expect(changed.lastEvent.detail).toEqual({ open: false });
    await expect(overlay.locator('[role=dialog]')).toHaveCount(0);
  });
});
