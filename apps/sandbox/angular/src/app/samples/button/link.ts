import { Component } from '@angular/core';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-button-link',
  imports: [ArtButton],
  template: `<art-button href="https://ui.shadcn.com/docs/components/button" target="_blank" rel="noreferrer" variant="outline">Open shadcn</art-button>`,
})
export class ButtonLink {}
