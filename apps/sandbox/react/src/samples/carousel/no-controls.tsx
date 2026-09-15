import { Carousel, CarouselItem } from '@aranghat/components-react';
import { Card } from '@aranghat/base-react';

export default function NoControls() {
  return (
    <>
      <Carousel controls="false" drag-free aria-label="Numbers" style={{ maxWidth: 'var(--art-container-sm)', '--art-carousel-basis': '50%' }}>
        <CarouselItem>
          <Card><p className="slide">1</p></Card>
        </CarouselItem>
        <CarouselItem>
          <Card><p className="slide">2</p></Card>
        </CarouselItem>
        <CarouselItem>
          <Card><p className="slide">3</p></Card>
        </CarouselItem>
        <CarouselItem>
          <Card><p className="slide">4</p></Card>
        </CarouselItem>
        <CarouselItem>
          <Card><p className="slide">5</p></Card>
        </CarouselItem>
        <CarouselItem>
          <Card><p className="slide">6</p></Card>
        </CarouselItem>
      </Carousel>
    </>
  );
}
