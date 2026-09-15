import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-alert-dialog', () => {
  it('is an alertdialog; cancel closes, action emits a cancelable event then closes', async () => {
    const { root, waitForChanges } = await render(
      <art-alert-dialog>
        <button slot="trigger">Delete</button>
        <span slot="title">Are you sure?</span>
        <span slot="description">This cannot be undone.</span>
        <button slot="cancel">Cancel</button>
        <button slot="action">Continue</button>
      </art-alert-dialog>,
    );
    await waitForChanges();
    const dialog = root.shadowRoot!.querySelector('dialog')!;
    expect(dialog.getAttribute('role')).toBe('alertdialog');
    expect(root.shadowRoot!.querySelector('[part="close"]')).toBeNull();
    (root.querySelector('[slot="trigger"]') as HTMLElement).click();
    await waitForChanges();
    expect(dialog.hasAttribute('open')).toBe(true);
    (root.querySelector('[slot="cancel"]') as HTMLElement).click();
    await waitForChanges();
    await new Promise((r) => setTimeout(r, 0));
    expect(root.hasAttribute('open')).toBe(false);
    (root.querySelector('[slot="trigger"]') as HTMLElement).click();
    await waitForChanges();
    let actions = 0;
    root.addEventListener('action', (e) => { actions += 1; e.preventDefault(); });
    (root.querySelector('[slot="action"]') as HTMLElement).click();
    await waitForChanges();
    expect(actions).toBe(1);
    expect(root.hasAttribute('open')).toBe(true); // prevented: stays open
  });
});
