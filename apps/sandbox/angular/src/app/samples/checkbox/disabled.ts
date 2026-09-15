import { Component } from '@angular/core';
import { ArtCheckbox, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-checkbox-disabled',
  imports: [ArtCheckbox, ArtLabel],
  template: `
    <art-checkbox id="d1" disabled></art-checkbox>
    <art-label for="d1" disabled>Unavailable</art-label>
  `,
})
export class CheckboxDisabled {}
