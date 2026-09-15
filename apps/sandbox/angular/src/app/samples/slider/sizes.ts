import { Component } from '@angular/core';
import { ArtSlider } from '@aranghat/base-angular';

@Component({
  selector: 'sample-slider-sizes',
  imports: [ArtSlider],
  template: `
    <art-slider size="sm" value="30" aria-label="Small"></art-slider>
    <art-slider value="50" aria-label="Medium"></art-slider>
    <art-slider size="lg" value="70" aria-label="Large"></art-slider>
  `,
})
export class SliderSizes {}
