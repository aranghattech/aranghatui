import { Component } from '@angular/core';
import { ArtPopover } from '@aranghat/components-angular';
import { ArtButton, ArtField, ArtInput, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-popover-open',
  imports: [ArtButton, ArtField, ArtInput, ArtLabel, ArtPopover],
  template: `
    <art-popover open>
      <art-button slot="trigger" variant="outline">Open popover</art-button>
      <h4>Dimensions</h4>
      <p class="muted">Set the dimensions for the layer.</p>
      <art-field>
        <art-label slot="label">Width</art-label>
        <art-input value="100%" size="sm"></art-input>
      </art-field>
      <art-field>
        <art-label slot="label">Height</art-label>
        <art-input value="25px" size="sm"></art-input>
      </art-field>
    </art-popover>
  `,
})
export class PopoverOpen {}
