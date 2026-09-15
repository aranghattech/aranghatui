import { Component } from '@angular/core';
import { ArtCalendar } from '@aranghat/components-angular';

@Component({
  selector: 'sample-calendar-week-starts-monday',
  imports: [ArtCalendar],
  template: `
    <art-calendar value="2026-09-15" month="2026-09" week-starts-on="1" aria-label="Pick a date"></art-calendar>
  `,
})
export class CalendarWeekStartsMonday {}
