import { Component } from '@angular/core';
import { ArtCalendar } from '@aranghat/components-angular';

@Component({
  selector: 'sample-calendar-min-max',
  imports: [ArtCalendar],
  template: `
    <art-calendar value="2026-09-15" month="2026-09" min="2026-09-05" max="2026-09-25" aria-label="Pick a date"></art-calendar>
  `,
})
export class CalendarMinMax {}
