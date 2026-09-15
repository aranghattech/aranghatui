import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-table', () => {
  it('keeps the native table in the light DOM', async () => {
    const { root } = await render(
      <art-table>
        <table>
          <thead><tr><th>A</th></tr></thead>
          <tbody><tr><td>1</td></tr></tbody>
        </table>
      </art-table>,
    );
    expect(root.shadowRoot).toBeNull();
    expect(root.querySelector('table thead th')!.textContent).toBe('A');
    expect(root.querySelector('table tbody td')!.textContent).toBe('1');
  });
});
