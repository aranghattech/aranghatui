import { Component } from '@angular/core';
import { ArtButton, ArtInput, ArtInputGroup } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-group-with-button',
  imports: [ArtButton, ArtInput, ArtInputGroup],
  template: `
    <art-input-group>
      <art-input type="email" placeholder="Email" aria-label="Email"></art-input>
      <art-button slot="end" size="sm" variant="secondary">Subscribe</art-button>
    </art-input-group>
  `,
})
export class InputGroupWithButton {}
