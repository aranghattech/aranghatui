import { Component, Element, Host, Prop, h } from '@stencil/core';
import { uniqueId } from '@aranghat/primitives/id';

/**
 * Mega Menu Group — a named set of `art-mega-menu-link`s in a panel. The name sits above the links
 * and names their list for assistive technology. The links stack in one column unless `columns`
 * spreads them out (a band of links across a wide panel).
 *
 * @slot - `art-mega-menu-link`s.
 * @part label - The group's name.
 * @part list - The `role="list"` the links flow in.
 */
@Component({ tag: 'art-mega-menu-group', styleUrl: 'art-mega-menu-group.css', shadow: true })
export class ArtMegaMenuGroup {
  @Element() host!: HTMLElement;
  private labelId = uniqueId('art-mega-menu-group');

  /** The group's name ("Core features", "Resources"). */
  @Prop() label?: string;
  /** Columns the group's own links flow in. */
  @Prop() columns = 1;

  render() {
    const cols = Math.max(1, Math.floor(Number(this.columns)) || 1);
    return (
      <Host>
        {this.label && (
          <div part="label" id={this.labelId} class="label px-2 pb-2 text-xs font-medium text-fg-muted">
            {this.label}
          </div>
        )}
        <div part="list" role="list" aria-labelledby={this.label ? this.labelId : undefined} class="list grid gap-1" style={{ '--_cols': String(cols) }}>
          <slot />
        </div>
      </Host>
    );
  }
}
