import { Component } from '@angular/core';
import { ArtField, ArtInput, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-field-disabled',
  imports: [ArtField, ArtInput, ArtLabel],
  template: `
    <art-field>
      <art-label slot="label">Username</art-label>
      <art-input value="shadcn" disabled></art-input>
      <p slot="description">Contact support to change your username.</p>
    </art-field>
  `,
})
export class FieldDisabled {}
