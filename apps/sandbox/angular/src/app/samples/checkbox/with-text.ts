import { Component } from '@angular/core';
import { ArtCheckbox, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-checkbox-with-text',
  imports: [ArtCheckbox, ArtLabel],
  template: `
    <art-checkbox id="terms-3" aria-describedby="terms-3-help"></art-checkbox>
    <art-label for="terms-3">Accept terms and conditions</art-label>
    <p id="terms-3-help">You agree to our Terms of Service and Privacy Policy.</p>
  `,
})
export class CheckboxWithText {}
