import { Component } from '@angular/core';
import { ArtSlider } from '@aranghat/base-angular';

@Component({
  selector: 'sample-slider-basic',
  imports: [ArtSlider],
  template: `
    <art-slider value="33" aria-label="Volume"></art-slider>
  `,
})
export class SliderBasic {}
