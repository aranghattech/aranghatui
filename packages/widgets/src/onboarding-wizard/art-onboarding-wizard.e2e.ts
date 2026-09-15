import { expect, test } from '@artui/e2e';

test.describe('art-onboarding-wizard', () => {
  test('Next and Back move with focus on the panel, the last step finishes', async ({ page }) => {
    await page.setContent('<art-onboarding-wizard><art-wizard-step label="One"><input id="a"></art-wizard-step><art-wizard-step label="Two"><input id="b"></art-wizard-step></art-onboarding-wizard>');
    const change = await page.spyOnEvent('step-change');
    const finish = await page.spyOnEvent('finish');
    await expect(page.locator('#a')).toBeVisible();
    await expect(page.locator('#b')).toBeHidden();
    await page.locator('art-onboarding-wizard art-button', { hasText: 'Next' }).click();
    await expect.poll(() => change.lastEvent?.detail.step).toBe(2);
    await expect(page.locator('#b')).toBeVisible();
    await expect(page.locator('art-onboarding-wizard [part="panel"]')).toBeFocused();
    await expect(page.locator('art-onboarding-wizard [part="step"]').nth(0)).toHaveAttribute('data-state', 'complete');
    await page.locator('art-onboarding-wizard art-button', { hasText: 'Finish' }).click();
    await expect.poll(() => finish.events.length).toBe(1);
    await page.locator('art-onboarding-wizard art-button', { hasText: 'Back' }).click();
    await expect(page.locator('#a')).toBeVisible();
  });
});
