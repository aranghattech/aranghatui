import { Kbd, KbdGroup } from '@aranghat/base-react';

export default function Group() {
  return (
    <>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    </>
  );
}
