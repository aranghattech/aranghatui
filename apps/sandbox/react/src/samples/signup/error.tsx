import { Signup } from '@aranghat/widgets-react';

export default function Error() {
  return (
    <>
      <Signup loginHref="#login" error="An account with this email already exists." />
    </>
  );
}
