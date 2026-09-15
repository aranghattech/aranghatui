import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { cssLength } from '@aranghat/primitives/dom';

/**
 * Sidebar Provider — the app frame around an `art-sidebar` and its `art-sidebar-inset`: a
 * full-height row that owns the sidebar state (`open` on desktop, `open-mobile` below the md
 * breakpoint) and the ⌘ / Ctrl + B shortcut. Override `--art-sidebar-width` here.
 *
 * @slot - `art-sidebar` and `art-sidebar-inset` (a `side="right"` sidebar goes after the inset).
 */
@Component({ tag: 'art-sidebar-provider', styleUrl: 'art-sidebar-provider.css', shadow: true })
export class ArtSidebarProvider {
  @Element() host!: HTMLElement;
  private mql?: MediaQueryList;

  /** Expanded (desktop). */
  @Prop({ mutable: true, reflect: true }) open = true;
  /** Off-canvas sidebar shown (below the md breakpoint). */
  @Prop({ mutable: true, reflect: true, attribute: 'open-mobile' }) openMobile = false;
  /** Key of the toggle shortcut (pressed with ⌘ / Ctrl); empty disables it. */
  @Prop() shortcut = 'b';
  @State() mobile = false;

  /** Emitted when the user expands or collapses the sidebar; `detail.open`. */
  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;
  /** Internal: state fan-out to the sidebar and its triggers. */
  @Event({ eventName: 'sidebar-state', bubbles: false, composed: false }) stateChange!: EventEmitter<void>;

  connectedCallback() {
    const md = cssLength(document.documentElement, '--art-breakpoint-md') || 768;
    this.mql = window.matchMedia(`(max-width: ${md - 0.02}px)`);
    this.mobile = this.mql.matches;
    this.mql.addEventListener('change', this.onMedia);
    document.addEventListener('keydown', this.onKeydown);
  }
  componentDidLoad() {
    this.notify();
  }
  disconnectedCallback() {
    this.mql?.removeEventListener('change', this.onMedia);
    document.removeEventListener('keydown', this.onKeydown);
  }

  @Watch('open') @Watch('openMobile') @Watch('mobile')
  notify() {
    if (this.mobile) this.host.setAttribute('data-mobile', ''); else this.host.removeAttribute('data-mobile');
    this.host.setAttribute('data-state', this.open ? 'expanded' : 'collapsed');
    this.stateChange.emit();
  }

  /** Expand / collapse the sidebar (open / close the off-canvas one on mobile). */
  @Method() async toggle() {
    await this.setOpen(!(this.mobile ? this.openMobile : this.open));
  }
  /** Set the state for the current mode (desktop `open`, mobile `open-mobile`). */
  @Method() async setOpen(open: boolean) {
    if (this.mobile) { this.openMobile = open; return; }
    if (this.open === open) return;
    this.open = open;
    this.openChange.emit({ open });
  }

  private onMedia = (e: MediaQueryListEvent) => { this.mobile = e.matches; };
  private onKeydown = (e: KeyboardEvent) => {
    if (!this.shortcut || !(e.metaKey || e.ctrlKey) || e.altKey || e.key.toLowerCase() !== this.shortcut.toLowerCase()) return;
    e.preventDefault();
    void this.toggle();
  };

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
