import { Component, Element, Host, Prop, State, Watch, h } from '@stencil/core';
import { toastStore, type ToastData } from '../toast/toast-api';

export type ToasterPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

/**
 * Toaster — shadcn/ui (Sonner) parity: the region that shows toasts. Put one on the page and
 * call `toast('Saved')` / `toast.success(…)` / `toast.promise(…)` (exported from
 * `@aranghat/components`) anywhere; `<art-toast>` children work declaratively too.
 * Fixed in a corner on the platform top layer (above later overlays) unless `inline`.
 *
 * @slot - Declarative `<art-toast>`s.
 * @part region - The `role="region"` box.
 */
@Component({ tag: 'art-toaster', styleUrl: 'art-toaster.css', shadow: true })
export class ArtToaster {
  @Element() host!: HTMLElement;
  private region?: HTMLElement;
  private unsubscribe?: () => void;
  private known = new Map<string, number>();

  @Prop({ reflect: true }) position: ToasterPosition = 'bottom-right';
  /** Render in the page flow instead of a fixed corner (docs, previews). */
  @Prop({ reflect: true }) inline = false;
  /** Newest toasts show; older ones beyond this count are hidden until there is room. */
  @Prop({ attribute: 'visible-toasts' }) visibleToasts = 3;
  /** Default auto-dismiss (ms) for toasts that do not set their own. */
  @Prop() duration = 4000;
  /** Close button on every toast. */
  @Prop({ attribute: 'close-button' }) closeButton = false;
  /** Coloured backgrounds per variant. */
  @Prop({ attribute: 'rich-colors' }) richColors = false;
  /** Accessible name of the region. */
  @Prop() label = 'Notifications';
  @State() private toasts: ToastData[] = [];

  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('dismiss', this.onDismiss);
    // The first toaster on the page renders the imperative queue; extra (inline, docs) ones only show their own children.
    if (!ArtToaster.primary || !ArtToaster.primary.isConnected) ArtToaster.primary = this.host;
    if (ArtToaster.primary === this.host) this.unsubscribe = toastStore.subscribe((t) => { this.toasts = t; });
    this.sync();
  }
  disconnectedCallback() {
    this.unsubscribe?.();
    if (ArtToaster.primary === this.host) ArtToaster.primary = undefined;
  }
  private static primary?: HTMLElement;

  @Watch('toasts')
  onToasts(next: ToastData[]) {
    // An updated toast (promise settled) restarts its timer and re-opens if it was closing.
    for (const t of next) {
      const seen = this.known.get(t.id);
      if (seen !== undefined && seen !== t.createdAt) void (this.host.shadowRoot?.querySelector(`art-toast[data-id="${t.id}"]`) as (HTMLElement & { restart(): Promise<void> }) | null)?.restart();
      this.known.set(t.id, t.createdAt);
    }
    for (const id of Array.from(this.known.keys())) if (!next.some((t) => t.id === id)) this.known.delete(id);
    this.sync(next.length > (this.host.shadowRoot?.querySelectorAll('art-toast').length ?? 0));
  }
  componentDidRender() {
    // Toasts slide in from the edge they sit on (the overlay motion reads this variable; the
    // component cannot declare it in CSS — tokens are born in packages/tokens only).
    this.region?.style.setProperty('--art-overlay-slide', this.position.startsWith('top') ? `0 calc(-1 * var(--art-space-4))` : `0 var(--art-space-4)`);
    this.sync();
  }

  /** Top layer while there is something to show; re-shown on each addition so it stays above newer overlays. */
  private sync(reshow = false) {
    const r = this.region as (HTMLElement & { showPopover?: () => void; hidePopover?: () => void; matches(s: string): boolean }) | undefined;
    if (!r || this.inline || typeof r.showPopover !== 'function') return;
    const has = this.toasts.length > 0 || this.host.querySelector('art-toast:not([hidden])');
    const open = r.matches(':popover-open');
    if (has && (!open || reshow)) { if (open) r.hidePopover?.(); r.showPopover(); }
    else if (!has && open) r.hidePopover?.();
  }

  private onDismiss = (e: Event) => {
    const el = e.target as HTMLElement;
    const id = el.getAttribute('data-id');
    if (id) toastStore.dismiss(id);
  };

  render() {
    const top = this.position.startsWith('top');
    const visible = this.toasts.slice(-Math.max(1, this.visibleToasts));
    return (
      <Host>
        <section
          part="region"
          ref={(el) => (this.region = el)}
          role="region"
          aria-label={this.label}
          tabindex="-1"
          popover={this.inline ? undefined : 'manual'}
          class={{ 'region flex w-full flex-col gap-2 outline-none': true, 'flex-col-reverse': top }}
          data-position={this.position}
        >
          <slot />
          {visible.map((t) => (
            <art-toast
              key={t.id}
              data-id={t.id}
              variant={t.variant ?? 'default'}
              label={t.title}
              description={t.description}
              duration={t.duration ?? this.duration}
              closeButton={t.closeButton ?? this.closeButton}
              richColors={this.richColors}
              actionLabel={t.action?.label}
              cancelLabel={t.cancel?.label}
              onAction={(e: Event) => t.action?.onClick?.(e as MouseEvent)}
              onCancel={(e: Event) => t.cancel?.onClick?.(e as MouseEvent)}
            />
          ))}
        </section>
      </Host>
    );
  }
}
