import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, h } from '@stencil/core';
import type { ToastVariant } from './toast-api';

export type ToastDismissReason = 'timeout' | 'close' | 'action' | 'cancel' | 'programmatic';

/**
 * Toast — one notification, shadcn/ui (Sonner) parity: an icon per variant, a title, a
 * description, optional action / cancel buttons and a close button. Auto-dismisses after
 * `duration` (paused while hovered or focused), then plays the exit motion and emits `dismiss`.
 * Usually created by `<art-toaster>` from `toast()`; can also be written declaratively.
 *
 * @slot - The title.
 * @slot description - Secondary text.
 * @slot icon - Replaces the variant icon.
 * @slot action - Buttons at the end (`<art-button size="sm">`).
 * @part toast - The card.
 * @part close - The close button.
 */
@Component({ tag: 'art-toast', styleUrl: 'art-toast.css', shadow: true })
export class ArtToast {
  @Element() host!: HTMLElement;
  private timer?: ReturnType<typeof setTimeout>;
  private remaining = 0;
  private startedAt = 0;
  private closing = false;

  @Prop({ reflect: true }) variant: ToastVariant = 'default';
  /** Title text (alternative to the default slot). */
  @Prop() label?: string;
  /** Description text (alternative to the `description` slot). */
  @Prop() description?: string;
  /** ms before auto-dismiss; `0` or `Infinity` keeps the toast (loading toasts always stay). */
  @Prop() duration = 4000;
  /** Show the close button. */
  @Prop({ attribute: 'close-button' }) closeButton = false;
  /** Coloured backgrounds per variant (Sonner `richColors`). */
  @Prop({ attribute: 'rich-colors', reflect: true }) richColors = false;
  /** Action / cancel button labels (imperative use); the `action` slot is the declarative form. */
  @Prop({ attribute: 'action-label' }) actionLabel?: string;
  @Prop({ attribute: 'cancel-label' }) cancelLabel?: string;
  @State() private state: 'open' | 'closed' = 'open';
  @State() private hasTitle = false;
  @State() private hasDescription = false;
  @State() private hasActions = false;

  /** Emitted after the exit motion; `detail.reason`. */
  @Event({ eventName: 'dismiss', bubbles: true, composed: true }) dismissEvent!: EventEmitter<{ reason: ToastDismissReason }>;
  /** The action button was pressed (the toast then dismisses). */
  @Event({ eventName: 'action', bubbles: true, composed: true }) actionEvent!: EventEmitter<void>;
  /** The cancel button was pressed (the toast then dismisses). */
  @Event({ eventName: 'cancel', bubbles: true, composed: true }) cancelEvent!: EventEmitter<void>;

  connectedCallback() {
    this.host.setAttribute('role', this.variant === 'error' || this.variant === 'warning' ? 'alert' : 'status');
    this.host.setAttribute('aria-live', this.variant === 'error' || this.variant === 'warning' ? 'assertive' : 'polite');
    this.host.setAttribute('aria-atomic', 'true');
    this.host.addEventListener('pointerenter', this.pause);
    this.host.addEventListener('pointerleave', this.resume);
    this.host.addEventListener('focusin', this.pause);
    this.host.addEventListener('focusout', this.resume);
  }
  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.sync);
    this.sync();
    this.start();
  }
  /** Slotted state drives the layout; it is read from the light DOM (a shadow stylesheet's `:has()` cannot see it) into state so the render follows. */
  private sync = () => {
    this.hasDescription = !!this.host.querySelector(':scope > [slot="description"]');
    this.hasActions = !!this.host.querySelector(':scope > [slot="action"]');
    // whitespace between child tags is assigned to the default slot and would hide the `label` fallback
    this.hasTitle = Array.from(this.host.childNodes).some((n) => (n.nodeType === Node.TEXT_NODE && !!n.textContent?.trim()) || (n.nodeType === Node.ELEMENT_NODE && !(n as Element).hasAttribute('slot')));
  };
  disconnectedCallback() {
    this.clear();
    this.host.removeEventListener('pointerenter', this.pause);
    this.host.removeEventListener('pointerleave', this.resume);
    this.host.removeEventListener('focusin', this.pause);
    this.host.removeEventListener('focusout', this.resume);
  }

  private get sticky(): boolean { return this.variant === 'loading' || !this.duration || !Number.isFinite(this.duration); }
  private start() {
    this.clear();
    if (this.sticky || this.closing) return;
    this.remaining = this.duration;
    this.resume();
  }
  private pause = () => {
    if (!this.timer) return;
    clearTimeout(this.timer);
    this.timer = undefined;
    this.remaining -= Date.now() - this.startedAt;
  };
  private resume = () => {
    if (this.timer || this.sticky || this.closing) return;
    this.startedAt = Date.now();
    this.timer = setTimeout(() => this.close('timeout'), Math.max(0, this.remaining));
  };
  private clear() { if (this.timer) clearTimeout(this.timer); this.timer = undefined; }

  /** Restart the auto-dismiss timer (the toaster calls it when a toast is updated). */
  @Method() async restart() { this.closing = false; this.state = 'open'; this.start(); }
  /** Close now: plays the exit motion, then emits `dismiss`. (`dismiss` is the event's name.) */
  @Method() async close(reason: ToastDismissReason = 'programmatic') {
    if (this.closing) return;
    this.closing = true;
    this.clear();
    this.state = 'closed';
    const card = this.host.shadowRoot?.querySelector<HTMLElement>('[part="toast"]');
    await new Promise<void>((resolve) => {
      if (!card || !card.getAnimations || matchMedia('(prefers-reduced-motion: reduce)').matches) return resolve();
      const done = () => { card.removeEventListener('animationend', done); resolve(); };
      card.addEventListener('animationend', done);
      setTimeout(done, 400); // safety net if no animation runs
    });
    this.host.hidden = true;
    this.dismissEvent.emit({ reason });
  }

  private icon() {
    const common = { class: 'icon-md shrink-0', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true', focusable: 'false' } as const;
    switch (this.variant) {
      case 'success': return <svg {...common} class="icon-md shrink-0 variant-icon"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>;
      case 'error': return <svg {...common} class="icon-md shrink-0 variant-icon"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>;
      case 'warning': return <svg {...common} class="icon-md shrink-0 variant-icon"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>;
      case 'info': return <svg {...common} class="icon-md shrink-0 variant-icon"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>;
      case 'loading': return <svg {...common} class="icon-md shrink-0 variant-icon animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>;
      default: return null;
    }
  }

  render() {
    return (
      <Host data-state={this.state}>
        <div part="toast" class="toast relative flex w-full items-start gap-3 rounded-lg border-default bg-popover p-4 text-sm text-fg shadow-overlay" data-state={this.state}>
          <slot name="icon">{this.icon()}</slot>
          <div class="flex min-w-0 flex-1 flex-col gap-1">
            <div class="title font-medium">{this.hasTitle ? <slot /> : this.label}</div>
            <div class="description text-fg-muted" hidden={!this.description && !this.hasDescription}><slot name="description">{this.description}</slot></div>
          </div>
          <div class="actions flex shrink-0 items-center gap-2 self-center" hidden={!this.actionLabel && !this.cancelLabel && !this.hasActions}>
            <slot name="action">
              {this.cancelLabel && <art-button size="sm" variant="ghost" onClick={() => { this.cancelEvent.emit(); void this.close('cancel'); }}>{this.cancelLabel}</art-button>}
              {this.actionLabel && <art-button size="sm" onClick={() => { this.actionEvent.emit(); void this.close('action'); }}>{this.actionLabel}</art-button>}
            </slot>
          </div>
          {this.closeButton && (
            <button part="close" type="button" class="close absolute inline-flex items-center justify-center rounded-full border-default bg-canvas text-fg-muted shadow-raised transition-interactive motion-fast hover:text-fg focus-ring" aria-label="Close" onClick={() => void this.close('close')}>
              <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          )}
        </div>
      </Host>
    );
  }
}
