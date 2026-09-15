import { Collapsible } from '@aranghat/components-react';
import { Icon, Item } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <Collapsible>
        <Item slot="trigger" variant="outline">
          <p slot="title">@peduarte starred 3 repositories</p>
          <Icon slot="actions"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg></Icon>
        </Item>
        <Item variant="outline">
          <p slot="title">@radix-ui/primitives</p>
        </Item>
        <Item variant="outline">
          <p slot="title">@radix-ui/colors</p>
        </Item>
      </Collapsible>
    </>
  );
}
