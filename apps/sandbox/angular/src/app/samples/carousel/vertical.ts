import { Component } from '@angular/core';
import { ArtCarousel, ArtCarouselItem } from '@aranghat/components-angular';
import { ArtCard } from '@aranghat/base-angular';

@Component({
  selector: 'sample-carousel-vertical',
  imports: [ArtCard, ArtCarousel, ArtCarouselItem],
  template: `
    <art-carousel orientation="vertical" aria-label="Numbers" style="max-width: var(--art-container-xs); margin-block: var(--art-space-12)">
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
    </art-carousel>
  `,
})
export class CarouselVertical {}
