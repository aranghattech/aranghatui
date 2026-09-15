import { Component } from '@angular/core';
import { ArtCarousel, ArtCarouselItem } from '@aranghat/components-angular';
import { ArtCard } from '@aranghat/base-angular';

@Component({
  selector: 'sample-carousel-loop',
  imports: [ArtCard, ArtCarousel, ArtCarouselItem],
  template: `
    <art-carousel loop align="center" aria-label="Numbers" style="max-width: var(--art-container-xs); margin-inline: var(--art-space-12)">
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
export class CarouselLoop {}
