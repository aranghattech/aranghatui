import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-resizable', () => {
  it('lays panels out from default sizes and wires handle ARIA', async () => {
    const { root, waitForChanges } = await render(
      <art-resizable>
        <art-resizable-panel default-size={30}><p>a</p></art-resizable-panel>
        <art-resizable-handle></art-resizable-handle>
        <art-resizable-panel><p>b</p></art-resizable-panel>
      </art-resizable>,
    );
    await waitForChanges();
    const panels = Array.from(root.querySelectorAll('art-resizable-panel')) as HTMLElement[];
    expect(panels.map((p) => p.style.flexBasis)).toEqual(['30%', '70%']);
    const handle = root.querySelector('art-resizable-handle')!;
    expect(handle.getAttribute('role')).toBe('separator');
    expect(handle.getAttribute('aria-orientation')).toBe('vertical');
    expect(handle.getAttribute('aria-valuenow')).toBe('30');
    expect(handle.getAttribute('tabindex')).toBe('0');
  });
});
