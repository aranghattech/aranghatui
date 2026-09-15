import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-accordion', () => {
  it('single: value opens one item', async () => {
    const { root, waitForChanges } = await render(
      <art-accordion value="b">
        <art-accordion-item value="a"><span slot="trigger">A</span><p>a</p></art-accordion-item>
        <art-accordion-item value="b"><span slot="trigger">B</span><p>b</p></art-accordion-item>
      </art-accordion>,
    );
    await waitForChanges();
    const items = Array.from(root.querySelectorAll('art-accordion-item')) as any[];
    expect(items.map((i) => i.open)).toEqual([false, true]);
    expect(items[1].shadowRoot.querySelector('details').open).toBe(true);
  });
  it('multiple: several open', async () => {
    const { root, waitForChanges } = await render(
      <art-accordion type="multiple" value="a,b">
        <art-accordion-item value="a"><span slot="trigger">A</span><p>a</p></art-accordion-item>
        <art-accordion-item value="b"><span slot="trigger">B</span><p>b</p></art-accordion-item>
      </art-accordion>,
    );
    await waitForChanges();
    const items = Array.from(root.querySelectorAll('art-accordion-item')) as any[];
    expect(items.map((i) => i.open)).toEqual([true, true]);
  });
});
