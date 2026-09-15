import { Switch } from '@aranghat/base-react';

export default function Sizes() {
  return (
    <>
      <Switch size="sm" checked aria-label="Small" />
      <Switch checked aria-label="Medium" />
      <Switch size="lg" checked aria-label="Large" />
    </>
  );
}
