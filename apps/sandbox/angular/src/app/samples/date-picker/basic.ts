import { Component } from '@angular/core';
import { ArtDatePicker } from '@aranghat/components-angular';

@Component({
  selector: 'sample-date-picker-basic',
  imports: [ArtDatePicker],
  template: `
    <art-date-picker aria-label="Date"></art-date-picker>
  `,
})
export class DatePickerBasic {}
