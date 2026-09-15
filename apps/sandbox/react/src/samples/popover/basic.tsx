import { Popover } from '@aranghat/components-react';
import { Button, Field, Input, Label } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <Popover>
        <Button slot="trigger" variant="outline">Open popover</Button>
        <h4>Dimensions</h4>
        <p className="muted">Set the dimensions for the layer.</p>
        <Field>
          <Label slot="label">Width</Label>
          <Input value="100%" size="sm" />
        </Field>
        <Field>
          <Label slot="label">Height</Label>
          <Input value="25px" size="sm" />
        </Field>
      </Popover>
    </>
  );
}
