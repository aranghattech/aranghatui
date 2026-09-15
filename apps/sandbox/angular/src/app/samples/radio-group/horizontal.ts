import { Component } from '@angular/core';
import { ArtRadio, ArtRadioGroup } from '@aranghat/base-angular';

@Component({
  selector: 'sample-radio-group-horizontal',
  imports: [ArtRadio, ArtRadioGroup],
  template: `
    <art-radio-group orientation="horizontal" value="default" aria-label="Density">
      <art-radio value="default">Default</art-radio>
      <art-radio value="comfortable">Comfortable</art-radio>
      <art-radio value="compact">Compact</art-radio>
    </art-radio-group>
  `,
})
export class RadioGroupHorizontal {}
