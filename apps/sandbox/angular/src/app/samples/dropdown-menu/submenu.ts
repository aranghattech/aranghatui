import { Component } from '@angular/core';
import { ArtDropdownMenu, ArtMenuItem, ArtMenuSeparator, ArtMenuSub } from '@aranghat/navigation-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-dropdown-menu-submenu',
  imports: [ArtButton, ArtDropdownMenu, ArtMenuItem, ArtMenuSeparator, ArtMenuSub],
  template: `
    <art-dropdown-menu open>
      <art-button slot="trigger" variant="outline">Open</art-button>
      <art-menu-item value="new">New file</art-menu-item>
      <art-menu-sub open>
        <art-menu-item slot="trigger">Share</art-menu-item>
        <art-menu-item value="email">Email</art-menu-item>
        <art-menu-item value="message">Message</art-menu-item>
        <art-menu-separator></art-menu-separator>
        <art-menu-item value="more">More…</art-menu-item>
      </art-menu-sub>
      <art-menu-separator></art-menu-separator>
      <art-menu-item value="delete" variant="destructive">Delete</art-menu-item>
    </art-dropdown-menu>
  `,
})
export class DropdownMenuSubmenu {}
