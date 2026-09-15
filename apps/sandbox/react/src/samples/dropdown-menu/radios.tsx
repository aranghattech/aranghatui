import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuSeparator } from '@aranghat/navigation-react';
import { Button } from '@aranghat/base-react';

export default function Radios() {
  return (
    <>
      <DropdownMenu open>
        <Button slot="trigger" variant="outline">Panel position</Button>
        <DropdownMenuLabel>Panel position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value="bottom">
          <DropdownMenuItem type="radio" value="top">Top</DropdownMenuItem>
          <DropdownMenuItem type="radio" value="bottom">Bottom</DropdownMenuItem>
          <DropdownMenuItem type="radio" value="right">Right</DropdownMenuItem>
        </DropdownMenuRadioGroup>
      </DropdownMenu>
    </>
  );
}
