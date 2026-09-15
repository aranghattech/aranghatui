import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { createRovingTabindex, type RovingTabindex } from '@aranghat/primitives/roving-tabindex';

type ToggleEl = HTMLElement & { value: string; disabled: boolean; pressed: boolean; variant: 'default' | 'outline'; size: 'sm' | 'md' | 'lg'; groupDisabled: boolean; tabbable?: boolean };

/**
 * Toggle Group — shadcn/ui parity. A set of `<art-toggle>` items with a shared `value`
 * (`type="single"`: one or none; `type="multiple"`: array). The group applies `variant`,
 * `size` and `disabled` to its items, joins their edges, and moves focus with the arrows.
 *
 * @slot - `<art-toggle value="…">` items.
 */
@Component({ tag: 'art-toggle-group', styleUrl: 'art-toggle-group.css', shadow: true })
export class ArtToggleGroup {
  @Element() host!: HTMLElement;
  private roving?: RovingTabindex;
  private observer?: MutationObserver;

  /** `single`: one pressed item (or none). `multiple`: any number. */
  @Prop({ reflect: true }) type: 'single' | 'multiple' = 'single';
  /** Pressed value(s). As an attribute, `multiple` values are comma-separated. */
  @Prop({ mutable: true }) value: string | string[] = '';
  @Prop({ reflect: true }) variant: 'default' | 'outline' = 'default';
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @Prop({ reflect: true }) disabled = false;

  /** Emitted after a user toggle; `detail.value` is a string (`single`) or string[] (`multiple`). */
  @Event({ eventName: 'change', bubbles: true, composed: true }) changeEvent!: EventEmitter<{ value: string | string[] }>;

  private items(): ToggleEl[] { return Array.from(this.host.querySelectorAll('art-toggle')); }
  private selected(): string[] {
    const v = this.value;
    return Array.isArray(v) ? v : typeof v === 'string' && v ? (this.type === 'multiple' ? v.split(',').map((s) => s.trim()) : [v]) : [];
  }

  connectedCallback() {
    this.host.setAttribute('role', 'group');
    // Capture phase: an item's `change` is swallowed before any consumer sees it; the group emits exactly one.
    this.host.addEventListener('change', this.onItemChange, true);
  }
  componentDidLoad() {
    this.roving = createRovingTabindex(this.host, {
      getItems: () => this.items(),
      orientation: 'horizontal',
      isDisabled: (t) => (t as ToggleEl).disabled || this.disabled,
      setTabbable: (t, tabbable) => { (t as ToggleEl).tabbable = tabbable; },
    });
    if (typeof MutationObserver !== 'undefined') {
      this.observer = new MutationObserver(() => this.sync());
      this.observer.observe(this.host, { childList: true });
    }
    this.sync();
  }
  disconnectedCallback() {
    this.roving?.destroy();
    this.observer?.disconnect();
    this.host.removeEventListener('change', this.onItemChange, true);
  }

  @Watch('value') @Watch('variant') @Watch('size') @Watch('disabled') @Watch('type')
  sync() {
    const items = this.items();
    const on = new Set(this.selected());
    items.forEach((t, i) => {
      t.pressed = on.has(t.value);
      t.variant = this.variant;
      t.size = this.size;
      t.groupDisabled = this.disabled;
      t.setAttribute('data-position', i === 0 ? 'first' : i === items.length - 1 ? 'last' : 'middle');
    });
    this.roving?.refresh();
  }

  /** Items emit `change`; the group re-derives the shared value and re-emits once. */
  private onItemChange = (e: Event) => {
    if (e.target === this.host) return; // our own event
    const item = (e.target as HTMLElement).closest?.('art-toggle') as ToggleEl | null;
    if (!item) return;
    e.stopPropagation();
    const pressed = (e as CustomEvent<{ pressed: boolean }>).detail?.pressed ?? item.pressed;
    const current = this.selected();
    let next: string[];
    if (this.type === 'single') next = pressed ? [item.value] : [];
    else next = pressed ? [...current.filter((v) => v !== item.value), item.value] : current.filter((v) => v !== item.value);
    this.value = this.type === 'single' ? (next[0] ?? '') : next;
    this.sync();
    this.changeEvent.emit({ value: this.value });
  };

  render() {
    return (
      <Host aria-disabled={this.disabled ? 'true' : undefined}>
        <slot />
      </Host>
    );
  }
}
