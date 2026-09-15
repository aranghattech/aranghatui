import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-calendar', () => {
  it('renders the month grid with the selected day and today marked', async () => {
    const { root, waitForChanges } = await render(<art-calendar value="2026-09-15" month="2026-09" aria-label="Pick" />);
    await waitForChanges();
    const grid = root.shadowRoot!.querySelector('[role="grid"]')!;
    expect(grid.getAttribute('aria-label')).toBe('September 2026');
    const selected = root.shadowRoot!.querySelector('[part="day"][data-selected]')!;
    expect(selected.getAttribute('data-date')).toBe('2026-09-15');
    expect(selected.closest('td')!.getAttribute('aria-selected')).toBe('true'); // aria-selected belongs to the gridcell, not the button
    expect(selected.getAttribute('tabindex')).toBe('0');
    expect(root.shadowRoot!.querySelectorAll('[part="day"][tabindex="0"]').length).toBe(1);
    expect(root.shadowRoot!.querySelectorAll('th').length).toBe(7);
  });
  it('marks a range with start, middle and end', async () => {
    const { root, waitForChanges } = await render(<art-calendar mode="range" value="2026-09-08/2026-09-10" month="2026-09" aria-label="Pick" />);
    await waitForChanges();
    const q = (s: string) => Array.from(root.shadowRoot!.querySelectorAll(s)).map((e) => e.getAttribute('data-date'));
    expect(q('[part="day"][data-range-start]')).toEqual(['2026-09-08']);
    expect(q('[part="day"][data-range-middle]')).toEqual(['2026-09-09']);
    expect(q('[part="day"][data-range-end]')).toEqual(['2026-09-10']);
  });
  it('disables days outside min / max and shows two months', async () => {
    const { root, waitForChanges } = await render(<art-calendar value="2026-09-15" month="2026-09" min="2026-09-10" max="2026-10-05" number-of-months="2" aria-label="Pick" />);
    await waitForChanges();
    expect(root.shadowRoot!.querySelectorAll('[role="grid"]').length).toBe(2);
    expect((root.shadowRoot!.querySelector('[part="day"][data-date="2026-09-09"]') as HTMLButtonElement).disabled).toBe(true);
    expect((root.shadowRoot!.querySelector('[part="day"][data-date="2026-09-10"]') as HTMLButtonElement).disabled).toBe(false);
    expect((root.shadowRoot!.querySelector('[aria-label="Previous month"]') as HTMLButtonElement).disabled).toBe(true);
  });
});
