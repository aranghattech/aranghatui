import { Component } from '@angular/core';
import { ArtLabel, ArtSwitch } from '@aranghat/base-angular';

@Component({
  selector: 'sample-switch-basic',
  imports: [ArtLabel, ArtSwitch],
  template: `
    <art-switch id="airplane"></art-switch>
    <art-label for="airplane">Airplane Mode</art-label>
  `,
})
export class SwitchBasic {}
