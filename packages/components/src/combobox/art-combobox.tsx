import { AttachInternals, Component, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { resolveAria } from '@aranghat/primitives/aria';
import { createDismissable, type Dismissable } from '@aranghat/primitives/dismissable';
import type { Placement } from '@aranghat/primitives/floating';
import { uniqueId } from '@aranghat/primitives/id';
import { createListbox, type Listbox } from '@aranghat/primitives/listbox';
import { createOverlay, type Overlay } from '@aranghat/primitives/overlay';

type ItemEl = HTMLElement & { value: string; item?: unknown; label?: string; keywords?: string; disabled: boolean; selected: boolean };

/**
 * Combobox — shadcn/ui parity. A text field that filters a list of `<art-combobox-item>`s as
 * the user types; single choice (the field shows the chosen label) or `multiple` (chips in
 * the field). Items live in the light DOM so they can be any template and carry a data object
 * in `item`. Rendered on the platform top layer. Form-associated.
 *
 * @slot - `<art-combobox-item>`s, optionally inside `<art-combobox-group>`s.
 * @slot empty - Shown when nothing matches (default: "No results found.").
 * @part field - The bordered frame around chips, input and buttons.
 * @part input - The text `<input>` (role="combobox").
 * @part chip - A selected value in `multiple` mode.
 * @part clear - The clear button (`show-clear`).
 * @part trigger - The chevron button that opens the list.
 * @part content - The listbox panel.
 * @part empty - The empty state.
 */
@Component({ tag: 'art-combobox', styleUrl: 'art-combobox.css', shadow: { delegatesFocus: true }, formAssociated: true })
export class ArtCombobox {
  @Element() host!: HTMLElement;
  @AttachInternals() internals?: ElementInternals;
  private input?: HTMLInputElement;
  private panel?: HTMLDivElement;
  private overlay?: Overlay;
  private dismiss?: Dismissable;
  private list?: Listbox;
  private observer?: MutationObserver;
  private defaultValue: string | string[] = '';
  private listboxId = uniqueId('art-combobox-list');

  /** The chosen item's value; an array of values when `multiple`. */
  @Prop({ mutable: true }) value: string | string[] = '';
  /** Select several items; they show as chips in the field. */
  @Prop({ reflect: true }) multiple = false;
  @Prop() placeholder?: string;
  @Prop({ reflect: true }) name?: string;
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @Prop({ reflect: true }) disabled = false;
  @Prop() required = false;
  @Prop({ reflect: true }) invalid = false;
  @Prop({ mutable: true, reflect: true }) open = false;
  /** Show the chevron button. */
  @Prop({ attribute: 'show-trigger' }) showTrigger = true;
  /** Show a clear button while something is selected. */
  @Prop({ attribute: 'show-clear' }) showClear = false;
  /** Turn off the built-in filter when the consumer filters the items itself (async search). */
  @Prop({ attribute: 'should-filter' }) shouldFilter = true;
  /** Custom match: return true to keep an item for the query. Defaults to a case-insensitive substring match on the item's text, `label` and `keywords`. */
  @Prop() filter?: (text: string, query: string, item: HTMLElement) => boolean;
  /** Preferred side of the list. */
  @Prop() placement: Placement = 'bottom-start';
  /** The text in the field. */
  @State() private query = '';
  @State() private empty = false;
  @State() private chips: Array<{ value: string; text: string }> = [];

  /** Emitted when the selection changes; `detail.value` (array when `multiple`), `detail.item` (the picked item's data; `detail.items` when `multiple`) and `detail.element`. */
  @Event({ eventName: 'change', bubbles: true, composed: true }) changeEvent!: EventEmitter<{ value: string | string[]; item?: unknown; items?: unknown[]; element?: HTMLElement }>;
  /** Emitted as the user types; `detail.query`. Use it for async search with `should-filter="false"`. */
  @Event({ eventName: 'query-change', bubbles: true, composed: true }) queryChange!: EventEmitter<{ query: string }>;
  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;

  @Prop({ attribute: 'aria-label' }) hostAriaLabel?: string | null;
  @Prop({ attribute: 'aria-labelledby' }) hostAriaLabelledby?: string | null;
  @Prop({ attribute: 'aria-describedby' }) hostAriaDescribedby?: string | null;
  private directLabel?: string;
  private hostLabel?: string;
  private hostDescription?: string;

  componentWillRender() {
    if (this.hostAriaLabel != null) { this.directLabel = this.hostAriaLabel; this.host.removeAttribute('aria-label'); }
    const r = resolveAria(this.host, { labelledby: this.hostAriaLabelledby, describedby: this.hostAriaDescribedby }, this.directLabel);
    this.hostLabel = r.label;
    this.hostDescription = r.description;
  }

  private items(): ItemEl[] { return Array.from(this.host.querySelectorAll('art-combobox-item')); }
  private visible(): ItemEl[] { return this.items().filter((i) => !i.hidden); }
  private values(): string[] { return Array.isArray(this.value) ? this.value : this.value ? [this.value] : []; }
  private text(el: ItemEl): string { return el.label ?? el.textContent?.trim() ?? ''; }

  connectedCallback() {
    this.defaultValue = this.value;
    if (!this.host.id) this.host.id = uniqueId('art-combobox');
    this.host.addEventListener('click', this.onItemClick);
    this.host.addEventListener('pointermove', this.onItemPointer);
  }
  componentDidLoad() {
    this.list = createListbox({
      getItems: () => this.visible(),
      isDisabled: (el) => (el as ItemEl).disabled,
      onHighlight: (el) => { if (this.input) (this.input as HTMLInputElement & { ariaActiveDescendantElement?: Element | null }).ariaActiveDescendantElement = el; },
      onSelect: (el) => this.choose(el as ItemEl),
      typeahead: false,
      space: false,
    });
    if (typeof MutationObserver !== 'undefined') {
      this.observer = new MutationObserver(() => this.sync());
      this.observer.observe(this.host, { childList: true, subtree: true, characterData: true });
    }
    this.sync();
    this.query = this.multiple ? '' : this.selectedText();
    this.syncForm();
    if (this.open) this.onOpen(true);
  }
  disconnectedCallback() {
    this.host.removeEventListener('click', this.onItemClick);
    this.host.removeEventListener('pointermove', this.onItemPointer);
    this.observer?.disconnect();
    this.list?.destroy();
    this.dismiss?.destroy();
    this.overlay?.destroy();
    this.overlay = undefined;
  }

  /** Focus the text field. */
  @Method() async setFocus() { this.input?.focus(); }
  formResetCallback() { this.value = this.defaultValue; }
  formDisabledCallback(disabled: boolean) { this.disabled = disabled; }

  @Watch('value')
  onValue() {
    this.sync();
    if (!this.open && !this.multiple) this.query = this.selectedText();
    this.syncForm();
  }
  @Watch('shouldFilter') @Watch('filter')
  onFilter() { this.applyFilter(); }

  private selectedText(): string {
    const v = this.values()[0];
    const el = v === undefined ? undefined : this.items().find((i) => i.value === v);
    return el ? this.text(el) : '';
  }
  /** Selected state on the items, the chips, and the filter. */
  private sync() {
    const values = this.values();
    for (const item of this.items()) item.selected = values.includes(item.value);
    this.chips = this.multiple ? values.map((v) => { const el = this.items().find((i) => i.value === v); return { value: v, text: el ? this.text(el) : v }; }) : [];
    this.applyFilter();
  }
  private syncForm() {
    const values = this.values();
    if (this.multiple) {
      const fd = new FormData();
      if (this.name) for (const v of values) fd.append(this.name, v);
      this.internals?.setFormValue?.(fd);
    } else this.internals?.setFormValue?.(values[0] ?? '');
    this.internals?.setValidity?.(this.required && !values.length ? { valueMissing: true } : {}, 'Please select an item in the list.', this.input);
  }
  private applyFilter() {
    // Filter only while the user is typing: the full list shows on open, and a single choice's label does not filter itself.
    const q = this.filtering ? this.query.trim().toLowerCase() : '';
    const match = this.filter ?? ((text: string, query: string) => text.toLowerCase().includes(query));
    for (const item of this.items()) {
      const text = `${item.textContent ?? ''} ${item.label ?? ''} ${item.keywords ?? ''}`.trim();
      item.hidden = this.shouldFilter && !!q && !match(text, q, item);
      if (item.hidden) item.removeAttribute('data-highlighted'); // the listbox only clears items it can see
    }
    for (const group of Array.from(this.host.querySelectorAll('art-combobox-group')) as HTMLElement[]) {
      group.hidden = !Array.from(group.querySelectorAll('art-combobox-item')).some((i) => !(i as HTMLElement).hidden);
    }
    this.empty = this.visible().length === 0;
    if (this.open) { this.overlay?.update(); if (q) this.list?.first(); else this.highlightSelected(); }
  }
  private filtering = false;
  private highlightSelected() {
    const items = this.visible();
    const idx = items.findIndex((i) => i.selected && !i.disabled);
    if (idx >= 0) this.list?.highlight(idx); else if (this.multiple) this.list?.clear(); else this.list?.first();
  }

  private choose(el: ItemEl) {
    if (el.disabled) return;
    if (this.multiple) {
      const values = this.values();
      const next = values.includes(el.value) ? values.filter((v) => v !== el.value) : [...values, el.value];
      this.value = next;
      const items = next.map((v) => this.items().find((i) => i.value === v)?.item);
      this.changeEvent.emit({ value: next, item: el.item, items, element: el });
      this.setQuery('');
      this.input?.focus({ preventScroll: true });
      return;
    }
    if (el.value !== this.value) {
      this.value = el.value;
      this.changeEvent.emit({ value: el.value, item: el.item, element: el });
    }
    this.setQuery(this.text(el));
    this.set(false);
    this.input?.focus({ preventScroll: true });
  }
  private removeValue(value: string) {
    const next = this.values().filter((v) => v !== value);
    this.value = next;
    this.changeEvent.emit({ value: next, items: next.map((v) => this.items().find((i) => i.value === v)?.item) });
  }
  private clear = () => {
    this.value = this.multiple ? [] : '';
    this.changeEvent.emit({ value: this.value, items: this.multiple ? [] : undefined });
    this.setQuery('');
    this.input?.focus({ preventScroll: true });
  };
  private setQuery(q: string, filtering = false) {
    this.filtering = filtering;
    this.query = q;
    if (this.input && this.input.value !== q) this.input.value = q;
    this.applyFilter();
  }
  private set(open: boolean) {
    if (this.open === open || (open && this.disabled)) return;
    this.open = open;
    this.openChange.emit({ open });
  }

  @Watch('open')
  onOpen(open: boolean) {
    if (!this.panel || !this.input) return;
    const anchor = this.host.shadowRoot?.querySelector('[part="field"]') ?? this.input;
    if (open) {
      this.overlay ??= createOverlay(anchor, this.panel, { placement: this.placement, offset: 4, matchReferenceWidth: true });
      void this.overlay.open().then(() => { if (this.open) this.applyFilter(); });
      this.dismiss ??= createDismissable(this.panel, { escape: true, pointerOutside: true, focusOutside: true, ignore: () => [anchor], onDismiss: (r) => { this.set(false); if (r === 'escape') this.input?.focus(); } });
    } else {
      this.dismiss?.destroy();
      this.dismiss = undefined;
      this.list?.clear();
      // Leaving without a choice: the field shows the choice again (or nothing).
      this.setQuery(this.multiple ? '' : this.selectedText());
      void this.overlay?.close();
    }
  }

  private onInput = (e: Event) => {
    e.stopPropagation();
    this.setQuery((e.target as HTMLInputElement).value, true);
    this.queryChange.emit({ query: this.query });
    this.set(true);
  };
  private onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (!this.open) { e.preventDefault(); this.set(true); return; }
    }
    if (e.key === 'Enter' && !this.open) return; // submit the surrounding form
    if (e.key === 'Tab') { this.set(false); return; }
    if (e.key === 'Backspace' && this.multiple && !this.input?.value && this.chips.length) { this.removeValue(this.chips[this.chips.length - 1]!.value); return; }
    if (this.open && this.list?.handleKey(e)) e.preventDefault();
  };
  private onFieldPointerDown = (e: PointerEvent) => {
    // A press anywhere on the frame (chips, padding) focuses the input; the buttons keep their own behaviour.
    if ((e.target as Element).closest('button')) return;
    if (e.target !== this.input) { e.preventDefault(); this.input?.focus(); }
    if (!this.open) this.set(true); else if (e.target !== this.input) this.set(false);
  };
  private onTrigger = () => { this.input?.focus({ preventScroll: true }); this.set(!this.open); };
  private itemFrom(e: Event): ItemEl | null {
    const el = e.composedPath().find((n) => (n as Element).tagName === 'ART-COMBOBOX-ITEM') as ItemEl | undefined;
    return el && this.host.contains(el) ? el : null;
  }
  private onItemClick = (e: MouseEvent) => { const el = this.itemFrom(e); if (el) this.choose(el); };
  private onItemPointer = (e: PointerEvent) => { const el = this.itemFrom(e); if (el) this.list?.highlight(this.visible().indexOf(el), false); };

  render() {
    const hasValue = this.values().length > 0;
    return (
      <Host>
        <div
          part="field"
          class={{ 'flex w-full min-h-full items-center gap-1 border-default bg-transparent shadow-raised transition-interactive motion-fast focus-ring-within has-disabled:opacity-50 has-aria-invalid:invalid-ring': true, [`field-frame-${this.size}`]: !this.multiple, [`field-pad-${this.size}`]: true, 'flex-wrap py-1': this.multiple }}
          onPointerDown={this.onFieldPointerDown}
        >
          {/* safelist: field-frame-sm field-frame-md field-frame-lg field-pad-sm field-pad-md field-pad-lg */}
          {this.chips.map((c) => (
            <span part="chip" class="inline-flex h-6 shrink-0 items-center gap-1 rounded-md bg-secondary ps-2 pe-1 text-xs font-medium text-secondary-fg" key={c.value}>
              {c.text}
              <button type="button" class="chip-remove inline-flex items-center justify-center rounded-sm text-fg-muted transition-interactive motion-fast hover:text-fg focus-ring" aria-label={`Remove ${c.text}`} tabindex="-1" disabled={this.disabled} onClick={() => this.removeValue(c.value)}>
                <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </span>
          ))}
          <input
            part="input"
            ref={(el) => (this.input = el)}
            type="text"
            role="combobox"
            aria-expanded={this.open ? 'true' : 'false'}
            aria-controls={this.listboxId}
            aria-autocomplete="list"
            aria-haspopup="listbox"
            aria-label={this.hostLabel}
            aria-description={this.hostDescription}
            aria-invalid={this.invalid ? 'true' : undefined}
            aria-required={this.required ? 'true' : undefined}
            autocomplete="off"
            spellcheck={false}
            placeholder={this.chips.length ? undefined : this.placeholder}
            value={this.query}
            disabled={this.disabled}
            class="h-full min-w-0 flex-1 bg-transparent text-md md:text-sm text-fg outline-none placeholder:text-fg-muted"
            onInput={this.onInput}
            onKeyDown={this.onKeydown}
          />
          {this.showClear && hasValue && !this.disabled && (
            <button part="clear" type="button" class="inline-flex shrink-0 items-center justify-center rounded-sm text-fg-muted transition-interactive motion-fast hover:text-fg focus-ring" aria-label="Clear" onClick={this.clear}>
              <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          )}
          {this.showTrigger && (
            <button part="trigger" type="button" class="inline-flex shrink-0 items-center justify-center rounded-sm text-fg-muted" aria-label="Open" tabindex="-1" disabled={this.disabled} onClick={this.onTrigger}>
              <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6" /></svg>
            </button>
          )}
        </div>
        <div part="content" popover="manual" ref={(el) => (this.panel = el)} class="rounded-md border-default bg-popover text-fg shadow-popover">
          <div part="listbox" id={this.listboxId} role="listbox" aria-label={this.hostLabel} aria-multiselectable={this.multiple ? 'true' : undefined} class="max-h-72 overflow-x-hidden overflow-y-auto p-1">
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
