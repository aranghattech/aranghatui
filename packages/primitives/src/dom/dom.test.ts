import { afterEach, describe, expect, it } from 'vitest';
import { closestAcrossShadow, cssLength, deepActiveElement, isRtl } from './index.js';

afterEach(() => { document.body.innerHTML = ''; });

describe('dom helpers', () => {
  it('crosses shadow boundaries for closest() and active element', () => {
    document.body.innerHTML = `<div data-brand="example"><x-host></x-host></div>`;
    const host = document.querySelector('x-host') as HTMLElement;
    const inner = document.createElement('button');
    host.attachShadow({ mode: 'open' }).append(inner);
    expect(closestAcrossShadow(inner, '[data-brand]')?.getAttribute('data-brand')).toBe('example');
    inner.focus();
    expect(deepActiveElement()).toBe(inner);
    expect(isRtl(inner)).toBe(false);
  });
  it('reads token lengths in px (rem resolved against the root font size)', () => {
    document.documentElement.style.fontSize = '16px';
    const el = document.createElement('div');
    el.style.setProperty('--art-space-2', '0.5rem');
    document.body.append(el);
    expect(cssLength(el, '--art-space-2')).toBe(8);
    expect(cssLength(el, '--art-missing')).toBe(0);
  });
});
