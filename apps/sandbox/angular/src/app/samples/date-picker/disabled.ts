import { Component } from '@angular/core';
import { ArtDatePicker } from '@aranghat/components-angular';

@Component({
  selector: 'sample-date-picker-disabled',
  imports: [ArtDatePicker],
  template: `
    <art-date-picker value="2026-09-15" aria-label="Date" disabled></art-date-picker>
  `,
})
export class DatePickerDisabled {}
