import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-empty', () => {
  it('renders header and content regions with the named slots', async () => {
    const { root } = await render(
      <art-empty>
        <span slot="media">i</span>
        <h3 slot="title">T</h3>
        <p slot="description">D</p>
        <button>go</button>
      </art-empty>,
    );
    const sr = root.shadowRoot!;
    expect(Array.from(sr.querySelectorAll('[part="header"] slot')).map((s) => s.getAttribute('name'))).toEqual(['media', 'title', 'description']);
    expect(sr.querySelector('[part="content"] slot')!.getAttribute('name')).toBeNull();
  });
});
