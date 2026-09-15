import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-combobox', () => {
  it('shows the chosen label in the field and marks the item', async () => {
    const { root, waitForChanges } = await render(
      <art-combobox value="b" aria-label="Letters">
        <art-combobox-item value="a">Alpha</art-combobox-item>
        <art-combobox-item value="b" label="Beta label"><b>Beta</b></art-combobox-item>
      </art-combobox>,
    );
    await waitForChanges();
    const input = root.shadowRoot!.querySelector('input')!;
    expect(input.getAttribute('role')).toBe('combobox');
    expect(input.value).toBe('Beta label');
    const items = Array.from(root.querySelectorAll('art-combobox-item')) as any[];
    expect(items.map((i) => i.selected)).toEqual([false, true]);
  });
  it('renders chips for multiple values', async () => {
    const { root, waitForChanges } = await render(
      <art-combobox multiple aria-label="Letters">
        <art-combobox-item value="a">Alpha</art-combobox-item>
        <art-combobox-item value="b">Beta</art-combobox-item>
      </art-combobox>,
    );
    (root as any).value = ['a', 'b'];
    await waitForChanges();
    await waitForChanges();
    const chips = Array.from(root.shadowRoot!.querySelectorAll('[part="chip"]')).map((c) => c.textContent?.trim());
    expect(chips).toEqual(['Alpha', 'Beta']);
  });
});
