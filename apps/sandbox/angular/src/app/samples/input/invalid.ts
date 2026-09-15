import { Component } from '@angular/core';
import { ArtInput, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-invalid',
  imports: [ArtInput, ArtLabel],
  template: `
    <art-label for="email-2">Email</art-label>
    <art-input id="email-2" type="email" value="not-an-email" invalid aria-describedby="email-2-error"></art-input>
    <p id="email-2-error">Enter a valid email address.</p>
  `,
})
export class InputInvalid {}
