import { AttachInternals, Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h } from '@stencil/core';
import { resolveAria } from '@aranghat/primitives/aria';
import { createDismissable, type Dismissable } from '@aranghat/primitives/dismissable';
import type { Placement } from '@aranghat/primitives/floating';
import { uniqueId } from '@aranghat/primitives/id';
import { createListbox, type Listbox } from '@aranghat/primitives/listbox';
import { createOverlay, type Overlay } from '@aranghat/primitives/overlay';

type ItemEl = HTMLElement & { value: string; item?: unknown; label?: string; disabled: boolean; selected: boolean };

/**
 * Select — shadcn/ui parity. A trigger styled like Native Select and a listbox on the platform
 * top layer, filled with `<art-select-item>`s from the light DOM — so an item can be any
 * template (an avatar with a name and email) and carry a data object in `item`. The trigger
 * shows a copy of the chosen item's content (or its `label`). Form-associated.
 *
 * @slot - `<art-select-item value="…">`s, optionally inside `<art-select-group label="…">`s.
 * @part trigger - The `<button>` (role="combobox").
 * @part value - The trigger's content area.
 * @part content - The listbox panel.
 */
@Component({ tag: 'art-select', styleUrl: 'art-select.css', shadow: { delegatesFocus: true }, formAssociated: true })
export class ArtSelect {
  @Element() host!: HTMLElement;
  @AttachInternals() internals?: ElementInternals;
  private trigger?: HTMLButtonElement;
  private panel?: HTMLDivElement;
  private listbox?: HTMLDivElement;
  private overlay?: Overlay;
  private dismiss?: Dismissable;
  private list?: Listbox;
  private observer?: MutationObserver;
  private defaultValue = '';
  private listboxId = uniqueId('art-select-list');

  @Prop({ mutable: true, reflect: true }) value = '';
  @Prop() placeholder?: string;
  @Prop({ reflect: true }) name?: string;
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @Prop({ reflect: true }) disabled = false;
  @Prop() required = false;
  @Prop({ reflect: true }) invalid = false;
  @Prop({ mutable: true, reflect: true }) open = false;
  /** Preferred side of the listbox. */
  @Prop() placement: Placement = 'bottom-start';

  /** Emitted when the user picks an item; `detail.value`, `detail.item` (the item's data object) and `detail.element`. */
  @Event({ eventName: 'change', bubbles: true, composed: true }) changeEvent!: EventEmitter<{ value: string; item?: unknown; element: HTMLElement }>;
  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;

  @Prop({ attribute: 'aria-label' }) hostAriaLabel?: string | null;
  @Prop({ attribute: 'aria-labelledby' }) hostAriaLabelledby?: string | null;
  @Prop({ attribute: 'aria-describedby' }) hostAriaDescribedby?: string | null;
  private directLabel?: string;
  private ariaLabel?: string;
  private ariaDescription?: string;

  componentWillRender() {
    if (this.hostAriaLabel != null) { this.directLabel = this.hostAriaLabel; this.host.removeAttribute('aria-label'); }
    const r = resolveAria(this.host, { labelledby: this.hostAriaLabelledby, describedby: this.hostAriaDescribedby }, this.directLabel);
    this.ariaLabel = r.label;
    this.ariaDescription = r.description;
  }

  private items(): ItemEl[] { return Array.from(this.host.querySelectorAll('art-select-item')); }
  private selectedItem(): ItemEl | undefined { return this.items().find((i) => i.value === this.value); }

  connectedCallback() {
    this.defaultValue = this.value;
    this.host.addEventListener('click', this.onItemClick);
    this.host.addEventListener('pointermove', this.onItemPointer);
  }
  componentDidLoad() {
    this.list = createListbox({
      getItems: () => this.items(),
      isDisabled: (el) => (el as ItemEl).disabled,
      getText: (el) => (el as ItemEl).label ?? el.textContent?.trim() ?? '',
      onHighlight: (el) => { if (this.listbox) (this.listbox as HTMLElement & { ariaActiveDescendantElement?: Element | null }).ariaActiveDescendantElement = el; },
      onSelect: (el) => this.choose(el as ItemEl),
    });
    if (typeof MutationObserver !== 'undefined') {
      this.observer = new MutationObserver(() => this.sync());
      this.observer.observe(this.host, { childList: true, subtree: true });
    }
    this.sync();
    this.internals?.setFormValue?.(this.value);
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

  /** Focus the trigger. */
  @Method() async setFocus() { this.trigger?.focus(); }
  formResetCallback() { this.value = this.defaultValue; }
  formDisabledCallback(disabled: boolean) { this.disabled = disabled; }

  @Watch('value')
  onValue(v: string) {
    this.internals?.setFormValue?.(v);
    this.internals?.setValidity?.(this.required && !v ? { valueMissing: true } : {}, 'Please select an item in the list.', this.trigger);
    this.sync();
  }
  /** Selection state on the items and the trigger's content. */
  private sync() {
    const selected = this.selectedItem();
    for (const item of this.items()) item.selected = item === selected;
    const target = this.host.shadowRoot?.querySelector<HTMLElement>('[part="value"]');
    if (!target) return;
    target.replaceChildren();
    if (!selected) {
      target.textContent = this.placeholder ?? '';
      target.toggleAttribute('data-placeholder', true);
      return;
    }
    target.removeAttribute('data-placeholder');
    if (selected.label) target.textContent = selected.label;
    else for (const n of Array.from(selected.childNodes)) target.append(n.cloneNode(true));
  }

  private choose(el: ItemEl) {
    if (el.disabled) return;
    if (el.value !== this.value) {
      this.value = el.value;
      this.changeEvent.emit({ value: el.value, item: el.item, element: el });
    }
    this.set(false);
    this.trigger?.focus({ preventScroll: true });
  }
  private set(open: boolean) {
    if (this.open === open || (open && this.disabled)) return;
    this.open = open;
    this.openChange.emit({ open });
  }

  @Watch('open')
  onOpen(open: boolean) {
    if (!this.panel || !this.trigger) return;
    if (open) {
      this.overlay ??= createOverlay(this.trigger, this.panel, { placement: this.placement, offset: 4, matchReferenceWidth: true });
      void this.overlay.open().then(() => {
        if (!this.open) return;
        this.listbox?.focus({ preventScroll: true });
        const items = this.items();
        const idx = items.findIndex((i) => i.selected && !i.disabled);
        if (idx >= 0) this.list?.highlight(idx); else this.list?.first();
      });
      this.dismiss ??= createDismissable(this.panel, { escape: true, pointerOutside: true, focusOutside: true, ignore: () => [this.trigger], onDismiss: (r) => { this.set(false); if (r === 'escape') this.trigger?.focus(); } });
    } else {
      this.dismiss?.destroy();
      this.dismiss = undefined;
      this.list?.clear();
      void this.overlay?.close();
    }
  }

  private onTriggerClick = () => this.set(!this.open);
  private onTriggerKeydown = (e: KeyboardEvent) => {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) { e.preventDefault(); this.set(true); }
  };
  private onListKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') { this.set(false); return; }
    if (this.list?.handleKey(e)) e.preventDefault();
  };
  private itemFrom(e: Event): ItemEl | null {
    const el = e.composedPath().find((n) => (n as Element).tagName === 'ART-SELECT-ITEM') as ItemEl | undefined;
    return el && this.host.contains(el) ? el : null;
  }
  private onItemClick = (e: MouseEvent) => { const el = this.itemFrom(e); if (el) this.choose(el); };
  private onItemPointer = (e: PointerEvent) => { const el = this.itemFrom(e); if (el) this.list?.highlight(this.items().indexOf(el), false); };

  render() {
    return (
      <Host>
        <button
          part="trigger"
          type="button"
          ref={(el) => (this.trigger = el)}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={this.open ? 'true' : 'false'}
          aria-controls={this.listboxId}
          aria-label={this.ariaLabel}
          aria-description={this.ariaDescription}
          aria-invalid={this.invalid ? 'true' : undefined}
          aria-required={this.required ? 'true' : undefined}
          disabled={this.disabled}
          class={{ 'flex w-full min-w-0 items-center justify-between gap-2 whitespace-nowrap border-default bg-transparent text-md md:text-sm text-fg shadow-raised transition-interactive motion-fast focus-ring disabled:opacity-50 aria-invalid:invalid-ring': true, [`field-${this.size}`]: true }}
          onClick={this.onTriggerClick}
          onKeyDown={this.onTriggerKeydown}
        >
          {/* safelist: field-sm field-md field-lg */}
          <span part="value" class="value flex min-w-0 flex-1 items-center gap-2 overflow-hidden text-start" />
          <svg class="icon-md shrink-0 text-fg-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6" /></svg>
        </button>
        <div part="content" popover="manual" ref={(el) => (this.panel = el)} class="rounded-md border-default bg-popover text-fg shadow-popover">
          <div part="listbox" id={this.listboxId} role="listbox" tabindex="-1" aria-label={this.ariaLabel} ref={(el) => (this.listbox = el)} class="max-h-72 overflow-x-hidden overflow-y-auto p-1 outline-none" onKeyDown={this.onListKeydown}>
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
