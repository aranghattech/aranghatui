import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Button Group — shadcn/ui parity. Joins adjacent buttons (and inputs, selects, text
 * addons, separators) into one control: only the outer corners stay rounded and neighbours
 * share a single border. Nest groups to get spaced clusters of joined groups.
 *
 * @slot - `<art-button>`s; also `<art-input>`, `<art-native-select>`, `<art-button-group-text>`,
 *   `<art-separator orientation="vertical">` and nested `<art-button-group>`s.
 */
@Component({ tag: 'art-button-group', styleUrl: 'art-button-group.css', shadow: true })
export class ArtButtonGroup {
  @Element() host!: HTMLElement;

  @Prop({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  connectedCallback() {
    this.host.setAttribute('role', 'group');
    this.sync();
  }

  /** A group of groups is spaced instead of joined (shadcn `has-[>[data-slot=button-group]]:gap-2`). */
  private sync = () => {
    const nested = Array.from(this.host.children).some((c) => c.tagName === 'ART-BUTTON-GROUP');
    this.host.toggleAttribute('data-nested', nested);
  };

  render() {
    return (
      <Host onSlotchange={this.sync}>
        <slot />
      </Host>
    );
  }
}
