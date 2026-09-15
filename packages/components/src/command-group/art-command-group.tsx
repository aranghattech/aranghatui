import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Command Group — a headed group of `<art-command-item>`s; hides itself when none of its
 * items match the search.
 *
 * @slot - The items.
 * @part label - The group heading.
 */
@Component({ tag: 'art-command-group', styleUrl: 'art-command-group.css', shadow: true })
export class ArtCommandGroup {
  @Element() host!: HTMLElement;
  @Prop() label?: string;

  connectedCallback() {
    this.host.setAttribute('role', 'group');
  }

  render() {
    return (
      <Host aria-label={this.label}>
        {this.label && <div part="label" class="px-2 py-1.5 text-xs font-medium text-fg-muted">{this.label}</div>}
        <slot />
      </Host>
    );
  }
}
