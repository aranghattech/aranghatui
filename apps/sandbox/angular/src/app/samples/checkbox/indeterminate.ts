import { Component } from '@angular/core';
import { ArtCheckbox, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-checkbox-indeterminate',
  imports: [ArtCheckbox, ArtLabel],
  template: `
    <art-checkbox id="all" indeterminate></art-checkbox>
    <art-label for="all">Select all</art-label>
  `,
})
export class CheckboxIndeterminate {}
