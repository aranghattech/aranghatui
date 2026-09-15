import { Component } from '@angular/core';
import { ArtCalendar } from '@aranghat/components-angular';

@Component({
  selector: 'sample-calendar-dropdown',
  imports: [ArtCalendar],
  template: `
    <art-calendar caption-layout="dropdown" value="1990-06-15" month="1990-06" min="1900-01-01" max="2026-12-31" aria-label="Date of birth"></art-calendar>
  `,
})
export class CalendarDropdown {}
