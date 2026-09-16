import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-login', () => {
  it('renders the card, fields, links and emits submit with the values', async () => {
    const { root, waitForChanges } = await render(<art-login forgot-href="#f" signup-href="#s" error="Nope"></art-login>);
    await waitForChanges();
    const sr = root.shadowRoot!;
    const form = sr.querySelector('form')!;
    expect(sr.querySelector('art-card [slot="title"]')!.textContent).toBe('Login to your account');
    expect(sr.querySelectorAll('art-input').length).toBe(2);
    expect(sr.querySelector('a[href="#f"]')!.textContent).toBe('Forgot your password?');
    expect(sr.querySelector('a[href="#s"]')!.textContent).toBe('Sign up');
    expect(sr.querySelector('[part="error"]')!.getAttribute('role')).toBe('alert');
    const [email, password] = Array.from(sr.querySelectorAll('art-input')) as (HTMLElement & { value: string })[];
    email.value = 'ada@example.com';
    password.value = 'secret';
    let detail: unknown;
    root.addEventListener('submit', (e) => (detail = (e as CustomEvent).detail));
    form.requestSubmit();
    expect(detail).toEqual({ email: 'ada@example.com', password: 'secret' });
  });

  it('email-only drops the password; loading ignores submits', async () => {
    const { root, waitForChanges } = await render(<art-login email-only loading></art-login>);
    await waitForChanges();
    const sr = root.shadowRoot!;
    const form = sr.querySelector('form')!;
    expect(sr.querySelectorAll('art-input').length).toBe(1);
    let fired = 0;
    root.addEventListener('submit', () => (fired += 1));
    form.requestSubmit();
    expect(fired).toBe(0);
    expect(sr.querySelector('art-button')!.hasAttribute('loading')).toBe(true);
  });
});
