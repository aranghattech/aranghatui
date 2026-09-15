import { Carousel, CarouselItem } from '@aranghat/components-react';
import { Card } from '@aranghat/base-react';

export default function Vertical() {
  return (
    <>
      <Carousel orientation="vertical" aria-label="Numbers" style={{ maxWidth: 'var(--art-container-xs)', marginBlock: 'var(--art-space-12)' }}>
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
      </Carousel>
    </>
  );
}
