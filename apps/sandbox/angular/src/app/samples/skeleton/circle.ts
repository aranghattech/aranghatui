import { Component } from '@angular/core';
import { ArtSkeleton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-skeleton-circle',
  imports: [ArtSkeleton],
  template: `
    <art-skeleton style="height: 3rem; width: 3rem; border-radius: 9999px"></art-skeleton>
  `,
})
export class SkeletonCircle {}
