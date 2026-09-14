import { expect, test, type Page } from '@playwright/test';
import type { ComponentStories, StoryState } from '@artui/stories';
import { THEMES, VIEWPORTS, loadStories, storyUrl } from '../stories';

/**
 * VRT matrix (CLAUDE.md §9): themes × viewports × states × variants × sizes (+ RTL).
 * Screenshots are element shots of #stage. Baselines: tests/visual/__screenshots__/<tag>/…
 */
const stories = await loadStories();

async function applyState(page: Page, s: ComponentStories, state: StoryState) {
  const target = s.focusTarget ?? s.tag;
  if (state === 'hover') await page.locator(target).first().hover();
  if (state === 'focus-visible') {
    await page.keyboard.press('Tab');
    await expect(page.locator(target).first()).toBeFocused();
  }
  if (state === 'active') {
    const box = await page.locator(target).first().boundingBox();
    if (!box) throw new Error(`no box for ${target}`);
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
  }
}

for (const s of stories) {
  test.describe(s.tag, () => {
    for (const theme of THEMES) {
      for (const width of VIEWPORTS) {
        for (const variant of s.variants.length ? s.variants : ['default']) {
          for (const size of s.sizes.length ? s.sizes : ['']) {
            for (const state of s.states) {
              const dirs = s.directional ? (['ltr', 'rtl'] as const) : (['ltr'] as const);
              for (const dir of dirs) {
                const name = [theme, width, variant, size || null, state, dir === 'rtl' ? 'rtl' : null].filter(Boolean).join('-');
                test(name, async ({ page }) => {
                  await page.setViewportSize({ width, height: 600 });
                  await page.emulateMedia({ colorScheme: theme, reducedMotion: 'reduce' });
                  await page.goto(storyUrl(s, { theme, variant, size, state, dir }));
                  await page.locator('#stage[data-ready]').waitFor();
                  await page.evaluate(() => document.fonts.ready);
                  await applyState(page, s, state);
                  const shot = [s.tag, `${name}.png`];
                  if (s.screenshot === 'viewport') await expect(page).toHaveScreenshot(shot);
                  else await expect(page.locator('#stage')).toHaveScreenshot(shot);
                  if (state === 'active') await page.mouse.up();
                });
              }
            }
          }
        }
      }
    }
  });
}
