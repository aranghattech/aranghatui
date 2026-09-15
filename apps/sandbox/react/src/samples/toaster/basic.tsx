import { Button } from '@aranghat/base-react';
import { Toaster } from '@aranghat/components-react';
import { toast } from '@aranghat/components';

export default function Basic() {
  return (
    <>
      {/* one Toaster per app, usually at the root */}
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: { label: 'Undo', onClick: () => console.log('Undo') },
          })
        }
      >
        Show toast
      </Button>
    </>
  );
}
