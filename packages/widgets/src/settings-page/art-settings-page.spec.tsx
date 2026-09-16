import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-settings-page', () => {
  it('renders the page and section headings, a named nav for the links and the content', async () => {
    const { root, waitForChanges } = await render(
      <art-settings-page section-heading="Profile" section-description="How others see you.">
        <a slot="nav" href="#profile" aria-current="page">Profile</a>
        <a slot="nav" href="#account">Account</a>
        <p>Form</p>
      </art-settings-page>,
    );
    await waitForChanges();
    const sr = root.shadowRoot!;
    expect(sr.querySelector('h2')!.textContent).toBe('Settings');
    expect(sr.querySelector('nav')!.getAttribute('aria-label')).toBe('Settings sections');
    expect((sr.querySelector('nav') as HTMLElement).hidden).toBe(false);
    expect(sr.querySelector('h3')!.textContent).toBe('Profile');
    expect(sr.querySelector('[part="section-header"] p')!.textContent).toBe('How others see you.');
  });

  it('hides the nav and the section header when they are empty', async () => {
    const { root, waitForChanges } = await render(<art-settings-page heading="Workspace" description=""><p>Form</p></art-settings-page>);
    await waitForChanges();
    const sr = root.shadowRoot!;
    expect((sr.querySelector('nav') as HTMLElement).hidden).toBe(true);
    expect((sr.querySelector('[part="section-header"]') as HTMLElement).hidden).toBe(true);
    expect(sr.querySelector('h2')!.textContent).toBe('Workspace');
  });
});
