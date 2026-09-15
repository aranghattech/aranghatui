import { Component } from '@angular/core';
import { ArtButton, ArtKbd } from '@aranghat/base-angular';

@Component({
  selector: 'sample-kbd-in-button',
  imports: [ArtButton, ArtKbd],
  template: `
    <art-button variant="outline" size="sm">
      Accept
      <art-kbd slot="end">⏎</art-kbd>
    </art-button>
    <art-button variant="outline" size="sm">
      Cancel
      <art-kbd slot="end">Esc</art-kbd>
    </art-button>
  `,
})
export class KbdInButton {}
