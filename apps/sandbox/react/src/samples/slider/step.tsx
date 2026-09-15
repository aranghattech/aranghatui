import { Slider } from '@aranghat/base-react';

export default function Step() {
  return (
    <>
      <Slider value="40" step="10" aria-label="Opacity" />
    </>
  );
}
