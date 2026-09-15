import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-sheet', () => {
  it('renders a named dialog with header, body, footer and close; side reflects and sets the slide vector', async () => {
    const { root, waitForChanges } = await render(
      <art-sheet side="left">
        <button slot="trigger">Open</button>
        <span slot="title">Filters</span>
        <p>Body</p>
        <button slot="footer" dialog-close>Done</button>
      </art-sheet>,
    );
    await waitForChanges();
    const dialog = root.shadowRoot!.querySelector('dialog')!;
    expect(root.getAttribute('side')).toBe('left');
    expect(dialog.getAttribute('aria-labelledby')).toBe(root.shadowRoot!.querySelector('h2')!.id);
    expect(root.shadowRoot!.querySelector('[part="close"]')).not.toBeNull();
    (root.querySelector('[slot="trigger"]') as HTMLElement).click();
    await waitForChanges();
    expect(dialog.hasAttribute('open')).toBe(true);
    expect(dialog.style.getPropertyValue('--art-overlay-slide')).toBe('-100% 0');
    (root.querySelector('[dialog-close]') as HTMLElement).click();
    await waitForChanges();
    await new Promise((r) => setTimeout(r, 0));
    expect(root.hasAttribute('open')).toBe(false);
  });
});
