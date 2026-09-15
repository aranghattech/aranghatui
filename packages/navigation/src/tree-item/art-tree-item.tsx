import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';

/**
 * Tree Item — a node of an `art-tree-view`: `label`, optional `icon`, and nested
 * `art-tree-item`s in the default slot (shown while `expanded`). The host is the
 * `role="treeitem"` element (focus, `aria-expanded`, `aria-selected`, `aria-level`); only the
 * tree's current item is a tab stop.
 *
 * @slot icon - An icon before the label.
 * @slot - Child `art-tree-item`s.
 * @part row - The clickable row.
 * @part chevron - The expand / collapse chevron (parents only).
 * @part label - The label.
 * @part group - The `role="group"` list of children.
 */
@Component({ tag: 'art-tree-item', styleUrl: 'art-tree-item.css', shadow: true })
export class ArtTreeItem {
  @Element() host!: HTMLElement;

  /** Value reported by `select` and held by the tree's `value`. */
  @Prop() value = '';
  @Prop() label = '';
  @Prop({ mutable: true, reflect: true }) expanded = false;
  @Prop({ reflect: true }) disabled = false;
  @State() hasChildren = false;
  @State() level = 1;

  /** Emitted when the item is activated (click, Enter, Space); `detail.value`. */
  @Event({ eventName: 'select', bubbles: true, composed: true }) selectEvent!: EventEmitter<{ value: string }>;
  /** Emitted when `expanded` turns on; `detail.value`. */
  @Event({ eventName: 'expand', bubbles: true, composed: true }) expandEvent!: EventEmitter<{ value: string }>;
  /** Emitted when `expanded` turns off; `detail.value`. */
  @Event({ eventName: 'collapse', bubbles: true, composed: true }) collapseEvent!: EventEmitter<{ value: string }>;

  connectedCallback() {
    this.host.setAttribute('role', 'treeitem');
    // No `tabindex="-1"` on resting items: a shadow host with a negative tabindex removes its whole
    // focus scope — the children slotted into it included — from the Tab order, so a nested
    // selected item could never be reached. Only the tree's current item carries `tabindex="0"`.
    let level = 1;
    for (let p = this.host.parentElement?.closest('art-tree-item'); p; p = p.parentElement?.closest('art-tree-item')) level += 1;
    this.level = level;
    this.host.addEventListener('click', this.onClick);
  }
  componentWillLoad() {
    this.wire();
  }
  componentWillRender() {
    const el = this.host;
    el.setAttribute('aria-level', String(this.level));
    if (this.hasChildren) el.setAttribute('aria-expanded', String(this.expanded)); else el.removeAttribute('aria-expanded');
    if (this.disabled) el.setAttribute('aria-disabled', 'true'); else el.removeAttribute('aria-disabled');
    if (this.label) el.setAttribute('aria-label', this.label);
    if (!el.hasAttribute('aria-selected')) el.setAttribute('aria-selected', 'false');
  }
  disconnectedCallback() {
    this.host.removeEventListener('click', this.onClick);
  }

  @Watch('expanded')
  onExpanded(expanded: boolean) {
    (expanded ? this.expandEvent : this.collapseEvent).emit({ value: this.value });
  }
  private wire = () => { this.hasChildren = !!this.host.querySelector(':scope > art-tree-item'); };
  private onClick = (e: MouseEvent) => {
    const path = e.composedPath();
    // a click on a nested item bubbles through this host: it belongs to the child
    if (path.find((n) => (n as Element).tagName === 'ART-TREE-ITEM') !== this.host) return;
    if (this.disabled) { e.stopPropagation(); return; }
    const chevron = this.host.shadowRoot?.querySelector('[part="chevron"]');
    if (chevron && path.includes(chevron)) { this.expanded = !this.expanded; return; }
    if (this.hasChildren) this.expanded = !this.expanded;
    this.host.tabIndex = 0;
    this.host.focus({ preventScroll: true });
    this.selectEvent.emit({ value: this.value });
  };

  render() {
    return (
      <Host>
        <div part="row" class="row flex h-7 items-center gap-1 rounded-md pe-2 text-sm select-none" style={{ paddingInlineStart: `calc(var(--art-space-1) + ${this.level - 1} * var(--art-space-4))` }}>
          <span part="chevron" class="chevron flex size-5 shrink-0 items-center justify-center rounded-sm" aria-hidden="true">
            {this.hasChildren && <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false"><path d="m9 18 6-6-6-6" /></svg>}
          </span>
          <slot name="icon" />
          <span part="label" class="truncate">{this.label}</span>
        </div>
        <ul part="group" role="group" class="m-0 list-none p-0" hidden={!this.hasChildren || !this.expanded}>
          <slot onSlotchange={this.wire} />
        </ul>
      </Host>
    );
  }
}
