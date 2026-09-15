import { Component } from '@angular/core';
import { ArtButton, ArtButtonGroup, ArtInput } from '@aranghat/base-angular';

@Component({
  selector: 'sample-button-group-with-input',
  imports: [ArtButton, ArtButtonGroup, ArtInput],
  template: `
    <art-button-group>
      <art-input placeholder="Search…" aria-label="Search"></art-input>
      <art-button variant="outline">Search</art-button>
    </art-button-group>
  `,
})
export class ButtonGroupWithInput {}
