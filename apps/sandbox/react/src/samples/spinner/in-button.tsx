import { Button, Spinner } from '@aranghat/base-react';

export default function InButton() {
  return (
    <>
      <Button disabled>
        <Spinner slot="start" />
        Please wait
      </Button>
    </>
  );
}
