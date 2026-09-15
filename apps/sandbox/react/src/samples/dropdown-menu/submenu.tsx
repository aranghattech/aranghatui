import { DropdownMenu, MenuItem, MenuSeparator, MenuSub } from '@aranghat/navigation-react';
import { Button } from '@aranghat/base-react';

export default function Submenu() {
  return (
    <>
      <DropdownMenu open>
        <Button slot="trigger" variant="outline">Open</Button>
        <MenuItem value="new">New file</MenuItem>
        <MenuSub open>
          <MenuItem slot="trigger">Share</MenuItem>
          <MenuItem value="email">Email</MenuItem>
          <MenuItem value="message">Message</MenuItem>
          <MenuSeparator />
          <MenuItem value="more">More…</MenuItem>
        </MenuSub>
        <MenuSeparator />
        <MenuItem value="delete" variant="destructive">Delete</MenuItem>
      </DropdownMenu>
    </>
  );
}
