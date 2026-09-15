import { expect, test } from '@artui/e2e';

test.describe('art-calendar', () => {
  test('keyboard moves by day / week / month and Enter selects; change carries dates', async ({ page }) => {
    await page.setContent(`<art-calendar value="2026-09-15" month="2026-09" aria-label="Pick a date"></art-calendar>`);
    const cal = page.locator('art-calendar');
    const change = await page.spyOnEvent('change');
    const focusedDate = () => cal.evaluate((el) => (el.shadowRoot!.activeElement as HTMLElement | null)?.dataset.date);
    await page.keyboard.press('Tab'); // previous month
    await page.keyboard.press('Tab'); // next month
    await page.keyboard.press('Tab'); // the selected day is the only day in the tab order
    await expect.poll(focusedDate).toBe('2026-09-15');
    await page.keyboard.press('ArrowRight');
    await expect.poll(focusedDate).toBe('2026-09-16');
    await page.keyboard.press('ArrowDown');
    await expect.poll(focusedDate).toBe('2026-09-23');
    await page.keyboard.press('Home');
    await expect.poll(focusedDate).toBe('2026-09-20'); // week starts on Sunday (en-US)
    await page.keyboard.press('PageDown'); // a month change re-renders the grid before focus lands
    await expect(cal).toHaveAttribute('month', '2026-10');
    await expect.poll(focusedDate).toBe('2026-10-20');
    await page.keyboard.press('Shift+PageUp');
    await expect.poll(focusedDate).toBe('2025-10-20');
    await page.keyboard.press('Enter');
    await expect(cal).toHaveAttribute('value', '2025-10-20');
    expect(change.lastEvent.detail.value).toBe('2025-10-20');
    expect(new Date(change.lastEvent.detail.date).getFullYear()).toBe(2025);
  });

  test('range: two clicks make a range, an earlier day restarts it; month arrows navigate', async ({ page }) => {
    await page.setContent(`<art-calendar mode="range" month="2026-09" aria-label="Pick a range"></art-calendar>`);
    const cal = page.locator('art-calendar');
    const day = (d: string) => cal.locator(`[part="day"][data-date="${d}"]`);
    await day('2026-09-10').click();
    await expect(cal).toHaveAttribute('value', '2026-09-10');
    await day('2026-09-14').click();
    await expect(cal).toHaveAttribute('value', '2026-09-10/2026-09-14');
    await expect(day('2026-09-12')).toHaveAttribute('data-range-middle');
    await day('2026-09-03').click(); // a new range starts
    await expect(cal).toHaveAttribute('value', '2026-09-03');
    await cal.locator('[aria-label="Next month"]').click();
    await expect(cal.locator('[role="grid"]')).toHaveAttribute('aria-label', 'October 2026');
    await cal.locator('[aria-label="Previous month"]').click();
    await expect(cal.locator('[role="grid"]')).toHaveAttribute('aria-label', 'September 2026');
  });
});
