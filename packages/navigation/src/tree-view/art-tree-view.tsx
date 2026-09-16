import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { createTypeahead, type Typeahead } from '@aranghat/primitives/typeahead';
import { children, isRtl } from '@aranghat/primitives/dom';

type Item = HTMLElement & { value: string; label: string; expanded: boolean; disabled: boolean };

/**
 * Tree View — a hierarchical list of `art-tree-item`s (files, pages, an outline) following the
 * WAI-ARIA tree pattern: one tab stop, arrows move and expand / collapse, Home / End, `*` opens
 * the siblings, typing jumps, Enter / Space or a click selects. Single selection: the selected
 * item's `value` is the tree's `value`.
 *
 * @slot - Top-level `art-tree-item`s.
 * @part tree - The `role="tree"` list.
 */
@Component({ tag: 'art-tree-view', styleUrl: 'art-tree-view.css', shadow: true })
export class ArtTreeView {
  @Element() host!: HTMLElement;
  private ta?: Typeahead;
  private observer?: MutationObserver;

  /** Accessible name of the tree. */
  @Prop() label = 'Tree';
  /** `value` of the selected item. */
  @Prop({ mutable: true, reflect: true }) value = '';

  /** Emitted when the user selects an item; `detail.value`. */
  @Event({ eventName: 'value-change', bubbles: true, composed: true }) valueChange!: EventEmitter<{ value: string }>;

  connectedCallback() {
    this.host.addEventListener('keydown', this.onKeydown);
    this.host.addEventListener('focusin', this.onFocusin);
    this.host.addEventListener('select', this.onSelect);
  }
  componentDidLoad() {
    this.ta = createTypeahead({
      getItems: () => this.visible().map((i) => ({ text: i.label, disabled: i.disabled })),
      getActiveIndex: () => this.visible().indexOf(this.current() as Item),
      onMatch: (i) => this.focus(this.visible()[i]),
    });
    if (typeof MutationObserver === 'function') {
      this.observer = new MutationObserver(() => this.sync());
      this.observer.observe(this.host, { childList: true, subtree: true, attributes: true, attributeFilter: ['expanded', 'disabled'] });
    }
    this.sync();
  }
  disconnectedCallback() {
    this.host.removeEventListener('keydown', this.onKeydown);
    this.host.removeEventListener('focusin', this.onFocusin);
    this.host.removeEventListener('select', this.onSelect);
    this.ta?.destroy();
    this.observer?.disconnect();
  }

  private items(): Item[] { return Array.from(this.host.querySelectorAll('art-tree-item')) as Item[]; }
  private parentOf(item: Item): Item | null { return (item.parentElement?.closest('art-tree-item') as Item | null) ?? null; }
  /** Items whose ancestors are all expanded, in document order. */
  private visible(): Item[] {
    return this.items().filter((i) => { for (let p = this.parentOf(i); p; p = this.parentOf(p)) if (!p.expanded) return false; return true; });
  }
  private current(): Item | null { return this.items().find((i) => i.tabIndex === 0) ?? null; }
  /** One tab stop: `tabindex="0"` on `item`, no tabindex elsewhere (a negative tabindex on a host would hide its slotted children from the Tab order). */
  private setTabStop(item: Item | null) {
    for (const i of this.items()) if (i === item) i.tabIndex = 0; else i.removeAttribute('tabindex');
  }

  /** One tab stop (the selected or first visible item) and `aria-selected` on the selected one. */
  @Watch('value')
  sync() {
    const items = this.items();
    if (!items.length) return;
    for (const i of items) i.setAttribute('aria-selected', String(!!this.value && i.value === this.value));
    const visible = this.visible();
    let focusable = this.current();
    if (!focusable || !visible.includes(focusable)) focusable = (this.value && visible.find((i) => i.value === this.value)) || visible.find((i) => !i.disabled) || visible[0] || null;
    this.setTabStop(focusable);
  }
  private focus(item?: Item | null) {
    if (!item) return;
    this.setTabStop(item);
    item.focus();
  }
  private onFocusin = (e: FocusEvent) => {
    const it = (e.target as Element).closest?.('art-tree-item') as Item | null;
    if (it && this.items().includes(it)) this.setTabStop(it);
  };
  private onSelect = (e: Event) => {
    const value = (e as CustomEvent<{ value: string }>).detail?.value ?? '';
    if (value === this.value) return;
    this.value = value;
    this.valueChange.emit({ value });
  };
  private onKeydown = (e: KeyboardEvent) => {
    const it = (e.target as Element).closest?.('art-tree-item') as Item | null;
    if (!it || !this.items().includes(it) || e.altKey || e.ctrlKey || e.metaKey) return;
    const vis = this.visible();
    const i = vis.indexOf(it);
    const rtl = isRtl(this.host);
    const forward = rtl ? 'ArrowLeft' : 'ArrowRight';
    const back = rtl ? 'ArrowRight' : 'ArrowLeft';
    const parent = it.hasAttribute('aria-expanded');
    switch (e.key) {
      case 'ArrowDown': this.focus(vis[i + 1]); break;
      case 'ArrowUp': this.focus(vis[i - 1]); break;
      case forward:
        if (parent && !it.expanded) it.expanded = true;
        else if (parent) this.focus(this.visible()[i + 1]);
        break;
      case back:
        if (parent && it.expanded) it.expanded = false;
        else this.focus(this.parentOf(it));
        break;
      case 'Home': this.focus(vis[0]); break;
      case 'End': this.focus(vis[vis.length - 1]); break;
      case 'Enter': case ' ': it.click(); break;
      case '*': {
        const scope = this.parentOf(it) ?? this.host;
        for (const s of children(scope, 'art-tree-item') as Item[]) if (s.hasAttribute('aria-expanded') && !s.disabled) s.expanded = true;
        break;
      }
      default:
        if (!this.ta?.handleKey(e)) return;
    }
    e.preventDefault();
  };

  render() {
    return (
      <Host>
        <ul part="tree" role="tree" aria-label={this.label} class="m-0 flex list-none flex-col gap-px p-0">
          <slot />
        </ul>
      </Host>
    );
  }
}
