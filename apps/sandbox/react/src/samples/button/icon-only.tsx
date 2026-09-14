import { Button, Icon } from '@aranghat/base-react';
import { plus } from '@aranghat/icons/plus';

export default function IconOnly() {
  return (
    <Button variant="outline" icon aria-label="Add">
      <Icon icon={plus} />
    </Button>
  );
}
