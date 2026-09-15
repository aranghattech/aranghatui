import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-kbd', () => {
  it('renders a native <kbd> with the slotted key', async () => {
    const { root } = await render(<art-kbd>K</art-kbd>);
    const kbd = root.shadowRoot!.querySelector('kbd')!;
    expect(kbd.getAttribute('part')).toBe('kbd');
    expect(root.textContent).toBe('K');
  });
  it('kbd-group lays keys out in a row', async () => {
    const { root } = await render(<art-kbd-group><art-kbd>⌘</art-kbd><art-kbd>K</art-kbd></art-kbd-group>);
    expect(root.shadowRoot!.querySelector('slot')).not.toBeNull();
    expect(root.querySelectorAll('art-kbd').length).toBe(2);
  });
});
