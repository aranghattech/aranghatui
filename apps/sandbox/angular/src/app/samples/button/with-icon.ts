import { Component } from '@angular/core';
import { ArtButton, ArtIcon } from '@aranghat/base-angular';
import { mail } from '@aranghat/icons/mail';

@Component({
  selector: 'sample-button-with-icon',
  imports: [ArtButton, ArtIcon],
  template: `
    <art-button variant="outline">
      <art-icon slot="start" [icon]="mail"></art-icon>
      Login with Email
    </art-button>
  `,
})
export class ButtonWithIcon {
  mail = mail;
}
