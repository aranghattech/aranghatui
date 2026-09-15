import { Component } from '@angular/core';
import { ArtTooltip } from '@aranghat/components-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-tooltip-placements',
  imports: [ArtButton, ArtTooltip],
  template: `
    <art-tooltip placement="top">
      <art-button slot="trigger" variant="outline">Top</art-button>
      Tooltip on top
    </art-tooltip>
    <art-tooltip placement="right">
      <art-button slot="trigger" variant="outline">Right</art-button>
      Tooltip on the right
    </art-tooltip>
    <art-tooltip placement="bottom">
      <art-button slot="trigger" variant="outline">Bottom</art-button>
      Tooltip on the bottom
    </art-tooltip>
    <art-tooltip placement="left">
      <art-button slot="trigger" variant="outline">Left</art-button>
      Tooltip on the left
    </art-tooltip>
  `,
})
export class TooltipPlacements {}
