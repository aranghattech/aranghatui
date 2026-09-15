import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';

type ItemEl = HTMLElement & { value: string; open: boolean; disabled: boolean };

/**
 * Accordion — shadcn/ui parity. A stack of `<art-accordion-item>`s, each a native `<details>`.
 * `type="single"` keeps one item open (the accordion closes the others: the native `name`
 * grouping only works within one tree, and each item's `<details>` sits in its own shadow
 * root); `type="multiple"` lets any number open. Arrow keys move between the triggers.
 *
 * @slot - `<art-accordion-item value="…">` items.
 */
@Component({ tag: 'art-accordion', styleUrl: 'art-accordion.css', shadow: true })
export class ArtAccordion {
  @Element() host!: HTMLElement;
  private observer?: MutationObserver;

  /** `single`: one item open at a time. `multiple`: any number. */
  @Prop({ reflect: true }) type: 'single' | 'multiple' = 'single';
  /** Open value(s). As an attribute, `multiple` values are comma-separated. */
  @Prop({ mutable: true }) value: string | string[] = '';
  @Prop({ reflect: true }) disabled = false;

  /** Emitted after a user toggle; `detail.value` is a string (`single`) or string[] (`multiple`). */
  @Event({ eventName: 'value-change', bubbles: true, composed: true }) valueChange!: EventEmitter<{ value: string | string[] }>;

  private items(): ItemEl[] { return Array.from(this.host.querySelectorAll(':scope > art-accordion-item')); }
  private selected(): string[] {
    const v = this.value;
    return Array.isArray(v) ? v : typeof v === 'string' && v ? (this.type === 'multiple' ? v.split(',').map((s) => s.trim()) : [v]) : [];
  }

  connectedCallback() {
    this.host.addEventListener('open-change', this.onItemToggle, true);
    this.host.addEventListener('keydown', this.onKeydown);
  }
  componentDidLoad() {
    if (typeof MutationObserver !== 'undefined') {
      this.observer = new MutationObserver(() => this.sync());
      this.observer.observe(this.host, { childList: true });
    }
    this.sync();
  }
  disconnectedCallback() {
    this.observer?.disconnect();
    this.host.removeEventListener('open-change', this.onItemToggle, true);
    this.host.removeEventListener('keydown', this.onKeydown);
  }

  private fromItems = false;

  @Watch('value') @Watch('type') @Watch('disabled')
  sync() {
    if (this.fromItems) return; // the items are the source of truth during a user toggle
    const on = new Set(this.selected());
    for (const item of this.items()) {
      item.open = on.has(item.value);
      item.toggleAttribute('data-group-disabled', this.disabled);
    }
  }

  /** Items emit `open-change` (composed); the accordion re-derives its value and emits once. */
  private onItemToggle = (e: Event) => {
    const item = (e.target as HTMLElement).closest?.('art-accordion-item') as ItemEl | null;
    if (!item || item.parentElement !== this.host) return;
    e.stopPropagation();
    if (this.type === 'single' && item.open) for (const other of this.items()) if (other !== item && other.open) other.open = false;
    const open = this.items().filter((i) => i.open).map((i) => i.value);
    const next = this.type === 'single' ? (open[0] ?? '') : open;
    if (JSON.stringify(next) === JSON.stringify(this.selected().length && this.type === 'single' ? this.selected()[0] : this.type === 'single' ? '' : this.selected())) return;
    this.fromItems = true;
    this.value = next;
    this.fromItems = false;
    this.valueChange.emit({ value: this.value });
  };
  /** Up / Down / Home / End move focus between triggers (APG accordion). */
  private onKeydown = (e: KeyboardEvent) => {
    const keys = ['ArrowDown', 'ArrowUp', 'Home', 'End'];
    if (!keys.includes(e.key)) return;
    const triggers = this.items().filter((i) => !i.disabled).map((i) => i.shadowRoot?.querySelector<HTMLElement>('summary')).filter(Boolean) as HTMLElement[];
    const current = triggers.findIndex((t) => t === (e.composedPath()[0] as Element)?.closest?.('summary'));
    if (current < 0) return;
    e.preventDefault();
    const next = e.key === 'Home' ? 0 : e.key === 'End' ? triggers.length - 1 : (current + (e.key === 'ArrowDown' ? 1 : -1) + triggers.length) % triggers.length;
    triggers[next]?.focus();
  };

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
