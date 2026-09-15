import { Radio, RadioGroup } from '@aranghat/base-react';

export default function Sizes() {
  return (
    <>
      <RadioGroup orientation="horizontal" size="sm" value="a" aria-label="Small">
        <Radio value="a">Small</Radio>
      </RadioGroup>
      <RadioGroup orientation="horizontal" value="b" aria-label="Medium">
        <Radio value="b">Medium</Radio>
      </RadioGroup>
      <RadioGroup orientation="horizontal" size="lg" value="c" aria-label="Large">
        <Radio value="c">Large</Radio>
      </RadioGroup>
    </>
  );
}
