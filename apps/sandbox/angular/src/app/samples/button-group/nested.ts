import { Component } from '@angular/core';
import { ArtButton, ArtButtonGroup } from '@aranghat/base-angular';

@Component({
  selector: 'sample-button-group-nested',
  imports: [ArtButton, ArtButtonGroup],
  template: `
    <art-button-group>
      <art-button-group>
        <art-button variant="outline">1</art-button>
        <art-button variant="outline">2</art-button>
        <art-button variant="outline">3</art-button>
      </art-button-group>
      <art-button-group>
        <art-button variant="outline">Next</art-button>
      </art-button-group>
    </art-button-group>
  `,
})
export class ButtonGroupNested {}
