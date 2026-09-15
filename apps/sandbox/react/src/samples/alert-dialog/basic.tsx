import { AlertDialog } from '@aranghat/modals-react';
import { Button } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <AlertDialog>
        <Button slot="trigger" variant="outline">Show dialog</Button>
        <span slot="title">Are you absolutely sure?</span>
        <span slot="description">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</span>
        <Button slot="cancel" variant="outline">Cancel</Button>
        <Button slot="action">Continue</Button>
      </AlertDialog>
    </>
  );
}
