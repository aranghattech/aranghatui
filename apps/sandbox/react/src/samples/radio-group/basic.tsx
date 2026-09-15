import { Radio, RadioGroup } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <RadioGroup value="comfortable" aria-label="Density">
        <Radio value="default">Default</Radio>
        <Radio value="comfortable">Comfortable</Radio>
        <Radio value="compact">Compact</Radio>
      </RadioGroup>
    </>
  );
}
