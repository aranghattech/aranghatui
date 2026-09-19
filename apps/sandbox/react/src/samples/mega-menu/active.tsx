import { MegaMenu, MegaMenuGroup, MegaMenuItem, MegaMenuLink } from '@aranghat/extended-react';

export default function Active() {
  return (
    <>
      <MegaMenu>
        <MegaMenuItem label="Products">
          <MegaMenuGroup label="Build">
            <MegaMenuLink href="#editor" active>Editor<span slot="description">Write and review together</span></MegaMenuLink>
            <MegaMenuLink href="#deploy">Deploy<span slot="description">Ship every commit</span></MegaMenuLink>
            <MegaMenuLink href="#functions">Functions<span slot="description">Run code at the edge</span></MegaMenuLink>
          </MegaMenuGroup>
        </MegaMenuItem>
        <MegaMenuItem label="Pricing" href="#pricing" active />
        <MegaMenuItem label="Docs" href="#docs" />
      </MegaMenu>
    </>
  );
}
