import { Toast, Toaster } from '@aranghat/components-react';

export default function RichColors() {
  return (
    <>
      <Toaster inline rich-colors>
        <Toast variant="success" duration="0">Success</Toast>
        <Toast variant="error" duration="0">Error</Toast>
        <Toast variant="warning" duration="0">Warning</Toast>
        <Toast variant="info" duration="0">Info</Toast>
      </Toaster>
    </>
  );
}
