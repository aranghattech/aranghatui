import { Component } from '@angular/core';
import { ArtSlider } from '@aranghat/base-angular';

@Component({
  selector: 'sample-slider-vertical',
  imports: [ArtSlider],
  template: `
    <art-slider orientation="vertical" value="60" aria-label="Level"></art-slider>
  `,
})
export class SliderVertical {}
