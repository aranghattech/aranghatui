import { Component } from '@angular/core';
import { ArtButton, ArtButtonGroup, ArtSeparator } from '@aranghat/base-angular';

@Component({
  selector: 'sample-button-group-with-separator',
  imports: [ArtButton, ArtButtonGroup, ArtSeparator],
  template: `
    <art-button-group>
      <art-button variant="secondary">Copy</art-button>
      <art-separator orientation="vertical"></art-separator>
      <art-button variant="secondary">Paste</art-button>
    </art-button-group>
  `,
})
export class ButtonGroupWithSeparator {}
