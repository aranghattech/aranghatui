import { Component } from '@angular/core';
import { ArtButton, ArtSeparator } from '@aranghat/base-angular';

@Component({
  selector: 'sample-separator-vertical',
  imports: [ArtButton, ArtSeparator],
  template: `
    <art-button variant="ghost">Blog</art-button>
    <art-separator orientation="vertical"></art-separator>
    <art-button variant="ghost">Docs</art-button>
    <art-separator orientation="vertical"></art-separator>
    <art-button variant="ghost">Source</art-button>
  `,
})
export class SeparatorVertical {}
