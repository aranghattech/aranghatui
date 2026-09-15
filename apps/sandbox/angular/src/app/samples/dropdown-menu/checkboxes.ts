import { Component } from '@angular/core';
import { ArtDropdownMenu, ArtDropdownMenuItem, ArtDropdownMenuLabel, ArtDropdownMenuSeparator } from '@aranghat/navigation-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-dropdown-menu-checkboxes',
  imports: [ArtButton, ArtDropdownMenu, ArtDropdownMenuItem, ArtDropdownMenuLabel, ArtDropdownMenuSeparator],
  template: `
    <art-dropdown-menu open>
      <art-button slot="trigger" variant="outline">View</art-button>
      <art-dropdown-menu-label>Appearance</art-dropdown-menu-label>
      <art-dropdown-menu-separator></art-dropdown-menu-separator>
      <art-dropdown-menu-item type="checkbox" value="status" checked>Status bar</art-dropdown-menu-item>
      <art-dropdown-menu-item type="checkbox" value="activity" disabled>Activity bar</art-dropdown-menu-item>
      <art-dropdown-menu-item type="checkbox" value="panel">Panel</art-dropdown-menu-item>
    </art-dropdown-menu>
  `,
})
export class DropdownMenuCheckboxes {}
