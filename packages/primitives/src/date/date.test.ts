import { describe, expect, it } from 'vitest';
import { addMonths, clampDay, compareDay, isBetween, monthGrid, parseISODate, parseRange, toISODate, toRangeValue, weekdayLabels } from './index.js';

describe('date', () => {
  it('parses and formats ISO days, rejecting impossible ones', () => {
    expect(toISODate(parseISODate('2026-09-15')!)).toBe('2026-09-15');
    expect(parseISODate('2026-02-31')).toBeUndefined();
    expect(parseISODate('nope')).toBeUndefined();
    expect(parseISODate('')).toBeUndefined();
  });
  it('adds months clamping to the last day', () => {
    expect(toISODate(addMonths(parseISODate('2026-01-31')!, 1))).toBe('2026-02-28');
    expect(toISODate(addMonths(parseISODate('2026-03-31')!, -1))).toBe('2026-02-28');
    expect(toISODate(addMonths(parseISODate('2026-12-15')!, 1))).toBe('2027-01-15');
  });
  it('builds a month grid starting on the given weekday', () => {
    const sun = monthGrid(2026, 8, 0); // September 2026 starts on a Tuesday
    expect(sun.length).toBe(5);
    expect(toISODate(sun[0]![0]!)).toBe('2026-08-30');
    expect(toISODate(sun[4]![6]!)).toBe('2026-10-03');
    const mon = monthGrid(2026, 8, 1);
    expect(toISODate(mon[0]![0]!)).toBe('2026-08-31');
    expect(monthGrid(2026, 8, 0, true).length).toBe(6);
  });
  it('compares, clamps and tests ranges by day', () => {
    const a = parseISODate('2026-09-01')!, b = parseISODate('2026-09-10')!, d = parseISODate('2026-09-05')!;
    expect(compareDay(a, b)).toBe(-1);
    expect(isBetween(d, a, b)).toBe(true);
    expect(isBetween(d, b, a)).toBe(true);
    expect(isBetween(a, a, b)).toBe(true);
    expect(toISODate(clampDay(parseISODate('2026-08-01')!, a, b))).toBe('2026-09-01');
    expect(toISODate(clampDay(d, a, b))).toBe('2026-09-05');
  });
  it('round-trips ranges', () => {
    const r = parseRange('2026-09-01/2026-09-10');
    expect(toISODate(r.start!)).toBe('2026-09-01');
    expect(toISODate(r.end!)).toBe('2026-09-10');
    expect(toRangeValue(r)).toBe('2026-09-01/2026-09-10');
    expect(toRangeValue(parseRange('2026-09-01'))).toBe('2026-09-01');
    expect(toRangeValue({})).toBe('');
  });
  it('labels weekdays from the first day', () => {
    expect(weekdayLabels('en-US', 1, 'short')).toEqual(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
  });
});
