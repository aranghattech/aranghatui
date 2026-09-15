import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createHoverIntent } from './index.js';

describe('createHoverIntent', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('opens after the open delay on pointer enter and closes after the close delay on leave', () => {
    const el = document.createElement('button');
    document.body.append(el);
    const onOpen = vi.fn(); const onClose = vi.fn();
    const h = createHoverIntent(el, { onOpen, onClose, openDelay: 300, closeDelay: 150 });
    el.dispatchEvent(new PointerEvent('pointerenter', { pointerType: 'mouse' }));
    vi.advanceTimersByTime(299); expect(onOpen).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1); expect(onOpen).toHaveBeenCalledTimes(1);
    el.dispatchEvent(new PointerEvent('pointerleave', { pointerType: 'mouse' }));
    vi.advanceTimersByTime(149); expect(onClose).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1); expect(onClose).toHaveBeenCalledTimes(1);
    h.destroy(); el.remove();
  });

  it('leaving before the open delay cancels; re-entering a panel cancels the close', () => {
    const el = document.createElement('button'); const panel = document.createElement('div');
    document.body.append(el, panel);
    const onOpen = vi.fn(); const onClose = vi.fn();
    const h = createHoverIntent(el, { onOpen, onClose, openDelay: 300, closeDelay: 150, also: () => [panel] });
    el.dispatchEvent(new PointerEvent('pointerenter', { pointerType: 'mouse' }));
    vi.advanceTimersByTime(100);
    el.dispatchEvent(new PointerEvent('pointerleave', { pointerType: 'mouse' }));
    vi.advanceTimersByTime(500); expect(onOpen).not.toHaveBeenCalled();
    el.dispatchEvent(new PointerEvent('pointerenter', { pointerType: 'mouse' })); vi.advanceTimersByTime(300); expect(onOpen).toHaveBeenCalledTimes(1);
    el.dispatchEvent(new PointerEvent('pointerleave', { pointerType: 'mouse' })); vi.advanceTimersByTime(50);
    panel.dispatchEvent(new PointerEvent('pointerenter', { pointerType: 'mouse' })); vi.advanceTimersByTime(500);
    expect(onClose).not.toHaveBeenCalled();
    h.destroy(); el.remove(); panel.remove();
  });

  it('touch: press-and-hold opens, a quick tap does not; mouse-type enter is ignored for touch', () => {
    const el = document.createElement('button'); document.body.append(el);
    const onOpen = vi.fn(); const onClose = vi.fn();
    const h = createHoverIntent(el, { onOpen, onClose, openDelay: 300, closeDelay: 150 });
    el.dispatchEvent(new PointerEvent('pointerdown', { pointerType: 'touch' })); vi.advanceTimersByTime(100);
    el.dispatchEvent(new PointerEvent('pointerup', { pointerType: 'touch' })); vi.advanceTimersByTime(500);
    expect(onOpen).not.toHaveBeenCalled();
    el.dispatchEvent(new PointerEvent('pointerdown', { pointerType: 'touch' })); vi.advanceTimersByTime(300);
    expect(onOpen).toHaveBeenCalledTimes(1);
    h.destroy(); el.remove();
  });
});
