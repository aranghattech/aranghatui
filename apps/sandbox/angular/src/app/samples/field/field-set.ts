import { Component } from '@angular/core';
import { ArtField, ArtFieldSet, ArtInput, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-field-field-set',
  imports: [ArtField, ArtFieldSet, ArtInput, ArtLabel],
  template: `
    <art-field-set>
      <span slot="legend">Address</span>
      <art-field>
        <art-label slot="label">Street</art-label>
        <art-input placeholder="123 Main St"></art-input>
      </art-field>
      <art-field>
        <art-label slot="label">City</art-label>
        <art-input placeholder="New York"></art-input>
      </art-field>
    </art-field-set>
  `,
})
export class FieldFieldSet {}
