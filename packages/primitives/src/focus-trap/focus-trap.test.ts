import { afterEach, describe, expect, it } from 'vitest';
import { trapFocus } from './index.js';
import { getTabbables } from '../dom/index.js';

afterEach(() => { document.body.innerHTML = ''; });

function dialog() {
  document.body.innerHTML = `
    <button id="outside">outside</button>
    <div id="dialog"><button id="a">a</button><input id="b"><button id="c" disabled>c</button><a id="d" href="#">d</a></div>`;
  return document.getElementById('dialog') as HTMLElement;
}
const tab = (shift = false) => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', shiftKey: shift, bubbles: true, cancelable: true }));

describe('trapFocus', () => {
  it('finds tabbables in order, skipping disabled', () => {
    const d = dialog();
    expect(getTabbables(d).map((e) => e.id)).toEqual(['a', 'b', 'd']);
  });

  it('focuses first, cycles at the edges, restores focus on release', () => {
    const d = dialog();
    const outside = document.getElementById('outside') as HTMLButtonElement;
    outside.focus();
    const trap = trapFocus(d);
    expect(document.activeElement?.id).toBe('a');
    tab(true);
    expect(document.activeElement?.id).toBe('d');
    tab();
    expect(document.activeElement?.id).toBe('a');
    trap.release();
    expect(document.activeElement).toBe(outside);
  });

  it('pulls focus back when it escapes the container', () => {
    const d = dialog();
    const trap = trapFocus(d);
    (document.getElementById('outside') as HTMLButtonElement).focus();
    expect(document.activeElement?.id).toBe('a');
    trap.release();
  });

  it('descends into shadow roots', () => {
    document.body.innerHTML = `<div id="dialog"></div>`;
    const d = document.getElementById('dialog') as HTMLElement;
    const host = document.createElement('x-host');
    const inner = document.createElement('button');
    inner.id = 'inner';
    host.attachShadow({ mode: 'open' }).append(inner);
    d.append(host);
    expect(getTabbables(d).map((e) => e.id)).toEqual(['inner']);
  });
});
