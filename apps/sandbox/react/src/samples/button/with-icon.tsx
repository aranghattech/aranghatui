import { Button, Icon } from '@aranghat/base-react';
import { mail } from '@aranghat/icons/mail';

export default function WithIcon() {
  return (
    <Button variant="outline">
      <Icon slot="start" icon={mail} />
      Login with Email
    </Button>
  );
}
