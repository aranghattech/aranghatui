import { Component } from '@angular/core';
import { ArtButton, ArtButtonGroup } from '@aranghat/base-angular';

@Component({
  selector: 'sample-button-group-basic',
  imports: [ArtButton, ArtButtonGroup],
  template: `
    <art-button-group>
      <art-button variant="outline">Archive</art-button>
      <art-button variant="outline">Report</art-button>
      <art-button variant="outline">Snooze</art-button>
    </art-button-group>
  `,
})
export class ButtonGroupBasic {}
