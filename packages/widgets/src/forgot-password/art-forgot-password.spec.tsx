import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-forgot-password', () => {
  it('emits submit with the email and swaps to the confirmation when sent', async () => {
    const { root, waitForChanges } = await render(<art-forgot-password login-href="#l"></art-forgot-password>);
    await waitForChanges();
    const sr = root.shadowRoot!;
    const form = sr.querySelector('form')!;
    const email = sr.querySelector('art-input') as HTMLElement & { value: string };
    email.value = 'ada@example.com';
    let detail: unknown;
    root.addEventListener('submit', (e) => (detail = (e as CustomEvent).detail));
    form.requestSubmit();
    expect(detail).toEqual({ email: 'ada@example.com' });
    (root as HTMLElement & { sent: boolean }).sent = true;
    await waitForChanges();
    expect(sr.querySelector('form')).toBeNull();
    expect(sr.querySelector('[slot="title"]')!.textContent).toBe('Check your inbox');
    expect((sr.querySelector('[part="sent"] art-button') as HTMLElement & { href?: string }).href).toBe('#l');
  });
});
