import { Component } from '@angular/core';
import { ArtCarousel, ArtCarouselItem } from '@aranghat/components-angular';
import { ArtCard } from '@aranghat/base-angular';

@Component({
  selector: 'sample-carousel-no-controls',
  imports: [ArtCard, ArtCarousel, ArtCarouselItem],
  template: `
    <art-carousel controls="false" drag-free aria-label="Numbers" style="max-width: var(--art-container-sm); --art-carousel-basis: 50%">
      <art-carousel-item>
        <art-card><p class="slide">1</p></art-card>
      </art-carousel-item>
      <art-carousel-item>
        <art-card><p class="slide">2</p></art-card>
      </art-carousel-item>
      <art-carousel-item>
        <art-card><p class="slide">3</p></art-card>
      </art-carousel-item>
      <art-carousel-item>
        <art-card><p class="slide">4</p></art-card>
      </art-carousel-item>
      <art-carousel-item>
        <art-card><p class="slide">5</p></art-card>
      </art-carousel-item>
      <art-carousel-item>
        <art-card><p class="slide">6</p></art-card>
      </art-carousel-item>
    </art-carousel>
  `,
})
export class CarouselNoControls {}
