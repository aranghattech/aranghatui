import { Component } from '@angular/core';
import { ArtField, ArtInput, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-field-basic',
  imports: [ArtField, ArtInput, ArtLabel],
  template: `
    <art-field>
      <art-label slot="label">Username</art-label>
      <art-input placeholder="shadcn"></art-input>
      <p slot="description">Choose a unique username for your account.</p>
    </art-field>
  `,
})
export class FieldBasic {}
