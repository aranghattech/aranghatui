import { Component } from '@angular/core';
import { ArtLabel, ArtSwitch } from '@aranghat/base-angular';

@Component({
  selector: 'sample-switch-checked',
  imports: [ArtLabel, ArtSwitch],
  template: `
    <art-switch id="wifi" checked></art-switch>
    <art-label for="wifi">Wi-Fi</art-label>
  `,
})
export class SwitchChecked {}
