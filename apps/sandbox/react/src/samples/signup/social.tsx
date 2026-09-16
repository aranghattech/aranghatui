import { Signup } from '@aranghat/widgets-react';
import { Button } from '@aranghat/base-react';

export default function Social() {
  return (
    <>
      <Signup loginHref="#login">
        <Button slot="social" variant="outline">Sign up with Google</Button>
      </Signup>
    </>
  );
}
