import { Sheet } from '@aranghat/modals-react';
import { Button, Field, Input, Label } from '@aranghat/base-react';

export default function HideClose() {
  return (
    <>
      <Sheet side="right" hide-close>
        <Button slot="trigger" variant="outline">Filters</Button>
        <span slot="title">Edit profile</span>
        <span slot="description">Make changes to your profile here. Click save when you're done.</span>
        <Field>
          <Label slot="label">Name</Label>
          <Input value="Pedro Duarte" />
        </Field>
        <Field>
          <Label slot="label">Username</Label>
          <Input value="@peduarte" />
        </Field>
        <Button slot="footer">Save changes</Button>
        <Button slot="footer" variant="outline" dialog-close>Close</Button>
      </Sheet>
    </>
  );
}
