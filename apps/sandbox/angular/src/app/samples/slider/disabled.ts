import { Component } from '@angular/core';
import { ArtSlider } from '@aranghat/base-angular';

@Component({
  selector: 'sample-slider-disabled',
  imports: [ArtSlider],
  template: `
    <art-slider value="50" disabled aria-label="Volume"></art-slider>
  `,
})
export class SliderDisabled {}
