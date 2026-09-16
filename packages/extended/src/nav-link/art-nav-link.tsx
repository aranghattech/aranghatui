import { Component, Element, Host, Prop, h } from '@stencil/core';
import { createNavTip, type NavTip } from '../nav/tooltip';

/**
 * One destination in the panel: a leading icon, a label, and an optional badge for work that is
 * not shipped yet. While the panel is collapsed only the icon shows, and the label moves into a
 * tooltip — the same treatment the rail's items get.
 *
 * @slot icon - The leading icon.
 * @slot - The label.
 * @part control - The `<a>`, or the `<button>` when no `href` is set.
 * @part badge - The trailing badge.
 * @part tooltip - The label shown beside the icon while collapsed.
 */
@Component({ tag: 'art-nav-link', styleUrl: 'art-nav-link.css', shadow: true })
export class ArtNavLink {
  @Element() host!: HTMLElement;
  private control?: HTMLElement;
  private tip?: HTMLElement;
  private nav?: NavTip;

  /** Marks the current page (`aria-current="page"`). */
  @Prop({ reflect: true }) active = false;
  /** Render as a link. */
  @Prop() href?: string;
  /** Link target (only with `href`). */
  @Prop() target?: string;
  /** Link rel (only with `href`). */
  @Prop() rel?: string;
  /** Disabled: no interaction, no events. Pair it with `badge` to say why. */
  @Prop({ reflect: true }) disabled = false;
  /** Trailing badge — "Soon" for a destination that is not live yet. */
  @Prop() badge?: string;
  /** Set by the enclosing `art-nav-section` when the panel collapses — not something you set. */
  @Prop({ reflect: true }) collapsed = false;

  componentDidLoad() {
    if (this.control && this.tip) this.nav = createNavTip(this.control, this.tip, this.host, () => this.collapsed && !this.disabled);
  }
  disconnectedCallback() {
    this.nav?.destroy();
  }

  /** The label, for the collapsed tooltip and for the accessible name when the text is clipped. */
  private text(): string {
    return this.host.textContent?.trim() ?? '';
  }

  render() {
    const cls = 'control flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-fg-muted transition-interactive motion-fast focus-ring hover:bg-sidebar-accent hover:text-fg';
    const shared = {
      part: 'control',
      class: cls,
      'aria-current': this.active ? ('page' as const) : undefined,
      ref: (el?: HTMLElement) => (this.control = el),
    };
    const content = [
      <slot name="icon" />,
      <span class="label min-w-0 flex-1 truncate text-start">
        <slot />
      </span>,
      this.badge && (
        <span part="badge" class="badge shrink-0 text-xs text-fg-muted">
          {this.badge}
        </span>
      ),
    ];
    return (
      <Host role="listitem">
        {this.href && !this.disabled ? (
          <a {...shared} href={this.href} target={this.target} rel={this.rel}>
            {content}
          </a>
        ) : (
          <button {...shared} type="button" disabled={this.disabled} aria-disabled={this.disabled ? 'true' : undefined}>
            {content}
          </button>
        )}
        <div part="tooltip" role="tooltip" popover="manual" ref={(el) => (this.tip = el)} class="tooltip w-fit rounded-md bg-primary px-3 py-1.5 text-xs text-primary-fg">
          {this.text()}
        </div>
      </Host>
    );
  }
}
