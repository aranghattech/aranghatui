import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { createDismissable, type Dismissable } from '@aranghat/primitives/dismissable';
import type { Placement } from '@aranghat/primitives/floating';
import { createHoverIntent, durationToken, type HoverIntent } from '@aranghat/primitives/hover-intent';
import { createOverlay, type Overlay } from '@aranghat/primitives/overlay';

/**
 * Hover Card — shadcn/ui parity. A preview card for sighted users to peek at what sits behind
 * a link: opens after a longer hover intent than a tooltip (it is content, not a label), stays
 * open while the pointer is on the card, also opens on keyboard focus. Rendered on the platform
 * top layer (Popover API) and positioned with the floating primitive.
 *
 * @slot trigger - The link or element to preview.
 * @slot - The card content.
 * @part content - The card.
 */
@Component({ tag: 'art-hover-card', styleUrl: 'art-hover-card.css', shadow: true })
export class ArtHoverCard {
  @Element() host!: HTMLElement;
  private panel?: HTMLDivElement;
  private overlay?: Overlay;
  private hover?: HoverIntent;
  private dismiss?: Dismissable;

  /** Preferred side; flips when there is no room. */
  @Prop({ reflect: true }) placement: Placement = 'bottom';
  /** Gap between trigger and card, in px. */
  @Prop() offset = 4;
  @Prop({ mutable: true, reflect: true }) open = false;
  /** Hover intent before opening, ms. Defaults to `--art-duration-hover-card-open`. */
  @Prop({ attribute: 'open-delay' }) openDelay?: number;
  /** Grace period after the pointer leaves trigger and card, ms. Defaults to `--art-duration-hover-card-close`. */
  @Prop({ attribute: 'close-delay' }) closeDelay?: number;

  /** Emitted when the user opens or closes the card; `detail.open`. */
  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;

  componentDidLoad() {
    this.wire();
    this.host.shadowRoot?.addEventListener('slotchange', this.wire);
    if (this.open) this.onOpen(true);
  }
  disconnectedCallback() {
    this.hover?.destroy();
    this.dismiss?.destroy();
    this.overlay?.destroy();
    this.overlay = undefined;
  }

  private trigger(): HTMLElement | null {
    return this.host.querySelector(':scope > [slot="trigger"]');
  }
  private wire = () => {
    const t = this.trigger();
    this.hover?.destroy();
    this.hover = undefined;
    if (!t) return;
    this.hover = createHoverIntent(t, {
      openDelay: this.openDelay ?? durationToken('--art-duration-hover-card-open', 700),
      closeDelay: this.closeDelay ?? durationToken('--art-duration-hover-card-close', 300),
      also: () => [this.panel],
      onOpen: () => this.set(true),
      onClose: () => this.set(false),
    });
  };
  private set(open: boolean) {
    if (this.open === open) return;
    this.open = open;
    this.openChange.emit({ open });
  }

  @Watch('placement') @Watch('offset')
  onPlacement() {
    this.overlay?.destroy();
    this.overlay = undefined;
    if (this.open) this.onOpen(true);
  }

  @Watch('open')
  onOpen(open: boolean) {
    const t = this.trigger();
    if (!this.panel || !t) return;
    if (open) {
      this.overlay ??= createOverlay(t, this.panel, { placement: this.placement, offset: this.offset });
      void this.overlay.open();
      this.dismiss ??= createDismissable(this.panel, { escape: true, pointerOutside: false, focusOutside: false, onDismiss: () => this.set(false) });
    } else {
      this.hover?.cancel();
      this.dismiss?.destroy();
      this.dismiss = undefined;
      void this.overlay?.close();
    }
  }

  render() {
    return (
      <Host>
        <slot name="trigger" />
        <div part="content" popover="manual" ref={(el) => (this.panel = el)} class="flex w-64 flex-col gap-2 rounded-md border-default bg-popover p-4 text-fg shadow-popover outline-none">
          <slot />
        </div>
      </Host>
    );
  }
}
