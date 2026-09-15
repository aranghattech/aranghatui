import { Component } from '@angular/core';
import { ArtBadge } from '@aranghat/base-angular';

@Component({
  selector: 'sample-badge-variants',
  imports: [ArtBadge],
  template: `
    <art-badge>Default</art-badge>
    <art-badge variant="secondary">Secondary</art-badge>
    <art-badge variant="outline">Outline</art-badge>
    <art-badge variant="destructive">Destructive</art-badge>
  `,
})
export class BadgeVariants {}
