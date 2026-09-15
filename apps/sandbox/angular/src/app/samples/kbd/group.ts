import { Component } from '@angular/core';
import { ArtKbd, ArtKbdGroup } from '@aranghat/base-angular';

@Component({
  selector: 'sample-kbd-group',
  imports: [ArtKbd, ArtKbdGroup],
  template: `
    <art-kbd-group>
      <art-kbd>Ctrl</art-kbd>
      <span>+</span>
      <art-kbd>B</art-kbd>
    </art-kbd-group>
  `,
})
export class KbdGroup {}
