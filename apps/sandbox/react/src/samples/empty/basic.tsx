import { Button, Empty, Icon } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <Empty>
        <Icon slot="media" size="lg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg></Icon>
        <h3 slot="title">No projects yet</h3>
        <p slot="description">You haven't created any projects yet. Get started by creating your first project.</p>
        <Button>Create project</Button>
      </Empty>
    </>
  );
}
