import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Select Group — a labelled group of `<art-select-item>`s inside an `<art-select>`.
 *
 * @slot - The items.
 * @part label - The group heading.
 */
@Component({ tag: 'art-select-group', styleUrl: 'art-select-group.css', shadow: true })
export class ArtSelectGroup {
  @Element() host!: HTMLElement;
  @Prop() label?: string;

  connectedCallback() {
    this.host.setAttribute('role', 'group');
  }

  render() {
    return (
      <Host aria-label={this.label}>
        {this.label && <div part="label" class="px-2 py-1.5 text-xs text-fg-muted">{this.label}</div>}
        <slot />
      </Host>
    );
  }
}
