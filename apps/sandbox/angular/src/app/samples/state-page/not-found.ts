import { Component } from '@angular/core';
import { ArtStatePage } from '@aranghat/widgets-angular';
import { ArtButton, ArtIcon } from '@aranghat/base-angular';

@Component({
  selector: 'sample-state-page-not-found',
  imports: [ArtButton, ArtIcon, ArtStatePage],
  template: `
    <art-state-page kind="not-found" code="404">
      <art-icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg></art-icon>
      <art-button slot="actions" href="#">Go home</art-button>
      <art-button slot="actions" variant="outline" href="#">Contact support</art-button>
    </art-state-page>
  `,
})
export class StatePageNotFound {}
