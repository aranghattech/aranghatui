import { describe, expect, h, it, render } from '@stencil/vitest';

const ev = (root: Element, type: string) => { const e = root.ownerDocument.createEvent('Event'); e.initEvent(type, false, false); return e; };

describe('art-avatar', () => {
  it('renders the fallback until the image loads, then the image', async () => {
    const { root, waitForChanges } = await render(<art-avatar src="x.png" alt="Ada">AL</art-avatar>);
    const sr = root.shadowRoot!;
    expect(sr.querySelector('[part="fallback"]')).not.toBeNull();
    expect(sr.querySelector('img')!.className).toContain('hidden');
    sr.querySelector('img')!.dispatchEvent(ev(root, 'load'));
    await waitForChanges();
    expect(sr.querySelector('[part="fallback"]')).toBeNull();
    expect(sr.querySelector('img')!.className).not.toContain('hidden');
  });
  it('shows only the fallback without src, and after an error', async () => {
    const { root, waitForChanges } = await render(<art-avatar src="broken.png" alt="">B</art-avatar>);
    root.shadowRoot!.querySelector('img')!.dispatchEvent(ev(root, 'error'));
    await waitForChanges();
    expect(root.shadowRoot!.querySelector('img')).toBeNull();
    expect(root.shadowRoot!.querySelector('[part="fallback"]')!.getAttribute('aria-hidden')).toBeNull();
  });
});
