import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Navigation Menu — shadcn/ui parity. A site navigation bar: a list of links and triggers that
 * reveal rich panels below the bar (on hover, click, Enter / Space or ↓). Panels sit on the
 * platform top layer; one is open at a time.
 *
 * @slot - `<art-navigation-menu-item>`s.
 * @part list - The `<ul>`.
 */
@Component({ tag: 'art-navigation-menu', styleUrl: 'art-navigation-menu.css', shadow: true })
export class ArtNavigationMenu {
  @Element() host!: HTMLElement;
  /** Accessible name of the `<nav>`. */
  @Prop() label = 'Main';

  connectedCallback() {
    this.host.addEventListener('navigation-menu-open', this.onItemOpen);
    this.host.addEventListener('keydown', this.onKeydown);
  }
  disconnectedCallback() {
    this.host.removeEventListener('navigation-menu-open', this.onItemOpen);
    this.host.removeEventListener('keydown', this.onKeydown);
  }
  private items(): Array<HTMLElement & { open: boolean; setOpen(open: boolean, byKeyboard?: boolean): Promise<void> }> { return Array.from(this.host.querySelectorAll(':scope > art-navigation-menu-item')); }
  /** One panel at a time. */
  private onItemOpen = (e: Event) => { for (const i of this.items()) if (i !== e.target && i.open) void i.setOpen(false); };
  /** ← / → move between the bar's triggers and links. */
  private onKeydown = (e: KeyboardEvent) => {
    const rtl = this.host.matches(':dir(rtl)');
    const prev = rtl ? 'ArrowRight' : 'ArrowLeft', next = rtl ? 'ArrowLeft' : 'ArrowRight';
    if (e.key !== prev && e.key !== next) return;
    const target = e.target as HTMLElement;
    const item = target.closest?.('art-navigation-menu-item');
    if (!item || !this.items().includes(item as never)) return;
    if (target.closest('[part="content"]') || (item as HTMLElement & { open?: boolean }).open && !e.composedPath().some((n) => (n as Element).getAttribute?.('part') === 'trigger')) return; // inside a panel: leave arrows to the content
    const tops = this.items().map((i) => i.shadowRoot?.querySelector<HTMLElement>('[part="trigger"]')).filter(Boolean) as HTMLElement[];
    const idx = tops.findIndex((t) => e.composedPath().includes(t));
    if (idx < 0) return;
    e.preventDefault();
    tops[(idx + (e.key === next ? 1 : -1) + tops.length) % tops.length]?.focus();
  };

  render() {
    return (
      <Host>
        <nav aria-label={this.label} class="relative flex max-w-max flex-1 items-center justify-center">
          <ul part="list" class="m-0 flex flex-1 list-none items-center justify-center gap-1 p-0">
            <slot />
          </ul>
        </nav>
      </Host>
    );
  }
}
