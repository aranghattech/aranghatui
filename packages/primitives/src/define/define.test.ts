import { describe, expect, it } from 'vitest';
import { defineIdempotent } from './index.js';

describe('defineIdempotent', () => {
  it('registers once and ignores repeats', () => {
    class A extends HTMLElement {}
    class B extends HTMLElement {}
    expect(defineIdempotent('art-test-once', A)).toBe(true);
    expect(defineIdempotent('art-test-once', B)).toBe(false);
    expect(customElements.get('art-test-once')).toBe(A);
  });
});
