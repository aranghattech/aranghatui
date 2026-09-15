import { DropdownMenu, DropdownMenuItem } from '@aranghat/navigation-react';
import { Button } from '@aranghat/base-react';

export default function Links() {
  return (
    <>
      <DropdownMenu>
        <Button slot="trigger" variant="outline">Go to</Button>
        <DropdownMenuItem href="#dashboard">Dashboard</DropdownMenuItem>
        <DropdownMenuItem href="#reports">Reports</DropdownMenuItem>
        <DropdownMenuItem href="https://example.com" target="_blank">Docs ↗</DropdownMenuItem>
      </DropdownMenu>
    </>
  );
}
