import { Component } from '@angular/core';
import { ArtDropdownMenu, ArtDropdownMenuItem } from '@aranghat/navigation-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-dropdown-menu-links',
  imports: [ArtButton, ArtDropdownMenu, ArtDropdownMenuItem],
  template: `
    <art-dropdown-menu>
      <art-button slot="trigger" variant="outline">Go to</art-button>
      <art-dropdown-menu-item href="#dashboard">Dashboard</art-dropdown-menu-item>
      <art-dropdown-menu-item href="#reports">Reports</art-dropdown-menu-item>
      <art-dropdown-menu-item href="https://example.com" target="_blank">Docs ↗</art-dropdown-menu-item>
    </art-dropdown-menu>
  `,
})
export class DropdownMenuLinks {}
