import { Button } from '@aranghat/base-react';
import { Toaster } from '@aranghat/components-react';
import { toast } from '@aranghat/components';

const save = () => new Promise<{ name: string }>((resolve) => setTimeout(() => resolve({ name: 'Report' }), 2000));

export default function PromiseToast() {
  return (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(save(), {
            loading: 'Saving…',
            success: (data) => `${data.name} has been saved`,
            error: 'Something went wrong',
          })
        }
      >
        Save
      </Button>
    </>
  );
}
