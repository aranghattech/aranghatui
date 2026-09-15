import { Component } from '@angular/core';
import { ArtHoverCard } from '@aranghat/components-angular';

@Component({
  selector: 'sample-hover-card-with-link',
  imports: [ArtHoverCard],
  template: `
    <art-hover-card>
      <a slot="trigger" href="#">Read the docs</a>
      <p>A short preview of the page behind the link, so people can decide whether to follow it.</p>
    </art-hover-card>
  `,
})
export class HoverCardWithLink {}
