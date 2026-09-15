import { Component } from '@angular/core';
import { ArtLabel, ArtTextarea } from '@aranghat/base-angular';

@Component({
  selector: 'sample-textarea-invalid',
  imports: [ArtLabel, ArtTextarea],
  template: `
    <art-label for="bio">Bio</art-label>
    <art-textarea id="bio" value="Too short" invalid aria-describedby="bio-error"></art-textarea>
    <p id="bio-error">Bio must be at least 10 characters.</p>
  `,
})
export class TextareaInvalid {}
