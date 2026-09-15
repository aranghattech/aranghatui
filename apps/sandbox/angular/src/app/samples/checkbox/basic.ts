import { Component } from '@angular/core';
import { ArtCheckbox, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-checkbox-basic',
  imports: [ArtCheckbox, ArtLabel],
  template: `
    <art-checkbox id="terms"></art-checkbox>
    <art-label for="terms">Accept terms and conditions</art-label>
  `,
})
export class CheckboxBasic {}
