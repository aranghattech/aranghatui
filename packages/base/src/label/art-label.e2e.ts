import { expect, test } from '@artui/e2e';

test.describe('art-label', () => {
  test('click focuses the referenced text control', async ({ page }) => {
    await page.setContent(`<art-label for="email">Email</art-label><input id="email" type="email">`);
    await page.locator('art-label').click();
    await expect(page.locator('#email')).toBeFocused();
  });

  test('click toggles a referenced checkbox and disabled labels are inert', async ({ page }) => {
    await page.setContent(`<art-label for="cb">Agree</art-label><input id="cb" type="checkbox"><art-label for="cb2" disabled>Off</art-label><input id="cb2" type="checkbox">`);
    await page.locator('art-label').first().click();
    await expect(page.locator('#cb')).toBeChecked();
    await page.locator('art-label').nth(1).click({ force: true });
    await expect(page.locator('#cb2')).not.toBeChecked();
  });
});
