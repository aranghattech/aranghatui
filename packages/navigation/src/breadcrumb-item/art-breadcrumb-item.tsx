import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Breadcrumb Item — one step of an `<art-breadcrumb>`: a link (`<a>` in the default slot),
 * the current page (`current`), or an ellipsis for collapsed steps. The separator after it
 * is drawn here so the list stays a plain sequence of items.
 *
 * @slot - The link or text.
 * @part separator - The separator after the item.
 * @part ellipsis - The collapsed-steps glyph.
 */
@Component({ tag: 'art-breadcrumb-item', styleUrl: 'art-breadcrumb-item.css', shadow: true })
export class ArtBreadcrumbItem {
  @Element() host!: HTMLElement;

  /** The page being viewed: rendered as text with `aria-current="page"`. */
  @Prop({ reflect: true }) current = false;
  /** Stands for collapsed steps ("…"); put a menu around it for the hidden pages. */
  @Prop({ reflect: true }) ellipsis = false;

  connectedCallback() {
    this.host.setAttribute('role', 'listitem');
  }

  render() {
    return (
      <Host>
        {this.ellipsis ? (
          <span part="ellipsis" class="ellipsis flex items-center justify-center" aria-hidden="true">
            <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
          </span>
        ) : this.current ? (
          <span class="page font-normal text-fg" aria-current="page"><slot /></span>
        ) : (
          <slot />
        )}
        {this.ellipsis && <span class="sr-only">More</span>}
        <span part="separator" class="separator" role="presentation" aria-hidden="true">
          <svg class="chevron icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m9 18 6-6-6-6" /></svg>
          <span class="slash">/</span>
        </span>
      </Host>
    );
  }
}
