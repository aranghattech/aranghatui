import { Slider } from '@aranghat/base-react';

export default function Sizes() {
  return (
    <>
      <Slider size="sm" value="30" aria-label="Small" />
      <Slider value="50" aria-label="Medium" />
      <Slider size="lg" value="70" aria-label="Large" />
    </>
  );
}
