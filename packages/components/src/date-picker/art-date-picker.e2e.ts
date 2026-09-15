import { expect, test } from '@artui/e2e';

test.describe('art-date-picker', () => {
  test('opens on click, focuses the calendar, picking a day closes and updates value/form; Escape returns focus', async ({ page }) => {
    await page.setContent(`<form id="f"><div style="padding:24px"><art-date-picker name="when" value="2026-09-15" locale="en-US" aria-label="Date"></art-date-picker></div></form>`);
    const dp = page.locator('art-date-picker');
    const change = await page.spyOnEvent('change');
    await dp.locator('[part="trigger"]').click();
    await expect(dp).toHaveAttribute('open');
    await expect(dp.locator('[part="trigger"]')).toHaveAttribute('aria-expanded', 'true');
    const focused = await dp.evaluate((el) => (el.shadowRoot!.querySelector('art-calendar')!.shadowRoot!.activeElement as HTMLElement | null)?.dataset.date);
    expect(focused).toBe('2026-09-15');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('Enter');
    await expect(dp).toHaveAttribute('value', '2026-09-16');
    await expect(dp).not.toHaveAttribute('open');
    await expect(dp.locator('[part="trigger"]')).toBeFocused();
    await expect(dp.locator('[part="value"]')).toHaveText('September 16, 2026');
    expect(change.lastEvent.detail.value).toBe('2026-09-16');
    expect(await page.evaluate(() => Object.fromEntries(new FormData(document.getElementById('f') as HTMLFormElement)))).toEqual({ when: '2026-09-16' });
    await page.keyboard.press('ArrowDown');
    await expect(dp).toHaveAttribute('open');
    await page.keyboard.press('Escape');
    await expect(dp).not.toHaveAttribute('open');
    await expect(dp.locator('[part="trigger"]')).toBeFocused();
  });

  test('range stays open until both ends are picked', async ({ page }) => {
    await page.setContent(`<div style="padding:24px"><art-date-picker mode="range" locale="en-US" aria-label="Dates"></art-date-picker></div>`);
    const dp = page.locator('art-date-picker');
    await dp.locator('[part="trigger"]').click();
    await expect(dp).toHaveAttribute('open');
    await dp.locator('art-calendar [part="day"][data-date="2026-09-08"]').click();
    await expect(dp).toHaveAttribute('value', '2026-09-08');
    await expect(dp).toHaveAttribute('open');
    await dp.locator('art-calendar [part="day"][data-date="2026-09-12"]').click();
    await expect(dp).toHaveAttribute('value', '2026-09-08/2026-09-12');
    await expect(dp).not.toHaveAttribute('open');
    await expect(dp.locator('[part="value"]')).toHaveText('September 8, 2026 – September 12, 2026');
  });
});
