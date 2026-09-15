import { Component } from '@angular/core';
import { ArtPopover } from '@aranghat/components-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-popover-placements',
  imports: [ArtButton, ArtPopover],
  template: `
    <art-popover placement="top">
      <art-button slot="trigger" variant="outline">Top</art-button>
      <p>Popover on top</p>
    </art-popover>
    <art-popover placement="right">
      <art-button slot="trigger" variant="outline">Right</art-button>
      <p>Popover on the right</p>
    </art-popover>
    <art-popover placement="bottom">
      <art-button slot="trigger" variant="outline">Bottom</art-button>
      <p>Popover on bottom</p>
    </art-popover>
    <art-popover placement="left">
      <art-button slot="trigger" variant="outline">Left</art-button>
      <p>Popover on the left</p>
    </art-popover>
  `,
})
export class PopoverPlacements {}
