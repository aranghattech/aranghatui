import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';

/**
 * Accordion Item — one section of an `<art-accordion>`: a native `<details>` whose `<summary>`
 * is the trigger (with a chevron) and whose content is slotted.
 *
 * @slot trigger - The section title.
 * @slot - The section content.
 * @part details - The native `<details>`.
 * @part trigger - The native `<summary>`.
 * @part content - The content wrapper.
 */
@Component({ tag: 'art-accordion-item', styleUrl: 'art-accordion-item.css', shadow: true })
export class ArtAccordionItem {
  @Element() host!: HTMLElement;
  private details?: HTMLDetailsElement;

  /** Identifies the item in the accordion's `value`. */
  @Prop() value = '';
  @Prop({ mutable: true, reflect: true }) open = false;
  @Prop({ reflect: true }) disabled = false;

  /** Emitted when the user toggles the item; the accordion swallows it and emits `value-change`. */
  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;

  @Watch('open')
  onOpen(open: boolean) {
    if (this.details && this.details.open !== open) this.details.open = open;
  }
  private onToggle = () => {
    const open = !!this.details?.open;
    if (open === this.open) return;
    this.open = open;
    this.openChange.emit({ open });
  };
  private onSummaryClick = (e: MouseEvent) => {
    if (this.disabled || this.host.hasAttribute('data-group-disabled')) e.preventDefault();
  };

  render() {
    const inert = this.disabled || this.host.hasAttribute('data-group-disabled');
    return (
      <Host>
        <details part="details" ref={(el) => (this.details = el as HTMLDetailsElement)} open={this.open} onToggle={this.onToggle}>
          <summary part="trigger" class={{ 'flex flex-1 list-none items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-interactive motion-fast outline-none focus-ring': true, 'cursor-pointer hover:underline': !inert, 'pointer-events-none opacity-50': inert }} tabindex={inert ? -1 : undefined} aria-disabled={inert ? 'true' : undefined} onClick={this.onSummaryClick}>
            <slot name="trigger" />
            <svg part="chevron" class="chevron icon-md shrink-0 translate-y-0.5 text-fg-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <div part="content" class="overflow-hidden pb-4 text-sm">
            <slot />
          </div>
        </details>
      </Host>
    );
  }
}
