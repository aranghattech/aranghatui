import { Component } from '@angular/core';
import { ArtTooltip } from '@aranghat/components-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-tooltip-delays',
  imports: [ArtButton, ArtTooltip],
  template: `
    <art-tooltip open-delay="0" close-delay="0">
      <art-button slot="trigger" variant="outline">Instant</art-button>
      No hover intent
    </art-tooltip>
  `,
})
export class TooltipDelays {}
