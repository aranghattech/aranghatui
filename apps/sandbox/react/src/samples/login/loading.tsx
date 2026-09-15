import { Login } from '@aranghat/widgets-react';

export default function Loading() {
  return (
    <>
      <Login forgotHref="#forgot" signupHref="#signup" loading />
    </>
  );
}
