import { Component } from '@angular/core';
import { ArtAvatar } from '@aranghat/components-angular';

@Component({
  selector: 'sample-avatar-fallback',
  imports: [ArtAvatar],
  template: `
    <art-avatar alt="">CN</art-avatar>
  `,
})
export class AvatarFallback {}
