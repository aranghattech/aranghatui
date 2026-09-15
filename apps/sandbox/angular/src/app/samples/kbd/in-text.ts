import { Component } from '@angular/core';
import { ArtKbd, ArtKbdGroup } from '@aranghat/base-angular';

@Component({
  selector: 'sample-kbd-in-text',
  imports: [ArtKbd, ArtKbdGroup],
  template: `
    <p>Press <art-kbd-group><art-kbd>⌘</art-kbd><art-kbd>K</art-kbd></art-kbd-group> to open the command palette.</p>
  `,
})
export class KbdInText {}
