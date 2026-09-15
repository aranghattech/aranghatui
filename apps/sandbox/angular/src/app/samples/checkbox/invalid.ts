import { Component } from '@angular/core';
import { ArtCheckbox, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-checkbox-invalid',
  imports: [ArtCheckbox, ArtLabel],
  template: `
    <art-checkbox id="i1" invalid required></art-checkbox>
    <art-label for="i1">Required</art-label>
  `,
})
export class CheckboxInvalid {}
