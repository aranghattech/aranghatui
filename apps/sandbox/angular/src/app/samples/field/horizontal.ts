import { Component } from '@angular/core';
import { ArtCheckbox, ArtField, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-field-horizontal',
  imports: [ArtCheckbox, ArtField, ArtLabel],
  template: `
    <art-field orientation="horizontal">
      <art-checkbox></art-checkbox>
      <art-label slot="label">Accept terms and conditions</art-label>
      <p slot="description">You agree to our Terms of Service and Privacy Policy.</p>
    </art-field>
  `,
})
export class FieldHorizontal {}
