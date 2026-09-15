import { Slider } from '@aranghat/base-react';

export default function Disabled() {
  return (
    <>
      <Slider value="50" disabled aria-label="Volume" />
    </>
  );
}
