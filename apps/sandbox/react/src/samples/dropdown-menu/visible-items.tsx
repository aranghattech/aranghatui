import { DropdownMenu, MenuItem } from '@aranghat/navigation-react';
import { Button } from '@aranghat/base-react';

export default function VisibleItems() {
  return (
    <DropdownMenu open visibleItems="5">
      <Button slot="trigger" variant="outline">Open</Button>
      <MenuItem value="profile">Profile</MenuItem>
      <MenuItem value="billing">Billing</MenuItem>
      <MenuItem value="settings">Settings</MenuItem>
      <MenuItem value="shortcuts">Keyboard shortcuts</MenuItem>
      <MenuItem value="team">Team</MenuItem>
      <MenuItem value="invite">Invite users</MenuItem>
      <MenuItem value="new-team">New team</MenuItem>
      <MenuItem value="github">GitHub</MenuItem>
      <MenuItem value="support">Support</MenuItem>
      <MenuItem value="logout">Log out</MenuItem>
    </DropdownMenu>
  );
}
