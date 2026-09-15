import { Component } from '@angular/core';
import { ArtSwitch } from '@aranghat/base-angular';

@Component({
  selector: 'sample-switch-sizes',
  imports: [ArtSwitch],
  template: `
    <art-switch size="sm" checked aria-label="Small"></art-switch>
    <art-switch checked aria-label="Medium"></art-switch>
    <art-switch size="lg" checked aria-label="Large"></art-switch>
  `,
})
export class SwitchSizes {}
