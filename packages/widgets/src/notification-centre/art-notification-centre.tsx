import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { defineCustomElement as defineButton } from '@aranghat/base/button';
import { defineCustomElement as defineEmpty } from '@aranghat/base/empty';
import { createDismissable, type Dismissable } from '@aranghat/primitives/dismissable';
import { createOverlay, type Overlay } from '@aranghat/primitives/overlay';

type Item = HTMLElement & { unread: boolean };

/**
 * Notification Centre — a bell with an unread count that opens a panel of
 * `art-notification-item`s: a heading, "Mark all as read", an all / unread filter, the list and
 * an empty state. `inline` renders the panel in place (a settings page, the docs). Clicking an
 * item emits `select` and marks it read; the count follows the items' `unread` attributes.
 *
 * @slot - `art-notification-item`s.
 * @part trigger - The bell button.
 * @part badge - The unread count on the bell.
 * @part panel - The panel (`role="dialog"` on the top layer, or in flow with `inline`).
 * @part header - Heading and "mark all".
 * @part filters - The all / unread buttons.
 * @part list - The list.
 * @part empty - The empty state.
 */
@Component({ tag: 'art-notification-centre', styleUrl: 'art-notification-centre.css', shadow: true })
export class ArtNotificationCentre {
  @Element() host!: HTMLElement;
  private button?: HTMLButtonElement;
  private panel?: HTMLDivElement;
  private overlay?: Overlay;
  private dismiss?: Dismissable;
  private observer?: MutationObserver;
  private byKeyboard = false;

  @Prop({ mutable: true, reflect: true }) open = false;
  /** Render the panel in place, without the bell. */
  @Prop({ reflect: true }) inline = false;
  @Prop() heading = 'Notifications';
  @Prop({ attribute: 'trigger-label' }) triggerLabel = 'Notifications';
  @Prop({ attribute: 'mark-all-label' }) markAllLabel = 'Mark all as read';
  @Prop({ attribute: 'all-label' }) allLabel = 'All';
  @Prop({ attribute: 'unread-label' }) unreadLabel = 'Unread';
  @Prop({ attribute: 'empty-heading' }) emptyHeading = "You're all caught up";
  @Prop({ attribute: 'empty-description' }) emptyDescription = 'New notifications will appear here.';
  /** Show every item or only the unread ones. */
  @Prop({ mutable: true, reflect: true }) filter: 'all' | 'unread' = 'all';
  @State() unread = 0;
  @State() visible = 0;

  /** Emitted when the user opens or closes the panel; `detail.open`. */
  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;
  /** Emitted when "Mark all as read" is pressed (the items are marked read too). */
  @Event({ eventName: 'read-all', bubbles: true, composed: true }) readAll!: EventEmitter<void>;

  connectedCallback() {
    defineButton();
    defineEmpty();
    this.host.addEventListener('select', this.onSelect);
  }
  componentWillLoad() {
    this.count();
  }
  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.recount);
    if (typeof MutationObserver === 'function') {
      this.observer = new MutationObserver(this.recount);
      this.observer.observe(this.host, { childList: true, subtree: true, attributes: true, attributeFilter: ['unread'] });
    }
    if (this.open && !this.inline) this.onOpen(true);
  }
  disconnectedCallback() {
    this.host.removeEventListener('select', this.onSelect);
    this.observer?.disconnect();
    this.dismiss?.destroy();
    this.overlay?.destroy();
    this.overlay = undefined;
  }

  private recount = () => this.count();
  private items(): Item[] { return Array.from(this.host.querySelectorAll('art-notification-item')) as Item[]; }
  @Watch('filter')
  count() {
    const items = this.items();
    // the property first: a framework sets it before the item reflects it as an attribute
    this.unread = items.filter((i) => i.unread === true || i.hasAttribute('unread')).length;
    this.visible = this.filter === 'unread' ? this.unread : items.length;
  }
  /** An activated item is read (unless the consumer prevented it). */
  private onSelect = (e: Event) => { queueMicrotask(() => { if (!e.defaultPrevented) this.count(); }); };
  private markAll = () => {
    for (const i of this.items()) i.unread = false;
    this.readAll.emit();
    this.count();
  };
  private set(open: boolean) {
    if (this.open === open) return;
    this.open = open;
    this.openChange.emit({ open });
  }
  @Watch('open')
  onOpen(open: boolean) {
    if (this.inline || !this.panel || !this.button) return;
    if (open) {
      this.overlay ??= createOverlay(this.button, this.panel, { placement: 'bottom-end', offset: 8 });
      const byKeyboard = this.byKeyboard;
      void this.overlay.open().then(() => { if (this.open) (byKeyboard ? this.panel?.querySelector<HTMLElement>('[part="header"] art-button, [part="filters"] art-button') : this.panel)?.focus({ preventScroll: true }); });
      this.dismiss ??= createDismissable(this.panel, { escape: true, pointerOutside: true, focusOutside: true, ignore: () => [this.button], onDismiss: (r) => { this.set(false); if (r === 'escape') this.button?.focus({ preventScroll: true }); } });
    } else {
      this.dismiss?.destroy();
      this.dismiss = undefined;
      void this.overlay?.close();
    }
    this.byKeyboard = false;
  }
  private onTrigger = (e: MouseEvent) => { this.byKeyboard = e.detail === 0; this.set(!this.open); };

  render() {
    const inline = this.inline;
    const panel = (
      <div part="panel" class="panel flex flex-col rounded-md border-default bg-popover text-fg" role={inline ? undefined : 'dialog'} aria-label={inline ? undefined : this.heading} popover={inline ? undefined : 'manual'} tabindex={inline ? undefined : -1} ref={(el) => (this.panel = el)}>
        <div part="header" class="header flex items-center justify-between gap-2 px-3 py-2">
          <h2 class="m-0 text-sm font-semibold">{this.heading}</h2>
          <art-button variant="ghost" size="sm" disabled={this.unread === 0} onClick={this.markAll}>{this.markAllLabel}</art-button>
        </div>
        <div part="filters" class="filters flex items-center gap-1 px-3 pb-2">
          <art-button variant={this.filter === 'all' ? 'secondary' : 'ghost'} size="sm" aria-pressed={this.filter === 'all' ? 'true' : 'false'} onClick={() => (this.filter = 'all')}>{this.allLabel}</art-button>
          <art-button variant={this.filter === 'unread' ? 'secondary' : 'ghost'} size="sm" aria-pressed={this.filter === 'unread' ? 'true' : 'false'} onClick={() => (this.filter = 'unread')}>{this.unreadLabel}{this.unread > 0 && <span class="ms-1">({this.unread})</span>}</art-button>
        </div>
        <div part="list" class="list" role="list" hidden={this.visible === 0}><slot /></div>
        <div part="empty" class="empty p-6" hidden={this.visible !== 0}>
          <art-empty>
            <span slot="title">{this.emptyHeading}</span>
            <span slot="description">{this.emptyDescription}</span>
          </art-empty>
        </div>
      </div>
    );
    return (
      <Host>
        {!inline && (
          <button part="trigger" type="button" ref={(el) => (this.button = el)} class="trigger relative inline-flex items-center justify-center rounded-md text-fg transition-interactive motion-fast hover:bg-accent focus-ring" aria-label={this.unread ? `${this.triggerLabel}, ${this.unread} unread` : this.triggerLabel} aria-haspopup="dialog" aria-expanded={this.open ? 'true' : 'false'} onClick={this.onTrigger}>
            <svg class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" /></svg>
            {this.unread > 0 && <span part="badge" class="badge absolute flex items-center justify-center rounded-full bg-destructive text-xs font-medium text-on-destructive" aria-hidden="true">{this.unread > 99 ? '99+' : this.unread}</span>}
          </button>
        )}
        {panel}
      </Host>
    );
  }
}
