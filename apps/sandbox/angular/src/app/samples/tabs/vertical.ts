import { Component } from '@angular/core';
import { ArtTab, ArtTabPanel, ArtTabs } from '@aranghat/components-angular';

@Component({
  selector: 'sample-tabs-vertical',
  imports: [ArtTab, ArtTabPanel, ArtTabs],
  template: `
    <art-tabs value="general" orientation="vertical">
      <art-tab value="general">General</art-tab>
      <art-tab value="security">Security</art-tab>
      <art-tab value="billing">Billing</art-tab>
      <art-tab-panel value="general"><p>General settings.</p></art-tab-panel>
      <art-tab-panel value="security"><p>Security settings.</p></art-tab-panel>
      <art-tab-panel value="billing"><p>Billing settings.</p></art-tab-panel>
    </art-tabs>
  `,
})
export class TabsVertical {}
