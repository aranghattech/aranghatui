import { Component } from '@angular/core';
import { ArtButton } from '@aranghat/base-angular';
import { prompt } from '@aranghat/modals';

@Component({
  selector: 'sample-common-dialogs-prompt',
  imports: [ArtButton],
  template: `
    <art-button variant="outline" (click)="ask()">Rename</art-button>
    <p>{{ result }}</p>
  `,
})
export class CommonDialogsPrompt {
  result = '';
  // prompt() mounts the dialog itself and resolves when it closes — no element to render
  async ask() {
    const name = await prompt({ title: 'Rename project', description: 'Pick a short, memorable name.', label: 'Name', defaultValue: 'Design system', required: true });
    this.result = name === null ? 'Cancelled.' : `Renamed to ${name}.`;
  }
}
