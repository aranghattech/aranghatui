import { Component } from '@angular/core';
import { ArtCheckbox, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-checkbox-checked',
  imports: [ArtCheckbox, ArtLabel],
  template: `
    <art-checkbox id="terms-2" checked></art-checkbox>
    <art-label for="terms-2">Accept terms and conditions</art-label>
  `,
})
export class CheckboxChecked {}
