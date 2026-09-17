import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { applyCollapsed } from '../nav/context';

/**
 * Nav Rail — a two-level application sidebar: a permanent icon rail that switches context, beside
 * a secondary panel that lists the sections of the context you are in. The panel collapses to
 * icons; the rail never does.
 *
 * The rail carries `art-nav-rail-item`s; the panel carries `art-nav-section`s of `art-nav-link`s.
 * Everything else — the brand mark, the workspace switcher, the promo card, the user row — is a
 * slot, because those belong to the product, not to the design system.
 *
 * @slot brand - Logo mark at the top of the rail.
 * @slot rail - `art-nav-rail-item`s: the contexts.
 * @slot rail-end - `art-nav-rail-item`s pinned to the bottom of the rail (settings, theme, account).
 * @slot header - The panel's header: a workspace switcher, a search field.
 * @slot - `art-nav-section`s: the navigation of the current context.
 * @slot footer - A card above the user row (an assistant prompt, an upgrade nudge).
 * @slot user - The account row at the very bottom of the panel.
 * @part rail - The icon column.
 * @part brand - The band at the top of the rail, the height of the panel's header.
 * @part panel - The secondary column.
 * @part header - The panel header.
 * @part toggle - The button that collapses the panel.
 * @part nav - The `<nav>` wrapping the sections.
 * @part footer - The footer region.
 * @part user - The user region.
 */
@Component({ tag: 'art-nav-rail', styleUrl: 'art-nav-rail.css', shadow: true })
export class ArtNavRail {
  @Element() host!: HTMLElement;

  /** Panel collapsed to icons. The rail is always icons. */
  @Prop({ mutable: true, reflect: true }) collapsed = false;
  /** Accessible name of the panel's navigation. */
  @Prop() label = 'Sections';
  /** Accessible name of the rail's navigation. */
  @Prop({ attribute: 'rail-label' }) railLabel = 'Contexts';
  /** Accessible name of the collapse button. */
  @Prop({ attribute: 'toggle-label' }) toggleLabel = 'Toggle the navigation panel';
  /** Hide the collapse button (the panel is then controlled by `collapsed` alone). */
  @Prop({ attribute: 'hide-toggle' }) hideToggle = false;

  /** Emitted when the user collapses or expands the panel; `detail.collapsed`. */
  @Event({ eventName: 'collapsed-change', bubbles: true, composed: true }) collapsedChange!: EventEmitter<{ collapsed: boolean }>;

  componentDidLoad() {
    this.apply();
    this.host.shadowRoot?.addEventListener('slotchange', this.rebind);
  }

  /** Sections pass it on to their own links. A method, not an arrow: `@Watch` rejects a property. */
  @Watch('collapsed')
  apply() {
    applyCollapsed(this.host, 'art-nav-section', this.collapsed);
  }
  private rebind = () => this.apply();

  private toggle = () => {
    this.collapsed = !this.collapsed;
    this.collapsedChange.emit({ collapsed: this.collapsed });
  };

  render() {
    return (
      <Host>
        <div part="rail" class="rail flex shrink-0 flex-col items-center gap-1 border-default bg-sidebar pb-3">
          <div part="brand" class="brand flex w-full shrink-0 items-center justify-center"><slot name="brand" /></div>
          <nav class="flex min-h-0 flex-1 flex-col items-center gap-1 overflow-y-auto" aria-label={this.railLabel}>
            <slot name="rail" />
          </nav>
          <div class="flex flex-col items-center gap-1"><slot name="rail-end" /></div>
        </div>
        <div part="panel" class="panel flex min-w-0 flex-col bg-sidebar">
          <div part="header" class="header flex items-center gap-2 px-2 py-2">
            <div class="min-w-0 flex-1"><slot name="header" /></div>
            {!this.hideToggle && (
              <button part="toggle" type="button" class="toggle inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-fg-muted transition-interactive motion-fast focus-ring hover:bg-sidebar-accent hover:text-fg" aria-label={this.toggleLabel} aria-expanded={String(!this.collapsed)} onClick={this.toggle}>
                <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 3v18" />
                </svg>
              </button>
            )}
          </div>
          <nav part="nav" class="nav flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-2 pb-2" aria-label={this.label}>
            <slot />
          </nav>
          <div part="footer" class="footer px-2 pb-2"><slot name="footer" /></div>
          <div part="user" class="user px-2 pb-2"><slot name="user" /></div>
        </div>
      </Host>
    );
  }
}
