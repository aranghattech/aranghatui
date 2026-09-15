import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-field', () => {
  it('wires label, description and error to the control', async () => {
    const { root } = await render(
      <art-field>
        <art-label slot="label">Email</art-label>
        <art-input aria-label={undefined}></art-input>
        <p slot="description">Help</p>
        <p slot="error">Bad</p>
      </art-field>,
    );
    const input = root.querySelector('art-input')!;
    const label = root.querySelector('art-label')!;
    const desc = root.querySelector('[slot="description"]')!;
    const err = root.querySelector('[slot="error"]')!;
    expect(input.id).toBeTruthy();
    expect(label.getAttribute('for')).toBe(input.id);
    expect(err.getAttribute('role')).toBe('alert');
    expect(input.getAttribute('aria-describedby')).toBe(`${desc.id} ${err.id}`);
    expect((input as any).invalid).toBe(true);
  });

  it('mirrors a disabled control onto the label and host; horizontal puts the control first', async () => {
    const { root } = await render(
      <art-field orientation="horizontal">
        <art-checkbox disabled></art-checkbox>
        <art-label slot="label">Terms</art-label>
      </art-field>,
    );
    expect(root.hasAttribute('data-disabled')).toBe(true);
    expect(root.querySelector('art-label')!.hasAttribute('disabled')).toBe(true);
    const field = root.shadowRoot!.querySelector('[part="field"]')!;
    expect(field.firstElementChild!.tagName).toBe('SLOT');
    expect(field.firstElementChild!.getAttribute('name')).toBeNull();
  });

  it('field-set renders a native fieldset with a legend', async () => {
    const { root } = await render(
      <art-field-set disabled>
        <span slot="legend">Address</span>
        <art-field><art-input aria-label="Street"></art-input></art-field>
      </art-field-set>,
    );
    const fs = root.shadowRoot!.querySelector('fieldset')!;
    expect(fs.hasAttribute('disabled')).toBe(true);
    expect(fs.querySelector('legend slot')!.getAttribute('name')).toBe('legend');
  });
});
