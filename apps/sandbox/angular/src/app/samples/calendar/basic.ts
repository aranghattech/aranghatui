import { Component } from '@angular/core';
import { ArtCalendar } from '@aranghat/components-angular';

@Component({
  selector: 'sample-calendar-basic',
  imports: [ArtCalendar],
  template: `
    <art-calendar value="2026-09-15" month="2026-09" aria-label="Pick a date"></art-calendar>
  `,
})
export class CalendarBasic {}
