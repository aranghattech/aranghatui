import { Button, ButtonGroup, Icon } from '@aranghat/base-react';

export default function Split() {
  return (
    <>
      <ButtonGroup>
        <Button>Update</Button>
        <Button icon aria-label="More options">
          <Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg></Icon>
        </Button>
      </ButtonGroup>
    </>
  );
}
