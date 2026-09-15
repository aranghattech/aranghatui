/**
 * Date math for Calendar / Date Picker (CLAUDE.md §6: no date-fns / dayjs / luxon). Everything
 * works on *local* calendar days; values cross the API as ISO strings (`YYYY-MM-DD`,
 * `YYYY-MM`, and `start/end` for ranges — ISO 8601 interval notation).
 */
export interface DateRange {
  start?: Date;
  end?: Date;
}

export function localDate(year: number, month: number, day: number): Date {
  const d = new Date(year, month, day);
  d.setHours(0, 0, 0, 0);
  return d;
}
export function today(): Date {
  const d = new Date();
  return localDate(d.getFullYear(), d.getMonth(), d.getDate());
}
const pad = (n: number) => String(n).padStart(2, '0');

/** `YYYY-MM-DD` → local date; anything else → undefined. */
export function parseISODate(value?: string | null): Date | undefined {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value?.trim() ?? '');
  if (!m) return undefined;
  const d = localDate(+m[1]!, +m[2]! - 1, +m[3]!);
  return toISODate(d) === m[0] ? d : undefined; // reject 2026-02-31
}
export function toISODate(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
/** `YYYY-MM` → first day of that month. */
export function parseISOMonth(value?: string | null): Date | undefined {
  return parseISODate(`${value?.trim()}-01`);
}
export function toISOMonth(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
}
/** `start/end` (either side optional) → range. */
export function parseRange(value?: string | null): DateRange {
  const [a, b] = (value ?? '').split('/');
  return { start: parseISODate(a), end: parseISODate(b) };
}
export function toRangeValue(r: DateRange): string {
  return r.start ? (r.end ? `${toISODate(r.start)}/${toISODate(r.end)}` : toISODate(r.start)) : '';
}

export function startOfMonth(d: Date): Date { return localDate(d.getFullYear(), d.getMonth(), 1); }
export function endOfMonth(d: Date): Date { return localDate(d.getFullYear(), d.getMonth() + 1, 0); }
export function addDays(d: Date, n: number): Date { return localDate(d.getFullYear(), d.getMonth(), d.getDate() + n); }
/** Keeps the day of month when it exists in the target month, else clamps to its last day. */
export function addMonths(d: Date, n: number): Date {
  const first = localDate(d.getFullYear(), d.getMonth() + n, 1);
  return localDate(first.getFullYear(), first.getMonth(), Math.min(d.getDate(), endOfMonth(first).getDate()));
}

/** -1, 0, 1 by calendar day (every date here is a local midnight, so time order is day order). */
export function compareDay(a: Date, b: Date): number { return Math.sign(+a - +b); }
export function isSameDay(a?: Date, b?: Date): boolean { return !!a && !!b && compareDay(a, b) === 0; }
export function isSameMonth(a: Date, b: Date): boolean { return toISOMonth(a) === toISOMonth(b); }
/** Inclusive, by day; the bounds may come in either order. */
export function isBetween(d: Date, a?: Date, b?: Date): boolean {
  return !!a && !!b && compareDay(d, a < b ? a : b) >= 0 && compareDay(d, a < b ? b : a) <= 0;
}
export function clampDay(d: Date, min?: Date, max?: Date): Date {
  if (min && compareDay(d, min) < 0) return min;
  if (max && compareDay(d, max) > 0) return max;
  return d;
}

/** First day of the week for a locale as a JS weekday (0 = Sunday). Falls back to Sunday. */
export function weekStartsOn(locale?: string): number {
  try {
    const l = new Intl.Locale(locale || navigator.language) as Intl.Locale & { getWeekInfo?: () => { firstDay: number }; weekInfo?: { firstDay: number } };
    return ((l.getWeekInfo?.() ?? l.weekInfo)?.firstDay ?? 7) % 7; // Intl: 1 = Monday … 7 = Sunday
  } catch {
    return 0;
  }
}

/**
 * The weeks shown for a month: full rows of 7 days starting on `firstDay`, with the neighbouring
 * months' days filling the first and last rows (`fixedWeeks` always yields 6 rows).
 */
export function monthGrid(year: number, month: number, firstDay = 0, fixedWeeks = false): Date[][] {
  const first = localDate(year, month, 1);
  const lead = (first.getDay() - firstDay + 7) % 7;
  const start = addDays(first, -lead);
  const days = endOfMonth(first).getDate();
  const rows = fixedWeeks ? 6 : Math.ceil((lead + days) / 7);
  const grid: Date[][] = [];
  for (let r = 0; r < rows; r++) grid.push(Array.from({ length: 7 }, (_, c) => addDays(start, r * 7 + c)));
  return grid;
}

export function formatDate(d: Date, locale?: string, options: Intl.DateTimeFormatOptions = { dateStyle: 'long' }): string {
  return new Intl.DateTimeFormat(locale || undefined, options).format(d);
}
/** Weekday names starting on `firstDay` (2023-01-01 was a Sunday). */
export function weekdayLabels(locale: string | undefined, firstDay = 0, format: 'narrow' | 'short' | 'long' = 'short'): string[] {
  return Array.from({ length: 7 }, (_, i) => formatDate(localDate(2023, 0, 1 + ((firstDay + i) % 7)), locale, { weekday: format }));
}
export function monthLabels(locale?: string, format: 'long' | 'short' = 'long'): string[] {
  return Array.from({ length: 12 }, (_, m) => formatDate(localDate(2023, m, 1), locale, { month: format }));
}
