import { Component } from '@angular/core';
import { ArtTextarea } from '@aranghat/base-angular';

@Component({
  selector: 'sample-textarea-disabled',
  imports: [ArtTextarea],
  template: `
    <art-textarea placeholder="Type your message here." aria-label="Message" disabled></art-textarea>
  `,
})
export class TextareaDisabled {}
