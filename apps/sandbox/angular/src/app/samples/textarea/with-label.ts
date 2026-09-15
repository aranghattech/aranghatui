import { Component } from '@angular/core';
import { ArtLabel, ArtTextarea } from '@aranghat/base-angular';

@Component({
  selector: 'sample-textarea-with-label',
  imports: [ArtLabel, ArtTextarea],
  template: `
    <art-label for="message">Your message</art-label>
    <art-textarea id="message" placeholder="Type your message here."></art-textarea>
  `,
})
export class TextareaWithLabel {}
