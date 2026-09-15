import { afterEach, describe, expect, it } from 'vitest';
import { resolveAria, textFromIds } from './index.js';

afterEach(() => { document.body.innerHTML = ''; });

describe('aria helpers', () => {
  it('joins referenced text from the host tree and falls back to the document', () => {
    document.body.innerHTML = `<span id="a">First</span><span id="b"> Second </span><div id="host"></div>`;
    const host = document.getElementById('host')!;
    expect(textFromIds(host, 'a b')).toBe('First Second');
    expect(textFromIds(host, 'missing')).toBeUndefined();
    expect(resolveAria(host, { labelledby: 'a', describedby: 'b' })).toEqual({ label: 'First', description: 'Second' });
    expect(resolveAria(host, { labelledby: 'a' }, 'Direct').label).toBe('Direct');
  });
});
