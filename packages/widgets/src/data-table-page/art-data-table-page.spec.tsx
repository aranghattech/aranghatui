import { describe, expect, h, it, render } from '@stencil/vitest';

describe('art-data-table-page', () => {
  it('renders the chrome, disables the page buttons at the ends and emits page / page-size / filter changes', async () => {
    const { root, waitForChanges } = await render(
      <art-data-table-page total="42" page-count="5" page="1" selected="3">
        <button slot="filters">Status</button>
        <table><tbody><tr><td>row</td></tr></tbody></table>
      </art-data-table-page>,
    );
    await waitForChanges();
    const sr = root.shadowRoot!;
    expect(sr.querySelector('h2')!.textContent).toBe('Welcome back!');
    expect(sr.querySelector('[part="footer"] p')!.textContent).toBe('3 of 42 row(s) selected.');
    const buttons = Array.from(sr.querySelectorAll('[part="footer"] art-button')) as (HTMLElement & { disabled: boolean })[];
    expect(buttons.map((b) => b.disabled)).toEqual([true, true, false, false]);
    expect(sr.querySelector('[part="reset"]')).toBeNull();
    const events: string[] = [];
    root.addEventListener('page-change', (e) => events.push(`page:${(e as CustomEvent<{ page: number }>).detail.page}`));
    root.addEventListener('page-size-change', (e) => events.push(`size:${(e as CustomEvent<{ pageSize: number }>).detail.pageSize}`));
    root.addEventListener('filter-change', (e) => events.push(`filter:${(e as CustomEvent<{ value: string }>).detail.value}`));
    buttons[3].click();
    await waitForChanges();
    expect(root.getAttribute('page')).toBeNull();
    expect(sr.querySelector('[part="footer"] p + div p')!.textContent).toBe('Page 5 of 5');
    expect(buttons.map((b) => b.disabled)).toEqual([false, false, true, true]);
    const select = sr.querySelector('art-native-select') as HTMLElement & { value: string };
    select.value = '20';
    select.dispatchEvent(new (select.ownerDocument.defaultView as Window & typeof globalThis).CustomEvent('change', { detail: { value: '20' }, bubbles: true, composed: true }));
    await waitForChanges();
    const input = sr.querySelector('art-input') as HTMLElement & { value: string };
    input.value = 'bug';
    input.dispatchEvent(new (input.ownerDocument.defaultView as Window & typeof globalThis).CustomEvent('input', { detail: { value: 'bug' }, bubbles: true, composed: true }));
    await waitForChanges();
    expect(events).toEqual(['page:5', 'size:20', 'filter:bug']);
    expect(sr.querySelector('[part="reset"]')).not.toBeNull();
  });
});
