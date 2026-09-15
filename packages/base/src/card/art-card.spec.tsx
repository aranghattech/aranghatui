import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-card', () => {
  it('renders header, content and footer regions when their slots are filled', async () => {
    const { root } = await render(
      <art-card>
        <h3 slot="title">T</h3>
        <p slot="description">D</p>
        <p>content</p>
        <button slot="footer">ok</button>
      </art-card>,
    );
    const sr = root.shadowRoot!;
    expect(sr.querySelector('[part="header"]')).not.toBeNull();
    expect(sr.querySelector('[part="content"]')).not.toBeNull();
    expect(sr.querySelector('[part="footer"]')).not.toBeNull();
  });
  it('collapses regions whose slots are empty', async () => {
    const { root } = await render(<art-card><p>only content</p></art-card>);
    const sr = root.shadowRoot!;
    expect(sr.querySelector('[part="header"]')).toBeNull();
    expect(sr.querySelector('[part="footer"]')).toBeNull();
    expect(sr.querySelector('[part="content"]')).not.toBeNull();
  });
});
