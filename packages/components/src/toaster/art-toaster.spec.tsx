import { describe, expect, h, it, render } from '@stencil/vitest';
// the same module instance the built toaster subscribes to (the store is bundled into the tier entry)
import { toast, toastStore } from '../../dist/components/index.js';

describe('art-toaster', () => {
  it('renders declarative toasts with roles and icons per variant', async () => {
    const { root, waitForChanges } = await render(
      <art-toaster inline>
        <art-toast duration={0}>Saved</art-toast>
        <art-toast variant="error" duration={0} label="Failed" description="Try again" />
      </art-toaster>,
    );
    await waitForChanges();
    const [a, b] = Array.from(root.querySelectorAll('art-toast'));
    expect(a!.getAttribute('role')).toBe('status');
    expect(b!.getAttribute('role')).toBe('alert');
    expect(b!.shadowRoot!.querySelector('.title')!.textContent).toBe('Failed');
    expect(b!.shadowRoot!.querySelector('.variant-icon')).not.toBeNull();
    expect(root.shadowRoot!.querySelector('[part="region"]')!.getAttribute('aria-label')).toBe('Notifications');
  });
  it('renders imperative toasts from the store and removes them on dismiss', async () => {
    toastStore.dismiss();
    const { root, waitForChanges } = await render(<art-toaster inline />);
    await waitForChanges();
    const id = toast.success('Done', { description: 'All good' });
    await waitForChanges();
    const el = root.shadowRoot!.querySelector(`art-toast[data-id="${id}"]`) as any;
    expect(el).not.toBeNull();
    expect(el.variant).toBe('success');
    expect(el.label).toBe('Done');
    toast.dismiss(id);
    await waitForChanges();
    expect(root.shadowRoot!.querySelector('art-toast')).toBeNull();
  });
});
