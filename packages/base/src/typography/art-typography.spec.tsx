import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-typography', () => {
  it('keeps prose in the light DOM', async () => {
    const { root } = await render(
      <art-typography>
        <h1>Title</h1>
        <p>Body</p>
      </art-typography>,
    );
    expect(root.shadowRoot).toBeNull();
    expect(root.querySelector('h1')!.textContent).toBe('Title');
    expect(root.querySelector('p')!.textContent).toBe('Body');
  });
});
