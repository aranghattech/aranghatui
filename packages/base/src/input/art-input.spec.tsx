import { describe, expect, h, it, render } from '@stencil/vitest';
import { vi } from 'vitest';

const ev = (root: Element, type: string) => { const e = root.ownerDocument.createEvent('Event'); e.initEvent(type, true, false); return e; };

describe('art-input', () => {
  it('renders a native input with size, placeholder and type', async () => {
    const { root } = await render(<art-input type="email" placeholder="Email" size="lg"></art-input>);
    const input = root.shadowRoot!.querySelector('input')!;
    expect(input.getAttribute('type')).toBe('email');
    expect(input.getAttribute('placeholder')).toBe('Email');
    expect(input.className).toContain('field-lg');
    expect(input.getAttribute('part')).toBe('input');
  });

  it('emits input and change from the host with detail.value and mirrors value', async () => {
    const { root } = await render(<art-input></art-input>);
    const input = root.shadowRoot!.querySelector('input')!;
    const onInput = vi.fn(); const onChange = vi.fn();
    root.addEventListener('input', onInput);
    root.addEventListener('change', onChange);
    input.value = 'hi';
    input.dispatchEvent(ev(root, 'input'));
    input.dispatchEvent(ev(root, 'change'));
    expect((root as any).value).toBe('hi');
    expect(onInput.mock.calls[0]![0].detail).toEqual({ value: 'hi' });
    expect(onInput.mock.calls[0]![0].target).toBe(root);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('invalid sets aria-invalid; disabled reflects', async () => {
    const { root } = await render(<art-input invalid disabled></art-input>);
    const input = root.shadowRoot!.querySelector('input')!;
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(input.hasAttribute('disabled')).toBe(true);
    expect(root).toHaveAttribute('invalid');
  });

  it('resolves aria-labelledby text across the boundary onto the native input', async () => {
    const { root } = await render(
      <div>
        <span id="lbl">Email address</span>
        <art-input aria-labelledby="lbl" aria-label={undefined}></art-input>
      </div>,
    );
    const input = root.querySelector('art-input')!.shadowRoot!.querySelector('input')!;
    expect(input.getAttribute('aria-label')).toBe('Email address');
  });
});
