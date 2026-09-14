import { Component } from '@angular/core';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-button-variants',
  imports: [ArtButton],
  template: `
    <art-button>Default</art-button>
    <art-button variant="secondary">Secondary</art-button>
    <art-button variant="outline">Outline</art-button>
    <art-button variant="ghost">Ghost</art-button>
    <art-button variant="destructive">Destructive</art-button>
    <art-button variant="link">Link</art-button>
  `,
})
export class ButtonVariants {}
