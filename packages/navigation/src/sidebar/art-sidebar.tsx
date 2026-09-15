import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { createDismissable, type Dismissable } from '@aranghat/primitives/dismissable';
import { isRtl } from '@aranghat/primitives/dom';
import { trapFocus, type FocusTrap } from '@aranghat/primitives/focus-trap';
import { watchState, type SidebarProviderLike } from './context';

/**
 * Sidebar (SideNav) — shadcn/ui parity. A collapsible app sidebar inside an
 * `art-sidebar-provider`: `side`, `variant` (`sidebar | floating | inset`) and `collapsible`
 * (`offcanvas | icon | none`). Below the md breakpoint it becomes an off-canvas sheet
 * (focus-trapped, dismissed by Escape or a tap outside), built on the primitives (ADR-0019).
 *
 * @slot header - Top of the sidebar (brand, team switcher, search).
 * @slot - `art-sidebar-group`s and `art-sidebar-menu`s.
 * @slot footer - Bottom of the sidebar (user menu).
 * @part container - The sticky column (a `role="dialog"` sheet when off-canvas).
 * @part inner - The `nav` surface.
 * @part header - The header region.
 * @part content - The scrolling middle region.
 * @part footer - The footer region.
 * @part rail - The edge strip that toggles the sidebar (`rail`).
 */
@Component({ tag: 'art-sidebar', styleUrl: 'art-sidebar.css', shadow: true })
export class ArtSidebar {
  @Element() host!: HTMLElement;
  private provider: SidebarProviderLike | null = null;
  private unwatch?: () => void;
  private container?: HTMLDivElement;
  private trap?: FocusTrap;
  private dismiss?: Dismissable;

  /** Which edge; `left` is the inline start (mirrored in RTL). */
  @Prop({ reflect: true }) side: 'left' | 'right' = 'left';
  @Prop({ reflect: true }) variant: 'sidebar' | 'floating' | 'inset' = 'sidebar';
  /** How it collapses: slide away, shrink to icons, or not at all. */
  @Prop({ reflect: true }) collapsible: 'offcanvas' | 'icon' | 'none' = 'offcanvas';
  /** Show the edge rail that toggles the sidebar on click. */
  @Prop({ reflect: true }) rail = false;
  /** Accessible name of the navigation landmark (and of the off-canvas sheet). */
  @Prop() label = 'Sidebar';
  @Prop({ attribute: 'toggle-label' }) toggleLabel = 'Toggle sidebar';
  @State() open = true;
  @State() mobile = false;
  @State() openMobile = false;

  /** Internal: state fan-out to groups, menus and buttons. */
  @Event({ eventName: 'sidebar-state', bubbles: false, composed: false }) stateChange!: EventEmitter<void>;

  connectedCallback() {
    this.provider = this.host.closest('art-sidebar-provider') as SidebarProviderLike | null;
    this.unwatch = watchState(this.provider, this.sync);
  }
  componentDidLoad() {
    this.apply();
    this.sheet();
  }
  disconnectedCallback() {
    this.unwatch?.();
    this.unwatch = undefined;
    this.closeSheet(true);
  }

  /** Read the provider (its props may not be upgraded yet on first connect: defaults then). */
  private sync = () => {
    const p = this.provider;
    this.open = p?.open ?? true;
    this.mobile = !!p?.hasAttribute('data-mobile') && this.collapsible !== 'none';
    this.openMobile = p?.openMobile ?? false;
  };

  /** Mirror the state as host attributes (CSS + descendants) and tell the descendants. */
  @Watch('open') @Watch('mobile') @Watch('collapsible') @Watch('variant') @Watch('side')
  apply() {
    const el = this.host;
    const collapsed = this.collapsible !== 'none' && !this.open && !this.mobile;
    el.setAttribute('data-state', collapsed ? 'collapsed' : 'expanded');
    if (collapsed) el.setAttribute('data-collapsible', this.collapsible); else el.removeAttribute('data-collapsible');
    if (this.mobile) el.setAttribute('data-mobile', ''); else el.removeAttribute('data-mobile');
    el.setAttribute('data-variant', this.variant);
    el.setAttribute('data-side', this.side);
    this.provider?.setAttribute('data-variant', this.variant);
    // the inset is a sibling: push the state it styles on
    for (const inset of Array.from(this.provider?.querySelectorAll('art-sidebar-inset') ?? [])) {
      inset.setAttribute('data-variant', this.variant);
      inset.setAttribute('data-side', this.side);
      if (collapsed) inset.setAttribute('data-collapsed', ''); else inset.removeAttribute('data-collapsed');
      if (this.mobile) inset.setAttribute('data-mobile', ''); else inset.removeAttribute('data-mobile');
    }
    this.stateChange.emit();
  }

  @Watch('openMobile') @Watch('mobile')
  sheet() {
    if (this.mobile && this.openMobile) this.openSheet(); else this.closeSheet();
  }
  private openSheet() {
    const c = this.container;
    if (!c || this.trap) return;
    c.style.setProperty('--art-overlay-slide', (this.side === 'left') !== isRtl(this.host) ? '-100% 0' : '100% 0');
    c.setAttribute('popover', 'manual');
    if (typeof c.showPopover === 'function' && !c.matches(':popover-open')) c.showPopover();
    c.dataset.state = 'open';
    this.trap = trapFocus(c, { initialFocus: 'container' });
    this.dismiss = createDismissable(c, {
      escape: true, pointerOutside: true, lockScroll: true,
      ignore: () => this.provider?.querySelectorAll('art-sidebar-trigger') ?? [],
      onDismiss: () => void this.provider?.setOpen(false),
    });
  }
  private closeSheet(immediate = false) {
    const c = this.container;
    this.trap?.release();
    this.trap = undefined;
    this.dismiss?.destroy();
    this.dismiss = undefined;
    if (!c || c.dataset.state !== 'open') return;
    const hide = () => {
      delete c.dataset.state;
      if (typeof c.hidePopover === 'function' && c.matches(':popover-open')) c.hidePopover();
    };
    if (immediate) return hide();
    c.dataset.state = 'closed';
    const done = () => { c.removeEventListener('animationend', done); if (c.dataset.state === 'closed') hide(); };
    c.addEventListener('animationend', done);
    const name = typeof getComputedStyle === 'function' ? getComputedStyle(c).animationName : 'none';
    if (!name || name === 'none') queueMicrotask(done);
  }

  render() {
    const mobile = this.mobile;
    return (
      <Host>
        <div part="container" class="container" ref={(el) => (this.container = el)} popover={mobile ? 'manual' : undefined} role={mobile ? 'dialog' : undefined} aria-modal={mobile ? 'true' : undefined} aria-label={mobile ? this.label : undefined} tabindex={mobile ? -1 : undefined}>
          <nav part="inner" class="inner" aria-label={this.label}>
            <div part="header" class="header"><slot name="header" /></div>
            <div part="content" class="content"><slot /></div>
            <div part="footer" class="footer"><slot name="footer" /></div>
          </nav>
          {this.rail && !mobile && <button part="rail" class="rail" type="button" tabindex="-1" aria-label={this.toggleLabel} title={this.toggleLabel} onClick={() => void this.provider?.toggle()} />}
        </div>
      </Host>
    );
  }
}
