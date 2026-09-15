import { Component } from '@angular/core';
import { ArtCalendar } from '@aranghat/components-angular';

@Component({
  selector: 'sample-calendar-multiple',
  imports: [ArtCalendar],
  template: `
    <art-calendar mode="multiple" value="2026-09-03,2026-09-10,2026-09-17" month="2026-09" aria-label="Pick dates"></art-calendar>
  `,
})
export class CalendarMultiple {}
