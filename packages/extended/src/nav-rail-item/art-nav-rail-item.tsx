import { Component, Element, Host, Prop, h } from '@stencil/core';
import { createNavTip, type NavTip } from '../nav/tooltip';

/**
 * One context in the rail: an icon that is always icon-only, so its name is announced by the
 * accessible name and shown in a tooltip on hover or keyboard focus.
 *
 * @slot - The icon (`<art-icon>` or an inline `<svg>`).
 * @part control - The `<button>`, or the `<a>` when `href` is set.
 * @part tooltip - The label shown beside the icon.
 */
@Component({ tag: 'art-nav-rail-item', styleUrl: 'art-nav-rail-item.css', shadow: true })
export class ArtNavRailItem {
  @Element() host!: HTMLElement;
  private control?: HTMLElement;
  private tip?: HTMLElement;
  private nav?: NavTip;

  /** The name: the accessible name of the control and the tooltip's text. Required. */
  @Prop() label!: string;
  /** Marks the current context (`aria-current="page"`). */
  @Prop({ reflect: true }) active = false;
  /** Render as a link. */
  @Prop() href?: string;
  /** Link target (only with `href`). */
  @Prop() target?: string;
  /** Link rel (only with `href`). */
  @Prop() rel?: string;
  /** Disabled: no interaction, no events. */
  @Prop({ reflect: true }) disabled = false;

  componentDidLoad() {
    if (this.control && this.tip) this.nav = createNavTip(this.control, this.tip, this.host, () => !this.disabled);
  }
  disconnectedCallback() {
    this.nav?.destroy();
  }

  render() {
    const cls = 'control inline-flex h-9 w-9 items-center justify-center rounded-md text-fg-muted transition-interactive motion-fast focus-ring hover:bg-sidebar-accent hover:text-fg';
    const shared = {
      part: 'control',
      class: cls,
      'aria-current': this.active ? ('page' as const) : undefined,
      'aria-label': this.label,
      ref: (el?: HTMLElement) => (this.control = el),
    };
    return (
      <Host>
        {this.href && !this.disabled ? (
          <a {...shared} href={this.href} target={this.target} rel={this.rel}>
            <slot />
          </a>
        ) : (
          <button {...shared} type="button" disabled={this.disabled}>
            <slot />
          </button>
        )}
        <div part="tooltip" role="tooltip" popover="manual" ref={(el) => (this.tip = el)} class="tooltip w-fit rounded-md bg-primary px-3 py-1.5 text-xs text-primary-fg">
          {this.label}
        </div>
      </Host>
    );
  }
}
