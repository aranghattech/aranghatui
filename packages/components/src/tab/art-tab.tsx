import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Tab — one trigger of an `<art-tabs>`. The host itself is the `role="tab"` element (so the
 * panel can reference it by id), styled per the parent's variant and orientation.
 *
 * @slot - The tab label (text, optionally with an `<art-icon>`).
 */
@Component({ tag: 'art-tab', styleUrl: 'art-tab.css', shadow: true })
export class ArtTab {
  @Element() host!: HTMLElement;

  /** Identifies the tab in the parent's `value`. */
  @Prop() value = '';
  @Prop({ reflect: true }) disabled = false;
  /** Set by the parent. */
  @Prop({ reflect: true }) selected = false;
  /** Roving tabindex, set by the parent. */
  @Prop() tabbable = false;

  connectedCallback() {
    this.host.slot = 'tab';
    this.host.setAttribute('role', 'tab');
  }

  render() {
    return (
      <Host aria-selected={this.selected ? 'true' : 'false'} aria-disabled={this.disabled ? 'true' : undefined} tabindex={this.disabled ? -1 : this.tabbable ? 0 : -1}>
        <slot />
      </Host>
    );
  }
}
