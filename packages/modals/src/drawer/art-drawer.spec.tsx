import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-drawer', () => {
  it('renders a named dialog with a handle, opens from the trigger with the slide vector for its side and closes from dialog-close', async () => {
    const { root, waitForChanges } = await render(
      <art-drawer>
        <button slot="trigger">Open</button>
        <span slot="title">Move Goal</span>
        <p>Body</p>
        <button slot="footer" dialog-close>Cancel</button>
      </art-drawer>,
    );
    await waitForChanges();
    const dialog = root.shadowRoot!.querySelector('dialog')!;
    expect(root.getAttribute('side')).toBe('bottom');
    expect((root.shadowRoot!.querySelector('[part="handle"]') as HTMLElement).hidden).toBe(false);
    expect(dialog.getAttribute('aria-labelledby')).toBe(root.shadowRoot!.querySelector('h2')!.id);
    (root.querySelector('[slot="trigger"]') as HTMLElement).click();
    await waitForChanges();
    expect(dialog.hasAttribute('open')).toBe(true);
    expect(dialog.style.getPropertyValue('--art-overlay-slide')).toBe('0 100%');
    (root.querySelector('[dialog-close]') as HTMLElement).click();
    await waitForChanges();
    await new Promise((r) => setTimeout(r, 0));
    expect(root.hasAttribute('open')).toBe(false);
  });

  it('hide-handle removes the handle; side="top" slides from the top', async () => {
    const { root, waitForChanges } = await render(
      <art-drawer side="top" hide-handle open>
        <span slot="title">Top</span>
      </art-drawer>,
    );
    await waitForChanges();
    const dialog = root.shadowRoot!.querySelector('dialog')!;
    expect((root.shadowRoot!.querySelector('[part="handle"]') as HTMLElement).hidden).toBe(true);
    expect(dialog.style.getPropertyValue('--art-overlay-slide')).toBe('0 -100%');
  });
});
