import { Component } from '@angular/core';
import { ArtTab, ArtTabPanel, ArtTabs } from '@aranghat/components-angular';

@Component({
  selector: 'sample-tabs-manual',
  imports: [ArtTab, ArtTabPanel, ArtTabs],
  template: `
    <art-tabs value="a" activation="manual">
      <art-tab value="a">Alpha</art-tab>
      <art-tab value="b">Beta</art-tab>
      <art-tab-panel value="a"><p>Arrows move focus; Enter or Space selects.</p></art-tab-panel>
      <art-tab-panel value="b"><p>Beta panel.</p></art-tab-panel>
    </art-tabs>
  `,
})
export class TabsManual {}
