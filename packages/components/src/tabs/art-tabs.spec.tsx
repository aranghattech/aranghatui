import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-tabs', () => {
  it('assigns tabs to the list, links tabs and panels, and shows the selected panel', async () => {
    const { root, waitForChanges } = await render(
      <art-tabs value="b">
        <art-tab value="a">A</art-tab>
        <art-tab value="b">B</art-tab>
        <art-tab-panel value="a">pa</art-tab-panel>
        <art-tab-panel value="b">pb</art-tab-panel>
      </art-tabs>,
    );
    await waitForChanges();
    const tabs = Array.from(root.querySelectorAll('art-tab')) as any[];
    const panels = Array.from(root.querySelectorAll('art-tab-panel')) as any[];
    expect(tabs.map((t) => t.slot)).toEqual(['tab', 'tab']);
    expect(tabs.map((t) => t.getAttribute('role'))).toEqual(['tab', 'tab']);
    expect(tabs.map((t) => t.getAttribute('aria-selected'))).toEqual(['false', 'true']);
    expect(tabs.map((t) => t.getAttribute('tabindex'))).toEqual(['-1', '0']);
    expect(panels.map((p) => p.hidden)).toEqual([true, false]);
    expect(tabs[1].getAttribute('aria-controls')).toBe(panels[1].id);
    expect(panels[1].getAttribute('aria-labelledby')).toBe(tabs[1].id);
    expect(root.shadowRoot!.querySelector('[role="tablist"]')!.getAttribute('aria-orientation')).toBe('horizontal');
  });
});
