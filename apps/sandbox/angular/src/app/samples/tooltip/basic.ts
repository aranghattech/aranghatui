import { Component } from '@angular/core';
import { ArtTooltip } from '@aranghat/components-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-tooltip-basic',
  imports: [ArtButton, ArtTooltip],
  template: `
    <art-tooltip>
      <art-button slot="trigger" variant="outline">Hover</art-button>
      Add to library
    </art-tooltip>
  `,
})
export class TooltipBasic {}
