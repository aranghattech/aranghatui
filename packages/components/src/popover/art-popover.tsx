import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { createDismissable, type DismissReason, type Dismissable } from '@aranghat/primitives/dismissable';
import type { Placement } from '@aranghat/primitives/floating';
import { createOverlay, type Overlay } from '@aranghat/primitives/overlay';

/**
 * Popover — shadcn/ui parity. Rich content anchored to a trigger, opened by click, closed by
 * Escape, an outside click or focus leaving. Rendered on the platform top layer (Popover API)
 * and positioned with the floating primitive. Focus moves into the panel on open and returns
 * to the trigger on close.
 *
 * @slot trigger - The element that toggles the popover (a button).
 * @slot - The content.
 * @part content - The panel (`role="dialog"`).
 */
@Component({ tag: 'art-popover', styleUrl: 'art-popover.css', shadow: true })
export class ArtPopover {
  @Element() host!: HTMLElement;
  private panel?: HTMLDivElement;
  private overlay?: Overlay;
  private dismiss?: Dismissable;
  /** Focus moves only for user-driven changes: a programmatic / initial `open` must not steal focus. */
  private byUser = false;
  private reason?: DismissReason;

  /** Preferred side; flips when there is no room. */
  @Prop({ reflect: true }) placement: Placement = 'bottom';
  /** Gap between trigger and panel, in px. */
  @Prop() offset = 4;
  @Prop({ mutable: true, reflect: true }) open = false;
  /** Accessible name of the panel (`role="dialog"`). Defaults to the trigger's text. */
  @Prop() label?: string;

  /** Emitted when the user opens or closes the popover; `detail.open`. */
  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;

  connectedCallback() {
    this.host.addEventListener('click', this.onClick);
  }
  componentDidLoad() {
    this.wire();
    this.host.shadowRoot?.addEventListener('slotchange', this.wire);
    if (this.open) this.onOpen(true);
  }
  disconnectedCallback() {
    this.host.removeEventListener('click', this.onClick);
    this.dismiss?.destroy();
    this.overlay?.destroy();
    this.overlay = undefined;
  }

  private trigger(): HTMLElement | null {
    return this.host.querySelector(':scope > [slot="trigger"]');
  }
  private wire = () => {
    const t = this.trigger();
    if (!t) return;
    t.setAttribute('aria-haspopup', 'dialog');
    t.setAttribute('aria-expanded', String(this.open));
  };
  private onClick = (e: MouseEvent) => {
    const t = this.trigger();
    if (t && e.composedPath().includes(t)) this.set(!this.open);
  };
  private set(open: boolean, reason?: DismissReason) {
    if (this.open === open) return;
    this.byUser = true;
    this.reason = reason;
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
    t?.setAttribute('aria-expanded', String(open));
    if (!this.panel || !t) return;
    const byUser = this.byUser;
    const reason = this.reason;
    this.byUser = false;
    this.reason = undefined;
    if (open) {
      this.overlay ??= createOverlay(t, this.panel, { placement: this.placement, offset: this.offset });
      const placed = this.overlay.open();
      this.dismiss ??= createDismissable(this.panel, { escape: true, pointerOutside: true, focusOutside: true, ignore: () => [t], onDismiss: (r) => this.set(false, r) });
      if (byUser) void placed.then(() => { if (this.open) this.panel?.focus({ preventScroll: true }); });
    } else {
      this.dismiss?.destroy();
      this.dismiss = undefined;
      // Escape (or a programmatic close while focus is inside) hands focus back to the trigger; a
      // pointer outside leaves focus where the user is pointing.
      const active = this.host.shadowRoot?.activeElement;
      if (active && this.panel.contains(active) && reason !== 'pointer-outside' && (byUser || !reason)) t.focus({ preventScroll: true });
      void this.overlay?.close();
    }
  }

  render() {
    return (
      <Host>
        <slot name="trigger" />
        <div part="content" role="dialog" tabindex="-1" popover="manual" aria-label={this.label ?? this.trigger()?.textContent?.trim() ?? undefined} ref={(el) => (this.panel = el)} class="flex w-72 flex-col gap-2 rounded-md border-default bg-popover p-4 text-fg shadow-popover outline-none">
          <slot />
        </div>
      </Host>
    );
  }
}
