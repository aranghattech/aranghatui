import { Item } from '@aranghat/base-react';

export default function Variants() {
  return (
    <>
      <Item>
        <p slot="title">Default</p>
        <p slot="description">No border, no fill.</p>
      </Item>
      <Item variant="outline">
        <p slot="title">Outline</p>
        <p slot="description">Bordered.</p>
      </Item>
      <Item variant="muted">
        <p slot="title">Muted</p>
        <p slot="description">Filled with the muted background.</p>
      </Item>
    </>
  );
}
