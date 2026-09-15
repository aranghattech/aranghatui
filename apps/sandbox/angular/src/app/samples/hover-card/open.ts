import { Component } from '@angular/core';
import { ArtHoverCard } from '@aranghat/components-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-hover-card-open',
  imports: [ArtButton, ArtHoverCard],
  template: `
    <art-hover-card open>
      <art-button slot="trigger" variant="link">@nextjs</art-button>
      <h4>@nextjs</h4>
      <p>The React Framework – created and maintained by @vercel.</p>
      <p class="muted">Joined December 2021</p>
    </art-hover-card>
  `,
})
export class HoverCardOpen {}
