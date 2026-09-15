import { ForgotPassword } from '@aranghat/widgets-react';

export default function Error() {
  return (
    <>
      <ForgotPassword loginHref="#login" error="We could not find an account with that email." />
    </>
  );
}
