import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-select', () => {
  it('renders a combobox trigger, marks the selected item and shows its content in the trigger', async () => {
    const { root, waitForChanges } = await render(
      <art-select value="b" aria-label="Letters">
        <art-select-item value="a">Alpha</art-select-item>
        <art-select-item value="b"><b>Beta</b></art-select-item>
        <art-select-item value="c" label="Gamma label"><i>Gamma</i></art-select-item>
      </art-select>,
    );
    await waitForChanges();
    const trigger = root.shadowRoot!.querySelector('[part="trigger"]')!;
    expect(trigger.getAttribute('role')).toBe('combobox');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(trigger.getAttribute('aria-label')).toBe('Letters');
    const items = Array.from(root.querySelectorAll('art-select-item')) as any[];
    expect(items.map((i) => i.selected)).toEqual([false, true, false]);
    expect(items[1].getAttribute('aria-selected')).toBe('true');
    const value = root.shadowRoot!.querySelector('[part="value"]')!;
    expect(value.firstElementChild?.tagName).toBe('B');
    expect(value.textContent).toBe('Beta');
    (root as any).value = 'c';
    await waitForChanges();
    expect(root.shadowRoot!.querySelector('[part="value"]')!.textContent).toBe('Gamma label');
  });
  it('shows the placeholder when nothing is selected', async () => {
    const { root, waitForChanges } = await render(<art-select placeholder="Pick one" aria-label="x"><art-select-item value="a">A</art-select-item></art-select>);
    await waitForChanges();
    const v = root.shadowRoot!.querySelector('[part="value"]')!;
    expect(v.textContent).toBe('Pick one');
    expect(v.hasAttribute('data-placeholder')).toBe(true);
  });
});
