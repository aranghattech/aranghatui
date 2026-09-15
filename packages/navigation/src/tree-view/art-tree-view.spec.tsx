import { describe, expect, h, it, render } from '@stencil/vitest';

const tree = () => (
  <art-tree-view label="Files" value="b">
    <art-tree-item value="a" label="a" expanded>
      <art-tree-item value="b" label="b"></art-tree-item>
      <art-tree-item value="c" label="c"></art-tree-item>
    </art-tree-item>
    <art-tree-item value="d" label="d">
      <art-tree-item value="e" label="e"></art-tree-item>
    </art-tree-item>
    <art-tree-item value="f" label="f" disabled></art-tree-item>
  </art-tree-view>
);

describe('art-tree-view', () => {
  it('renders tree / treeitem / group roles, levels, selection and one tab stop', async () => {
    const { root, waitForChanges } = await render(tree());
    await waitForChanges();
    expect(root.shadowRoot!.querySelector('[role="tree"]')!.getAttribute('aria-label')).toBe('Files');
    const [a, b, , d, , f] = Array.from(root.querySelectorAll('art-tree-item')) as HTMLElement[];
    expect(a.getAttribute('role')).toBe('treeitem');
    expect(a.getAttribute('aria-expanded')).toBe('true');
    expect(d.getAttribute('aria-expanded')).toBe('false');
    expect(b.hasAttribute('aria-expanded')).toBe(false);
    expect(a.getAttribute('aria-level')).toBe('1');
    expect(b.getAttribute('aria-level')).toBe('2');
    expect(a.getAttribute('aria-label')).toBe('a');
    expect(f.getAttribute('aria-disabled')).toBe('true');
    expect(b.getAttribute('aria-selected')).toBe('true');
    expect(a.getAttribute('aria-selected')).toBe('false');
    expect(b.tabIndex).toBe(0);
    expect(a.hasAttribute('tabindex')).toBe(false);
    expect(a.shadowRoot!.querySelector('[role="group"]')).not.toBeNull();
    expect((d.shadowRoot!.querySelector('[role="group"]') as HTMLElement).hidden).toBe(true);
  });

  it('clicking selects and toggles a parent; the chevron only toggles', async () => {
    const { root, waitForChanges } = await render(tree());
    await waitForChanges();
    const values: string[] = [];
    root.addEventListener('value-change', (e) => values.push((e as CustomEvent<{ value: string }>).detail.value));
    const [a, , , d] = Array.from(root.querySelectorAll('art-tree-item')) as HTMLElement[];
    (d.shadowRoot!.querySelector('[part="row"]') as HTMLElement).click();
    await waitForChanges();
    expect(root.getAttribute('value')).toBe('d');
    expect(d.getAttribute('aria-expanded')).toBe('true');
    expect(d.getAttribute('aria-selected')).toBe('true');
    (a.shadowRoot!.querySelector('[part="chevron"]') as HTMLElement).click();
    await waitForChanges();
    expect(a.getAttribute('aria-expanded')).toBe('false');
    expect(root.getAttribute('value')).toBe('d');
    expect(values).toEqual(['d']);
  });
});
