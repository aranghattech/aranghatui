import { Component, Element, Host, Prop, Watch, forceUpdate, h } from '@stencil/core';
import { children, isRtl } from '@aranghat/primitives/dom';

type Item = HTMLElement & { open: boolean; setOpen(open: boolean, byKeyboard?: boolean): Promise<void> };

/**
 * Mega Menu — a site navigation bar whose triggers open wide panels of named link groups. The
 * groups flow in columns or rows with a cap on either; a panel can span the viewport, and its
 * content can fill that width or sit in a centred container. An `aside` (a tutorial, a sales
 * prompt) and a `footer` sit beside and below the groups. Panels live on the platform top layer
 * and one is open at a time (the pattern of shadcn's full mega menu example).
 *
 * The width settings here apply to every panel; an `art-mega-menu-item` can opt in on its own.
 *
 * @slot - `art-mega-menu-item`s.
 * @part nav - The `<nav>`.
 * @part list - The list of bar entries.
 */
@Component({ tag: 'art-mega-menu', styleUrl: 'art-mega-menu.css', shadow: true })
export class ArtMegaMenu {
  @Element() host!: HTMLElement;

  /** Accessible name of the `<nav>`. */
  @Prop() label = 'Main';
  /** Every panel spans the full width of the viewport, hanging from the bottom edge of this element. */
  @Prop({ reflect: true }) fullWidth = false;
  /** Every panel's content fills its panel instead of sitting in a centred container (`--art-mega-menu-content-width`). */
  @Prop({ reflect: true }) fullWidthContent = false;

  connectedCallback() {
    this.host.addEventListener('mega-menu-open', this.onItemOpen);
    this.host.addEventListener('keydown', this.onKeydown);
  }
  componentDidLoad() {
    this.refresh();
  }
  disconnectedCallback() {
    this.host.removeEventListener('mega-menu-open', this.onItemOpen);
    this.host.removeEventListener('keydown', this.onKeydown);
  }

  /** Items read the bar's width settings when they render. A method, not an arrow: `@Watch` rejects a property. */
  @Watch('fullWidth')
  @Watch('fullWidthContent')
  refresh() {
    for (const i of this.items()) forceUpdate(i);
  }

  private items(): Item[] {
    return children<Item>(this.host, 'art-mega-menu-item');
  }
  /** One panel at a time. */
  private onItemOpen = (e: Event) => {
    for (const i of this.items()) if (i !== e.target && i.open) void i.setOpen(false);
  };
  /** ← / → move along the bar's triggers and links; inside a panel the arrows belong to the panel. */
  private onKeydown = (e: KeyboardEvent) => {
    const rtl = isRtl(this.host);
    const prev = rtl ? 'ArrowRight' : 'ArrowLeft';
    const next = rtl ? 'ArrowLeft' : 'ArrowRight';
    if (e.key !== prev && e.key !== next) return;
    const path = e.composedPath();
    const tops = this.items()
      .map((i) => i.shadowRoot?.querySelector<HTMLElement>('[part="trigger"]'))
      .filter((t): t is HTMLElement => !!t);
    const idx = tops.findIndex((t) => path.includes(t));
    if (idx < 0) return;
    e.preventDefault();
    tops[(idx + (e.key === next ? 1 : -1) + tops.length) % tops.length]?.focus();
  };

  render() {
    return (
      <Host>
        <nav part="nav" aria-label={this.label}>
          <ul part="list" class="m-0 flex list-none flex-wrap items-center gap-1 p-0">
            <slot />
          </ul>
        </nav>
      </Host>
    );
  }
}
