import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-dialog', () => {
  it('renders a native dialog named by the title, described by the description, opened by the trigger and closed by dialog-close elements', async () => {
    const { root, waitForChanges } = await render(
      <art-dialog>
        <button slot="trigger">Open</button>
        <span slot="title">Edit profile</span>
        <span slot="description">Make changes.</span>
        <p>Body</p>
        <button slot="footer" dialog-close>Cancel</button>
      </art-dialog>,
    );
    await waitForChanges();
    const dialog = root.shadowRoot!.querySelector('dialog')!;
    const trigger = root.querySelector('[slot="trigger"]')!;
    expect(dialog.getAttribute('aria-labelledby')).toBe(root.shadowRoot!.querySelector('h2')!.id);
    expect(dialog.getAttribute('aria-describedby')).toBe(root.shadowRoot!.querySelector('p')!.id);
    expect(trigger.getAttribute('aria-haspopup')).toBe('dialog');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(dialog.hasAttribute('open')).toBe(false);
    const opens: boolean[] = [];
    root.addEventListener('open-change', (e) => opens.push((e as CustomEvent<{ open: boolean }>).detail.open));
    (trigger as HTMLElement).click();
    await waitForChanges();
    expect(root.hasAttribute('open')).toBe(true);
    expect(dialog.hasAttribute('open')).toBe(true);
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    (root.querySelector('[dialog-close]') as HTMLElement).click();
    await waitForChanges();
    await new Promise((r) => setTimeout(r, 0));
    expect(root.hasAttribute('open')).toBe(false);
    expect(dialog.hasAttribute('open')).toBe(false);
    expect(opens).toEqual([true, false]);
  });

  it('hide-close removes the close button; label names the dialog without a title', async () => {
    const { root, waitForChanges } = await render(
      <art-dialog hide-close label="Terms">
        <button slot="trigger">Open</button>
        <p>Body</p>
      </art-dialog>,
    );
    await waitForChanges();
    const dialog = root.shadowRoot!.querySelector('dialog')!;
    expect(root.shadowRoot!.querySelector('[part="close"]')).toBeNull();
    expect(dialog.getAttribute('aria-label')).toBe('Terms');
    expect(dialog.hasAttribute('aria-labelledby')).toBe(false);
  });
});
