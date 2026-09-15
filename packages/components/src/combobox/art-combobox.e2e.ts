import { expect, test } from '@artui/e2e';

const list = `<art-combobox-item value="next">Next.js</art-combobox-item><art-combobox-item value="svelte">SvelteKit</art-combobox-item><art-combobox-item value="nuxt" disabled>Nuxt.js</art-combobox-item><art-combobox-item value="astro">Astro</art-combobox-item>`;

test.describe('art-combobox', () => {
  test('typing filters and opens, Enter chooses with item data, arrows skip disabled, Escape restores the field', async ({ page }) => {
    await page.setContent(`<div style="padding:24px"><art-combobox placeholder="Framework" aria-label="Framework">${list}</art-combobox></div>`);
    const host = page.locator('art-combobox');
    const input = host.locator('input');
    await page.evaluate(() => { (document.querySelector('art-combobox-item[value="astro"]') as any).item = { id: 4 }; });
    const change = await page.spyOnEvent('change');
    await page.keyboard.press('Tab');
    await expect(input).toBeFocused();
    await page.keyboard.type('ast');
    await expect(host).toHaveAttribute('open');
    await expect(page.locator('art-combobox-item[value="next"]')).toBeHidden();
    await expect(page.locator('art-combobox-item[value="astro"]')).toBeVisible();
    await expect(page.locator('art-combobox-item[value="astro"]')).toHaveAttribute('data-highlighted');
    expect(await page.locator('[data-highlighted]').count()).toBe(1); // hidden items keep no stale highlight
    await page.keyboard.press('Enter');
    await expect(host).not.toHaveAttribute('open');
    await expect(input).toHaveValue('Astro');
    expect(change.lastEvent.detail.value).toBe('astro');
    expect(change.lastEvent.detail.item).toEqual({ id: 4 });
    expect(await host.evaluate((el: any) => el.value)).toBe('astro');
    await page.keyboard.press('ArrowDown');
    await expect(host).toHaveAttribute('open');
    await expect(page.locator('art-combobox-item[value="next"]')).toBeVisible(); // the full list shows again
    await expect(page.locator('art-combobox-item[value="astro"]')).toHaveAttribute('data-highlighted');
    await page.keyboard.press('ArrowUp'); // skips the disabled Nuxt
    await expect(page.locator('art-combobox-item[value="svelte"]')).toHaveAttribute('data-highlighted');
    await page.keyboard.type('x');
    await expect(input).toHaveValue('Astrox');
    await page.keyboard.press('Escape');
    await expect(host).not.toHaveAttribute('open');
    await expect(input).toHaveValue('Astro');
    await expect(input).toBeFocused();
  });

  test('multiple: clicks toggle chips, Backspace removes the last, form data has one entry per chip, clear empties', async ({ page }) => {
    await page.setContent(`<form id="f"><art-combobox multiple name="fw" aria-label="Frameworks" show-clear>${list}</art-combobox></form><button id="out" style="position:fixed;bottom:0;right:0">out</button>`);
    const host = page.locator('art-combobox');
    const input = host.locator('input');
    await host.locator('[part="trigger"]').click();
    await expect(host).toHaveAttribute('open');
    await expect(input).toBeFocused();
    await page.locator('art-combobox-item[value="next"]').click();
    await expect(host.locator('[part="chip"]')).toHaveText(['Next.js']);
    await expect(host).toHaveAttribute('open'); // stays open for more choices
    await page.locator('art-combobox-item[value="astro"]').click();
    await expect(host.locator('[part="chip"]')).toHaveText(['Next.js', 'Astro']);
    expect(await page.evaluate(() => new FormData(document.getElementById('f') as HTMLFormElement).getAll('fw'))).toEqual(['next', 'astro']);
    await page.keyboard.press('Backspace');
    await expect(host.locator('[part="chip"]')).toHaveText(['Next.js']);
    await page.locator('#out').click();
    await expect(host).not.toHaveAttribute('open');
    await host.locator('[part="clear"]').click();
    await expect(host.locator('[part="chip"]')).toHaveCount(0);
    expect(await host.evaluate((el: any) => el.value)).toEqual([]);
  });
});
