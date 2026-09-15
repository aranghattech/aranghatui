import { describe, expect, it, vi } from 'vitest';
import { toast, toastStore } from './toast-api';

describe('toast store', () => {
  it('adds, updates, dismisses and notifies subscribers', () => {
    toastStore.dismiss();
    const seen: number[] = [];
    const off = toastStore.subscribe((t) => seen.push(t.length));
    const id = toast('Saved', { description: 'Your changes are live.' });
    expect(toastStore.toasts[0]).toMatchObject({ id, title: 'Saved', description: 'Your changes are live.' });
    toast.success('Done');
    expect(toastStore.toasts[1]!.variant).toBe('success');
    toastStore.update(id, { title: 'Saved again' });
    expect(toastStore.toasts[0]!.title).toBe('Saved again');
    const onDismiss = vi.fn();
    toast({ id: 'x', title: 'X', onDismiss });
    toast.dismiss('x');
    expect(onDismiss).toHaveBeenCalledWith('x');
    toast.dismiss();
    expect(toastStore.toasts).toEqual([]);
    expect(seen).toEqual([0, 1, 2, 2, 3, 2, 0]);
    off();
  });
  it('promise toasts start loading and settle into success or error', async () => {
    toastStore.dismiss();
    const ok = toast.promise(Promise.resolve(3), { loading: 'Saving…', success: (n) => `Saved ${n}`, error: 'Failed' });
    expect(toastStore.toasts[0]!.variant).toBe('loading');
    await ok;
    await Promise.resolve();
    expect(toastStore.toasts[0]).toMatchObject({ variant: 'success', title: 'Saved 3' });
    const bad = toast.promise(Promise.reject(new Error('no')), { loading: 'Saving…', success: 'ok', error: (e) => `Failed: ${(e as Error).message}` }).catch(() => {});
    await bad;
    await Promise.resolve();
    expect(toastStore.toasts[1]).toMatchObject({ variant: 'error', title: 'Failed: no' });
  });
});
