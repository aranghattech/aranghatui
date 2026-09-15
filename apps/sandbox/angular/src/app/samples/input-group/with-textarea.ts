import { Component } from '@angular/core';
import { ArtButton, ArtInputGroup, ArtTextarea } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-group-with-textarea',
  imports: [ArtButton, ArtInputGroup, ArtTextarea],
  template: `
    <art-input-group>
      <art-textarea placeholder="Ask, search or chat…" aria-label="Message"></art-textarea>
      <span slot="block-end">
        Line 1, Column 1
        <art-button size="sm" variant="ghost">Run</art-button>
      </span>
    </art-input-group>
  `,
})
export class InputGroupWithTextarea {}
