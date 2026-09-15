import { Component } from '@angular/core';
import { ArtCollapsible } from '@aranghat/components-angular';

@Component({
  selector: 'sample-collapsible-open',
  imports: [ArtCollapsible],
  template: `
    <art-collapsible open>
      <p slot="trigger">Show details</p>
      <p>These details start expanded because of the open attribute.</p>
    </art-collapsible>
  `,
})
export class CollapsibleOpen {}
