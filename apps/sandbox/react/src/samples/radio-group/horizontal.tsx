import { Radio, RadioGroup } from '@aranghat/base-react';

export default function Horizontal() {
  return (
    <>
      <RadioGroup orientation="horizontal" value="default" aria-label="Density">
        <Radio value="default">Default</Radio>
        <Radio value="comfortable">Comfortable</Radio>
        <Radio value="compact">Compact</Radio>
      </RadioGroup>
    </>
  );
}
