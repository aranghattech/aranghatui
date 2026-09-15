import { DropdownMenu, MenuItem } from '@aranghat/navigation-react';
import { Button } from '@aranghat/base-react';

export default function Links() {
  return (
    <>
      <DropdownMenu>
        <Button slot="trigger" variant="outline">Go to</Button>
        <MenuItem href="#dashboard">Dashboard</MenuItem>
        <MenuItem href="#reports">Reports</MenuItem>
        <MenuItem href="https://example.com" target="_blank">Docs ↗</MenuItem>
      </DropdownMenu>
    </>
  );
}
