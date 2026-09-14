import { describe, expect, h, it, render } from '@stencil/vitest';
import { vi } from 'vitest';

describe('art-hello', () => {
  it('renders with default props', async () => {
    const { root } = await render(<art-hello></art-hello>);
    expect(root).toHaveShadowRoot();
    expect(root).toHaveTextContent('Hello, World!');
  });

  it('reflects variant and emits a kebab-case custom event with typed detail', async () => {
    const { root, waitForChanges } = await render(<art-hello name="Ada" variant="outline"></art-hello>);
    expect(root).toHaveAttribute('variant', 'outline');
    const spy = vi.fn();
    root.addEventListener('greet', spy);
    root.shadowRoot!.querySelector('button')!.click();
    await waitForChanges();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0]![0].detail).toEqual({ name: 'Ada' });
  });

  it('does not emit when disabled', async () => {
    const { root } = await render(<art-hello disabled></art-hello>);
    const spy = vi.fn();
    root.addEventListener('greet', spy);
    root.shadowRoot!.querySelector('button')!.click();
    expect(spy).not.toHaveBeenCalled();
  });
});
