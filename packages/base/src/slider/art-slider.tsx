import { AttachInternals, Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { isRtl } from '@aranghat/primitives/dom';
import { resolveAria } from '@aranghat/primitives/aria';

/**
 * Slider — shadcn/ui (Radix) parity. One or two thumbs (`value="50"` or `value="25,75"`),
 * pointer drag, keyboard steps, horizontal or vertical, RTL-aware, form-associated.
 * `input` fires while dragging / stepping, `change` on commit; `detail.value` is a number
 * for one thumb and a number[] for a range.
 *
 * @part track - The track.
 * @part range - The filled range.
 * @part thumb - Each thumb (`role="slider"`).
 */
@Component({ tag: 'art-slider', styleUrl: 'art-slider.css', shadow: { delegatesFocus: true }, formAssociated: true })
export class ArtSlider {
  @Element() host!: HTMLElement;
  @AttachInternals() internals?: ElementInternals;
  private track?: HTMLElement;
  private defaultValue: number | number[] | string = 0;

  /** Current value: a number, an array for a range, or the attribute form `"25,75"`. */
  @Prop({ mutable: true }) value: number | number[] | string = 0;
  @Prop() min = 0;
  @Prop() max = 100;
  @Prop() step = 1;
  @Prop({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  /** Track and thumb thickness. */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @Prop({ reflect: true }) disabled = false;
  @Prop({ reflect: true }) name?: string;

  /** Emitted while the value changes (drag, keys); `detail.value` mirrors `target.value`. */
  @Event({ eventName: 'input', bubbles: true, composed: true }) inputEvent!: EventEmitter<{ value: number | number[] }>;
  /** Emitted when a drag or key interaction ends. */
  @Event({ eventName: 'change', bubbles: true, composed: true }) changeEvent!: EventEmitter<{ value: number | number[] }>;

  @Prop({ attribute: 'aria-label' }) hostAriaLabel?: string | null;
  @Prop({ attribute: 'aria-labelledby' }) hostAriaLabelledby?: string | null;
  private directLabel?: string;
  private ariaLabel?: string;
  @State() private dragging = -1;

  componentWillRender() {
    if (this.hostAriaLabel != null) { this.directLabel = this.hostAriaLabel; this.host.removeAttribute('aria-label'); }
    this.ariaLabel = resolveAria(this.host, { labelledby: this.hostAriaLabelledby }, this.directLabel).label;
  }

  /** Normalised thumb values, sorted for ranges. */
  private values(): number[] {
    const v = this.value;
    const arr = Array.isArray(v) ? v : typeof v === 'string' ? v.split(',').map(Number) : [Number(v)];
    return arr.map((n) => this.clamp(this.snap(Number.isFinite(n) ? n : this.min)));
  }
  private isRange(): boolean { return this.values().length > 1; }
  private snap(n: number): number { const s = this.step || 1; return Math.round((n - this.min) / s) * s + this.min; }
  private clamp(n: number): number { return Math.min(this.max, Math.max(this.min, n)); }
  private pct(n: number): number { return ((n - this.min) / (this.max - this.min || 1)) * 100; }

  private commitValues(next: number[], commit: boolean) {
    const out = this.isRange() ? next : next[0]!;
    const changed = JSON.stringify(out) !== JSON.stringify(this.isRange() ? this.values() : this.values()[0]);
    if (changed) { this.value = out; this.inputEvent.emit({ value: out }); }
    if (commit) this.changeEvent.emit({ value: this.isRange() ? this.values() : this.values()[0]! });
  }
  /** Moves thumb `i` to `n`, keeping thumbs ordered. */
  private moveThumb(i: number, n: number, commit: boolean) {
    const vals = this.values();
    const lo = i > 0 ? vals[i - 1]! : this.min;
    const hi = i < vals.length - 1 ? vals[i + 1]! : this.max;
    vals[i] = Math.min(hi, Math.max(lo, this.clamp(this.snap(n))));
    this.commitValues(vals, commit);
  }

  @Watch('value')
  syncForm() { this.internals?.setFormValue?.(this.values().join(',')); }
  connectedCallback() { this.defaultValue = this.value; }
  componentDidLoad() { this.syncForm(); }
  formResetCallback() { this.value = this.defaultValue; }
  formDisabledCallback(disabled: boolean) { this.disabled = disabled; }

  // ---- pointer ----
  private valueAt(e: PointerEvent): number {
    const r = this.track!.getBoundingClientRect();
    let ratio = this.orientation === 'vertical' ? 1 - (e.clientY - r.top) / r.height : (e.clientX - r.left) / r.width;
    if (this.orientation === 'horizontal' && isRtl(this.host)) ratio = 1 - ratio;
    return this.min + Math.min(1, Math.max(0, ratio)) * (this.max - this.min);
  }
  private onPointerDown = (e: PointerEvent) => {
    if (this.disabled || e.button !== 0) return;
    e.preventDefault();
    const target = e.composedPath()[0] as HTMLElement;
    const v = this.valueAt(e);
    const vals = this.values();
    // drag the thumb under the pointer, else the nearest one
    let i = target.dataset?.index !== undefined ? Number(target.dataset.index) : vals.reduce((best, cur, idx) => (Math.abs(cur - v) < Math.abs(vals[best]! - v) ? idx : best), 0);
    this.dragging = i;
    this.host.setPointerCapture?.(e.pointerId);
    this.moveThumb(i, v, false);
    this.thumb(i)?.focus();
  };
  private onPointerMove = (e: PointerEvent) => { if (this.dragging >= 0) this.moveThumb(this.dragging, this.valueAt(e), false); };
  private onPointerUp = (e: PointerEvent) => {
    if (this.dragging < 0) return;
    this.host.releasePointerCapture?.(e.pointerId);
    this.moveThumb(this.dragging, this.valueAt(e), true);
    this.dragging = -1;
  };
  private thumb(i: number): HTMLElement | null { return this.host.shadowRoot?.querySelector(`[data-index="${i}"]`) ?? null; }

  // ---- keyboard (APG slider) ----
  private onKeydown = (e: KeyboardEvent) => {
    if (this.disabled) return;
    const i = Number((e.currentTarget as HTMLElement).dataset.index);
    const vals = this.values();
    const rtl = this.orientation === 'horizontal' && isRtl(this.host);
    const inc = rtl ? 'ArrowLeft' : 'ArrowRight';
    const dec = rtl ? 'ArrowRight' : 'ArrowLeft';
    const big = Math.max(this.step * 10, (this.max - this.min) / 10);
    let next: number | null = null;
    if (e.key === inc || e.key === 'ArrowUp') next = vals[i]! + this.step;
    else if (e.key === dec || e.key === 'ArrowDown') next = vals[i]! - this.step;
    else if (e.key === 'PageUp') next = vals[i]! + big;
    else if (e.key === 'PageDown') next = vals[i]! - big;
    else if (e.key === 'Home') next = this.min;
    else if (e.key === 'End') next = this.max;
    if (next === null) return;
    e.preventDefault();
    this.moveThumb(i, next, true);
  };

  render() {
    const vals = this.values();
    const range = this.isRange();
    const vertical = this.orientation === 'vertical';
    const start = range ? this.pct(vals[0]!) : 0;
    const end = this.pct(vals[vals.length - 1]!);
    const rangeStyle = vertical ? { bottom: `${start}%`, top: `${100 - end}%` } : { insetInlineStart: `${start}%`, insetInlineEnd: `${100 - end}%` };
    return (
      <Host onPointerDown={this.onPointerDown} onPointerMove={this.onPointerMove} onPointerUp={this.onPointerUp} onPointerCancel={this.onPointerUp}>
        <div class={{ 'relative flex touch-none select-none items-center': true, 'w-full': !vertical, 'h-full min-h-44 w-auto flex-col': vertical, 'opacity-50': this.disabled }}>
          <span
            part="track"
            ref={(el) => (this.track = el)}
            class={{
              'relative grow overflow-hidden rounded-full bg-muted': true,
              'h-1 w-full': !vertical && this.size === 'sm',
              'h-1.5 w-full': !vertical && this.size === 'md',
              'h-2 w-full': !vertical && this.size === 'lg',
              'w-1 h-full': vertical && this.size === 'sm',
              'w-1.5 h-full': vertical && this.size === 'md',
              'w-2 h-full': vertical && this.size === 'lg',
            }}
          >
            <span part="range" class="absolute bg-primary rounded-full" style={{ ...rangeStyle, ...(vertical ? { insetInline: '0' } : { insetBlock: '0' }) }} />
          </span>
          {vals.map((v, i) => (
            <span
              part="thumb"
              role="slider"
              tabindex={this.disabled ? -1 : 0}
              data-index={i}
              aria-valuemin={range ? (i > 0 ? vals[i - 1] : this.min) : this.min}
              aria-valuemax={range ? (i < vals.length - 1 ? vals[i + 1] : this.max) : this.max}
              aria-valuenow={v}
              aria-orientation={this.orientation}
              aria-label={this.ariaLabel ? `${this.ariaLabel}${range ? (i === 0 ? ' minimum' : ' maximum') : ''}` : undefined}
              aria-disabled={this.disabled ? 'true' : undefined}
              class={{
                'absolute block rounded-full border-primary bg-canvas shadow-raised transition-interactive motion-fast focus-ring': true,
                'size-3': this.size === 'sm', 'size-4': this.size === 'md', 'size-5': this.size === 'lg',
                'scale-110': this.dragging === i,
                'hover:scale-110': this.dragging < 0 && !this.disabled,
              }}
              style={vertical ? { bottom: `${this.pct(v)}%`, insetInlineStart: '50%', translate: '-50% 50%' } : { insetInlineStart: `${this.pct(v)}%`, top: '50%', translate: `${isRtl(this.host) ? '50%' : '-50%'} -50%` }}
              onKeyDown={this.onKeydown}
            />
          ))}
        </div>
      </Host>
    );
  }
}
