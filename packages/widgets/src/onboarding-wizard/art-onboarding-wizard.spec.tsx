import { describe, expect, h, it, render } from '@stencil/vitest';

const wizard = (attrs: Record<string, unknown> = {}) => (
  <art-onboarding-wizard {...attrs}>
    <art-wizard-step label="Account" description="Sign in">A</art-wizard-step>
    <art-wizard-step label="Team" optional>B</art-wizard-step>
    <art-wizard-step label="Done">C</art-wizard-step>
  </art-onboarding-wizard>
);

describe('art-onboarding-wizard', () => {
  it('builds the stepper from the steps, shows only the current one and marks states', async () => {
    const { root, waitForChanges } = await render(wizard({ step: 2 }));
    await waitForChanges();
    const sr = root.shadowRoot!;
    const items = Array.from(sr.querySelectorAll('[part="step"]'));
    expect(items.map((li) => li.getAttribute('data-state'))).toEqual(['complete', 'current', 'upcoming']);
    expect(items[1].getAttribute('aria-current')).toBe('step');
    const steps = Array.from(root.querySelectorAll('art-wizard-step')) as HTMLElement[];
    expect(steps.map((s) => s.hidden)).toEqual([true, false, true]);
    expect(steps[1].getAttribute('role')).toBe('group');
    expect(steps[1].getAttribute('aria-label')).toBe('Team');
    expect(sr.querySelector('.sr-only')!.textContent).toBe('Step 2 of 3: Team');
    const buttons = Array.from(sr.querySelectorAll('[part="footer"] art-button')).map((b) => b.textContent);
    expect(buttons).toEqual(['Back', 'Skip', 'Next']);
  });

  it('Next / Back / Skip move (cancelable), Finish emits on the last step', async () => {
    const { root, waitForChanges } = await render(wizard());
    await waitForChanges();
    const sr = root.shadowRoot!;
    const events: string[] = [];
    root.addEventListener('step-change', (e) => { const d = (e as CustomEvent<{ step: number; from: number }>).detail; events.push(`${d.from}>${d.step}`); if (d.step === 3 && d.from === 2) e.preventDefault(); });
    root.addEventListener('finish', () => events.push('finish'));
    const button = (label: string) => Array.from(sr.querySelectorAll('[part="footer"] art-button')).find((b) => b.textContent === label) as HTMLElement;
    button('Next').click();
    await waitForChanges();
    expect(root.getAttribute('step')).toBe('2');
    button('Next').click();
    await waitForChanges();
    expect(root.getAttribute('step')).toBe('2'); // prevented
    button('Skip').click();
    await waitForChanges();
    expect(root.getAttribute('step')).toBe('2'); // still prevented (2 > 3)
    root.removeEventListener('step-change', () => {});
    (root as HTMLElement & { step: number }).step = 3;
    await waitForChanges();
    expect(button('Finish')).toBeTruthy();
    button('Finish').click();
    expect(events).toEqual(['1>2', '2>3', '2>3', 'finish']);
    button('Back').click();
    await waitForChanges();
    expect(root.getAttribute('step')).toBe('2');
  });
});
