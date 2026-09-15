import { Typography } from '@aranghat/base-react';

export default function TextStyles() {
  return (
    <>
      <Typography>
        <p className="lead">A modal dialog that interrupts the user with important content and expects a response.</p>
        <p className="large">Are you absolutely sure?</p>
        <p className="small">Email address</p>
        <p className="muted">Enter your email address.</p>
      </Typography>
    </>
  );
}
