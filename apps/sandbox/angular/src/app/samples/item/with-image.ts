import { Component } from '@angular/core';
import { ArtItem } from '@aranghat/base-angular';

@Component({
  selector: 'sample-item-with-image',
  imports: [ArtItem],
  template: `
    <art-item variant="outline">
      <img slot="media" alt="" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23a3a3a3'/%3E%3C/svg%3E">
      <p slot="title">Photo album</p>
      <p slot="description">124 photos · Updated yesterday</p>
    </art-item>
  `,
})
export class ItemWithImage {}
