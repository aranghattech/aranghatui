import { Component } from '@angular/core';
import { ArtKbd } from '@aranghat/base-angular';

@Component({
  selector: 'sample-kbd-basic',
  imports: [ArtKbd],
  template: `
    <art-kbd>⌘</art-kbd>
    <art-kbd>⇧</art-kbd>
    <art-kbd>⌥</art-kbd>
    <art-kbd>⌃</art-kbd>
  `,
})
export class KbdBasic {}
