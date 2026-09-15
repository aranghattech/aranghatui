import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-button-group', () => {
  it('is a group that slots its children and reflects orientation', async () => {
    const { root } = await render(
      <art-button-group orientation="vertical">
        <art-button>A</art-button>
        <art-button>B</art-button>
      </art-button-group>,
    );
    expect(root.getAttribute('role')).toBe('group');
    expect(root).toHaveAttribute('orientation');
    expect(root.hasAttribute('data-nested')).toBe(false);
  });

  it('marks a group of groups as nested', async () => {
    const { root } = await render(
      <art-button-group>
        <art-button-group><art-button>1</art-button></art-button-group>
        <art-button-group><art-button>2</art-button></art-button-group>
      </art-button-group>,
    );
    expect(root.hasAttribute('data-nested')).toBe(true);
    expect(root.querySelector('art-button-group')!.hasAttribute('data-nested')).toBe(false);
  });

  it('button-group-text slots its content', async () => {
    const { root } = await render(<art-button-group-text>USD</art-button-group-text>);
    expect(root.textContent).toBe('USD');
    expect(root.shadowRoot!.querySelector('slot')).not.toBeNull();
  });
});
