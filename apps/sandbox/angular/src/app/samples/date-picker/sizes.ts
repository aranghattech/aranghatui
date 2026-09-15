import { Component } from '@angular/core';
import { ArtDatePicker } from '@aranghat/components-angular';

@Component({
  selector: 'sample-date-picker-sizes',
  imports: [ArtDatePicker],
  template: `
    <art-date-picker size="sm" aria-label="Small"></art-date-picker>
    <art-date-picker aria-label="Medium"></art-date-picker>
    <art-date-picker size="lg" aria-label="Large"></art-date-picker>
  `,
})
export class DatePickerSizes {}
