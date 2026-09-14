import { AttachInternals, Component, Element, Host, Prop, State, Watch, h } from '@stencil/core';

/**
 * Button — shadcn/ui parity (ADR-0012): variants `default | secondary | outline | ghost |
 * destructive | link`, sizes `sm | md | lg`, square `icon` buttons, `loading`, and `href`
 * rendering an anchor. Wraps a native `<button>` so `click` stays native (CLAUDE.md §3a);
 * form-associated so `type="submit"` / `type="reset"` work inside a plain `<form>`.
 *
 * @slot - Label.
 * @slot start - Leading icon (`<art-icon slot="start">`). Replaced by the spinner while loading.
 * @slot end - Trailing icon.
 * @part button - The native `<button>` (or `<a>` when `href` is set).
 */
@Component({ tag: 'art-button', styleUrl: 'art-button.css', shadow: true, formAssociated: true })
export class ArtButton {
  @Element() host!: HTMLElement;
  @AttachInternals() internals?: ElementInternals;

  /** Visual variant. */
  @Prop({ reflect: true }) variant: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link' = 'default';
  /** Control size; aligns with Input, Select and Combobox. */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  /** Square icon-only button. Provide an accessible name via `aria-label` on the host. */
  @Prop({ reflect: true }) icon = false;
  /** Disabled: no interaction, no events. */
  @Prop({ reflect: true }) disabled = false;
  /** Loading: shows a spinner in place of `start`, sets `aria-busy`, blocks activation. */
  @Prop({ reflect: true }) loading = false;
  /** Native button type. `submit` / `reset` act on the surrounding `<form>`. */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';
  /** Render as a link. */
  @Prop() href?: string;
  /** Link target (only with `href`). */
  @Prop() target?: string;
  /** Link rel (only with `href`). */
  @Prop() rel?: string;

  /**
   * `aria-label` set on the host moves onto the inner control: the focusable element lives
   * in the shadow root and must carry the accessible name (axe `button-name`), and a generic
   * host must not keep it (axe `aria-prohibited-attr`). Bound as a prop so framework re-renders
   * that re-apply the attribute are picked up.
   */
  @Prop({ attribute: 'aria-label' }) hostAriaLabel?: string | null;
  @State() private ariaLabel?: string;
  /** Which icon slots are filled — the padding on that side tightens (optical alignment, shadcn `has-[>svg]:px-3`). */
  @State() private hasStart = false;
  @State() private hasEnd = false;

  @Watch('hostAriaLabel')
  adoptAriaLabel(value?: string | null) {
    if (value == null) return;
    this.ariaLabel = value;
    this.host.removeAttribute('aria-label');
  }

  connectedCallback() {
    this.syncSlots();
    this.adoptAriaLabel(this.hostAriaLabel);
  }
  private syncSlots = () => {
    const slots = Array.from(this.host.children).map((c) => c.getAttribute('slot'));
    this.hasStart = slots.includes('start');
    this.hasEnd = slots.includes('end');
  };

  private onClick = (e: MouseEvent) => {
    if (this.disabled || this.loading) {
      e.preventDefault();
      e.stopImmediatePropagation();
      return;
    }
    const form = this.internals?.form;
    if (!form || this.href) return;
    if (this.type === 'submit') form.requestSubmit();
    else if (this.type === 'reset') form.reset();
  };

  render() {
    const inactive = this.disabled || this.loading;
    const v = this.variant;
    // Tailwind scans this file for class names; interpolated ones are listed here so they compile:
    // control-sm control-md control-lg control-icon-sm control-icon-md control-icon-lg
    // control-icon-start-sm control-icon-start-md control-icon-start-lg control-icon-end-sm control-icon-end-md control-icon-end-lg
    const variants = {
      default: 'bg-primary text-primary-fg shadow-raised hover:bg-primary-hover',
      secondary: 'bg-secondary text-secondary-fg shadow-raised hover:bg-secondary-hover',
      outline: 'border-default bg-canvas text-fg shadow-raised hover:bg-accent',
      ghost: 'text-fg hover:bg-accent',
      destructive: 'bg-destructive text-on-destructive shadow-raised hover:bg-destructive-hover',
      link: 'text-link underline-offset-4 hover:underline',
    };
    const cls = {
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-interactive motion-fast focus-ring select-none': true,
      'disabled:opacity-50 aria-disabled:opacity-50': true,
      // press feedback: scale(0.96) — a real active state, interruptible (CSS transition), reduced-motion collapses it
      'active:scale-96': !inactive,
      // density tokens; icon buttons are square
      [`control-${this.icon ? 'icon-' : ''}${this.size}`]: true,
      // tighten the side that carries an icon (or the spinner)
      [`control-icon-start-${this.size}`]: !this.icon && (this.hasStart || this.loading),
      [`control-icon-end-${this.size}`]: !this.icon && this.hasEnd,
      [variants[v]]: true,
    };
    const content = [
      this.loading ? (
        <svg class="icon-md shrink-0 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      ) : (
        <slot name="start" />
      ),
      <slot />,
      <slot name="end" />,
    ];
    return (
      <Host aria-busy={this.loading ? 'true' : undefined} onSlotchange={this.syncSlots}>
        {this.href ? (
          <a part="button" class={cls} href={inactive ? undefined : this.href} target={this.target} rel={this.rel} aria-label={this.ariaLabel} aria-disabled={inactive ? 'true' : undefined} tabindex={inactive ? -1 : undefined} onClick={this.onClick}>
            {content}
          </a>
        ) : (
          <button part="button" class={cls} type="button" disabled={this.disabled} aria-label={this.ariaLabel} aria-disabled={this.loading ? 'true' : undefined} onClick={this.onClick}>
            {content}
          </button>
        )}
      </Host>
    );
  }
}
