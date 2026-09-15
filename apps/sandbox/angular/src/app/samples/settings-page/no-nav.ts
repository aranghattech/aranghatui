import { Component } from '@angular/core';
import { ArtSettingsPage } from '@aranghat/widgets-angular';
import { ArtButton, ArtField, ArtInput, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-settings-page-no-nav',
  imports: [ArtButton, ArtField, ArtInput, ArtLabel, ArtSettingsPage],
  template: `
    <art-settings-page heading="Workspace" description="Settings for this workspace." section-heading="General">
      <art-button slot="actions" variant="outline">Invite members</art-button>
      <art-field>
        <art-label slot="label">Workspace name</art-label>
        <art-input value="Acme"></art-input>
      </art-field>
      <div>
        <art-button>Save</art-button>
      </div>
    </art-settings-page>
  `,
})
export class SettingsPageNoNav {}
