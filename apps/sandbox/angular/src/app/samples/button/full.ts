import { Component } from '@angular/core';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-button-full',
  imports: [ArtButton],
  template: `
    <div style="display: grid; gap: var(--art-space-2); max-width: var(--art-container-xs)">
      <art-button full>Continue</art-button>
      <art-button full variant="outline">Back</art-button>
    </div>
  `,
})
export class ButtonFull {}
