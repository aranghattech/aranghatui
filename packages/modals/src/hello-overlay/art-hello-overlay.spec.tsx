import { describe, expect, h, it, render } from '@stencil/vitest';
import { vi } from 'vitest';

describe('art-hello-overlay', () => {
  it('renders nothing when closed and a dialog when open', async () => {
    const { root, waitForChanges } = await render(<art-hello-overlay name="Ada"></art-hello-overlay>);
    expect(root.shadowRoot!.querySelector('[role=dialog]')).toBeNull();
    (root as any).open = true;
    await waitForChanges();
    expect(root.shadowRoot!.querySelector('[role=dialog]')).not.toBeNull();
    expect((root.shadowRoot!.querySelector('art-hello') as any).name).toBe('Ada');
  });

  it('emits open-change {open:false} on close', async () => {
    const { root, waitForChanges } = await render(<art-hello-overlay open></art-hello-overlay>);
    const spy = vi.fn();
    root.addEventListener('open-change', spy);
    root.shadowRoot!.querySelector<HTMLButtonElement>('[part=close]')!.click();
    await waitForChanges();
    expect(spy.mock.calls[0]![0].detail).toEqual({ open: false });
    expect((root as any).open).toBe(false);
  });
});
