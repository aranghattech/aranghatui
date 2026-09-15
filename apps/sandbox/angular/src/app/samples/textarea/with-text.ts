import { Component } from '@angular/core';
import { ArtLabel, ArtTextarea } from '@aranghat/base-angular';

@Component({
  selector: 'sample-textarea-with-text',
  imports: [ArtLabel, ArtTextarea],
  template: `
    <art-label for="message-2">Your message</art-label>
    <art-textarea id="message-2" placeholder="Type your message here." aria-describedby="message-2-help"></art-textarea>
    <p id="message-2-help">Your message will be copied to the support team.</p>
  `,
})
export class TextareaWithText {}
