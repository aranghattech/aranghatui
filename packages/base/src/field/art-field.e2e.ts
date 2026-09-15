import { expect, test } from '@artui/e2e';

test.describe('art-field', () => {
  test('label names the control, description + error describe it, error marks it invalid', async ({ page }) => {
    await page.setContent(`<art-field><art-label slot="label">Email</art-label><art-input type="email"></art-input><p slot="description">We never share it.</p><p slot="error">Enter a valid email.</p></art-field>`);
    const input = page.locator('art-input input');
    await expect(input).toHaveAccessibleName('Email');
    await expect(input).toHaveAccessibleDescription('We never share it. Enter a valid email.');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(page.locator('[slot="error"]')).toHaveRole('alert');
    await page.locator('art-label').click();
    await expect(input).toBeFocused();
    // clearing the error clears invalid
    await page.locator('[slot="error"]').evaluate((el) => (el.textContent = ''));
    await expect(input).not.toHaveAttribute('aria-invalid', 'true');
  });

  test('a disabled field set disables the controls inside natively', async ({ page }) => {
    await page.setContent(`<form><art-field-set disabled><span slot="legend">A</span><art-field><art-label slot="label">Street</art-label><art-input value="x"></art-input></art-field></art-field-set></form>`);
    await expect(page.locator('art-input')).toHaveAttribute('disabled');
    await expect(page.locator('art-label')).toHaveAttribute('disabled');
  });
});
