import { Component } from '@angular/core';
import { ArtInput, ArtInputGroup } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-group-invalid',
  imports: [ArtInput, ArtInputGroup],
  template: `
    <art-input-group>
      <span slot="start">https://</span>
      <art-input value="not a domain" aria-label="Domain" invalid></art-input>
    </art-input-group>
  `,
})
export class InputGroupInvalid {}
