import { Component } from '@angular/core';
import { ArtDatePicker } from '@aranghat/components-angular';

@Component({
  selector: 'sample-date-picker-date-of-birth',
  imports: [ArtDatePicker],
  template: `
    <art-date-picker caption-layout="dropdown" min="1900-01-01" max="2026-12-31" placeholder="Select date" aria-label="Date of birth"></art-date-picker>
  `,
})
export class DatePickerDateOfBirth {}
