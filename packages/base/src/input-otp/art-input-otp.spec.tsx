import { describe, expect, h, it, render } from '@stencil/vitest';
import { vi } from 'vitest';

const ev = (root: Element, type: string) => { const e = root.ownerDocument.createEvent('Event'); e.initEvent(type, true, false); return e; };

describe('art-input-otp', () => {
  it('renders length slots in groups with separators over one native input', async () => {
    const { root } = await render(<art-input-otp length={6} group-size={3} aria-label="Code"></art-input-otp>);
    const sr = root.shadowRoot!;
    expect(sr.querySelectorAll('[part="slot"]').length).toBe(6);
    expect(sr.querySelectorAll('[part="separator"]').length).toBe(1);
    const input = sr.querySelector('input')!;
    expect(input.getAttribute('inputmode')).toBe('numeric');
    expect(input.getAttribute('aria-label')).toBe('Code');
  });

  it('filters to the pattern, mirrors value into the slots and emits input / complete', async () => {
    const { root, waitForChanges } = await render(<art-input-otp length={4}></art-input-otp>);
    const sr = root.shadowRoot!;
    const input = sr.querySelector('input')!;
    const onInput = vi.fn(); const onComplete = vi.fn();
    root.addEventListener('input', onInput);
    root.addEventListener('complete', onComplete);
    input.value = '12a3';
    input.dispatchEvent(ev(root, 'input'));
    expect((root as any).value).toBe('123');
    expect(onInput.mock.calls[0]![0].detail).toEqual({ value: '123' });
    expect(onComplete).not.toHaveBeenCalled();
    input.value = '1234';
    input.dispatchEvent(ev(root, 'input'));
    await waitForChanges();
    expect(Array.from(sr.querySelectorAll('[part="slot"]')).map((s) => s.textContent)).toEqual(['1', '2', '3', '4']);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });
});
