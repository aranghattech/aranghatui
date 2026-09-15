import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-date-picker', () => {
  it('renders a dialog trigger showing the formatted date or the placeholder', async () => {
    const { root, waitForChanges } = await render(<art-date-picker value="2026-09-15" locale="en-US" aria-label="Date" />);
    await waitForChanges();
    const trigger = root.shadowRoot!.querySelector('[part="trigger"]')!;
    expect(trigger.getAttribute('aria-haspopup')).toBe('dialog');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(root.shadowRoot!.querySelector('[part="value"]')!.textContent).toBe('September 15, 2026');
    (root as any).value = '';
    await waitForChanges();
    expect(root.shadowRoot!.querySelector('[part="value"]')!.textContent).toBe('Pick a date');
  });
  it('formats a range with two months in the calendar', async () => {
    const { root, waitForChanges } = await render(<art-date-picker mode="range" value="2026-09-08/2026-09-17" locale="en-US" format="medium" aria-label="Dates" />);
    await waitForChanges();
    expect(root.shadowRoot!.querySelector('[part="value"]')!.textContent).toBe('Sep 8, 2026 – Sep 17, 2026');
    const cal = root.shadowRoot!.querySelector('art-calendar') as any;
    expect(cal.numberOfMonths).toBe(2);
    expect(cal.mode).toBe('range');
  });
});
