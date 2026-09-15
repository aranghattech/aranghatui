import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-carousel', () => {
  it('names the region and its slides and renders the controls', async () => {
    const { root, waitForChanges } = await render(
      <art-carousel aria-label="Numbers">
        <art-carousel-item>1</art-carousel-item>
        <art-carousel-item>2</art-carousel-item>
        <art-carousel-item>3</art-carousel-item>
      </art-carousel>,
    );
    await waitForChanges();
    expect(root.getAttribute('role')).toBe('region');
    expect(root.getAttribute('aria-roledescription')).toBe('carousel');
    const items = Array.from(root.querySelectorAll('art-carousel-item'));
    expect(items.map((i) => i.getAttribute('aria-label'))).toEqual(['1 of 3', '2 of 3', '3 of 3']);
    expect(items[0]!.getAttribute('role')).toBe('group');
    expect(root.shadowRoot!.querySelector('[part="previous"]')!.getAttribute('aria-label')).toBe('Previous slide');
    expect(root.shadowRoot!.querySelector('[part="next"]')).not.toBeNull();
  });
});
