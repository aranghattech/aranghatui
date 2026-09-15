import { Button, Icon, Item } from '@aranghat/base-react';

export default function Sizes() {
  return (
    <>
      <Item variant="outline" size="sm">
        <Icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="m9 12 2 2 4-4"/></svg></Icon>
        <p slot="title">Small item</p>
        <Button slot="actions" variant="ghost" size="sm">Open</Button>
      </Item>
      <Item variant="outline">
        <Icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="m9 12 2 2 4-4"/></svg></Icon>
        <p slot="title">Medium item</p>
        <Button slot="actions" variant="ghost" size="sm">Open</Button>
      </Item>
    </>
  );
}
