import { Component } from '@angular/core';
import { ArtBadge } from '@aranghat/base-angular';

@Component({
  selector: 'sample-badge-link',
  imports: [ArtBadge],
  template: `
    <art-badge href="#" variant="outline">Link</art-badge>
  `,
})
export class BadgeLink {}
