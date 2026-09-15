import { AttachInternals, Component, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { resolveAria } from '@aranghat/primitives/aria';
import { addDays, addMonths, clampDay, compareDay, endOfMonth, formatDate, isBetween, isSameDay, isSameMonth, localDate, monthGrid, monthLabels, parseISODate, parseISOMonth, parseRange, startOfMonth, toISODate, toISOMonth, toRangeValue, today, weekStartsOn, weekdayLabels, type DateRange } from '@aranghat/primitives/date';
import { uniqueId } from '@aranghat/primitives/id';

export type CalendarMode = 'single' | 'multiple' | 'range';
export interface CalendarChangeDetail {
  /** ISO value: `YYYY-MM-DD`, comma-separated days (`multiple`) or `start/end` (`range`). */
  value: string;
  date?: Date;
  dates?: Date[];
  start?: Date;
  end?: Date;
}

/**
 * Calendar — shadcn/ui parity (react-day-picker look): a month grid with previous / next
 * navigation or month + year dropdowns, single, multiple or range selection, min / max and
 * custom disabled days, several months side by side, locale-aware weekday names and first
 * day of the week. Dates cross the API as ISO strings; `change` also carries `Date` objects.
 * Form-associated so it can sit inline in a form.
 *
 * @part calendar - The outer box.
 * @part month - One month (caption + grid).
 * @part caption - The month heading row.
 * @part nav - The previous / next buttons.
 * @part grid - The `<table role="grid">`.
 * @part day - A day button.
 */
@Component({ tag: 'art-calendar', styleUrl: 'art-calendar.css', shadow: { delegatesFocus: true }, formAssociated: true })
export class ArtCalendar {
  @Element() host!: HTMLElement;
  @AttachInternals() internals?: ElementInternals;
  private defaultValue = '';
  private pendingFocus?: Date;
  private gridId = uniqueId('art-calendar');

  /** Selection mode. */
  @Prop({ reflect: true }) mode: CalendarMode = 'single';
  /** Selected day(s): `YYYY-MM-DD`; comma-separated for `multiple`; `start/end` for `range`. */
  @Prop({ mutable: true, reflect: true }) value = '';
  /** Displayed month (`YYYY-MM`); follows the selection, then today. */
  @Prop({ mutable: true, reflect: true }) month?: string;
  /** Earliest / latest selectable day (`YYYY-MM-DD`). */
  @Prop() min?: string;
  @Prop() max?: string;
  /** Return true for a day that cannot be selected (weekends, booked dates…). */
  @Prop() disabledDates?: (date: Date) => boolean;
  /** BCP 47 tag for names and the first day of the week; defaults to the document language. */
  @Prop() locale?: string;
  /** 0 = Sunday … 6 = Saturday; overrides the locale's first day. */
  @Prop({ attribute: 'week-starts-on' }) weekStartsOn?: number;
  /** Fill the first and last rows with the neighbouring months' days. */
  @Prop({ attribute: 'show-outside-days' }) showOutsideDays = true;
  /** Always render six weeks so the height never changes. */
  @Prop({ attribute: 'fixed-weeks' }) fixedWeeks = false;
  /** `label` shows "September 2026" with arrows; `dropdown` adds month and year selects (date of birth). */
  @Prop({ attribute: 'caption-layout' }) captionLayout: 'label' | 'dropdown' = 'label';
  /** Months shown side by side (ranges usually show two). */
  @Prop({ attribute: 'number-of-months' }) numberOfMonths = 1;
  /** Clicking the selected day keeps it selected instead of clearing (single mode). */
  @Prop() required = false;
  @Prop({ reflect: true }) disabled = false;
  @Prop({ reflect: true }) name?: string;

  /** Emitted when the selection changes. */
  @Event({ eventName: 'change', bubbles: true, composed: true }) changeEvent!: EventEmitter<CalendarChangeDetail>;
  /** Emitted when the displayed month changes; `detail.month` is `YYYY-MM`. */
  @Event({ eventName: 'month-change', bubbles: true, composed: true }) monthChange!: EventEmitter<{ month: string }>;

  @State() private focused: Date = today();
  @State() private hovered?: Date;

  @Prop({ attribute: 'aria-label' }) hostAriaLabel?: string | null;
  @Prop({ attribute: 'aria-labelledby' }) hostAriaLabelledby?: string | null;
  private directLabel?: string;
  private ariaLabel?: string;

  componentWillRender() {
    if (this.hostAriaLabel != null) { this.directLabel = this.hostAriaLabel; this.host.removeAttribute('aria-label'); }
    this.ariaLabel = resolveAria(this.host, { labelledby: this.hostAriaLabelledby }, this.directLabel).label;
  }

  // ---- selection model
  private get lang(): string | undefined { return this.locale || this.host.closest('[lang]')?.getAttribute('lang') || undefined; }
  private get firstDay(): number { return this.weekStartsOn ?? weekStartsOn(this.lang); }
  private get minDate(): Date | undefined { return parseISODate(this.min); }
  private get maxDate(): Date | undefined { return parseISODate(this.max); }
  private days(): Date[] {
    if (this.mode === 'range') { const r = parseRange(this.value); return [r.start, r.end].filter(Boolean) as Date[]; }
    return this.value.split(',').map((v) => parseISODate(v)).filter(Boolean) as Date[];
  }
  private range(): DateRange { return this.mode === 'range' ? parseRange(this.value) : {}; }
  private displayedMonth(): Date {
    return parseISOMonth(this.month) ?? startOfMonth(this.days()[0] ?? clampDay(today(), this.minDate, this.maxDate));
  }
  private isDisabledDay(d: Date): boolean {
    if (this.disabled) return true;
    const min = this.minDate, max = this.maxDate;
    if (min && compareDay(d, min) < 0) return true;
    if (max && compareDay(d, max) > 0) return true;
    return !!this.disabledDates?.(d);
  }
  private isVisible(d: Date): boolean {
    const first = this.displayedMonth();
    for (let i = 0; i < Math.max(1, this.numberOfMonths); i++) if (isSameMonth(d, addMonths(first, i))) return true;
    return false;
  }

  connectedCallback() {
    this.defaultValue = this.value;
    this.focused = this.initialFocus();
  }
  componentDidLoad() { this.syncForm(); }
  componentDidRender() {
    if (this.pendingFocus && this.focusDay(this.pendingFocus)) this.pendingFocus = undefined;
  }
  /** Focuses the rendered button for a day; false when that day is not in the current grid yet. */
  private focusDay(d: Date): boolean {
    const el = this.host.shadowRoot?.querySelector<HTMLButtonElement>(`[part='day'][data-date='${toISODate(d)}']:not([data-outside])`);
    if (!el) return false;
    el.focus({ preventScroll: true });
    return true;
  }
  private initialFocus(): Date {
    const sel = this.days()[0];
    if (sel && this.isVisible(sel)) return sel;
    const t = today();
    if (this.isVisible(t)) return t;
    return this.displayedMonth();
  }

  @Watch('value')
  onValue() {
    this.syncForm();
    const sel = this.days()[0];
    if (sel && !this.isVisible(sel)) this.showMonth(startOfMonth(sel), false);
  }
  @Watch('month')
  onMonth() { if (!this.isVisible(this.focused)) this.focused = this.displayedMonth(); }
  private syncForm() { this.internals?.setFormValue?.(this.value); }
  formResetCallback() { this.value = this.defaultValue; }
  formDisabledCallback(disabled: boolean) { this.disabled = disabled; }

  /** Move keyboard focus onto the calendar (the selected day, else today, else the 1st). */
  @Method() async setFocus() {
    if (!this.focusDay(this.focused)) this.pendingFocus = this.focused;
  }

  private showMonth(first: Date, emit = true) {
    const iso = toISOMonth(first);
    if (iso === toISOMonth(this.displayedMonth())) return;
    this.month = iso;
    if (emit) this.monthChange.emit({ month: iso });
  }
  private select(d: Date) {
    if (this.isDisabledDay(d)) return;
    let next: string;
    const detail: CalendarChangeDetail = { value: '' };
    if (this.mode === 'single') {
      const same = isSameDay(this.days()[0], d);
      if (same && this.required) return;
      next = same ? '' : toISODate(d);
      detail.date = same ? undefined : d;
    } else if (this.mode === 'multiple') {
      const days = this.days();
      const kept = days.filter((x) => !isSameDay(x, d));
      const list = kept.length === days.length ? [...days, d].sort(compareDay) : kept;
      next = list.map(toISODate).join(',');
      detail.dates = list;
      detail.date = d;
    } else {
      const r = this.range();
      let out: DateRange;
      if (!r.start || r.end) out = { start: d };
      else if (compareDay(d, r.start) < 0) out = { start: d, end: r.start };
      else if (isSameDay(d, r.start) && !this.required) out = {};
      else out = { start: r.start, end: d };
      next = toRangeValue(out);
      detail.start = out.start; detail.end = out.end; detail.date = d;
    }
    if (next === this.value) return;
    this.value = next;
    detail.value = next;
    this.changeEvent.emit(detail);
  }

  // ---- keyboard (APG date grid)
  private onKeydown = (e: KeyboardEvent) => {
    const f = this.focused;
    let next: Date | undefined;
    switch (e.key) {
      case 'ArrowRight': next = addDays(f, 1); break;
      case 'ArrowLeft': next = addDays(f, -1); break;
      case 'ArrowDown': next = addDays(f, 7); break;
      case 'ArrowUp': next = addDays(f, -7); break;
      case 'Home': next = addDays(f, -((f.getDay() - this.firstDay + 7) % 7)); break;
      case 'End': next = addDays(f, 6 - ((f.getDay() - this.firstDay + 7) % 7)); break;
      case 'PageUp': next = addMonths(f, e.shiftKey ? -12 : -1); break;
      case 'PageDown': next = addMonths(f, e.shiftKey ? 12 : 1); break;
      default: return;
    }
    e.preventDefault();
    this.moveFocus(next);
  };
  private moveFocus(d: Date) {
    // arrows stay chronological (APG); RTL mirrors only the layout
    this.focused = clampDay(d, this.minDate, this.maxDate);
    if (!this.isVisible(this.focused)) this.showMonth(startOfMonth(this.focused));
    // Focus now when the day is already rendered (a fast Enter after an arrow must hit the new day,
    // not the old one — Stencil reuses the cell nodes, so a stale focus would land on another date);
    // a month change waits for the render.
    if (!this.focusDay(this.focused)) this.pendingFocus = this.focused;
  }
  private onDayClick = (d: Date) => { this.focused = d; this.select(d); };
  private onDayFocus = (d: Date) => { if (!isSameDay(this.focused, d)) this.focused = d; };

  // ---- caption
  private years(): number[] {
    const y = today().getFullYear();
    const from = this.minDate?.getFullYear() ?? y - 100;
    const to = this.maxDate?.getFullYear() ?? y + 10;
    return Array.from({ length: to - from + 1 }, (_, i) => from + i);
  }
  private onSelectMonth = (e: Event) => {
    const first = this.displayedMonth();
    this.showMonth(localDate(first.getFullYear(), +(e.target as HTMLSelectElement).value, 1));
  };
  private onSelectYear = (e: Event) => {
    const first = this.displayedMonth();
    this.showMonth(localDate(+(e.target as HTMLSelectElement).value, first.getMonth(), 1));
  };
  private canGo(delta: number): boolean {
    const first = this.displayedMonth();
    const min = this.minDate, max = this.maxDate;
    if (delta < 0 && min && compareDay(endOfMonth(addMonths(first, -1)), min) < 0) return false;
    if (delta > 0 && max && compareDay(startOfMonth(addMonths(first, Math.max(1, this.numberOfMonths))), max) > 0) return false;
    return true;
  }

  private renderMonth(first: Date, index: number, count: number) {
    const lang = this.lang;
    const grid = monthGrid(first.getFullYear(), first.getMonth(), this.firstDay, this.fixedWeeks);
    const labels = weekdayLabels(lang, this.firstDay, 'short');
    const longLabels = weekdayLabels(lang, this.firstDay, 'long');
    const selected = this.days();
    const r = this.range();
    const previewEnd = this.mode === 'range' && r.start && !r.end ? this.hovered : undefined;
    const t = today();
    const dropdown = this.captionLayout === 'dropdown';
    const gridLabel = formatDate(first, lang, { month: 'long', year: 'numeric' });
    return (
      <div part="month" class="flex w-full flex-col gap-4">
        <div part="caption" class="relative flex h-8 items-center justify-center">
          {index === 0 && (
            <button part="nav" type="button" class="nav absolute start-0 inline-flex items-center justify-center rounded-md text-fg transition-interactive motion-fast hover:bg-accent focus-ring control-icon-sm disabled:opacity-50" aria-label="Previous month" disabled={this.disabled || !this.canGo(-1)} onClick={() => this.showMonth(addMonths(this.displayedMonth(), -1))}>
              <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m15 18-6-6 6-6" /></svg>
            </button>
          )}
          {dropdown ? (
            <div class="flex items-center gap-1.5">
              <select aria-label="Month" class="caption-select h-8 rounded-md border-default bg-transparent ps-2 pe-2 text-sm font-medium text-fg focus-ring" disabled={this.disabled} onChange={this.onSelectMonth}>
                {monthLabels(lang).map((m, i) => <option value={i} selected={i === first.getMonth()}>{m}</option>)}
              </select>
              <select aria-label="Year" class="caption-select h-8 rounded-md border-default bg-transparent ps-2 pe-2 text-sm font-medium text-fg focus-ring" disabled={this.disabled} onChange={this.onSelectYear}>
                {this.years().map((y) => <option value={y} selected={y === first.getFullYear()}>{y}</option>)}
              </select>
            </div>
          ) : (
            <span class="text-sm font-medium text-fg" aria-live="polite">{gridLabel}</span>
          )}
          {index === count - 1 && (
            <button part="nav" type="button" class="nav absolute end-0 inline-flex items-center justify-center rounded-md text-fg transition-interactive motion-fast hover:bg-accent focus-ring control-icon-sm disabled:opacity-50" aria-label="Next month" disabled={this.disabled || !this.canGo(1)} onClick={() => this.showMonth(addMonths(this.displayedMonth(), 1))}>
              <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          )}
        </div>
        <table part="grid" role="grid" id={index === 0 ? this.gridId : undefined} aria-label={gridLabel} class="w-full border-collapse" onKeyDown={this.onKeydown}>
          <thead>
            <tr>
              {labels.map((l, i) => <th role="columnheader" abbr={longLabels[i]} scope="col" class="h-8 w-8 rounded-md text-xs font-normal text-fg-muted">{l}</th>)}
            </tr>
          </thead>
          <tbody onMouseLeave={() => (this.hovered = undefined)}>
            {grid.map((week) => (
              <tr role="row" class="mt-2">
                {week.map((d) => {
                  const outside = !isSameMonth(d, first);
                  if (outside && !this.showOutsideDays) return <td role="gridcell" class="h-8 w-8" />;
                  const iso = toISODate(d);
                  const isSel = selected.some((s) => isSameDay(s, d));
                  const rangeStart = this.mode === 'range' && r.start && isSameDay(r.start, d);
                  const end = r.end ?? previewEnd;
                  const rangeEnd = this.mode === 'range' && !!end && isSameDay(end, d) && !rangeStart;
                  const middle = this.mode === 'range' && !!r.start && !!end && !rangeStart && !rangeEnd && isBetween(d, r.start, end);
                  const dis = this.isDisabledDay(d);
                  const focusable = !outside && isSameDay(d, this.focused);
                  return (
                    <td role="gridcell" class="relative h-8 w-8 p-0 text-center text-sm" aria-selected={isSel && !outside ? 'true' : 'false'} data-selected={isSel && !outside ? '' : undefined} data-range-middle={middle && !outside ? '' : undefined} data-range-start={rangeStart && !outside ? '' : undefined} data-range-end={rangeEnd && !outside ? '' : undefined}>
                      <button
                        part="day"
                        type="button"
                        class="day inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-normal text-fg transition-interactive motion-fast hover:bg-accent focus-ring disabled:pointer-events-none disabled:opacity-50"
                        tabIndex={focusable ? 0 : -1}
                        disabled={dis}
                        aria-label={formatDate(d, lang, { dateStyle: 'full' })}
                        aria-current={isSameDay(d, t) ? 'date' : undefined}
                        data-date={iso}
                        data-today={isSameDay(d, t) ? '' : undefined}
                        data-outside={outside ? '' : undefined}
                        data-selected={isSel && !outside ? '' : undefined}
                        data-range-start={rangeStart && !outside ? '' : undefined}
                        data-range-end={rangeEnd && !outside ? '' : undefined}
                        data-range-middle={middle && !outside ? '' : undefined}
                        onClick={() => this.onDayClick(d)}
                        onFocus={() => this.onDayFocus(d)}
                        onMouseEnter={() => { if (this.mode === 'range') this.hovered = d; }}
                      >
                        {d.getDate()}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const first = this.displayedMonth();
    const count = Math.max(1, this.numberOfMonths);
    return (
      <Host>
        <div part="calendar" role="group" aria-label={this.ariaLabel} class="inline-flex flex-col gap-4 bg-canvas p-3 text-fg md:flex-row" data-mode={this.mode}>
          {Array.from({ length: count }, (_, i) => this.renderMonth(addMonths(first, i), i, count))}
        </div>
      </Host>
    );
  }
}
