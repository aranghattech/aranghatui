import { describe, expect, h, it, render } from '@stencil/vitest';
import { vi } from 'vitest';

const ev = (root: Element, type: string) => { const e = root.ownerDocument.createEvent('Event'); e.initEvent(type, true, false); return e; };

describe('art-slider', () => {
  it('renders a native range input with min/max/step/value and the fill variable', async () => {
    const { root } = await render(<art-slider value="40" min={0} max={200} step={5} aria-label="Volume"></art-slider>);
    const input = root.shadowRoot!.querySelector('input')!;
    expect(input.type).toBe('range');
    expect(input.getAttribute('max')).toBe('200');
    expect(input.getAttribute('step')).toBe('5');
    expect(input.value).toBe('40');
    expect(input.getAttribute('aria-label')).toBe('Volume');
    expect(input.style.getPropertyValue('--fill')).toBe('20%');
  });
  it('emits input/change from the host with a numeric detail and clamps', async () => {
    const { root, waitForChanges } = await render(<art-slider value="103" max={100}></art-slider>);
    const input = root.shadowRoot!.querySelector('input')!;
    expect(input.value).toBe('100');
    const spy = vi.fn(); const change = vi.fn();
    root.addEventListener('input', spy); root.addEventListener('change', change);
    input.value = '30';
    input.dispatchEvent(ev(root, 'input'));
    input.dispatchEvent(ev(root, 'change'));
    await waitForChanges();
    expect((root as any).value).toBe(30);
    expect(spy.mock.calls[0]![0].detail).toEqual({ value: 30 });
    expect(change).toHaveBeenCalledTimes(1);
    expect(input.style.getPropertyValue('--fill')).toBe('30%');
  });
  it('vertical sets aria-orientation', async () => {
    const { root } = await render(<art-slider orientation="vertical" value="10"></art-slider>);
    expect(root.shadowRoot!.querySelector('input')!.getAttribute('aria-orientation')).toBe('vertical');
  });
});
