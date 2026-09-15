import { Component } from '@angular/core';
import { ArtCollapsible } from '@aranghat/components-angular';

@Component({
  selector: 'sample-collapsible-disabled',
  imports: [ArtCollapsible],
  template: `
    <art-collapsible disabled>
      <p slot="trigger">Unavailable section</p>
      <p>Never shown.</p>
    </art-collapsible>
  `,
})
export class CollapsibleDisabled {}
