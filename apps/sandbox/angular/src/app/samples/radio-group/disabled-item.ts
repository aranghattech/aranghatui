import { Component } from '@angular/core';
import { ArtRadio, ArtRadioGroup } from '@aranghat/base-angular';

@Component({
  selector: 'sample-radio-group-disabled-item',
  imports: [ArtRadio, ArtRadioGroup],
  template: `
    <art-radio-group value="default" aria-label="Density">
      <art-radio value="default">Default</art-radio>
      <art-radio value="comfortable">Comfortable</art-radio>
      <art-radio value="compact" disabled>Compact</art-radio>
    </art-radio-group>
  `,
})
export class RadioGroupDisabledItem {}
