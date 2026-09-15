import { AttachInternals, Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h } from '@stencil/core';
import { resolveAria } from '@aranghat/primitives/aria';
import { createDismissable, type Dismissable } from '@aranghat/primitives/dismissable';
import { formatDate, parseISODate, parseRange } from '@aranghat/primitives/date';
import type { Placement } from '@aranghat/primitives/floating';
import { uniqueId } from '@aranghat/primitives/id';
import { createOverlay, type Overlay } from '@aranghat/primitives/overlay';
import type { CalendarChangeDetail } from '../calendar/art-calendar';

/**
 * Date Picker — shadcn/ui parity: a field-height trigger showing the chosen date (or range)
 * that opens a Calendar in a popover on the platform top layer. Single day or range;
 * form-associated with an ISO `value`.
 *
 * @part trigger - The `<button>` that opens the picker.
 * @part content - The popover (`role="dialog"`) holding the calendar.
 */
@Component({ tag: 'art-date-picker', styleUrl: 'art-date-picker.css', shadow: { delegatesFocus: true }, formAssociated: true })
export class ArtDatePicker {
  @Element() host!: HTMLElement;
  @AttachInternals() internals?: ElementInternals;
  private trigger?: HTMLButtonElement;
  private panel?: HTMLDivElement;
  private calendar?: HTMLElement & { setFocus(): Promise<void> };
  private overlay?: Overlay;
  private dismiss?: Dismissable;
  private defaultValue = '';
  private dialogId = uniqueId('art-date-picker');

  /** `single` (a day) or `range` (`start/end`). */
  @Prop({ reflect: true }) mode: 'single' | 'range' = 'single';
  /** `YYYY-MM-DD`, or `start/end` for a range. */
  @Prop({ mutable: true, reflect: true }) value = '';
  @Prop() placeholder = 'Pick a date';
  @Prop({ reflect: true }) name?: string;
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @Prop({ reflect: true }) disabled = false;
  @Prop() required = false;
  @Prop({ reflect: true }) invalid = false;
  @Prop({ mutable: true, reflect: true }) open = false;
  @Prop() placement: Placement = 'bottom-start';
  /** Earliest / latest selectable day. */
  @Prop() min?: string;
  @Prop() max?: string;
  /** Passed to the calendar: return true for a day that cannot be selected. */
  @Prop() disabledDates?: (date: Date) => boolean;
  @Prop() locale?: string;
  /** Month and year dropdowns in the calendar caption (date of birth). */
  @Prop({ attribute: 'caption-layout' }) captionLayout: 'label' | 'dropdown' = 'label';
  /** Months shown side by side; ranges default to two. */
  @Prop({ attribute: 'number-of-months' }) numberOfMonths?: number;
  /** How the chosen date reads in the trigger (`Intl.DateTimeFormat` `dateStyle`). */
  @Prop() format: 'full' | 'long' | 'medium' | 'short' = 'long';

  /** Emitted when the date (or range) changes; same detail as the calendar's `change`. */
  @Event({ eventName: 'change', bubbles: true, composed: true }) changeEvent!: EventEmitter<CalendarChangeDetail>;
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

  connectedCallback() { this.defaultValue = this.value; }
  componentDidLoad() {
    this.syncForm();
    if (this.open) this.onOpen(true);
  }
  disconnectedCallback() {
    this.dismiss?.destroy();
    this.overlay?.destroy();
    this.overlay = undefined;
  }

  /** Focus the trigger. */
  @Method() async setFocus() { this.trigger?.focus(); }
  formResetCallback() { this.value = this.defaultValue; }
  formDisabledCallback(disabled: boolean) { this.disabled = disabled; }

  @Watch('value')
  syncForm() {
    this.internals?.setFormValue?.(this.value);
    this.internals?.setValidity?.(this.required && !this.value ? { valueMissing: true } : {}, 'Please pick a date.', this.trigger);
  }

  private label(): string | undefined {
    const lang = this.locale || this.host.closest('[lang]')?.getAttribute('lang') || undefined;
    const opts = { dateStyle: this.format } as const;
    if (this.mode === 'range') {
      const r = parseRange(this.value);
      if (!r.start) return undefined;
      return r.end ? `${formatDate(r.start, lang, opts)} – ${formatDate(r.end, lang, opts)}` : formatDate(r.start, lang, opts);
    }
    const d = parseISODate(this.value);
    return d ? formatDate(d, lang, opts) : undefined;
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
      this.overlay ??= createOverlay(this.trigger, this.panel, { placement: this.placement, offset: 4 });
      void this.overlay.open().then(() => { if (this.open) void this.calendar?.setFocus(); });
      this.dismiss ??= createDismissable(this.panel, { escape: true, pointerOutside: true, focusOutside: true, ignore: () => [this.trigger], onDismiss: (r) => { this.set(false); if (r === 'escape') this.trigger?.focus(); } });
    } else {
      this.dismiss?.destroy();
      this.dismiss = undefined;
      void this.overlay?.close();
    }
  }
  private onCalendarChange = (ev: Event) => {
    const e = ev as CustomEvent<CalendarChangeDetail>;
    e.stopPropagation(); // re-emitted from the host with the picker as target
    this.value = e.detail.value;
    this.changeEvent.emit(e.detail);
    const done = this.mode === 'range' ? !!e.detail.end || !e.detail.start : true;
    if (done) { this.set(false); this.trigger?.focus({ preventScroll: true }); }
  };
  private onTriggerKeydown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); this.set(true); }
  };

  render() {
    const label = this.label();
    return (
      <Host>
        <button
          part="trigger"
          type="button"
          ref={(el) => (this.trigger = el)}
          aria-haspopup="dialog"
          aria-expanded={this.open ? 'true' : 'false'}
          aria-controls={this.dialogId}
          aria-label={this.ariaLabel}
          aria-description={this.ariaDescription}
          aria-invalid={this.invalid ? 'true' : undefined}
          disabled={this.disabled}
          class={{ 'flex w-full min-w-0 items-center justify-start gap-2 whitespace-nowrap border-default bg-transparent text-md md:text-sm font-normal text-fg shadow-raised transition-interactive motion-fast focus-ring disabled:opacity-50 aria-invalid:invalid-ring': true, [`field-${this.size}`]: true }}
          onClick={() => this.set(!this.open)}
          onKeyDown={this.onTriggerKeydown}
        >
          {/* safelist: field-sm field-md field-lg */}
          <svg class="icon-md shrink-0 text-fg-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></svg>
          <span part="value" class={{ 'min-w-0 flex-1 truncate text-start': true, 'text-fg-muted': !label }}>{label ?? this.placeholder}</span>
        </button>
        <div part="content" id={this.dialogId} role="dialog" aria-label={this.ariaLabel ?? 'Calendar'} popover="manual" ref={(el) => (this.panel = el)} class="rounded-md border-default bg-popover text-fg shadow-popover">
          <art-calendar
            ref={(el) => (this.calendar = el as HTMLElement & { setFocus(): Promise<void> })}
            mode={this.mode}
            value={this.value}
            min={this.min}
            max={this.max}
            disabledDates={this.disabledDates}
            locale={this.locale}
            captionLayout={this.captionLayout}
            numberOfMonths={this.numberOfMonths ?? (this.mode === 'range' ? 2 : 1)}
            required={this.required}
            onChange={this.onCalendarChange}
          />
        </div>
      </Host>
    );
  }
}
