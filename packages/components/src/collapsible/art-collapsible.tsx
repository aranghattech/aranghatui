import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';

/**
 * Collapsible — shadcn/ui parity on the native `<details>` element: the trigger is its
 * `<summary>`, so toggling, keyboard activation (Enter / Space) and the expanded state are
 * platform behaviour. Height animates where the browser can interpolate `::details-content`.
 *
 * @slot trigger - What the user clicks to toggle (text, a row with a button-like look).
 * @slot - The collapsible content.
 * @part details - The native `<details>`.
 * @part trigger - The native `<summary>`.
 * @part content - The content wrapper.
 */
@Component({ tag: 'art-collapsible', styleUrl: 'art-collapsible.css', shadow: true })
export class ArtCollapsible {
  @Element() host!: HTMLElement;
  private details?: HTMLDetailsElement;

  @Prop({ mutable: true, reflect: true }) open = false;
  @Prop({ reflect: true }) disabled = false;

  /** Emitted when the user toggles the content; `detail.open`. */
  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;

  @Watch('open')
  onOpen(open: boolean) {
    if (this.details && this.details.open !== open) this.details.open = open;
  }

  /** The native toggle already happened; mirror it and tell consumers. */
  private onToggle = () => {
    const open = !!this.details?.open;
    if (open === this.open) return;
    this.open = open;
    this.openChange.emit({ open });
  };
  private onSummaryClick = (e: MouseEvent) => {
    if (this.disabled) e.preventDefault();
  };

  render() {
    return (
      <Host>
        <details part="details" ref={(el) => (this.details = el as HTMLDetailsElement)} open={this.open} onToggle={this.onToggle}>
          <summary part="trigger" class="list-none cursor-pointer rounded-md outline-none focus-ring" tabindex={this.disabled ? -1 : undefined} aria-disabled={this.disabled ? 'true' : undefined} onClick={this.onSummaryClick}>
            <slot name="trigger" />
          </summary>
          <div part="content">
            <slot />
          </div>
        </details>
      </Host>
    );
  }
}
