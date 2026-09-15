import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';

/**
 * Dropdown Menu Radio Group — keeps one `type="radio"` item checked and reports its value.
 *
 * @slot - `art-menu-item type="radio"`s.
 */
@Component({ tag: 'art-menu-radio-group', styleUrl: 'art-menu-radio-group.css', shadow: true })
export class ArtMenuRadioGroup {
  @Element() host!: HTMLElement;
  /** Value of the checked item. */
  @Prop({ mutable: true, reflect: true }) value = '';
  /** Emitted when the checked item changes; `detail.value`. */
  @Event({ eventName: 'value-change', bubbles: true, composed: true }) valueChange!: EventEmitter<{ value: string }>;

  connectedCallback() {
    this.host.setAttribute('role', 'group');
    this.host.addEventListener('change', this.onChange);
  }
  componentDidLoad() { this.sync(); }
  disconnectedCallback() { this.host.removeEventListener('change', this.onChange); }

  private items(): Array<HTMLElement & { value: string; checked: boolean }> { return Array.from(this.host.querySelectorAll('art-menu-item[type="radio"]')); }
  @Watch('value')
  sync() { for (const i of this.items()) i.checked = i.value === this.value; }
  private onChange = (e: Event) => {
    const item = (e.target as HTMLElement).closest('art-menu-item[type="radio"]') as (HTMLElement & { value: string }) | null;
    if (!item || !this.host.contains(item)) return;
    e.stopPropagation();
    if (item.value === this.value) return;
    this.value = item.value;
    this.valueChange.emit({ value: this.value });
  };

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
