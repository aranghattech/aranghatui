import { Component } from '@angular/core';
import { ArtSlider } from '@aranghat/base-angular';

@Component({
  selector: 'sample-slider-step',
  imports: [ArtSlider],
  template: `
    <art-slider value="40" step="10" aria-label="Opacity"></art-slider>
  `,
})
export class SliderStep {}
