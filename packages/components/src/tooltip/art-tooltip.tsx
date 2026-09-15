import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { createDismissable, type Dismissable } from '@aranghat/primitives/dismissable';
import type { Placement } from '@aranghat/primitives/floating';
import { createHoverIntent, type HoverIntent } from '@aranghat/primitives/hover-intent';
import { createOverlay, type Overlay } from '@aranghat/primitives/overlay';

/**
 * Tooltip — shadcn/ui parity. A short label that appears when the pointer rests on the
 * trigger (hover intent), on keyboard focus, or on press-and-hold with touch. Rendered on the
 * platform top layer (Popover API) and positioned with the floating primitive; the trigger is
 * described by the tooltip text (`aria-description`), so the label is read even when closed.
 *
 * @slot trigger - The element the tooltip describes (a button, an icon button, a link).
 * @slot - The tooltip text.
 * @part content - The tooltip bubble (`role="tooltip"`).
 * @part arrow - The arrow pointing at the trigger.
 */
@Component({ tag: 'art-tooltip', styleUrl: 'art-tooltip.css', shadow: true })
export class ArtTooltip {
  @Element() host!: HTMLElement;
  private panel?: HTMLDivElement;
  private arrowEl?: HTMLDivElement;
  private overlay?: Overlay;
  private hover?: HoverIntent;
  private dismiss?: Dismissable;

  /** Preferred side; flips when there is no room. */
  @Prop({ reflect: true }) placement: Placement = 'top';
  /** Gap between trigger and bubble, in px. */
  @Prop() offset = 4;
  @Prop({ mutable: true, reflect: true }) open = false;
  /** Hover intent before opening, ms. Defaults to `--art-duration-hover-open`. */
  @Prop({ attribute: 'open-delay' }) openDelay?: number;
  /** Grace period after the pointer leaves, ms. Defaults to `--art-duration-hover-close`. */
  @Prop({ attribute: 'close-delay' }) closeDelay?: number;

  /** Emitted when the user opens or closes the tooltip; `detail.open`. */
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
  private text(): string {
    return Array.from(this.host.childNodes).filter((n) => !(n.nodeType === 1 && (n as Element).hasAttribute('slot'))).map((n) => n.textContent).join('').trim();
  }
  private wire = () => {
    const t = this.trigger();
    this.hover?.destroy();
    this.hover = undefined;
    if (!t) return;
    const text = this.text();
    if (text && !t.hasAttribute('aria-description')) t.setAttribute('aria-description', text);
    this.hover = createHoverIntent(t, { openDelay: this.openDelay, closeDelay: this.closeDelay, onOpen: () => this.set(true), onClose: () => this.set(false) });
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
      this.overlay ??= createOverlay(t, this.panel, { placement: this.placement, offset: this.offset, arrow: this.arrowEl });
      this.overlay.open();
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
        <div part="content" role="tooltip" popover="manual" ref={(el) => (this.panel = el)} class="w-fit rounded-md bg-fg px-3 py-1.5 text-xs text-balance text-canvas">
          <slot />
          <div part="arrow" ref={(el) => (this.arrowEl = el)} class="arrow" />
        </div>
      </Host>
    );
  }
}
