import { Component } from '@angular/core';
import { ArtDropdownMenu, ArtMenuItem, ArtMenuLabel, ArtMenuSeparator } from '@aranghat/navigation-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-dropdown-menu-checkboxes',
  imports: [ArtButton, ArtDropdownMenu, ArtMenuItem, ArtMenuLabel, ArtMenuSeparator],
  template: `
    <art-dropdown-menu open>
      <art-button slot="trigger" variant="outline">View</art-button>
      <art-menu-label>Appearance</art-menu-label>
      <art-menu-separator></art-menu-separator>
      <art-menu-item type="checkbox" value="status" checked>Status bar</art-menu-item>
      <art-menu-item type="checkbox" value="activity" disabled>Activity bar</art-menu-item>
      <art-menu-item type="checkbox" value="panel">Panel</art-menu-item>
    </art-dropdown-menu>
  `,
})
export class DropdownMenuCheckboxes {}
