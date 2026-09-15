import { Component } from '@angular/core';
import { ArtField, ArtFieldGroup, ArtInput, ArtLabel, ArtSwitch } from '@aranghat/base-angular';

@Component({
  selector: 'sample-field-field-group',
  imports: [ArtField, ArtFieldGroup, ArtInput, ArtLabel, ArtSwitch],
  template: `
    <art-field-group>
      <art-field>
        <art-label slot="label">Name</art-label>
        <art-input placeholder="Ada Lovelace"></art-input>
      </art-field>
      <art-field>
        <art-label slot="label">Email</art-label>
        <art-input type="email" placeholder="ada@example.com"></art-input>
      </art-field>
      <art-field orientation="horizontal">
        <art-switch></art-switch>
        <art-label slot="label">Email me about product updates</art-label>
      </art-field>
    </art-field-group>
  `,
})
export class FieldFieldGroup {}
