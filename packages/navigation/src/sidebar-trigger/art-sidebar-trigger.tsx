import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { findProvider, watchState, type SidebarProviderLike } from '../sidebar/context';

/**
 * Sidebar Trigger — a ghost icon button that toggles the nearest `art-sidebar-provider`
 * (expand / collapse on desktop, open / close the off-canvas sheet on mobile).
 *
 * @slot - The icon (a panel-left icon by default).
 * @part button - The button.
 */
@Component({ tag: 'art-sidebar-trigger', styleUrl: 'art-sidebar-trigger.css', shadow: { delegatesFocus: true } })
export class ArtSidebarTrigger {
  @Element() host!: HTMLElement;
  private provider: SidebarProviderLike | null = null;
  private unwatch?: () => void;

  /** Accessible name. */
  @Prop() label = 'Toggle sidebar';
  @State() expanded = true;

  connectedCallback() {
    this.provider = findProvider(this.host);
    this.unwatch = watchState(this.provider, this.sync);
  }
  disconnectedCallback() {
    this.unwatch?.();
    this.unwatch = undefined;
  }
  private sync = () => {
    const p = this.provider;
    this.expanded = p ? (p.hasAttribute('data-mobile') ? !!p.openMobile : p.open !== false) : true;
  };

  render() {
    return (
      <Host>
        <button part="button" type="button" class="inline-flex size-7 shrink-0 items-center justify-center rounded-md text-fg transition-interactive motion-fast hover:bg-accent focus-ring" aria-label={this.label} aria-expanded={this.expanded ? 'true' : 'false'} onClick={() => void this.provider?.toggle()}>
          <slot>
            <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 3v18" /></svg>
          </slot>
        </button>
      </Host>
    );
  }
}
