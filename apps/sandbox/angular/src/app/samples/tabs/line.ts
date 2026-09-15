import { Component } from '@angular/core';
import { ArtTab, ArtTabPanel, ArtTabs } from '@aranghat/components-angular';

@Component({
  selector: 'sample-tabs-line',
  imports: [ArtTab, ArtTabPanel, ArtTabs],
  template: `
    <art-tabs value="overview" variant="line">
      <art-tab value="overview">Overview</art-tab>
      <art-tab value="analytics">Analytics</art-tab>
      <art-tab value="reports">Reports</art-tab>
      <art-tab-panel value="overview"><p>Overview of the last 30 days.</p></art-tab-panel>
      <art-tab-panel value="analytics"><p>Traffic and conversion.</p></art-tab-panel>
      <art-tab-panel value="reports"><p>Downloadable reports.</p></art-tab-panel>
    </art-tabs>
  `,
})
export class TabsLine {}
