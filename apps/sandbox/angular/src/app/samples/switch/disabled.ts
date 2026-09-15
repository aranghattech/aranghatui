import { Component } from '@angular/core';
import { ArtLabel, ArtSwitch } from '@aranghat/base-angular';

@Component({
  selector: 'sample-switch-disabled',
  imports: [ArtLabel, ArtSwitch],
  template: `
    <art-switch id="off" disabled></art-switch>
    <art-label for="off" disabled>Unavailable</art-label>
  `,
})
export class SwitchDisabled {}
