import { Login } from '@aranghat/widgets-react';

export default function EmailOnly() {
  return (
    <>
      <Login forgotHref="#forgot" signupHref="#signup" email-only submitLabel="Send magic link" />
    </>
  );
}
