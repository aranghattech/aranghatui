import { expect, test } from '@artui/e2e';

const items = JSON.stringify([
  { name: 'a', required: true, prompt: 'First?', choices: [{ value: 'x', label: 'X' }, { value: 'y', label: 'Y' }], input: { label: 'Other', placeholder: 'Other…' } },
  { name: 'b', prompt: 'Second?', choices: [{ value: 'p', label: 'P' }] },
  { name: 'c', required: true, prompt: 'Third?', input: { label: 'Text' }, minLength: 3 },
]).replace(/"/g, '&quot;');

test.describe('art-questionnaire', () => {
  test('shortcut keys choose, Enter advances, Skip clears an optional answer, validation blocks, FormData carries the answers, complete fires', async ({ page }) => {
    await page.setContent(`<form id="f"><art-questionnaire items="${items}"></art-questionnaire></form>`);
    const q = page.locator('art-questionnaire');
    const complete = await page.spyOnEvent('complete');
    const change = await page.spyOnEvent('answer-change');
    await q.locator('[part="choice"] input').first().focus();
    await page.keyboard.press('b'); // shortcut → Y
    await expect.poll(() => q.evaluate((el: any) => el.value)).toEqual({ a: 'y' });
    expect(change.lastEvent.detail.value).toBe('y');
    await page.keyboard.press('Enter');
    await expect(q).toHaveAttribute('step', '1');
    await q.locator('[part="skip"]').click();
    await expect(q).toHaveAttribute('step', '2');
    await q.locator('[part="next"]').click(); // required, empty
    await expect(q.locator('[part="error"]')).toHaveText('Please answer this question.');
    await q.locator('[part="input"]').fill('ok');
    await q.locator('[part="next"]').click();
    await expect(q.locator('[part="error"]')).toHaveText('Use at least 3 characters.');
    await q.locator('[part="input"]').fill('okay');
    expect(await page.evaluate(() => new FormData(document.getElementById('f') as HTMLFormElement).getAll('a'))).toEqual(['y']);
    await page.keyboard.press('Enter');
    await expect.poll(() => complete.length).toBe(1);
    expect(complete.lastEvent.detail.answers).toEqual({ a: 'y', c: 'okay' });
  });
});
