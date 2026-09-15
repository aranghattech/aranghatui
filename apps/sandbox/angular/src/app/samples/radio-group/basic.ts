import { Component } from '@angular/core';
import { ArtRadio, ArtRadioGroup } from '@aranghat/base-angular';

@Component({
  selector: 'sample-radio-group-basic',
  imports: [ArtRadio, ArtRadioGroup],
  template: `
    <art-radio-group value="comfortable" aria-label="Density">
      <art-radio value="default">Default</art-radio>
      <art-radio value="comfortable">Comfortable</art-radio>
      <art-radio value="compact">Compact</art-radio>
    </art-radio-group>
  `,
})
export class RadioGroupBasic {}
