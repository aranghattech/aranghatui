import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { isRtl } from '@aranghat/primitives/dom';
import { createHoverIntent, type HoverIntent } from '@aranghat/primitives/hover-intent';
import { createOverlay, type Overlay } from '@aranghat/primitives/overlay';
import { isIconMode, watchState } from '../sidebar/context';

/**
 * Sidebar Menu Button — the control of an `art-sidebar-menu-item`: a button, or a link with
 * `href`; `active` marks the current page. While the sidebar is collapsed to icons it becomes a
 * square that clips its label and shows `tooltip` beside it on hover / focus. Inside an
 * `art-sidebar-menu-sub` it renders in the smaller sub style.
 *
 * @slot - An icon (`svg`) followed by the label (`<span>`).
 * @part button - The button / link.
 * @part chevron - The disclosure chevron (items with a nested list).
 * @part tooltip - The icon-mode tooltip.
 */
@Component({ tag: 'art-sidebar-menu-button', styleUrl: 'art-sidebar-menu-button.css', shadow: { delegatesFocus: true } })
export class ArtSidebarMenuButton {
  @Element() host!: HTMLElement;
  private sidebar: HTMLElement | null = null;
  private unwatch?: () => void;
  private button?: HTMLElement;
  private tip?: HTMLDivElement;
  private hover?: HoverIntent;
  private overlay?: Overlay;

  /** Renders a link instead of a button. */
  @Prop() href?: string;
  @Prop() target?: string;
  /** Marks the current page (`aria-current="page"` on a link). */
  @Prop({ reflect: true }) active = false;
  @Prop({ reflect: true }) disabled = false;
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @Prop({ reflect: true }) variant: 'default' | 'outline' = 'default';
  /** Text shown beside the button while the sidebar is collapsed to icons. */
  @Prop() tooltip?: string;
  /** Disclosure state of the item's nested list — set by `art-sidebar-menu-item`; renders the chevron and `aria-expanded`. */
  @Prop() expanded?: boolean;
  @State() icon = false;
  @State() mobile = false;
  @State() sub = false;

  connectedCallback() {
    this.sidebar = this.host.closest('art-sidebar');
    this.sub = !!this.host.closest('art-sidebar-menu-sub');
    this.unwatch = watchState(this.sidebar, () => {
      this.icon = isIconMode(this.sidebar);
      this.mobile = !!this.sidebar?.hasAttribute('data-mobile');
      if (!this.icon) this.showTip(false);
    });
  }
  componentDidLoad() {
    if (this.button) this.hover = createHoverIntent(this.button, { onOpen: () => this.showTip(true), onClose: () => this.showTip(false), focus: true, touch: false });
  }
  disconnectedCallback() {
    this.unwatch?.();
    this.unwatch = undefined;
    this.hover?.destroy();
    this.overlay?.destroy();
    this.overlay = undefined;
  }

  /** The tooltip exists only in icon mode: the label is clipped there. */
  private showTip(show: boolean) {
    if (!this.tip || !this.button) return;
    if (!show) { void this.overlay?.close(); return; }
    if (!this.icon || this.mobile || !this.tooltip) return;
    const right = this.sidebar?.getAttribute('data-side') === 'right';
    this.overlay?.destroy();
    this.overlay = createOverlay(this.button, this.tip, { placement: right !== isRtl(this.host) ? 'left' : 'right', offset: 4 });
    void this.overlay.open();
  }

  render() {
    const cls = 'button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-start text-sm text-fg select-none focus-ring';
    const expanded = this.expanded == null ? undefined : String(this.expanded);
    const inner = [
      <slot />,
      this.expanded != null && (
        <svg part="chevron" class="chevron icon-md ms-auto shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m9 18 6-6-6-6" /></svg>
      ),
    ];
    return (
      <Host data-icon={this.icon ? '' : undefined} data-sub={this.sub ? '' : undefined}>
        {this.href ? (
          <a part="button" ref={(el) => (this.button = el)} class={cls} href={this.disabled ? undefined : this.href} target={this.target} aria-current={this.active ? 'page' : undefined} aria-disabled={this.disabled ? 'true' : undefined} aria-expanded={expanded}>{inner}</a>
        ) : (
          <button part="button" ref={(el) => (this.button = el)} type="button" class={cls} disabled={this.disabled} aria-expanded={expanded}>{inner}</button>
        )}
        {this.tooltip && (
          <div part="tooltip" role="tooltip" popover="manual" ref={(el) => (this.tip = el)} class="tooltip w-fit rounded-md bg-primary px-3 py-1.5 text-xs text-primary-fg">{this.tooltip}</div>
        )}
      </Host>
    );
  }
}
