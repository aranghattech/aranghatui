import { Component } from '@angular/core';
import { ArtScrollArea } from '@aranghat/components-angular';
import { ArtSkeleton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-scroll-area-horizontal',
  imports: [ArtScrollArea, ArtSkeleton],
  template: `
    <art-scroll-area orientation="horizontal" style="width: 24rem; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-md); padding: var(--art-space-4); display: flex; gap: var(--art-space-4)">
      <art-skeleton style="flex: none; width: 10rem; height: 6rem"></art-skeleton>
      <art-skeleton style="flex: none; width: 10rem; height: 6rem"></art-skeleton>
      <art-skeleton style="flex: none; width: 10rem; height: 6rem"></art-skeleton>
      <art-skeleton style="flex: none; width: 10rem; height: 6rem"></art-skeleton>
      <art-skeleton style="flex: none; width: 10rem; height: 6rem"></art-skeleton>
      <art-skeleton style="flex: none; width: 10rem; height: 6rem"></art-skeleton>
    </art-scroll-area>
  `,
})
export class ScrollAreaHorizontal {}
