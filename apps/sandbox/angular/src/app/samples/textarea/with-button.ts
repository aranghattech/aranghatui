import { Component } from '@angular/core';
import { ArtButton, ArtTextarea } from '@aranghat/base-angular';

@Component({
  selector: 'sample-textarea-with-button',
  imports: [ArtButton, ArtTextarea],
  template: `
    <art-textarea placeholder="Type your message here." aria-label="Message"></art-textarea>
    <art-button>Send message</art-button>
  `,
})
export class TextareaWithButton {}
