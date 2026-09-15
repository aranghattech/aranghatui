import { Component } from '@angular/core';
import { ArtButton, ArtButtonGroup } from '@aranghat/base-angular';

@Component({
  selector: 'sample-button-group-sizes',
  imports: [ArtButton, ArtButtonGroup],
  template: `
    <art-button-group>
      <art-button variant="outline" size="sm">Small</art-button>
      <art-button variant="outline" size="sm">Small</art-button>
    </art-button-group>
    <art-button-group>
      <art-button variant="outline" size="lg">Large</art-button>
      <art-button variant="outline" size="lg">Large</art-button>
    </art-button-group>
  `,
})
export class ButtonGroupSizes {}
