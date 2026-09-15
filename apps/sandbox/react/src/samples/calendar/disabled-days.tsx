import { Calendar } from '@aranghat/components-react';

// A function property: return true for a day that cannot be picked (weekends here).
const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;

export default function DisabledDays() {
  return <Calendar month="2026-09" aria-label="Pick a weekday" disabledDates={isWeekend} />;
}
