import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { defineCustomElement as defineSidebar } from '@aranghat/navigation/sidebar';
import { defineCustomElement as defineSidebarGroup } from '@aranghat/navigation/sidebar-group';
import { defineCustomElement as defineSidebarInset } from '@aranghat/navigation/sidebar-inset';
import { defineCustomElement as defineSidebarMenu } from '@aranghat/navigation/sidebar-menu';
import { defineCustomElement as defineSidebarMenuButton } from '@aranghat/navigation/sidebar-menu-button';
import { defineCustomElement as defineSidebarMenuItem } from '@aranghat/navigation/sidebar-menu-item';
import { defineCustomElement as defineSidebarMenuSub } from '@aranghat/navigation/sidebar-menu-sub';
import { defineCustomElement as defineSidebarProvider } from '@aranghat/navigation/sidebar-provider';
import { defineCustomElement as defineSidebarTrigger } from '@aranghat/navigation/sidebar-trigger';
import { child } from '@aranghat/primitives/dom';
import { defineOnClient } from '../define';

/**
 * App Shell — the dashboard frame in one element: a Sidebar (header / groups / footer slots), a
 * header bar with the sidebar trigger, and the page. Composes `art-sidebar-provider`,
 * `art-sidebar`, `art-sidebar-inset` and `art-sidebar-trigger` from `@aranghat/navigation`;
 * everything the Sidebar offers (`side`, `variant`, `collapsible`, ⌘ / Ctrl + B, the off-canvas
 * sheet below md) works unchanged, and the sidebar family finds its sidebar through the slots.
 *
 * @slot sidebar-header - Top of the sidebar (brand, team switcher).
 * @slot sidebar - `art-sidebar-group`s / `art-sidebar-menu`s.
 * @slot sidebar-footer - Bottom of the sidebar (user menu).
 * @slot header - Header bar content after the trigger (breadcrumb, page title).
 * @slot actions - Header bar content at the end (search, buttons).
 * @slot - The page.
 * @part header - The header bar.
 * @part content - The page wrapper.
 */
@Component({ tag: 'art-app-shell', styleUrl: 'art-app-shell.css', shadow: true })
export class ArtAppShell {
  @Element() host!: HTMLElement;

  /** Sidebar expanded (desktop); mirrors the provider. */
  @Prop({ mutable: true, reflect: true }) open = true;
  /** Sidebar edge (`left` is the inline start). */
  @Prop() side: 'left' | 'right' = 'left';
  @Prop() variant: 'sidebar' | 'floating' | 'inset' = 'sidebar';
  @Prop() collapsible: 'offcanvas' | 'icon' | 'none' = 'offcanvas';
  /** Accessible name of the sidebar landmark. */
  @Prop({ attribute: 'sidebar-label' }) sidebarLabel = 'Sidebar';
  @State() hasActions = false;

  connectedCallback() {
    // the frame's own parts plus the family its slots expect (idempotent; peers, never bundled)
    defineOnClient(defineSidebarProvider, defineSidebar, defineSidebarInset, defineSidebarTrigger, defineSidebarGroup, defineSidebarMenu, defineSidebarMenuItem, defineSidebarMenuButton, defineSidebarMenuSub);
    this.host.addEventListener('open-change', this.onOpenChange);
  }
  componentWillLoad() {
    this.wire();
  }
  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.wire);
  }
  disconnectedCallback() {
    this.host.removeEventListener('open-change', this.onOpenChange);
  }
  private wire = () => { this.hasActions = !!child(this.host, '[slot="actions"]'); };
  /** The provider's `open-change` (composed) bubbles out of the shell as its own; keep `open` in step. */
  private onOpenChange = (e: Event) => { const open = (e as CustomEvent<{ open: boolean }>).detail?.open; if (typeof open === 'boolean') this.open = open; };

  render() {
    const right = this.side === 'right';
    const sidebar = (
      <art-sidebar side={this.side} variant={this.variant} collapsible={this.collapsible} label={this.sidebarLabel}>
        <slot name="sidebar-header" slot="header" />
        <slot name="sidebar" />
        <slot name="sidebar-footer" slot="footer" />
      </art-sidebar>
    );
    return (
      <Host>
        <art-sidebar-provider open={this.open} class="provider">
          {!right && sidebar}
          <art-sidebar-inset>
            <header part="header" class="header flex shrink-0 items-center gap-2 px-4">
              <art-sidebar-trigger />
              <slot name="header" />
              <div class="actions ms-auto flex items-center gap-2" hidden={!this.hasActions}><slot name="actions" /></div>
            </header>
            <div part="content" class="content flex min-h-0 flex-1 flex-col gap-4 p-4"><slot /></div>
          </art-sidebar-inset>
          {right && sidebar}
        </art-sidebar-provider>
      </Host>
    );
  }
}
