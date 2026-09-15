import { Component } from '@angular/core';
import { ArtSkeleton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-skeleton-card',
  imports: [ArtSkeleton],
  template: `
    <art-skeleton style="height: 8rem; width: 100%"></art-skeleton>
    <art-skeleton style="height: 1rem; width: 60%"></art-skeleton>
    <art-skeleton style="height: 1rem; width: 40%"></art-skeleton>
  `,
})
export class SkeletonCard {}
