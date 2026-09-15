import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-command', () => {
  it('filters items and groups by query and shows the empty state', async () => {
    const { root, waitForChanges } = await render(
      <art-command>
        <art-command-group label="A">
          <art-command-item value="calendar">Calendar</art-command-item>
          <art-command-item value="emoji" keywords="smiley">Search Emoji</art-command-item>
        </art-command-group>
        <art-command-group label="B">
          <art-command-item value="profile">Profile</art-command-item>
        </art-command-group>
      </art-command>,
    );
    await waitForChanges();
    const hidden = () => Array.from(root.querySelectorAll('art-command-item')).map((i) => (i as HTMLElement).hidden);
    expect(hidden()).toEqual([false, false, false]);
    (root as any).query = 'smil';
    await waitForChanges();
    expect(hidden()).toEqual([true, false, true]);
    expect((root.querySelectorAll('art-command-group')[1] as HTMLElement).hidden).toBe(true);
    expect(root.querySelectorAll('art-command-item')[1]!.hasAttribute('data-highlighted')).toBe(true);
    expect((root.shadowRoot!.querySelector('[part="empty"]') as HTMLElement).hidden).toBe(true);
    (root as any).query = 'zzz';
    await waitForChanges();
    expect((root.shadowRoot!.querySelector('[part="empty"]') as HTMLElement).hidden).toBe(false);
  });
});
