import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { createDismissable, type Dismissable } from '@aranghat/primitives/dismissable';
import { child, isRtl } from '@aranghat/primitives/dom';
import type { Placement } from '@aranghat/primitives/floating';
import { createHoverIntent, type HoverIntent } from '@aranghat/primitives/hover-intent';
import { createOverlay, type Overlay } from '@aranghat/primitives/overlay';
import { createMenuList, type MenuList } from '../menu/menu-list';
import { applyVisibleItems, setRestingTabStop } from '../menu/visible-items';
import { bindSidebar, isIconMode } from '../sidebar/context';

type ItemEl = HTMLElement & { value: string; name: string; plan?: string; item?: unknown; disabled: boolean; active: boolean };

/**
 * A row's prop, falling back to its attribute: on the first pass the row elements have been
 * parsed but not yet upgraded, so `el.value` is still undefined while `value="…"` is there.
 */
const read = (el: Element, prop: 'value' | 'name' | 'plan'): string => {
  const v = (el as unknown as Record<string, unknown>)[prop];
  return typeof v === 'string' && v ? v : (el.getAttribute(prop) ?? '');
};

const WORKSPACE = 'art-workspace-switcher-item';
const ROW = `${WORKSPACE}, art-menu-item`;

/**
 * Workspace Switcher — the tenant control of a SaaS shell: the current workspace at the start of
 * an `art-top-nav` or the top of an `art-sidebar`, and a menu to change it. Rows are
 * `art-workspace-switcher-item`s (`role="menuitemradio"`); anything in `action` — an
 * `art-menu-item` such as "Add workspace" — follows them after a separator and joins the same
 * keyboard order.
 *
 * `display` decides how much of the trigger shows: `full` is the logo with the name (and `plan`)
 * beside it, `icon` clips it to the logo square and names it with a tooltip, and `auto` — the
 * default — is `full` everywhere except inside a sidebar collapsed to icons (ADR-0025).
 *
 * @slot - The `art-workspace-switcher-item`s.
 * @slot action - Rows shown after a separator (`art-menu-item`), e.g. "Add workspace".
 * @part trigger - The `<button>` that opens the menu.
 * @part logo - The trigger's logo tile (a copy of the active workspace's own).
 * @part text - The trigger's name and plan column.
 * @part name - The active workspace's name.
 * @part plan - The active workspace's secondary line.
 * @part chevron - The trigger's chevron.
 * @part content - The `role="menu"` panel.
 * @part label - The menu's group label.
 * @part separator - The rule before the `action` rows.
 * @part tooltip - The icon-mode tooltip.
 */
@Component({ tag: 'art-workspace-switcher', styleUrl: 'art-workspace-switcher.css', shadow: true })
export class ArtWorkspaceSwitcher {
  @Element() host!: HTMLElement;
  private triggerEl?: HTMLButtonElement;
  private panel?: HTMLDivElement;
  private tip?: HTMLDivElement;
  private overlay?: Overlay;
  private tipOverlay?: Overlay;
  private dismiss?: Dismissable;
  private list?: MenuList;
  private hover?: HoverIntent;
  private stopCap?: () => void;
  private unwatch?: () => void;
  private observer?: MutationObserver;
  private openedByKeyboard = false;

  /** The active workspace's `value`. */
  @Prop({ mutable: true, reflect: true }) value = '';
  /** How much of the trigger shows; `auto` follows a collapsed sidebar. */
  @Prop({ reflect: true }) display: 'auto' | 'full' | 'icon' = 'auto';
  /** Accessible name of the menu, and the label above the rows. */
  @Prop() label = 'Workspaces';
  /** Shown in the trigger when no item matches `value`. */
  @Prop() placeholder = 'Select a workspace';
  @Prop({ mutable: true, reflect: true }) open = false;
  /** Preferred side / alignment of the panel. */
  @Prop() placement: Placement = 'bottom-start';
  /** Show this many rows before the menu scrolls; measured from a real row. */
  @Prop({ attribute: 'visible-items' }) visibleItems?: number;
  @Prop({ reflect: true }) disabled = false;

  /** The user chose a workspace; `detail.value`, `detail.item` (the row's data object) and `detail.element`. */
  @Event({ eventName: 'value-change', bubbles: true, composed: true }) valueChange!: EventEmitter<{ value: string; item?: unknown; element: HTMLElement }>;
  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;

  /** The sidebar is collapsed to icons. */
  @State() collapsed = false;
  /** The switcher is inside an `art-sidebar` — it then wears the sidebar's hover wash. */
  @State() inSidebar = false;
  @State() hasAction = false;
  @State() activeName = '';
  @State() activePlan = '';

  private workspaces(): ItemEl[] { return Array.from(this.host.querySelectorAll<ItemEl>(WORKSPACE)).filter((el) => !el.hidden); }
  /** Every focusable row, in the order the eye reads them: the workspaces, then the `action` rows. */
  private items(): HTMLElement[] {
    const all = Array.from(this.host.querySelectorAll<HTMLElement>(ROW)).filter((el) => !el.hidden);
    const actions = all.filter((el) => el.getAttribute('slot') === 'action');
    return [...all.filter((el) => !actions.includes(el)), ...actions];
  }
  private activeItem(): ItemEl | undefined { return this.workspaces().find((i) => read(i, 'value') === this.value); }
  private get iconOnly(): boolean { return this.display === 'icon' || (this.display === 'auto' && this.collapsed); }

  connectedCallback() {
    this.host.addEventListener('click', this.onClick);
    this.host.addEventListener('keydown', this.onKeydown);
    this.host.addEventListener('pointermove', this.onPointerOver);
    this.host.addEventListener('select', this.onSelect);
    // `display="auto"`: follow the sidebar this switcher is slotted into, if it is in one at all.
    this.unwatch = bindSidebar(this.host, (sidebar) => {
      this.inSidebar = !!sidebar;
      this.collapsed = isIconMode(sidebar);
      if (!this.iconOnly) this.showTip(false);
    });
  }
  /** The name and the plan decide the trigger's height, so they are read before the first paint. */
  componentWillLoad() {
    this.readActive();
  }
  componentDidLoad() {
    this.list = createMenuList({
      getItems: () => this.items(),
      onClose: (reason) => { this.set(false); if (reason !== 'tab') this.triggerEl?.focus({ preventScroll: true }); },
      isRtl: () => isRtl(this.host),
    });
    // The rows are light-DOM children: a workspace added or renamed later has to reach the trigger.
    if (typeof MutationObserver !== 'undefined') {
      this.observer = new MutationObserver(() => this.sync());
      this.observer.observe(this.host, { childList: true, subtree: true, attributes: true, attributeFilter: ['name', 'plan', 'value'] });
    }
    if (this.triggerEl) {
      this.hover = createHoverIntent(this.triggerEl, { onOpen: () => this.showTip(true), onClose: () => this.showTip(false), focus: true, touch: false });
    }
    this.host.shadowRoot?.addEventListener('slotchange', this.wire);
    this.wire();
    this.sync();
    if (this.open) this.onOpen(true);
  }
  disconnectedCallback() {
    this.host.removeEventListener('click', this.onClick);
    this.host.removeEventListener('keydown', this.onKeydown);
    this.host.removeEventListener('pointermove', this.onPointerOver);
    this.host.removeEventListener('select', this.onSelect);
    this.unwatch?.();
    this.unwatch = undefined;
    this.observer?.disconnect();
    this.list?.destroy();
    this.hover?.destroy();
    this.stopCap?.();
    this.dismiss?.destroy();
    this.overlay?.destroy();
    this.overlay = undefined;
    this.tipOverlay?.destroy();
    this.tipOverlay = undefined;
  }

  private wire = () => { this.hasAction = !!child(this.host, '[slot="action"]'); };

  @Watch('value')
  onValue() { this.sync(); }

  /**
   * Mark the active row and fill the trigger from it. The logo is a copy of the row's own markup
   * — the consumer writes each logo once, in the row it belongs to — while the name and plan are
   * read from its props, so the trigger cannot drift from the menu.
   */
  private readActive(): ItemEl | undefined {
    const active = this.activeItem();
    this.activeName = active ? read(active, 'name') : '';
    this.activePlan = active ? read(active, 'plan') : '';
    return active;
  }
  private sync() {
    const active = this.readActive();
    for (const w of this.workspaces()) w.active = w === active;
    const logo = this.host.shadowRoot?.querySelector<HTMLElement>('[part="logo"]');
    if (!logo) return;
    logo.textContent = ''; // not replaceChildren(): Stencil's mock document (SSR) lacks it
    for (const n of Array.from(active?.childNodes ?? [])) logo.append(n.cloneNode(true));
  }

  private set(open: boolean, byKeyboard = false) {
    if (this.open === open || (open && this.disabled)) return;
    this.openedByKeyboard = byKeyboard;
    this.open = open;
    this.openChange.emit({ open });
  }

  @Watch('open')
  onOpen(open: boolean) {
    if (!this.panel || !this.triggerEl) return;
    const trigger = this.triggerEl;
    if (open) {
      this.showTip(false); // the panel names the workspace: a tooltip over it would say it twice
      this.overlay ??= createOverlay(trigger, this.panel, { placement: this.placement, offset: 4, availableHeight: true });
      const byKeyboard = this.openedByKeyboard;
      void this.overlay.open().then(() => {
        if (!this.open) return;
        this.stopCap?.();
        this.stopCap = applyVisibleItems(this.panel, this.host, this.visibleItems, ROW);
        setRestingTabStop(this.host, true, ROW);
        if (!byKeyboard) { this.panel?.focus({ preventScroll: true }); return; }
        // Opened from the keyboard: start on the workspace in use, not on the first row.
        const active = this.activeItem();
        const index = active ? this.items().indexOf(active) : -1;
        if (index >= 0) this.list?.focus(index); else this.list?.first();
      });
      this.dismiss ??= createDismissable(this.panel, { escape: true, pointerOutside: true, focusOutside: true, ignore: () => [trigger], onDismiss: (r) => { this.set(false); if (r === 'escape') trigger.focus({ preventScroll: true }); } });
    } else {
      setRestingTabStop(this.host, false, ROW);
      this.stopCap?.();
      this.stopCap = undefined;
      this.dismiss?.destroy();
      this.dismiss = undefined;
      void this.overlay?.close();
    }
  }

  /** The tooltip exists only in icon mode: the name is clipped there. */
  private showTip(show: boolean) {
    if (!this.tip || !this.triggerEl) return;
    if (!show) { void this.tipOverlay?.close(); return; }
    if (!this.iconOnly || this.open || !this.activeName) return;
    const sidebar = this.host.closest('art-sidebar') ?? null;
    const right = sidebar?.getAttribute('data-side') === 'right';
    this.tipOverlay?.destroy();
    this.tipOverlay = createOverlay(this.triggerEl, this.tip, { placement: right !== isRtl(this.host) ? 'left' : 'right', offset: 4 });
    void this.tipOverlay.open();
  }

  private choose(el: ItemEl) {
    if (el.disabled) return;
    if (el.value !== this.value) {
      this.value = el.value;
      this.valueChange.emit({ value: el.value, item: el.item, element: el });
    }
    this.set(false);
    this.triggerEl?.focus({ preventScroll: true });
  }

  private onClick = (e: MouseEvent) => {
    const path = e.composedPath();
    if (this.triggerEl && path.includes(this.triggerEl)) {
      // `detail === 0` is a keyboard activation of the button (Enter / Space).
      this.set(!this.open, e.detail === 0);
      return;
    }
    const row = path.find((n) => (n as Element)?.nodeType === 1 && (n as Element).matches?.(WORKSPACE)) as ItemEl | undefined;
    if (row && this.host.contains(row)) this.choose(row);
  };
  /** An `action` row was activated: close, unless its handler kept the menu open. */
  private onSelect = (e: Event) => {
    if (e.defaultPrevented) return;
    this.set(false);
    this.triggerEl?.focus({ preventScroll: true });
  };
  private onKeydown = (e: KeyboardEvent) => {
    const onTrigger = !!this.triggerEl && e.composedPath().includes(this.triggerEl);
    if (onTrigger) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || (!this.open && (e.key === 'Enter' || e.key === ' '))) {
        e.preventDefault();
        if (!this.open) this.set(true, true);
        else if (e.key === 'ArrowUp') this.list?.last();
        else this.list?.first();
      }
      return;
    }
    if (this.open && this.list?.handleKey(e)) e.preventDefault();
  };
  /** Moving the pointer over a row focuses it, so pointer and keyboard share one highlight. */
  private onPointerOver = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse' || !this.open) return;
    const row = (e.target as Element).closest?.(ROW) as HTMLElement | null;
    if (row && this.items().includes(row) && !row.hasAttribute('disabled') && document.activeElement !== row) row.focus({ preventScroll: true });
  };

  render() {
    const iconOnly = this.iconOnly;
    // Icon mode hides the name, so the trigger carries it as `aria-label`: the tooltip is decoration,
    // and a button with only a logo in it is nameless to a screen reader (axe `button-name`).
    const name = this.activeName || this.placeholder;
    return (
      <Host data-icon={iconOnly ? '' : undefined} data-two-line={!iconOnly && this.activePlan ? '' : undefined} data-sidebar={this.inSidebar ? '' : undefined}>
        <button
          part="trigger"
          type="button"
          ref={(el) => (this.triggerEl = el)}
          class="trigger flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-start text-sm text-fg transition-interactive motion-base select-none focus-ring"
          disabled={this.disabled}
          aria-haspopup="menu"
          aria-expanded={this.open ? 'true' : 'false'}
          aria-label={iconOnly ? name : undefined}
        >
          {/* Filled imperatively from the active row (see `sync`): left childless here so the vdom never clears it. */}
          <span part="logo" class="logo flex shrink-0 items-center justify-center overflow-hidden border-default" />
          <span part="text" class="text flex min-w-0 flex-1 flex-col">
            <span part="name" class="name truncate" data-placeholder={this.activeName ? undefined : ''}>{name}</span>
            {this.activePlan && <span part="plan" class="plan truncate">{this.activePlan}</span>}
          </span>
          <svg part="chevron" class="chevron icon-md shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
        </button>
        <div part="content" role="menu" tabindex="-1" popover="manual" aria-label={this.label} ref={(el) => (this.panel = el)} class="content min-w-56 overflow-x-hidden overflow-y-auto rounded-md border-default bg-popover p-1 text-fg shadow-popover outline-none">
          {this.label && <div part="label" class="menu-label px-2 py-1.5 text-xs font-medium">{this.label}</div>}
          <slot />
          {this.hasAction && <div part="separator" class="separator" role="separator" />}
          <slot name="action" />
        </div>
        {iconOnly && this.activeName && (
          <div part="tooltip" role="tooltip" popover="manual" ref={(el) => (this.tip = el)} class="tooltip w-fit rounded-md bg-primary px-3 py-1.5 text-xs text-primary-fg">{this.activeName}</div>
        )}
      </Host>
    );
  }
}
