import { Component } from '@angular/core';
import { ArtBadge } from '@aranghat/base-angular';

@Component({
  selector: 'sample-badge-basic',
  imports: [ArtBadge],
  template: `
    <art-badge>Badge</art-badge>
  `,
})
export class BadgeBasic {}
