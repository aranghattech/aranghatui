import { afterEach, describe, expect, it, vi } from 'vitest';
import { createDismissable } from './index.js';
import { isScrollLocked } from '../scroll-lock/index.js';

afterEach(() => { document.body.innerHTML = ''; });

describe('createDismissable', () => {
  it('dismisses on pointerdown outside, not inside or on ignored elements', () => {
    const panel = document.createElement('div');
    const trigger = document.createElement('button');
    document.body.append(panel, trigger);
    const onDismiss = vi.fn();
    const d = createDismissable(panel, { onDismiss, ignore: () => [trigger] });
    panel.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, composed: true }));
    trigger.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, composed: true }));
    expect(onDismiss).not.toHaveBeenCalled();
    document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, composed: true }));
    expect(onDismiss).toHaveBeenCalledWith('pointer-outside', expect.any(Event));
    d.destroy();
  });

  it('Escape reaches only the top-most dismissable; scroll lock is reference counted', () => {
    const a = document.createElement('div'); const b = document.createElement('div');
    document.body.append(a, b);
    const onA = vi.fn(); const onB = vi.fn();
    const da = createDismissable(a, { onDismiss: onA, lockScroll: true });
    const db = createDismissable(b, { onDismiss: onB, lockScroll: true });
    expect(isScrollLocked()).toBe(true);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(onB).toHaveBeenCalledTimes(1);
    expect(onA).not.toHaveBeenCalled();
    db.destroy();
    expect(isScrollLocked()).toBe(true);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(onA).toHaveBeenCalledTimes(1);
    da.destroy();
    expect(isScrollLocked()).toBe(false);
    expect(document.documentElement.style.overflow).toBe('');
  });

  it('is shadow-DOM aware: clicks inside a shadow root count as inside', () => {
    const host = document.createElement('div');
    const shadow = host.attachShadow({ mode: 'open' });
    const inner = document.createElement('button');
    shadow.append(inner);
    document.body.append(host);
    const onDismiss = vi.fn();
    const d = createDismissable(host, { onDismiss });
    inner.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, composed: true }));
    expect(onDismiss).not.toHaveBeenCalled();
    d.destroy();
  });
});
