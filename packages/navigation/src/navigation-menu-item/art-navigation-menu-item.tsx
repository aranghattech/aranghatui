import { Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h } from '@stencil/core';
import { createDismissable, type Dismissable } from '@aranghat/primitives/dismissable';
import { getTabbables } from '@aranghat/primitives/dom';
import { createHoverIntent, type HoverIntent } from '@aranghat/primitives/hover-intent';
import { uniqueId } from '@aranghat/primitives/id';
import { createOverlay, type Overlay } from '@aranghat/primitives/overlay';

/**
 * Navigation Menu Item — a bar entry: either a plain link (`href`) or a trigger (`label`) that
 * reveals the panel in its default slot below the bar.
 *
 * @slot - The panel content (links, a grid of `art-navigation-menu-link`s).
 * @part trigger - The trigger button (or the link when `href` is set).
 * @part content - The panel.
 */
@Component({ tag: 'art-navigation-menu-item', styleUrl: 'art-navigation-menu-item.css', shadow: true })
export class ArtNavigationMenuItem {
  @Element() host!: HTMLElement;
  private button?: HTMLElement;
  private panel?: HTMLDivElement;
  private overlay?: Overlay;
  private dismiss?: Dismissable;
  private hover?: HoverIntent;
  private panelId = uniqueId('art-navigation-menu-item');
  private byKeyboard = false;

  /** Trigger text. */
  @Prop() label = '';
  /** Makes the entry a plain link instead of a trigger. */
  @Prop() href?: string;
  /** Marks the link as the current page. */
  @Prop({ reflect: true }) active = false;
  @Prop({ mutable: true, reflect: true }) open = false;

  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;
  /** Internal: tells the menu to close the other panels. */
  @Event({ eventName: 'navigation-menu-open', bubbles: true, composed: false }) menuOpen!: EventEmitter<void>;

  connectedCallback() {
    this.host.setAttribute('role', 'listitem');
    this.host.addEventListener('keydown', this.onKeydown);
  }
  componentDidLoad() {
    if (this.button && !this.href) this.hover = createHoverIntent(this.button, { onOpen: () => void this.setOpen(true, false), onClose: () => void this.setOpen(false), focus: false, touch: false, also: () => [this.panel] });
    if (this.open) this.onOpen(true);
  }
  disconnectedCallback() {
    this.host.removeEventListener('keydown', this.onKeydown);
    this.hover?.destroy();
    this.dismiss?.destroy();
    this.overlay?.destroy();
    this.overlay = undefined;
  }

  /** Open or close the panel. */
  @Method() async setOpen(open: boolean, byKeyboard = false) {
    if (this.open === open || this.href) return;
    this.byKeyboard = byKeyboard;
    this.open = open;
    this.openChange.emit({ open });
  }
  @Watch('open')
  onOpen(open: boolean) {
    if (!this.panel || !this.button) return;
    if (open) {
      this.menuOpen.emit();
      this.overlay ??= createOverlay(this.button, this.panel, { placement: 'bottom-start', offset: 6 });
      const byKeyboard = this.byKeyboard;
      void this.overlay.open().then(() => { if (this.open && byKeyboard) getTabbables(this.panel!)[0]?.focus({ preventScroll: true }); });
      this.dismiss ??= createDismissable(this.panel, { escape: true, pointerOutside: true, focusOutside: true, ignore: () => [this.button], onDismiss: (r) => { void this.setOpen(false); if (r === 'escape') this.button?.focus({ preventScroll: true }); } });
    } else {
      this.dismiss?.destroy();
      this.dismiss = undefined;
      void this.overlay?.close();
    }
  }
  private onKeydown = (e: KeyboardEvent) => {
    if (this.href) return;
    const onTrigger = e.composedPath().includes(this.button as EventTarget);
    if (onTrigger && (e.key === 'ArrowDown' || ((e.key === 'Enter' || e.key === ' ') && !this.open))) { e.preventDefault(); void this.setOpen(true, true); }
    else if (onTrigger && (e.key === 'Enter' || e.key === ' ') && this.open) { e.preventDefault(); void this.setOpen(false); }
    else if (this.open && !onTrigger && e.key === 'Tab') void this.setOpen(false);
  };

  render() {
    const cls = 'top inline-flex h-9 w-max items-center justify-center gap-1 rounded-md bg-canvas px-4 py-2 text-sm font-medium text-fg transition-interactive motion-fast hover:bg-accent focus-ring';
    return (
      <Host>
        {this.href ? (
          <a part="trigger" ref={(el) => (this.button = el)} class={cls} href={this.href} aria-current={this.active ? 'page' : undefined} data-active={this.active ? '' : undefined}>{this.label}</a>
        ) : (
          <button part="trigger" type="button" ref={(el) => (this.button = el)} class={cls} aria-expanded={this.open ? 'true' : 'false'} aria-controls={this.panelId} data-state={this.open ? 'open' : 'closed'} onClick={() => void this.setOpen(!this.open, false)}>
            {this.label}
            <svg class="chevron icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6" /></svg>
          </button>
        )}
        {!this.href && (
          <div part="content" id={this.panelId} popover="manual" ref={(el) => (this.panel = el)} class="content w-max max-w-xl rounded-md border-default bg-popover p-2 text-fg shadow-popover">
            <slot />
          </div>
        )}
      </Host>
    );
  }
}
