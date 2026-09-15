import { Component } from '@angular/core';
import { ArtSkeleton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-skeleton-basic',
  imports: [ArtSkeleton],
  template: `
    <art-skeleton style="height: 1rem; width: 15rem"></art-skeleton>
    <art-skeleton style="height: 1rem; width: 12rem"></art-skeleton>
  `,
})
export class SkeletonBasic {}
