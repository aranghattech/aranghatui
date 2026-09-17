import { Component, Element, Host, Prop, Watch, h } from '@stencil/core';
import { applyCollapsed } from '../nav/context';

/**
 * A labelled group of `art-nav-link`s in the panel. The label is a heading for the list it
 * introduces; when the panel collapses the label goes and a rule takes its place, so the grouping
 * survives without the words.
 *
 * @slot - `art-nav-link`s.
 * @part label - The group heading.
 * @part list - The `role="list"` wrapper.
 */
@Component({ tag: 'art-nav-section', styleUrl: 'art-nav-section.css', shadow: true })
export class ArtNavSection {
  @Element() host!: HTMLElement;

  /** The group heading ("Portfolio", "Operations"). */
  @Prop() label?: string;
  /** Set by the enclosing `art-nav-rail` when its panel collapses — not something you set. */
  @Prop({ reflect: true }) collapsed = false;

  componentDidLoad() {
    this.apply();
    this.host.shadowRoot?.addEventListener('slotchange', this.rebind);
  }

  /** The links below need it too. A method, not an arrow: `@Watch` rejects a property. */
  @Watch('collapsed')
  apply() {
    applyCollapsed(this.host, 'art-nav-link', this.collapsed);
  }
  private rebind = () => this.apply();

  render() {
    return (
      <Host>
        {this.label && (
          <div part="label" class="label px-2 pb-1 text-xs font-medium tracking-wide text-fg-muted uppercase">
            {this.label}
          </div>
        )}
        <div part="list" class="list flex flex-col gap-0.5" role="list">
          <slot />
        </div>
      </Host>
    );
  }
}
