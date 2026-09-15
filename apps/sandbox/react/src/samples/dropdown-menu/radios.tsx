import { DropdownMenu, MenuItem, MenuLabel, MenuRadioGroup, MenuSeparator } from '@aranghat/navigation-react';
import { Button } from '@aranghat/base-react';

export default function Radios() {
  return (
    <>
      <DropdownMenu open>
        <Button slot="trigger" variant="outline">Panel position</Button>
        <MenuLabel>Panel position</MenuLabel>
        <MenuSeparator />
        <MenuRadioGroup value="bottom">
          <MenuItem type="radio" value="top">Top</MenuItem>
          <MenuItem type="radio" value="bottom">Bottom</MenuItem>
          <MenuItem type="radio" value="right">Right</MenuItem>
        </MenuRadioGroup>
      </DropdownMenu>
    </>
  );
}
