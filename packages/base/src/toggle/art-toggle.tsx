import { AttachInternals, Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { resolveAria } from '@aranghat/primitives/aria';

/**
 * Toggle — shadcn/ui parity. A two-state button (`aria-pressed`), variants `default | outline`,
 * sizes `sm | md | lg`. Inside `<art-toggle-group>` the group owns the pressed state.
 * Form-associated: submits `value` while pressed.
 *
 * @slot - Content (icon and/or text). Icon-only toggles need `aria-label`.
 * @part button - The native `<button>`.
 */
@Component({ tag: 'art-toggle', styleUrl: 'art-toggle.css', shadow: { delegatesFocus: true }, formAssociated: true })
export class ArtToggle {
  @Element() host!: HTMLElement;
  @AttachInternals() internals?: ElementInternals;
  private defaultPressed = false;

  @Prop({ mutable: true, reflect: true }) pressed = false;
  @Prop({ reflect: true }) variant: 'default' | 'outline' = 'default';
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  /** Square icon-only toggle. */
  @Prop({ reflect: true }) icon = false;
  @Prop({ reflect: true }) disabled = false;
  /** Submitted with the form while pressed; also the item value inside a toggle group. */
  @Prop() value = 'on';
  @Prop({ reflect: true }) name?: string;
  /** @internal set by the group */
  @Prop() tabbable?: boolean;
  /** @internal set by the group */
  @Prop() groupDisabled = false;

  /** Emitted after a user toggle; `detail.pressed` mirrors `target.pressed`. */
  @Event({ eventName: 'change', bubbles: true, composed: true }) changeEvent!: EventEmitter<{ pressed: boolean }>;

  @Prop({ attribute: 'aria-label' }) hostAriaLabel?: string | null;
  @Prop({ attribute: 'aria-labelledby' }) hostAriaLabelledby?: string | null;
  private directLabel?: string;
  private ariaLabel?: string;

  componentWillRender() {
    if (this.hostAriaLabel != null) { this.directLabel = this.hostAriaLabel; this.host.removeAttribute('aria-label'); }
    this.ariaLabel = resolveAria(this.host, { labelledby: this.hostAriaLabelledby }, this.directLabel).label;
  }
  @Watch('pressed') @Watch('value')
  syncForm() { this.internals?.setFormValue?.(this.pressed ? this.value : null); }
  connectedCallback() { this.defaultPressed = this.pressed; this.host.addEventListener('click', this.onHostClick); }
  disconnectedCallback() { this.host.removeEventListener('click', this.onHostClick); }
  componentDidLoad() { this.syncForm(); }
  formResetCallback() { this.pressed = this.defaultPressed; }
  formDisabledCallback(disabled: boolean) { this.disabled = disabled; }

  private toggle() {
    if (this.disabled || this.groupDisabled) return;
    this.pressed = !this.pressed;
    this.changeEvent.emit({ pressed: this.pressed });
  }
  private onHostClick = (e: MouseEvent) => { if (e.composedPath().some((n) => (n as Element).tagName === 'BUTTON')) return; this.toggle(); };
  private onControlClick = (e: MouseEvent) => { e.stopPropagation(); this.toggle(); };

  render() {
    const disabled = this.disabled || this.groupDisabled;
    const outline = this.variant === 'outline';
    return (
      <Host>
        <button
          part="button"
          type="button"
          aria-pressed={this.pressed ? 'true' : 'false'}
          aria-label={this.ariaLabel}
          disabled={disabled}
          tabindex={this.tabbable === undefined ? undefined : this.tabbable ? 0 : -1}
          class={{
            'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-interactive motion-fast focus-ring disabled:opacity-50 select-none': true,
            // safelist: field-sm field-md field-lg control-icon-sm control-icon-md control-icon-lg
            [`${this.icon ? 'control-icon' : 'field'}-${this.size}`]: true,
            'border-default shadow-raised': outline,
            'bg-accent text-fg': this.pressed,
            'bg-transparent text-fg hover:bg-muted hover:text-fg-muted': !this.pressed && !outline,
            'bg-transparent text-fg hover:bg-accent': !this.pressed && outline,
          }}
          onClick={this.onControlClick}
        >
          <slot />
        </button>
      </Host>
    );
  }
}
