import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Menubar — shadcn/ui parity. A row of `<art-menubar-menu>`s (File, Edit, View…): one trigger is
 * in the tab order, ← / → move between them, ↓ / Enter / Space open a menu, and while one is
 * open pointing at or arrowing to another trigger switches menus.
 *
 * @slot - `<art-menubar-menu>`s.
 */
@Component({ tag: 'art-menubar', styleUrl: 'art-menubar.css', shadow: true })
export class ArtMenubar {
  @Element() host!: HTMLElement;
  /** Accessible name of the bar. */
  @Prop() label?: string;

  componentWillRender() {
    this.host.setAttribute('role', 'menubar');
    if (this.label) this.host.setAttribute('aria-label', this.label);
  }
  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', () => this.setTabbable());
    this.host.addEventListener('focusin', this.onFocusin);
    this.host.addEventListener('menubar-open', this.onMenuOpen);
    this.setTabbable();
  }
  disconnectedCallback() {
    this.host.removeEventListener('focusin', this.onFocusin);
    this.host.removeEventListener('menubar-open', this.onMenuOpen);
  }
  private menus(): Array<HTMLElement & { open: boolean; setOpen(open: boolean, byKeyboard?: boolean): Promise<void> }> { return Array.from(this.host.querySelectorAll(':scope > art-menubar-menu')); }
  private triggers(): HTMLButtonElement[] { return this.menus().map((m) => m.shadowRoot?.querySelector<HTMLButtonElement>('[part="trigger"]')).filter(Boolean) as HTMLButtonElement[]; }
  /** Roving tabindex: the last focused (else first enabled) trigger is the one in the tab order. */
  private setTabbable(active?: HTMLElement) {
    const t = this.triggers();
    const a = active ?? t.find((b) => b.tabIndex === 0 && !b.disabled) ?? t.find((b) => !b.disabled);
    for (const b of t) b.tabIndex = b === a ? 0 : -1;
  }
  private onFocusin = (e: FocusEvent) => {
    const t = e.composedPath().find((n) => (n as Element).getAttribute?.('part') === 'trigger') as HTMLElement | undefined;
    if (t) this.setTabbable(t);
  };
  /** One menu at a time: a menu opening closes its siblings. */
  private onMenuOpen = (e: Event) => {
    for (const m of this.menus()) if (m !== e.target && m.open) void m.setOpen(false);
  };

  render() {
    return (
      <Host>
        <div part="bar" class="flex h-9 items-center gap-1 rounded-md border-default bg-canvas p-1 shadow-raised">
          <slot />
        </div>
      </Host>
    );
  }
}
