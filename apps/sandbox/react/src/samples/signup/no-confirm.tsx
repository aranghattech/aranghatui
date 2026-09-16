import { Signup } from '@aranghat/widgets-react';

export default function NoConfirm() {
  return (
    <>
      <Signup loginHref="#login" hide-confirm />
    </>
  );
}
