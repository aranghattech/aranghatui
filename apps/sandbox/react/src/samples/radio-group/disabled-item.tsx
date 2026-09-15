import { Radio, RadioGroup } from '@aranghat/base-react';

export default function DisabledItem() {
  return (
    <>
      <RadioGroup value="default" aria-label="Density">
        <Radio value="default">Default</Radio>
        <Radio value="comfortable">Comfortable</Radio>
        <Radio value="compact" disabled>Compact</Radio>
      </RadioGroup>
    </>
  );
}
