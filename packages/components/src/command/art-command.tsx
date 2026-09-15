import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { uniqueId } from '@aranghat/primitives/id';
import { createListbox, type Listbox } from '@aranghat/primitives/listbox';

type ItemEl = HTMLElement & { value: string; item?: unknown; keywords?: string; disabled: boolean };
type GroupEl = HTMLElement & { label?: string };

/**
 * Command — shadcn/ui parity. A command palette body: a search field over a filtered list of
 * `<art-command-item>`s (optionally in `<art-command-group>`s) with an empty state. Typing
 * filters, the arrows move the highlight, Enter runs the highlighted item. No dialog of its
 * own (ADR-0019): compose it with Dialog for a ⌘K palette.
 *
 * @slot - `<art-command-item>`s and `<art-command-group>`s.
 * @slot empty - Shown when nothing matches (default: "No results found.").
 * @part input - The search `<input>`.
 * @part list - The `role="listbox"` container.
 * @part empty - The empty state.
 */
@Component({ tag: 'art-command', styleUrl: 'art-command.css', shadow: { delegatesFocus: true } })
export class ArtCommand {
  @Element() host!: HTMLElement;
  private input?: HTMLInputElement;
  private listEl?: HTMLDivElement;
  private list?: Listbox;
  private observer?: MutationObserver;
  private listId = uniqueId('art-command-list');

  /** Current search text. */
  @Prop({ mutable: true }) query = '';
  @Prop() placeholder = 'Type a command or search…';
  /** Accessible name of the list. */
  @Prop() label = 'Suggestions';
  /** Turn off the built-in filter when the consumer filters the items itself. */
  @Prop({ attribute: 'should-filter' }) shouldFilter = true;
  /** Custom match: return true to keep an item for the query. Defaults to a case-insensitive substring match on the item's text and `keywords`. */
  @Prop() filter?: (text: string, query: string, item: HTMLElement) => boolean;
  @State() private empty = false;

  /** Emitted when an item is run (Enter or click); `detail.value`, `detail.item`, `detail.element`. */
  @Event({ eventName: 'select', bubbles: true, composed: true }) selectEvent!: EventEmitter<{ value: string; item?: unknown; element: HTMLElement }>;
  /** Emitted as the search text changes; `detail.query`. */
  @Event({ eventName: 'query-change', bubbles: true, composed: true }) queryChange!: EventEmitter<{ query: string }>;

  private items(): ItemEl[] { return Array.from(this.host.querySelectorAll('art-command-item')); }
  private visible(): ItemEl[] { return this.items().filter((i) => !i.hidden); }

  connectedCallback() {
    this.host.addEventListener('click', this.onItemClick);
    this.host.addEventListener('pointermove', this.onItemPointer);
  }
  componentDidLoad() {
    this.list = createListbox({
      getItems: () => this.visible(),
      isDisabled: (el) => (el as ItemEl).disabled,
      onHighlight: (el) => {
        if (this.input) (this.input as HTMLInputElement & { ariaActiveDescendantElement?: Element | null }).ariaActiveDescendantElement = el;
        for (const i of this.items()) i.setAttribute('aria-selected', i === el ? 'true' : 'false'); // no selection concept: the highlight is the selected option
      },
      onSelect: (el) => this.run(el as ItemEl),
      typeahead: false,
      space: false,
      loop: true,
    });
    if (typeof MutationObserver !== 'undefined') {
      this.observer = new MutationObserver(() => this.applyFilter());
      this.observer.observe(this.host, { childList: true, subtree: true, characterData: true });
    }
    this.applyFilter();
  }
  disconnectedCallback() {
    this.host.removeEventListener('click', this.onItemClick);
    this.host.removeEventListener('pointermove', this.onItemPointer);
    this.observer?.disconnect();
    this.list?.destroy();
  }

  /** Focus the search field. */
  @Method() async setFocus() { this.input?.focus(); }

  @Watch('query')
  onQuery() {
    if (this.listEl) this.listEl.scrollTop = 0; // a new search starts at the top
    this.applyFilter();
  }
  @Watch('shouldFilter') @Watch('filter')
  applyFilter() {
    const q = this.query.trim().toLowerCase();
    const match = this.filter ?? ((text: string, query: string) => text.toLowerCase().includes(query));
    for (const item of this.items()) {
      const text = `${item.textContent ?? ''} ${item.keywords ?? ''}`.trim();
      item.hidden = this.shouldFilter && !!q && !match(text, q, item);
      if (item.hidden) item.removeAttribute('data-highlighted'); // the listbox only clears items it can see
    }
    for (const group of Array.from(this.host.querySelectorAll('art-command-group')) as GroupEl[]) {
      group.hidden = !Array.from(group.querySelectorAll('art-command-item')).some((i) => !(i as HTMLElement).hidden);
    }
    const visible = this.visible();
    this.empty = visible.length === 0;
    // Highlight without scrolling: the list was just scrolled to the top (or is untouched at load), and a
    // programmatic scrollIntoView would move Chromium's focus navigation starting point past the input.
    this.list?.first(false);
  }

  private run(el: ItemEl) {
    if (el.disabled) return;
    this.selectEvent.emit({ value: el.value, item: el.item, element: el });
  }
  private onInput = (e: Event) => {
    e.stopPropagation();
    this.query = (e.target as HTMLInputElement).value;
    this.queryChange.emit({ query: this.query });
  };
  private onKeydown = (e: KeyboardEvent) => {
    if (this.list?.handleKey(e)) e.preventDefault();
  };
  private itemFrom(e: Event): ItemEl | null {
    const el = e.composedPath().find((n) => (n as Element).tagName === 'ART-COMMAND-ITEM') as ItemEl | undefined;
    return el && this.host.contains(el) ? el : null;
  }
  private onItemClick = (e: MouseEvent) => { const el = this.itemFrom(e); if (el) this.run(el); };
  private onItemPointer = (e: PointerEvent) => { const el = this.itemFrom(e); if (el) this.list?.highlight(this.visible().indexOf(el), false); };

  render() {
    return (
      <Host>
        <div part="command" class="flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-fg">
          <div part="search" class="flex h-9 items-center gap-2 border-b border-default px-3">
            <svg class="icon-md shrink-0 text-fg-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            <input
              part="input"
              ref={(el) => (this.input = el)}
              type="text"
              role="combobox"
              aria-expanded="true"
              aria-controls={this.listId}
              aria-autocomplete="list"
              aria-label={this.label}
              autocomplete="off"
              spellcheck={false}
              placeholder={this.placeholder}
              value={this.query}
              class="flex h-10 w-full min-w-0 bg-transparent py-3 text-sm outline-none placeholder:text-fg-muted"
              onInput={this.onInput}
              onKeyDown={this.onKeydown}
            />
          </div>
          <div part="list" id={this.listId} role="listbox" aria-label={this.label} ref={(el) => (this.listEl = el)} class="max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto p-1">
            <slot />
          </div>
          <div part="empty" class="py-6 text-center text-sm text-fg-muted" hidden={!this.empty}>
            <slot name="empty">No results found.</slot>
          </div>
        </div>
      </Host>
    );
  }
}
