import { describe, expect, h, it, render } from '@stencil/vitest';
import { vi } from 'vitest';

describe('art-slider', () => {
  it('renders a slider thumb with ARIA values and positions the range', async () => {
    const { root } = await render(<art-slider value="40" min={0} max={200} aria-label="Volume"></art-slider>);
    const thumb = root.shadowRoot!.querySelector('[role="slider"]')!;
    expect(thumb.getAttribute('aria-valuenow')).toBe('40');
    expect(thumb.getAttribute('aria-valuemax')).toBe('200');
    expect(thumb.getAttribute('aria-label')).toBe('Volume');
    expect((thumb as HTMLElement).style.insetInlineStart).toBe('20%');
  });

  it('parses a range attribute, keeps thumbs ordered and emits input/change on keys', async () => {
    const { root, waitForChanges } = await render(<art-slider value="25,75" step={5} aria-label="Price"></art-slider>);
    const thumbs = root.shadowRoot!.querySelectorAll<HTMLElement>('[role="slider"]');
    expect(thumbs.length).toBe(2);
    expect(thumbs[0]!.getAttribute('aria-label')).toBe('Price minimum');
    expect(thumbs[0]!.getAttribute('aria-valuemax')).toBe('75');
    const input = vi.fn(); const change = vi.fn();
    root.addEventListener('input', input); root.addEventListener('change', change);
    const key = (el: Element, k: string) => el.dispatchEvent(new (root.ownerDocument.defaultView as any).KeyboardEvent('keydown', { key: k, bubbles: true, cancelable: true }));
    key(thumbs[0]!, 'ArrowRight');
    await waitForChanges();
    expect((root as any).value).toEqual([30, 75]);
    expect(input.mock.calls[0]![0].detail).toEqual({ value: [30, 75] });
    expect(change).toHaveBeenCalledTimes(1);
    key(thumbs[0]!, 'End'); // clamped to the other thumb
    await waitForChanges();
    expect((root as any).value).toEqual([75, 75]);
  });

  it('snaps to step and clamps to min/max', async () => {
    const { root } = await render(<art-slider value="103" step={10} max={100}></art-slider>);
    expect(root.shadowRoot!.querySelector('[role="slider"]')!.getAttribute('aria-valuenow')).toBe('100');
  });
});
