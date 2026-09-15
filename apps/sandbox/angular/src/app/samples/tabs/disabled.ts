import { Component } from '@angular/core';
import { ArtTab, ArtTabPanel, ArtTabs } from '@aranghat/components-angular';

@Component({
  selector: 'sample-tabs-disabled',
  imports: [ArtTab, ArtTabPanel, ArtTabs],
  template: `
    <art-tabs value="one">
      <art-tab value="one">One</art-tab>
      <art-tab value="two" disabled>Two</art-tab>
      <art-tab value="three">Three</art-tab>
      <art-tab-panel value="one"><p>First panel.</p></art-tab-panel>
      <art-tab-panel value="two"><p>Never reachable.</p></art-tab-panel>
      <art-tab-panel value="three"><p>Third panel.</p></art-tab-panel>
    </art-tabs>
  `,
})
export class TabsDisabled {}
