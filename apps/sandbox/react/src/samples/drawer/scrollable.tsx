import { Drawer } from '@aranghat/modals-react';
import { Button } from '@aranghat/base-react';

export default function Scrollable() {
  return (
    <>
      <Drawer>
        <Button slot="trigger" variant="outline">Read terms</Button>
        <span slot="title">Terms of service</span>
        <span slot="description">Scroll inside; swipe from the handle to dismiss.</span>
        <p style={{ margin: '0', fontSize: 'var(--art-font-size-sm)' }}>Section 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <p style={{ margin: '0', fontSize: 'var(--art-font-size-sm)' }}>Section 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <p style={{ margin: '0', fontSize: 'var(--art-font-size-sm)' }}>Section 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <p style={{ margin: '0', fontSize: 'var(--art-font-size-sm)' }}>Section 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <p style={{ margin: '0', fontSize: 'var(--art-font-size-sm)' }}>Section 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <p style={{ margin: '0', fontSize: 'var(--art-font-size-sm)' }}>Section 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <p style={{ margin: '0', fontSize: 'var(--art-font-size-sm)' }}>Section 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <p style={{ margin: '0', fontSize: 'var(--art-font-size-sm)' }}>Section 8. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <p style={{ margin: '0', fontSize: 'var(--art-font-size-sm)' }}>Section 9. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <p style={{ margin: '0', fontSize: 'var(--art-font-size-sm)' }}>Section 10. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <Button slot="footer" dialog-close>Done</Button>
      </Drawer>
    </>
  );
}
