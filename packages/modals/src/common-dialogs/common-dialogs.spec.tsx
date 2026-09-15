import { describe, expect, it } from '@stencil/vitest';
import { alert, confirm, prompt } from './common-dialogs';

const tick = () => new Promise((r) => setTimeout(r, 0));

describe('common dialogs', () => {
  it('confirm() mounts an alert dialog with the labels and resolves true for the action, false for cancel', async () => {
    let p = confirm({ title: 'Delete?', description: 'Sure?', actionLabel: 'Delete', destructive: true });
    await tick();
    let el = document.querySelector('art-alert-dialog[data-art-common-dialog]')!;
    expect(el.querySelector('[slot="title"]')!.textContent).toBe('Delete?');
    expect(el.querySelector('[slot="action"]')!.getAttribute('variant')).toBe('destructive');
    (el.querySelector('[slot="action"]') as HTMLElement).click();
    expect(await p).toBe(true);
    p = confirm('Again?');
    await tick();
    el = document.querySelectorAll('art-alert-dialog[data-art-common-dialog]')[1] ?? document.querySelector('art-alert-dialog[data-art-common-dialog]')!;
    (el.querySelector('[slot="cancel"]') as HTMLElement).click();
    expect(await p).toBe(false);
  });

  it('alert() shows one button and resolves on close; prompt() resolves the value or null', async () => {
    const a = alert('Done');
    await tick();
    const el = Array.from(document.querySelectorAll('art-alert-dialog[data-art-common-dialog]')).pop()!;
    expect(el.querySelector('[slot="cancel"]')).toBeNull();
    (el.querySelector('[slot="action"]') as HTMLElement).click();
    await a;
    const p = prompt({ title: 'Name', defaultValue: 'Ada' });
    await tick();
    const d = Array.from(document.querySelectorAll('art-dialog[data-art-common-dialog]')).pop()!;
    expect(d.querySelector('art-input')!.getAttribute('value')).toBe('Ada');
    (d.querySelector('[dialog-close]') as HTMLElement).click();
    expect(await p).toBeNull();
  });
});
