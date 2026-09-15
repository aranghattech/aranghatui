import { Input } from '@aranghat/base-react';

export default function WithText() {
  return (
    <>
      <Input placeholder="example" aria-label="Domain">
        <span slot="start">https://</span>
        <span slot="end">.com</span>
      </Input>
    </>
  );
}
