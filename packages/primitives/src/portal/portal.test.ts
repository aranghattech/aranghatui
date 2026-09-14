import { afterEach, describe, expect, it } from 'vitest';
import { getPortalRoot, portal } from './index.js';

afterEach(() => { document.body.innerHTML = ''; });

describe('portal', () => {
  it('moves the element to the shared root, stacks, inherits theme attributes, and restores', () => {
    document.body.innerHTML = `<section data-theme="dark" data-brand="example" dir="rtl"><div id="p"><span id="el">x</span></div></section>`;
    const el = document.getElementById('el') as HTMLElement;
    const parent = document.getElementById('p') as HTMLElement;
    const p = portal(el, { layer: 'modal' });
    expect(el.parentElement).toBe(p.wrapper);
    expect(p.wrapper.parentElement).toBe(getPortalRoot());
    expect(p.wrapper.getAttribute('data-theme')).toBe('dark');
    expect(p.wrapper.getAttribute('data-brand')).toBe('example');
    expect(p.wrapper.getAttribute('dir')).toBe('rtl');
    expect(el.style.zIndex).toBe('var(--art-z-modal)');
    const second = portal(document.createElement('div'));
    expect(getPortalRoot().lastElementChild).toBe(second.wrapper);
    p.restore();
    expect(el.parentElement).toBe(parent);
    expect(el.style.zIndex).toBe('');
    expect(getPortalRoot().contains(p.wrapper)).toBe(false);
    second.restore();
  });

  it('creates the root once', () => {
    expect(getPortalRoot()).toBe(getPortalRoot());
    expect(document.body.querySelectorAll('[data-art-portal]').length).toBe(1);
  });
});
