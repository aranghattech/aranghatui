import { Component } from '@angular/core';
import { ArtTextarea } from '@aranghat/base-angular';

@Component({
  selector: 'sample-textarea-basic',
  imports: [ArtTextarea],
  template: `
    <art-textarea placeholder="Type your message here." aria-label="Message"></art-textarea>
  `,
})
export class TextareaBasic {}
