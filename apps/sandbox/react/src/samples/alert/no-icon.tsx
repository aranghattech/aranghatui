import { Alert } from '@aranghat/components-react';

export default function NoIcon() {
  return (
    <>
      <Alert>
        <h5 slot="title">Heads up</h5>
        <p slot="description">You can add components to your app using the CLI.</p>
      </Alert>
    </>
  );
}
