import { Sheet } from '@aranghat/modals-react';
import { Button, Field, Input, Label } from '@aranghat/base-react';

export default function Sides() {
  return (
    <>
      <Sheet side="top">
        <Button slot="trigger" variant="outline">Top</Button>
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
      <Sheet side="right">
        <Button slot="trigger" variant="outline">Right</Button>
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
      <Sheet side="bottom">
        <Button slot="trigger" variant="outline">Bottom</Button>
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
      <Sheet side="left">
        <Button slot="trigger" variant="outline">Left</Button>
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
