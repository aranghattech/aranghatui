import { NavigationMenu, NavigationMenuItem } from '@aranghat/navigation-react';

export default function Active() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuItem label="Home" href="#" active />
        <NavigationMenuItem label="Pricing" href="#pricing" />
        <NavigationMenuItem label="Blog" href="#blog" />
      </NavigationMenu>
    </>
  );
}
