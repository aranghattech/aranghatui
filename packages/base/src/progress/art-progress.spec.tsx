import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-progress', () => {
  it('renders a native progress with value, max and the resolved name', async () => {
    const { root } = await render(
      <div>
        <span id="lbl">Upload</span>
        <art-progress value={40} max={80} aria-labelledby="lbl"></art-progress>
      </div>,
    );
    const p = root.querySelector('art-progress')!.shadowRoot!.querySelector('progress')!;
    expect(p.getAttribute('value')).toBe('40');
    expect(p.getAttribute('max')).toBe('80');
    expect(p.getAttribute('aria-label')).toBe('Upload');
  });
  it('is indeterminate without a value', async () => {
    const { root } = await render(<art-progress aria-label="Loading"></art-progress>);
    const p = root.shadowRoot!.querySelector('progress')!;
    expect(p.hasAttribute('value')).toBe(false);
    expect(root.hasAttribute('aria-label')).toBe(false);
  });
});
