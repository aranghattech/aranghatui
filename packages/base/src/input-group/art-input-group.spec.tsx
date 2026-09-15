import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-input-group', () => {
  it('is a group, frames the slotted control and marks it as in-group', async () => {
    const { root } = await render(
      <art-input-group>
        <span slot="start">https://</span>
        <art-input aria-label="Domain"></art-input>
        <span slot="end">.com</span>
      </art-input-group>,
    );
    expect(root.getAttribute('role')).toBe('group');
    expect(root.querySelector('art-input')!.hasAttribute('data-in-group')).toBe(true);
    expect(root.hasAttribute('data-invalid')).toBe(false);
    const frame = root.shadowRoot!.querySelector('[part="frame"]')!;
    expect(frame.className).toContain('border-default');
    const row = root.shadowRoot!.querySelector('[part="row"]')!;
    expect(Array.from(row.children).map((c) => c.getAttribute('name'))).toEqual(['start', null, 'end']);
  });

  it('mirrors invalid and disabled from the control onto the host', async () => {
    const { root } = await render(
      <art-input-group>
        <art-input aria-label="x" invalid disabled></art-input>
      </art-input-group>,
    );
    expect(root.hasAttribute('data-invalid')).toBe(true);
    expect(root.hasAttribute('data-disabled')).toBe(true);
  });
});
