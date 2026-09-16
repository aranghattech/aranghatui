import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { uniqueId } from '@aranghat/primitives/id';
import { createRovingTabindex, type RovingTabindex } from '@aranghat/primitives/roving-tabindex';
import { children } from '@aranghat/primitives/dom';

type TabEl = HTMLElement & { value: string; disabled: boolean; selected: boolean; tabbable: boolean };
type PanelEl = HTMLElement & { value: string };

/**
 * Tabs — shadcn/ui parity. `<art-tab>`s form the tab list (they assign themselves to the
 * `tab` slot), `<art-tab-panel>`s are the panels; the shared `value` selects one of each.
 * Tabs and panels are light-DOM siblings, so `aria-controls` / `aria-labelledby` can link them.
 *
 * @slot tab - `<art-tab value="…">` items (assigned automatically).
 * @slot - `<art-tab-panel value="…">` panels.
 * @part list - The `role="tablist"` container.
 */
@Component({ tag: 'art-tabs', styleUrl: 'art-tabs.css', shadow: true })
export class ArtTabs {
  @Element() host!: HTMLElement;
  private roving?: RovingTabindex;
  private observer?: MutationObserver;

  /** Value of the selected tab. */
  @Prop({ mutable: true, reflect: true }) value = '';
  @Prop({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  /** `default`: filled list with a raised active tab. `line`: bare tabs with an underline. */
  @Prop({ reflect: true }) variant: 'default' | 'line' = 'default';
  /** `automatic`: arrow keys select as they move. `manual`: arrows move focus, Enter / Space selects. */
  @Prop() activation: 'automatic' | 'manual' = 'automatic';

  /** Emitted when the user selects a tab; `detail.value`. */
  @Event({ eventName: 'value-change', bubbles: true, composed: true }) valueChange!: EventEmitter<{ value: string }>;

  private tabs(): TabEl[] { return children(this.host, 'art-tab'); }
  private panels(): PanelEl[] { return children(this.host, 'art-tab-panel'); }

  connectedCallback() {
    this.host.addEventListener('click', this.onClick);
    this.host.addEventListener('keydown', this.onKeydown);
  }
  componentDidLoad() {
    this.roving = createRovingTabindex(this.host, {
      getItems: () => this.tabs(),
      orientation: this.orientation,
      isDisabled: (t) => (t as TabEl).disabled,
      setTabbable: (t, tabbable) => { (t as TabEl).tabbable = tabbable; },
      onChange: (t) => { if (this.activation === 'automatic') this.select((t as TabEl).value); },
    });
    if (typeof MutationObserver !== 'undefined') {
      this.observer = new MutationObserver(() => this.sync());
      this.observer.observe(this.host, { childList: true });
    }
    if (!this.value) this.value = this.tabs().find((t) => !t.disabled)?.value ?? '';
    this.sync();
  }
  disconnectedCallback() {
    this.roving?.destroy();
    this.observer?.disconnect();
    this.host.removeEventListener('click', this.onClick);
    this.host.removeEventListener('keydown', this.onKeydown);
  }

  @Watch('value') @Watch('orientation') @Watch('variant')
  sync() {
    const tabs = this.tabs();
    const panels = this.panels();
    for (const tab of tabs) {
      tab.selected = tab.value === this.value;
      tab.setAttribute('data-variant', this.variant);
      tab.setAttribute('data-orientation', this.orientation);
      if (!tab.id) tab.id = uniqueId('art-tab');
    }
    for (const panel of panels) {
      const tab = tabs.find((t) => t.value === panel.value);
      panel.hidden = panel.value !== this.value;
      if (!panel.id) panel.id = uniqueId('art-tab-panel');
      if (tab) {
        tab.setAttribute('aria-controls', panel.id);
        panel.setAttribute('aria-labelledby', tab.id);
      }
    }
    this.roving?.refresh();
    const active = tabs.findIndex((t) => t.value === this.value && !t.disabled);
    if (active >= 0) this.roving?.setActive(active, false);
  }
  private select(value: string) {
    if (value === this.value) return;
    this.value = value;
    this.valueChange.emit({ value });
  }
  private onClick = (e: MouseEvent) => {
    const tab = (e.target as HTMLElement).closest?.('art-tab') as TabEl | null;
    if (tab && tab.parentElement === this.host && !tab.disabled) this.select(tab.value);
  };
  private onKeydown = (e: KeyboardEvent) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const tab = (e.target as HTMLElement).closest?.('art-tab') as TabEl | null;
    if (tab && tab.parentElement === this.host && !tab.disabled) { e.preventDefault(); this.select(tab.value); }
  };

  render() {
    return (
      <Host>
        <div part="list" role="tablist" aria-orientation={this.orientation} class={{ 'inline-flex w-fit items-center justify-center rounded-lg': true, 'h-9 p-1 bg-muted': this.variant === 'default', 'gap-1 bg-transparent': this.variant === 'line', 'h-fit flex-col': this.orientation === 'vertical' }}>
          <slot name="tab" />
        </div>
        <slot />
      </Host>
    );
  }
}
