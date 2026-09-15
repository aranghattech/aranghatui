import { Toast, Toaster } from '@aranghat/components-react';

export default function CloseButton() {
  return (
    <>
      <Toaster inline close-button>
        <Toast duration="0">Copied to clipboard</Toast>
      </Toaster>
    </>
  );
}
