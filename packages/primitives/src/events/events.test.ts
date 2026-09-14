import { describe, expect, it } from 'vitest';
import { emit, redispatch } from './index.js';

describe('redispatch', () => {
  it('re-emits a non-composed native event from the host as composed + bubbling', () => {
    const host = document.createElement('div');
    const shadow = host.attachShadow({ mode: 'open' });
    const input = document.createElement('input');
    shadow.append(input);
    input.addEventListener('change', (e) => redispatch(host, e));

    const seen: Event[] = [];
    document.body.append(host);
    document.body.addEventListener('change', (e) => seen.push(e));
    input.dispatchEvent(new Event('change', { bubbles: true }));

    expect(seen).toHaveLength(1);
    expect(seen[0]!.target).toBe(host);
    expect(seen[0]!.composed).toBe(true);
  });
});

describe('emit', () => {
  it('dispatches a composed CustomEvent with typed detail', () => {
    const host = document.createElement('div');
    let detail: unknown;
    host.addEventListener('open-change', (e) => (detail = (e as CustomEvent).detail));
    emit(host, 'open-change', { open: true });
    expect(detail).toEqual({ open: true });
  });
  it('rejects non kebab-case names in dev', () => {
    const host = document.createElement('div');
    expect(() => emit(host, 'openChange', {})).toThrow(/kebab-case/);
  });
});
