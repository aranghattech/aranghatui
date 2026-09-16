import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-state-page', () => {
  it('renders the default copy per kind, the code, and the slotted actions', async () => {
    const { root, waitForChanges } = await render(
      <art-state-page kind="not-found" code="404">
        <button slot="actions">Home</button>
      </art-state-page>,
    );
    await waitForChanges();
    const sr = root.shadowRoot!;
    expect(sr.querySelector('[part="code"]')!.textContent).toBe('404');
    expect(sr.querySelector('[slot="title"]')!.textContent).toContain('Page not found');
    expect(sr.querySelector('[slot="description"]')!.textContent).toContain("doesn't exist");
    expect((sr.querySelector('.actions') as HTMLElement).hidden).toBe(false);
    expect((sr.querySelector('.body') as HTMLElement).hidden).toBe(true);
    (root as HTMLElement & { heading: string }).heading = 'Lost?';
    await waitForChanges();
    expect(sr.querySelector('[slot="title"]')!.textContent).toContain('Lost?');
  });
});
