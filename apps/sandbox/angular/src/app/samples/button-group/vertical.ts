import { Component } from '@angular/core';
import { ArtButton, ArtButtonGroup } from '@aranghat/base-angular';

@Component({
  selector: 'sample-button-group-vertical',
  imports: [ArtButton, ArtButtonGroup],
  template: `
    <art-button-group orientation="vertical">
      <art-button variant="outline">Top</art-button>
      <art-button variant="outline">Middle</art-button>
      <art-button variant="outline">Bottom</art-button>
    </art-button-group>
  `,
})
export class ButtonGroupVertical {}
