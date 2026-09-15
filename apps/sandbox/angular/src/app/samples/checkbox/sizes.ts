import { Component } from '@angular/core';
import { ArtCheckbox } from '@aranghat/base-angular';

@Component({
  selector: 'sample-checkbox-sizes',
  imports: [ArtCheckbox],
  template: `
    <art-checkbox size="sm" checked aria-label="Small"></art-checkbox>
    <art-checkbox checked aria-label="Medium"></art-checkbox>
    <art-checkbox size="lg" checked aria-label="Large"></art-checkbox>
  `,
})
export class CheckboxSizes {}
