import { Component } from '@angular/core';
import { ArtSlider } from '@aranghat/base-angular';

@Component({
  selector: 'sample-slider-range',
  imports: [ArtSlider],
  template: `
    <art-slider value="25,75" aria-label="Price"></art-slider>
  `,
})
export class SliderRange {}
