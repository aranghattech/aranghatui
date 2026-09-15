import { Component } from '@angular/core';
import { ArtRadio, ArtRadioGroup } from '@aranghat/base-angular';

@Component({
  selector: 'sample-radio-group-sizes',
  imports: [ArtRadio, ArtRadioGroup],
  template: `
    <art-radio-group orientation="horizontal" size="sm" value="a" aria-label="Small">
      <art-radio value="a">Small</art-radio>
    </art-radio-group>
    <art-radio-group orientation="horizontal" value="b" aria-label="Medium">
      <art-radio value="b">Medium</art-radio>
    </art-radio-group>
    <art-radio-group orientation="horizontal" size="lg" value="c" aria-label="Large">
      <art-radio value="c">Large</art-radio>
    </art-radio-group>
  `,
})
export class RadioGroupSizes {}
