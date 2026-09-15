import { Component } from '@angular/core';
import { ArtDatePicker } from '@aranghat/components-angular';

@Component({
  selector: 'sample-date-picker-range',
  imports: [ArtDatePicker],
  template: `
    <art-date-picker mode="range" value="2026-09-08/2026-09-17" placeholder="Pick a date range" aria-label="Dates" open></art-date-picker>
  `,
})
export class DatePickerRange {}
