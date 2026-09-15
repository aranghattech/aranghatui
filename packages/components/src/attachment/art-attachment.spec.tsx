import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-attachment', () => {
  it('renders name, description and the default icon; uploading shows progress', async () => {
    const { root, waitForChanges } = await render(<art-attachment name="a.pdf" description="PDF · 1 MB" />);
    await waitForChanges();
    expect(root.shadowRoot!.querySelector('[part="title"]')!.textContent).toBe('a.pdf');
    expect(root.shadowRoot!.querySelector('[part="description"]')!.textContent).toBe('PDF · 1 MB');
    expect(root.shadowRoot!.querySelector('[part="media"] svg')).not.toBeNull();
    (root as any).state = 'uploading'; (root as any).progress = 42;
    await waitForChanges();
    expect(root.shadowRoot!.querySelector('[part="description"]')!.textContent).toBe('Uploading 42%');
  });
  it('renders a link or button trigger and flags image media', async () => {
    const { root, waitForChanges } = await render(<art-attachment href="#f" name="f.pdf"><img slot="media" alt="" /></art-attachment>);
    await waitForChanges();
    expect(root.shadowRoot!.querySelector('a[part="trigger"]')!.getAttribute('aria-label')).toBe('f.pdf');
    expect(root.hasAttribute('data-image')).toBe(true);
    (root as any).href = undefined; (root as any).triggerLabel = 'Preview f.pdf';
    await waitForChanges();
    expect(root.shadowRoot!.querySelector('button[part="trigger"]')!.getAttribute('aria-label')).toBe('Preview f.pdf');
  });
});
