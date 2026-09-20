import { describe, expect, h, it, render } from '@stencil/vitest';

const spaces = (
  <art-workspace-switcher value="acme">
    <art-workspace-switcher-item value="acme" name="Acme Inc" plan="Enterprise" shortcut="⌘1">
      <svg id="acme-logo" viewBox="0 0 24 24" />
    </art-workspace-switcher-item>
    <art-workspace-switcher-item value="monsters" name="Monsters Inc" plan="Startup">
      <svg id="monsters-logo" viewBox="0 0 24 24" />
    </art-workspace-switcher-item>
    <art-menu-item slot="action" value="add">Add workspace</art-menu-item>
  </art-workspace-switcher>
);

describe('art-workspace-switcher', () => {
  it('wires the trigger and the menu, and marks the active workspace', async () => {
    const { root, waitForChanges } = await render(spaces);
    await waitForChanges();

    const trigger = root.shadowRoot!.querySelector('[part="trigger"]')!;
    expect(trigger.getAttribute('aria-haspopup')).toBe('menu');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');

    const panel = root.shadowRoot!.querySelector('[part="content"]')!;
    expect(panel.getAttribute('role')).toBe('menu');
    expect(panel.getAttribute('aria-label')).toBe('Workspaces');

    const items = Array.from(root.querySelectorAll('art-workspace-switcher-item'));
    expect(items.map((i) => i.getAttribute('role'))).toEqual(['menuitemradio', 'menuitemradio']);
    expect(items.map((i) => i.getAttribute('aria-checked'))).toEqual(['true', 'false']);
    // the row's light DOM is only its logo: type-ahead reads the name from the prop
    expect(items[0]!.getAttribute('data-text')).toBe('Acme Inc');
  });

  it('fills the trigger from the active row — name, plan and a copy of its logo', async () => {
    const { root, waitForChanges } = await render(spaces);
    await waitForChanges();
    const shadow = root.shadowRoot!;

    expect(shadow.querySelector('[part="name"]')!.textContent).toBe('Acme Inc');
    expect(shadow.querySelector('[part="plan"]')!.textContent).toBe('Enterprise');
    expect(shadow.querySelector('[part="logo"] svg')!.getAttribute('id')).toBe('acme-logo');
    // a plan on the active row is what makes the trigger two-line
    expect(root.hasAttribute('data-two-line')).toBe(true);
  });

  it('follows `value`: the trigger and the checked row both move', async () => {
    const { root, waitForChanges } = await render(spaces);
    await waitForChanges();

    (root as HTMLElement & { value: string }).value = 'monsters';
    await waitForChanges();

    expect(root.shadowRoot!.querySelector('[part="name"]')!.textContent).toBe('Monsters Inc');
    expect(root.shadowRoot!.querySelector('[part="logo"] svg')!.getAttribute('id')).toBe('monsters-logo');
    const items = Array.from(root.querySelectorAll('art-workspace-switcher-item'));
    expect(items.map((i) => i.getAttribute('aria-checked'))).toEqual(['false', 'true']);
  });

  it('shows the placeholder when no row matches `value`', async () => {
    const { root, waitForChanges } = await render(
      <art-workspace-switcher value="nobody" placeholder="Pick one">
        <art-workspace-switcher-item value="acme" name="Acme Inc" />
      </art-workspace-switcher>,
    );
    await waitForChanges();
    const name = root.shadowRoot!.querySelector('[part="name"]')!;
    expect(name.textContent).toBe('Pick one');
    expect(name.hasAttribute('data-placeholder')).toBe(true);
  });

  it('separates the action rows only when the slot is filled', async () => {
    const { root, waitForChanges } = await render(spaces);
    await waitForChanges();
    expect(root.shadowRoot!.querySelector('[part="separator"]')).not.toBeNull();

    const bare = await render(
      <art-workspace-switcher value="acme">
        <art-workspace-switcher-item value="acme" name="Acme Inc" />
      </art-workspace-switcher>,
    );
    await bare.waitForChanges();
    expect(bare.root.shadowRoot!.querySelector('[part="separator"]')).toBeNull();
  });

  it('`display="icon"` clips the trigger and offers the name as a tooltip', async () => {
    const { root, waitForChanges } = await render(
      <art-workspace-switcher value="acme" display="icon">
        <art-workspace-switcher-item value="acme" name="Acme Inc" plan="Enterprise" />
      </art-workspace-switcher>,
    );
    await waitForChanges();
    expect(root.hasAttribute('data-icon')).toBe(true);
    // the two-line layout is off in the square, whatever the plan says
    expect(root.hasAttribute('data-two-line')).toBe(false);
    const tip = root.shadowRoot!.querySelector('[part="tooltip"]')!;
    expect(tip.getAttribute('role')).toBe('tooltip');
    expect(tip.textContent).toBe('Acme Inc');
  });

  it('`display="full"` keeps the full trigger and no tooltip', async () => {
    const { root, waitForChanges } = await render(
      <art-workspace-switcher value="acme" display="full">
        <art-workspace-switcher-item value="acme" name="Acme Inc" plan="Enterprise" />
      </art-workspace-switcher>,
    );
    await waitForChanges();
    expect(root.hasAttribute('data-icon')).toBe(false);
    expect(root.shadowRoot!.querySelector('[part="tooltip"]')).toBeNull();
  });

  it('disables the trigger', async () => {
    const { root, waitForChanges } = await render(
      <art-workspace-switcher value="acme" disabled>
        <art-workspace-switcher-item value="acme" name="Acme Inc" />
      </art-workspace-switcher>,
    );
    await waitForChanges();
    expect((root.shadowRoot!.querySelector('[part="trigger"]') as HTMLButtonElement).disabled).toBe(true);
  });
});

describe('art-workspace-switcher-item', () => {
  it('renders the name, the plan and the shortcut, and ticks only when active', async () => {
    const { root, waitForChanges } = await render(
      <art-workspace-switcher-item value="acme" name="Acme Inc" plan="Enterprise" shortcut="⌘1" />,
    );
    await waitForChanges();
    const shadow = root.shadowRoot!;
    expect(shadow.querySelector('[part="name"]')!.textContent).toBe('Acme Inc');
    expect(shadow.querySelector('[part="plan"]')!.textContent).toBe('Enterprise');
    expect(shadow.querySelector('[part="shortcut"]')!.textContent).toBe('⌘1');
    expect(shadow.querySelector('[part="check"] svg')).toBeNull();

    (root as HTMLElement & { active: boolean }).active = true;
    await waitForChanges();
    expect(shadow.querySelector('[part="check"] svg')).not.toBeNull();
    expect(root.getAttribute('aria-checked')).toBe('true');
  });

  it('marks a disabled row for assistive tech', async () => {
    const { root, waitForChanges } = await render(<art-workspace-switcher-item value="a" name="A" disabled />);
    await waitForChanges();
    expect(root.getAttribute('aria-disabled')).toBe('true');
    expect(root.getAttribute('tabindex')).toBe('-1');
  });
});
