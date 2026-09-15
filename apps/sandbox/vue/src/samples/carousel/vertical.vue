<script setup lang="ts">
import { Carousel, CarouselItem } from '@aranghat/components-vue';
import { Card } from '@aranghat/base-vue';
</script>

<template>
  <Carousel orientation="vertical" aria-label="Numbers" style="max-width: var(--art-container-xs); margin-block: var(--art-space-12)">
    <CarouselItem>
      <Card><p class="slide">1</p></Card>
    </CarouselItem>
    <CarouselItem>
      <Card><p class="slide">2</p></Card>
    </CarouselItem>
    <CarouselItem>
      <Card><p class="slide">3</p></Card>
    </CarouselItem>
    <CarouselItem>
      <Card><p class="slide">4</p></Card>
    </CarouselItem>
    <CarouselItem>
      <Card><p class="slide">5</p></Card>
    </CarouselItem>
  </Carousel>
</template>
