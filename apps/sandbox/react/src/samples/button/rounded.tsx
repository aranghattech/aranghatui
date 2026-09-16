import { Button, Icon } from '@aranghat/base-react';
import { plus } from '@aranghat/icons/plus';

export default function Rounded() {
  return (
    <>
      <Button rounded>Button</Button>
      <Button rounded variant="outline">Outline</Button>
      <Button rounded icon aria-label="Add">
        <Icon icon={plus} />
      </Button>
    </>
  );
}
