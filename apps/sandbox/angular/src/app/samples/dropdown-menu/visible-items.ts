import { Component } from '@angular/core';
import { ArtDropdownMenu, ArtMenuItem } from '@aranghat/navigation-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-dropdown-menu-visible-items',
  imports: [ArtButton, ArtDropdownMenu, ArtMenuItem],
  template: `
    <art-dropdown-menu open visible-items="5">
      <art-button slot="trigger" variant="outline">Open</art-button>
      <art-menu-item value="profile">Profile</art-menu-item>
      <art-menu-item value="billing">Billing</art-menu-item>
      <art-menu-item value="settings">Settings</art-menu-item>
      <art-menu-item value="shortcuts">Keyboard shortcuts</art-menu-item>
      <art-menu-item value="team">Team</art-menu-item>
      <art-menu-item value="invite">Invite users</art-menu-item>
      <art-menu-item value="new-team">New team</art-menu-item>
      <art-menu-item value="github">GitHub</art-menu-item>
      <art-menu-item value="support">Support</art-menu-item>
      <art-menu-item value="logout">Log out</art-menu-item>
    </art-dropdown-menu>
  `,
})
export class DropdownMenuVisibleItems {}
