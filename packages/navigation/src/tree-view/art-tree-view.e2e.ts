import { expect, test } from '@artui/e2e';

const tree = `<art-tree-view label="Files">
  <art-tree-item value="src" label="src" expanded>
    <art-tree-item value="components" label="components">
      <art-tree-item value="button" label="button.tsx"></art-tree-item>
      <art-tree-item value="input" label="input.tsx"></art-tree-item>
    </art-tree-item>
    <art-tree-item value="lib" label="lib"><art-tree-item value="utils" label="utils.ts"></art-tree-item></art-tree-item>
    <art-tree-item value="index" label="index.ts"></art-tree-item>
  </art-tree-item>
  <art-tree-item value="package" label="package.json"></art-tree-item>
  <art-tree-item value="readme" label="README.md" disabled></art-tree-item>
</art-tree-view>`;

test.describe('art-tree-view', () => {
  test('one tab stop; arrows move and expand / collapse, Home / End, typing, * and Enter follow the APG tree pattern', async ({ page }) => {
    await page.setContent(tree);
    const active = () => page.evaluate(() => document.activeElement?.getAttribute('value'));
    const item = (v: string) => page.locator(`art-tree-item[value="${v}"]`);
    const change = await page.spyOnEvent('value-change');
    await page.keyboard.press('Tab');
    expect(await active()).toBe('src');
    await page.keyboard.press('ArrowDown');
    expect(await active()).toBe('components');
    await page.keyboard.press('ArrowRight');
    await expect(item('components')).toHaveAttribute('aria-expanded', 'true');
    expect(await active()).toBe('components');
    await page.keyboard.press('ArrowRight');
    expect(await active()).toBe('button');
    await page.keyboard.press('ArrowLeft');
    expect(await active()).toBe('components');
    await page.keyboard.press('ArrowLeft');
    await expect(item('components')).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('ArrowDown');
    expect(await active()).toBe('lib');
    await page.keyboard.press('End');
    expect(await active()).toBe('readme');
    await page.keyboard.press('Home');
    expect(await active()).toBe('src');
    await page.keyboard.press('p');
    expect(await active()).toBe('package');
    await page.keyboard.press('Enter');
    await expect(page.locator('art-tree-view')).toHaveAttribute('value', 'package');
    expect(change.lastEvent.detail.value).toBe('package');
    await expect(item('package')).toHaveAttribute('aria-selected', 'true');
    await page.keyboard.press('Home');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('*');
    await expect(item('components')).toHaveAttribute('aria-expanded', 'true');
    await expect(item('lib')).toHaveAttribute('aria-expanded', 'true');
    // one roving tab stop: the focused item
    await expect(item('components')).toHaveAttribute('tabindex', '0');
    await expect(item('package')).not.toHaveAttribute('tabindex');
  });

  test('a click selects and toggles a parent; the chevron only toggles', async ({ page }) => {
    await page.setContent(tree);
    const lib = page.locator('art-tree-item[value="lib"]');
    await lib.locator('[part="label"]').first().click();
    await expect(lib).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('art-tree-view')).toHaveAttribute('value', 'lib');
    await expect(lib).toBeFocused();
    await lib.locator('[part="chevron"]').first().click();
    await expect(lib).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('art-tree-view')).toHaveAttribute('value', 'lib');
  });
});
