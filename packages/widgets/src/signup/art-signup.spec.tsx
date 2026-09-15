import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-signup', () => {
  it('refuses mismatched passwords with an inline error and emits submit when they match', async () => {
    const { root, waitForChanges } = await render(<art-signup login-href="#l"></art-signup>);
    await waitForChanges();
    const sr = root.shadowRoot!;
    const [name, email, password, confirm] = Array.from(sr.querySelectorAll('art-input')) as (HTMLElement & { value: string })[];
    expect(sr.querySelectorAll('art-input').length).toBe(4);
    name.value = 'Ada';
    email.value = 'ada@example.com';
    password.value = 'secret';
    confirm.value = 'other';
    let detail: unknown;
    root.addEventListener('submit', (e) => (detail = (e as CustomEvent).detail));
    const form = sr.querySelector('form')!;
    form.requestSubmit();
    await waitForChanges();
    expect(detail).toBeUndefined();
    expect(sr.querySelector('[slot="error"]')!.textContent).toBe('Passwords do not match.');
    confirm.value = 'secret';
    form.requestSubmit();
    await waitForChanges();
    expect(detail).toEqual({ name: 'Ada', email: 'ada@example.com', password: 'secret' });
    expect(sr.querySelector('[slot="error"]')).toBeNull();
  });

  it('hide-confirm drops the fourth field', async () => {
    const { root, waitForChanges } = await render(<art-signup hide-confirm></art-signup>);
    await waitForChanges();
    expect(root.shadowRoot!.querySelectorAll('art-input').length).toBe(3);
  });
});
