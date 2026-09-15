import { Component } from '@angular/core';
import { ArtCalendar } from '@aranghat/components-angular';

@Component({
  selector: 'sample-calendar-range',
  imports: [ArtCalendar],
  template: `
    <art-calendar mode="range" value="2026-09-08/2026-09-17" month="2026-09" number-of-months="2" aria-label="Pick a date range"></art-calendar>
  `,
})
export class CalendarRange {}
