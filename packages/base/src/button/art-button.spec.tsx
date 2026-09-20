import { describe, expect, h, it, render } from '@stencil/vitest';
import { vi } from 'vitest';

describe('art-button', () => {
  it('renders a native button with default variant/size and slots', async () => {
    const { root } = await render(<art-button>Save</art-button>);
    const btn = root.shadowRoot!.querySelector('button')!;
    expect(btn).not.toBeNull();
    expect(btn.getAttribute('type')).toBe('button');
    expect(btn.getAttribute('part')).toBe('button');
    expect(root).toHaveAttribute('variant', 'default');
    expect(root).toHaveAttribute('size', 'md');
    expect(root).toHaveTextContent('Save');
    expect(root.shadowRoot!.querySelectorAll('slot').length).toBe(3);
  });

  it('applies variant and size classes and reflects props', async () => {
    const { root } = await render(<art-button variant="outline" size="lg"></art-button>);
    const btn = root.shadowRoot!.querySelector('button')!;
    expect(btn.className).toContain('border-default');
    expect(btn.className).toContain('control-lg');
    expect(root).toHaveAttribute('variant', 'outline');
  });

  it('icon buttons are square and the host aria-label moves onto the inner control', async () => {
    const { root } = await render(<art-button icon size="sm" aria-label="Add"></art-button>);
    const btn = root.shadowRoot!.querySelector('button')!;
    expect(btn.className).toContain('control-icon-sm');
    expect(btn.getAttribute('aria-label')).toBe('Add');
    expect(root.hasAttribute('aria-label')).toBe(false);
  });

  it('disabled: native disabled attribute, no click reaches the host', async () => {
    const { root } = await render(<art-button disabled>x</art-button>);
    const btn = root.shadowRoot!.querySelector('button')!;
    expect(btn.hasAttribute('disabled')).toBe(true);
    const spy = vi.fn();
    root.addEventListener('click', spy);
    btn.click();
    expect(spy).not.toHaveBeenCalled();
  });

  it('loading: aria-busy on host, spinner replaces start slot, clicks are swallowed', async () => {
    const { root } = await render(<art-button loading>x</art-button>);
    expect(root).toHaveAttribute('aria-busy', 'true');
    const btn = root.shadowRoot!.querySelector('button')!;
    expect(btn.getAttribute('aria-disabled')).toBe('true');
    expect(root.shadowRoot!.querySelector('svg')).not.toBeNull();
    expect(root.shadowRoot!.querySelector('slot[name="start"]')).toBeNull();
    const spy = vi.fn();
    root.addEventListener('click', spy);
    btn.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true, cancelable: true }));
    expect(spy).not.toHaveBeenCalled();
  });

  it('tightens padding on the side that carries an icon', async () => {
    const { root } = await render(<art-button><span slot="start">i</span>Label</art-button>);
    const btn = root.shadowRoot!.querySelector('button')!;
    expect(btn.className).toContain('control-icon-start-md');
    expect(btn.className).not.toContain('control-icon-end-md');
  });

  it('reflects full and rounded so the host can be styled from outside', async () => {
    const { root } = await render(<art-button full rounded>Continue</art-button>);
    expect(root.hasAttribute('full')).toBe(true);
    expect(root.hasAttribute('rounded')).toBe(true);
    const { root: plain } = await render(<art-button>Continue</art-button>);
    expect(plain.hasAttribute('full')).toBe(false);
    expect(plain.hasAttribute('rounded')).toBe(false);
  });

  it('aria-expanded, -haspopup, -description and -keyshortcuts move from the host onto the native button', async () => {
    const { root, waitForChanges } = await render(
      <art-button aria-expanded="false" aria-haspopup="menu" aria-description="More actions" aria-keyshortcuts="Control+M">
        Open
      </art-button>,
    );
    const btn = root.shadowRoot!.querySelector('button')!;
    expect(btn.getAttribute('aria-expanded')).toBe('false');
    expect(btn.getAttribute('aria-haspopup')).toBe('menu');
    expect(btn.getAttribute('aria-description')).toBe('More actions');
    expect(btn.getAttribute('aria-keyshortcuts')).toBe('Control+M');
    for (const attr of ['aria-expanded', 'aria-haspopup', 'aria-description', 'aria-keyshortcuts']) expect(root.hasAttribute(attr)).toBe(false);
    // A popover trigger updates the host attribute later; the button follows.
    root.setAttribute('aria-expanded', 'true');
    await waitForChanges();
    expect(btn.getAttribute('aria-expanded')).toBe('true');
    expect(root.hasAttribute('aria-expanded')).toBe(false);
  });

  it('forwards the same attributes onto the anchor when href is set', async () => {
    const { root } = await render(<art-button href="/k" aria-keyshortcuts="Control+K">Go</art-button>);
    expect(root.shadowRoot!.querySelector('a')!.getAttribute('aria-keyshortcuts')).toBe('Control+K');
  });

  it('href renders an anchor with target/rel and part="button"', async () => {
    const { root } = await render(<art-button href="/docs" target="_blank" rel="noreferrer">Docs</art-button>);
    const a = root.shadowRoot!.querySelector('a')!;
    expect(a).not.toBeNull();
    expect(a.getAttribute('href')).toBe('/docs');
    expect(a.getAttribute('target')).toBe('_blank');
    expect(a.getAttribute('rel')).toBe('noreferrer');
    expect(root.shadowRoot!.querySelector('button')).toBeNull();
  });
});
