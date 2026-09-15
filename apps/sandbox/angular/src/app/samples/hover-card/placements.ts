import { Component } from '@angular/core';
import { ArtHoverCard } from '@aranghat/components-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-hover-card-placements',
  imports: [ArtButton, ArtHoverCard],
  template: `
    <art-hover-card placement="top">
      <art-button slot="trigger" variant="link">Top</art-button>
      <p>Card on top</p>
    </art-hover-card>
    <art-hover-card placement="right">
      <art-button slot="trigger" variant="link">Right</art-button>
      <p>Card on the right</p>
    </art-hover-card>
    <art-hover-card placement="bottom">
      <art-button slot="trigger" variant="link">Bottom</art-button>
      <p>Card on bottom</p>
    </art-hover-card>
    <art-hover-card placement="left">
      <art-button slot="trigger" variant="link">Left</art-button>
      <p>Card on the left</p>
    </art-hover-card>
  `,
})
export class HoverCardPlacements {}
