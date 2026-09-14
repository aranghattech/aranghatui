import { afterEach, describe, expect, it } from 'vitest';
import { createFloating } from './index.js';

afterEach(() => { document.body.innerHTML = ''; });

describe('createFloating', () => {
  it('positions with translate(), reports placement and cleans up', async () => {
    const ref = document.createElement('button');
    const pop = document.createElement('div');
    document.body.append(ref, pop);
    let positioned = 0;
    const f = createFloating(ref, pop, { placement: 'top', offset: () => 8, onPositioned: () => positioned++ });
    await f.update();
    expect(pop.style.position).toBe('absolute');
    expect(pop.style.transform).toMatch(/^translate\(-?\d+px, -?\d+px\)$/);
    expect(pop.dataset.placement).toMatch(/^(top|bottom)/);
    expect(positioned).toBeGreaterThan(0);
    f.destroy();
    const before = positioned;
    await f.update();
    expect(positioned).toBe(before);
  });
});
