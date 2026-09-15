import { Component } from '@angular/core';
import { ArtCalendar } from '@aranghat/components-angular';

@Component({
  selector: 'sample-calendar-disabled-days',
  imports: [ArtCalendar],
  template: `<art-calendar month="2026-09" aria-label="Pick a weekday" [disabledDates]="isWeekend"></art-calendar>`,
})
export class CalendarDisabledDays {
  // A function property: return true for a day that cannot be picked (weekends here).
  isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;
}
