import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-label', () => {
  it('renders a native label with the slotted text', async () => {
    const { root } = await render(<art-label>Name</art-label>);
    expect(root.shadowRoot!.querySelector('label')!.getAttribute('part')).toBe('label');
    expect(root).toHaveTextContent('Name');
  });

  it('reflects disabled', async () => {
    const { root } = await render(<art-label disabled>Name</art-label>);
    expect(root).toHaveAttribute('disabled');
  });

  it('focuses the control referenced by `for` on click and toggles checkboxes', async () => {
    const { root } = await render(
      <div>
        <art-label htmlFor="cb">Agree</art-label>
        <input id="cb" type="checkbox" />
      </div>,
    );
    const label = root.querySelector('art-label')!;
    const cb = root.querySelector('input')!;
    let clicked = 0;
    cb.addEventListener('click', () => clicked++);
    label.shadowRoot!.querySelector('label')!.click();
    expect(clicked).toBe(1);
    expect(cb.getAttribute('aria-labelledby')).toBe(label.id);
    expect(label.id).toMatch(/^art-label-/);
  });
});
