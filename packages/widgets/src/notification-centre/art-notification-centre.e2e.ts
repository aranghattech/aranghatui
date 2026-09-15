import { expect, test } from '@artui/e2e';

test.describe('art-notification-centre', () => {
  test('the bell opens the panel on the top layer, Escape closes and refocuses; a row click marks it read', async ({ page }) => {
    await page.setContent('<art-notification-centre><art-notification-item value="a" heading="One" unread></art-notification-item><art-notification-item value="b" heading="Two"></art-notification-item></art-notification-centre>');
    const centre = page.locator('art-notification-centre');
    const panel = centre.locator('[part="panel"]');
    await expect(centre.locator('[part="badge"]')).toHaveText('1');
    await expect(panel).toBeHidden();
    await centre.locator('[part="trigger"]').click();
    await expect(panel).toBeVisible();
    await expect(centre).toHaveAttribute('open', '');
    await page.locator('art-notification-item[value="a"] [part="heading"]').click();
    await expect(page.locator('art-notification-item[value="a"]')).not.toHaveAttribute('unread');
    await expect(centre.locator('[part="badge"]')).toHaveCount(0);
    await page.keyboard.press('Escape');
    await expect(panel).toBeHidden();
    await expect(centre.locator('[part="trigger"]')).toBeFocused();
  });
});
