import { Component } from '@angular/core';
import { ArtInput, ArtInputGroup } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-group-prefix-suffix',
  imports: [ArtInput, ArtInputGroup],
  template: `
    <art-input-group>
      <span slot="start">https://</span>
      <art-input placeholder="example" aria-label="Domain"></art-input>
      <span slot="end">.com</span>
    </art-input-group>
  `,
})
export class InputGroupPrefixSuffix {}
