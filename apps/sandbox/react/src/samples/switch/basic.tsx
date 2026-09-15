import { Label, Switch } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <Switch id="airplane" />
      <Label htmlFor="airplane">Airplane Mode</Label>
    </>
  );
}
