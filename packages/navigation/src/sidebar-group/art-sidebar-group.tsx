import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { isIconMode, watchState } from '../sidebar/context';

/**
 * Sidebar Group — a titled section of the sidebar with an optional action button.
 *
 * @slot label - Rich heading (or use the `label` prop).
 * @slot action - A small icon button at the top end (`art-button variant="ghost" icon size="sm"`).
 * @slot - The group content (an `art-sidebar-menu`).
 * @part group - The wrapper.
 * @part label - The heading.
 * @part action - The action wrapper.
 * @part content - The content wrapper.
 */
@Component({ tag: 'art-sidebar-group', styleUrl: 'art-sidebar-group.css', shadow: true })
export class ArtSidebarGroup {
  @Element() host!: HTMLElement;
  private sidebar: HTMLElement | null = null;
  private unwatch?: () => void;

  /** Heading text. */
  @Prop() label?: string;
  @State() icon = false;
  @State() hasLabel = false;
  @State() hasAction = false;

  connectedCallback() {
    this.sidebar = this.host.closest('art-sidebar');
    this.unwatch = watchState(this.sidebar, () => { this.icon = isIconMode(this.sidebar); });
  }
  componentWillLoad() {
    this.wire();
  }
  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.wire);
  }
  disconnectedCallback() {
    this.unwatch?.();
    this.unwatch = undefined;
  }
  /* Slotted state is mirrored as state: `:has()` in a shadow stylesheet never sees slotted nodes. */
  private wire = () => {
    this.hasLabel = !!this.label || !!this.host.querySelector(':scope > [slot="label"]');
    this.hasAction = !!this.host.querySelector(':scope > [slot="action"]');
  };

  render() {
    return (
      <Host data-icon={this.icon ? '' : undefined}>
        <div part="group" class="relative flex w-full min-w-0 flex-col p-2">
          <div part="label" class="label flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-fg-muted" hidden={!this.hasLabel}>
            <slot name="label">{this.label}</slot>
          </div>
          <div part="action" class="action absolute flex items-center justify-center" hidden={!this.hasAction}>
            <slot name="action" />
          </div>
          <div part="content" class="w-full text-sm">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
