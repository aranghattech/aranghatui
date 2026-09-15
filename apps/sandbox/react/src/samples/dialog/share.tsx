import { Dialog } from '@aranghat/modals-react';
import { Button, Field, Input, Label } from '@aranghat/base-react';

export default function Share() {
  return (
    <>
      <Dialog>
        <Button slot="trigger" variant="outline">Share</Button>
        <span slot="title">Share link</span>
        <span slot="description">Anyone who has this link will be able to view this.</span>
        <Field>
          <Label slot="label">Link</Label>
          <Input value="https://ui.shadcn.com/docs/installation" readOnly />
        </Field>
        <Button slot="footer" variant="secondary" dialog-close>Close</Button>
      </Dialog>
    </>
  );
}
