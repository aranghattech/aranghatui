import { useState } from 'react';
import { HelloOverlay } from '@aranghat/modals-react';

export default function Basic() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open overlay
      </button>
      <HelloOverlay name="artui" open={open} onOpenChange={(e) => setOpen(e.detail.open)} />
    </>
  );
}
