import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { createDismissable, type Dismissable } from '@aranghat/primitives/dismissable';
import { cssLength, getTabbables, child } from '@aranghat/primitives/dom';

/**
 * TopNav — an app header bar: a brand at the start, a row of links, actions at the end. Below
 * the md breakpoint (or always, `collapse="always"`) the links fold into a panel under the bar
 * behind a menu button. Links are plain `<a>`s (or router links); `aria-current="page"` marks
 * the current one.
 *
 * @slot brand - Logo / product name (an `art-sidebar-trigger` fits here too).
 * @slot - The links (`<a>`).
 * @slot end - Actions at the end (search, theme toggle, user menu).
 * @part bar - The `<header>`.
 * @part brand - The brand wrapper.
 * @part links - The `<nav>` (the panel when collapsed).
 * @part end - The actions wrapper.
 * @part toggle - The menu button (collapsed).
 */
@Component({ tag: 'art-top-nav', styleUrl: 'art-top-nav.css', shadow: true })
export class ArtTopNav {
  @Element() host!: HTMLElement;
  private mql?: MediaQueryList;
  private links?: HTMLElement;
  private toggleEl?: HTMLButtonElement;
  private dismiss?: Dismissable;
  private byKeyboard = false;
  private focusPending = false;

  /** Accessible name of the `nav`. */
  @Prop() label = 'Main';
  /** Stick to the top of the scroll container. */
  @Prop({ reflect: true }) sticky = false;
  /** When the links fold behind the menu button: below the md breakpoint, always, or never. */
  @Prop() collapse: 'auto' | 'always' | 'never' = 'auto';
  /** The collapsed menu is shown. */
  @Prop({ mutable: true, reflect: true }) open = false;
  @Prop({ attribute: 'toggle-label' }) toggleLabel = 'Toggle menu';
  @State() narrow = false;
  @State() hasBrand = false;
  @State() hasEnd = false;

  /** Emitted when the user opens or closes the collapsed menu; `detail.open`. */
  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;

  connectedCallback() {
    const md = cssLength(document.documentElement, '--art-breakpoint-md') || 768;
    this.mql = window.matchMedia(`(max-width: ${md - 0.02}px)`);
    this.narrow = this.mql.matches;
    this.mql.addEventListener('change', this.onMedia);
  }
  componentWillLoad() {
    this.wire();
  }
  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.wire);
    if (this.open) this.onOpen(true);
  }
  disconnectedCallback() {
    this.mql?.removeEventListener('change', this.onMedia);
    this.dismiss?.destroy();
    this.dismiss = undefined;
  }

  private get collapsed() { return this.collapse === 'always' || (this.collapse === 'auto' && this.narrow); }
  private wire = () => {
    this.hasBrand = !!child(this.host, '[slot="brand"]');
    this.hasEnd = !!child(this.host, '[slot="end"]');
  };
  private onMedia = (e: MediaQueryListEvent) => { this.narrow = e.matches; };
  @Watch('narrow') @Watch('collapse')
  onCollapse() {
    if (!this.collapsed && this.open) this.set(false);
  }
  private set(open: boolean) {
    if (this.open === open) return;
    this.open = open;
    this.openChange.emit({ open });
  }
  @Watch('open')
  onOpen(open: boolean) {
    if (!this.links) return;
    if (open) {
      this.dismiss ??= createDismissable(this.links, { escape: true, pointerOutside: true, ignore: () => [this.toggleEl], onDismiss: (r) => { this.set(false); if (r === 'escape') this.toggleEl?.focus({ preventScroll: true }); } });
      this.focusPending = this.byKeyboard;
    } else {
      this.dismiss?.destroy();
      this.dismiss = undefined;
      this.focusPending = false;
    }
    this.byKeyboard = false;
  }
  /** The panel is `display: none` until the render that follows the watcher: focus after it. */
  componentDidRender() {
    if (!this.focusPending || !this.open || !this.links) return;
    this.focusPending = false;
    getTabbables(this.links)[0]?.focus({ preventScroll: true });
  }
  private onToggle = (e: MouseEvent) => {
    this.byKeyboard = e.detail === 0;
    this.set(!this.open);
  };

  render() {
    const collapsed = this.collapsed;
    const stroke = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true', focusable: 'false' } as const;
    return (
      <Host data-collapsed={collapsed ? '' : undefined}>
        <header part="bar" class="bar relative flex h-14 w-full items-center gap-4 bg-canvas px-4">
          <div part="brand" class="brand flex shrink-0 items-center gap-2 font-semibold" hidden={!this.hasBrand}>
            <slot name="brand" />
          </div>
          <nav part="links" id="links" aria-label={this.label} ref={(el) => (this.links = el)} class="links">
            <slot />
          </nav>
          <div part="end" class="end ms-auto flex shrink-0 items-center gap-2" hidden={!this.hasEnd}>
            <slot name="end" />
          </div>
          {collapsed && (
            <button part="toggle" type="button" ref={(el) => (this.toggleEl = el)} class="toggle inline-flex size-9 shrink-0 items-center justify-center rounded-md text-fg transition-interactive motion-fast hover:bg-accent focus-ring" aria-label={this.toggleLabel} aria-expanded={this.open ? 'true' : 'false'} aria-controls="links" onClick={this.onToggle}>
              {this.open ? (
                <svg class="icon-lg" {...stroke}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              ) : (
                <svg class="icon-lg" {...stroke}><path d="M4 12h16" /><path d="M4 6h16" /><path d="M4 18h16" /></svg>
              )}
            </button>
          )}
        </header>
      </Host>
    );
  }
}
