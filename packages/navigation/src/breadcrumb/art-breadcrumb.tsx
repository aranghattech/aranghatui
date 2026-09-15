import { Component, Element, Host, Prop, Watch, h } from '@stencil/core';

/**
 * Breadcrumb — shadcn/ui parity. A `<nav aria-label="breadcrumb">` with an ordered list of
 * `<art-breadcrumb-item>`s; every item but the last is followed by a separator, the last
 * one (`current`) names the page.
 *
 * @slot - `<art-breadcrumb-item>`s.
 * @part list - The `<ol>`.
 */
@Component({ tag: 'art-breadcrumb', styleUrl: 'art-breadcrumb.css', shadow: true })
export class ArtBreadcrumb {
  @Element() host!: HTMLElement;

  /** Separator glyph between items. */
  @Prop({ reflect: true }) separator: 'chevron' | 'slash' = 'chevron';
  /** Accessible name of the landmark. */
  @Prop() label = 'breadcrumb';

  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.sync);
    this.sync();
  }
  @Watch('separator')
  onSeparator() { this.sync(); }
  private sync = () => {
    const items = Array.from(this.host.querySelectorAll(':scope > art-breadcrumb-item'));
    items.forEach((item, i) => {
      item.setAttribute('data-separator', this.separator);
      item.toggleAttribute('data-last', i === items.length - 1);
    });
  };

  render() {
    return (
      <Host>
        <nav aria-label={this.label}>
          <ol part="list" class="m-0 flex flex-wrap items-center gap-1.5 p-0 text-sm text-fg-muted sm:gap-2.5">
            <slot />
          </ol>
        </nav>
      </Host>
    );
  }
}
