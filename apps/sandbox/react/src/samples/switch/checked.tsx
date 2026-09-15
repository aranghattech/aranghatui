import { Label, Switch } from '@aranghat/base-react';

export default function Checked() {
  return (
    <>
      <Switch id="wifi" checked />
      <Label htmlFor="wifi">Wi-Fi</Label>
    </>
  );
}
