import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@aranghat/navigation-react';
import { Button } from '@aranghat/base-react';

export default function Checkboxes() {
  return (
    <>
      <DropdownMenu open>
        <Button slot="trigger" variant="outline">View</Button>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem type="checkbox" value="status" checked>Status bar</DropdownMenuItem>
        <DropdownMenuItem type="checkbox" value="activity" disabled>Activity bar</DropdownMenuItem>
        <DropdownMenuItem type="checkbox" value="panel">Panel</DropdownMenuItem>
      </DropdownMenu>
    </>
  );
}
