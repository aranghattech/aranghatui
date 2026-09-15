import { Component } from '@angular/core';
import { ArtSelect, ArtSelectGroup, ArtSelectItem } from '@aranghat/components-angular';

@Component({
  selector: 'sample-select-groups',
  imports: [ArtSelect, ArtSelectGroup, ArtSelectItem],
  template: `
    <art-select placeholder="Select a timezone" aria-label="Timezone">
      <art-select-group label="North America">
        <art-select-item value="est">Eastern Standard Time (EST)</art-select-item>
        <art-select-item value="cst">Central Standard Time (CST)</art-select-item>
        <art-select-item value="pst">Pacific Standard Time (PST)</art-select-item>
      </art-select-group>
      <art-select-group label="Europe">
        <art-select-item value="gmt">Greenwich Mean Time (GMT)</art-select-item>
        <art-select-item value="cet">Central European Time (CET)</art-select-item>
      </art-select-group>
    </art-select>
  `,
})
export class SelectGroups {}
