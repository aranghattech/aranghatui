import { Component } from '@angular/core';
import { ArtField, ArtInput, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-field-error',
  imports: [ArtField, ArtInput, ArtLabel],
  template: `
    <art-field>
      <art-label slot="label">Email</art-label>
      <art-input type="email" value="not-an-email"></art-input>
      <p slot="error">Enter a valid email address.</p>
    </art-field>
  `,
})
export class FieldError {}
