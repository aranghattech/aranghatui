import { Label, Switch } from '@aranghat/base-react';

export default function Disabled() {
  return (
    <>
      <Switch id="off" disabled />
      <Label htmlFor="off" disabled>Unavailable</Label>
    </>
  );
}
