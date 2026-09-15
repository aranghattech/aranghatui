import { describe, expect, h, it, render } from '@stencil/vitest';

const items = [
  { name: 'a', required: true, prompt: 'First?', choices: [{ value: 'x', label: 'X' }, { value: 'y', label: 'Y' }], input: { label: 'Other' } },
  { name: 'b', prompt: 'Second?', multiple: true, choices: [{ value: 'p', label: 'P' }, { value: 'q', label: 'Q' }] },
];

describe('art-questionnaire', () => {
  it('renders progress, the first question as a fieldset with shortcuts, and validates required', async () => {
    const { root, waitForChanges } = await render(<art-questionnaire items={items} />);
    await waitForChanges();
    const sr = root.shadowRoot!;
    expect(sr.querySelector('[part="progress"]')!.getAttribute('aria-valuetext')).toBe('Question 1 of 2');
    expect(sr.querySelector('legend')!.textContent).toBe('First?');
    expect(Array.from(sr.querySelectorAll('.shortcut')).map((k) => k.textContent)).toEqual(['A', 'B']);
    expect(sr.querySelector('[part="skip"]')).toBeNull(); // required
    (sr.querySelector('[part="next"]') as HTMLButtonElement).click();
    await waitForChanges();
    expect(sr.querySelector('[part="error"]')!.textContent).toBe('Please answer this question.');
    expect(sr.querySelector('fieldset')!.getAttribute('aria-invalid')).toBe('true');
    expect((root as any).step).toBe(0);
  });
  it('choosing, moving on, multiple answers and completion', async () => {
    const { root, waitForChanges } = await render(<art-questionnaire items={items} />);
    await waitForChanges();
    const sr = root.shadowRoot!;
    const done: any[] = [];
    root.addEventListener('complete', (e: any) => done.push(e.detail.answers));
    const radio = sr.querySelector('input[value="y"]') as HTMLInputElement;
    const fire = (el: HTMLInputElement) => { const ev = el.ownerDocument.createEvent('Event'); ev.initEvent('change', true, false); el.dispatchEvent(ev); };
    radio.checked = true; fire(radio);
    await waitForChanges();
    expect((root as any).value).toEqual({ a: 'y' });
    (sr.querySelector('[part="next"]') as HTMLButtonElement).click();
    await waitForChanges();
    expect((root as any).step).toBe(1);
    expect(sr.querySelector('[part="skip"]')).not.toBeNull();
    for (const v of ['p', 'q']) { const cb = sr.querySelector(`input[value="${v}"]`) as HTMLInputElement; cb.checked = true; fire(cb); await waitForChanges(); }
    expect((root as any).value).toEqual({ a: 'y', b: ['p', 'q'] });
    expect(sr.querySelector('[part="next"]')!.textContent).toBe('Submit');
    (sr.querySelector('[part="next"]') as HTMLButtonElement).click();
    await waitForChanges();
    expect(done).toEqual([{ a: 'y', b: ['p', 'q'] }]);
  });
});
