import { AlertDialog } from '@aranghat/modals-react';
import { Button } from '@aranghat/base-react';

export default function Destructive() {
  return (
    <>
      <AlertDialog>
        <Button slot="trigger" variant="outline">Show dialog</Button>
        <svg slot="media" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
        <span slot="title">Are you absolutely sure?</span>
        <span slot="description">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</span>
        <Button slot="cancel" variant="outline">Cancel</Button>
        <Button slot="action" variant="destructive">Delete</Button>
      </AlertDialog>
    </>
  );
}
