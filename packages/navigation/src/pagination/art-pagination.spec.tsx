import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-pagination', () => {
  it('renders the page range with ellipses and marks the current page', async () => {
    const { root, waitForChanges } = await render(<art-pagination page={12} total={40} />);
    await waitForChanges();
    const pages = Array.from(root.shadowRoot!.querySelectorAll('[part="page"]')).map((b) => b.textContent);
    expect(pages).toEqual(['1', '11', '12', '13', '40']);
    expect(root.shadowRoot!.querySelectorAll('[part="ellipsis"]').length).toBe(2);
    expect(root.shadowRoot!.querySelector('[aria-current="page"]')!.textContent).toBe('12');
    expect(root.shadowRoot!.querySelector('nav')!.getAttribute('aria-label')).toBe('pagination');
  });
  it('disables previous on the first page and renders links with href-template', async () => {
    const { root, waitForChanges } = await render(<art-pagination page={1} total={3} href-template="?page={page}" />);
    await waitForChanges();
    const prev = root.shadowRoot!.querySelector('[part="previous"]')!;
    expect(prev.tagName).toBe('A');
    expect(prev.getAttribute('aria-disabled')).toBe('true');
    expect(root.shadowRoot!.querySelector('[part="next"]')!.getAttribute('href')).toBe('?page=2');
  });
});
