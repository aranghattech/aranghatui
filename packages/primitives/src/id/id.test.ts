import { describe, expect, it } from 'vitest';
import { resetIdCounter, uniqueId } from './index.js';

describe('uniqueId', () => {
  it('is unique and prefixed', () => {
    resetIdCounter();
    const a = uniqueId('art-button');
    const b = uniqueId('art-button');
    expect(a).not.toBe(b);
    expect(a.startsWith('art-button-')).toBe(true);
  });
});
