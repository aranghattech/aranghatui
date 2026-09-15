import { Toast, Toaster } from '@aranghat/components-react';

export default function WithAction() {
  return (
    <>
      <Toaster inline>
        <Toast duration="0" actionLabel="Undo" cancelLabel="Dismiss">Message deleted<span slot="description">The message was moved to Trash.</span></Toast>
      </Toaster>
    </>
  );
}
