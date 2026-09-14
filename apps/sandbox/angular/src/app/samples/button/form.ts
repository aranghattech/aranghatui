import { Component } from '@angular/core';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-button-form',
  imports: [ArtButton],
  template: `
    <form (submit)="onSubmit($event)">
      <input name="email" type="email" required placeholder="you@example.com" />
      <art-button type="submit">Subscribe</art-button>
      <art-button type="reset" variant="ghost">Reset</art-button>
    </form>
  `,
})
export class ButtonForm {
  onSubmit(e: Event) {
    e.preventDefault();
    console.log('submitted', Object.fromEntries(new FormData(e.target as HTMLFormElement)));
  }
}
