import { Component } from '@angular/core';
import { ArtButton, ArtButtonGroup, ArtIcon } from '@aranghat/base-angular';

@Component({
  selector: 'sample-button-group-split',
  imports: [ArtButton, ArtButtonGroup, ArtIcon],
  template: `
    <art-button-group>
      <art-button>Update</art-button>
      <art-button icon aria-label="More options">
        <art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></art-icon>
      </art-button>
    </art-button-group>
  `,
})
export class ButtonGroupSplit {}
