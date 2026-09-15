import { ButtonGroup, ButtonGroupText, Input } from '@aranghat/base-react';

export default function WithText() {
  return (
    <>
      <ButtonGroup>
        <ButtonGroupText>$</ButtonGroupText>
        <Input placeholder="0.00" aria-label="Amount" />
        <ButtonGroupText>USD</ButtonGroupText>
      </ButtonGroup>
    </>
  );
}
