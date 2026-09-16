import { Login } from '@aranghat/widgets-react';

export default function Error() {
  return (
    <>
      <Login forgotHref="#forgot" signupHref="#signup" error="Wrong email or password." />
    </>
  );
}
