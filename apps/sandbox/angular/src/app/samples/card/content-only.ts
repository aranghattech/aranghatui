import { Component } from '@angular/core';
import { ArtCard } from '@aranghat/base-angular';

@Component({
  selector: 'sample-card-content-only',
  imports: [ArtCard],
  template: `
    <art-card>
      <p>Just content — no header, no footer.</p>
    </art-card>
  `,
})
export class CardContentOnly {}
