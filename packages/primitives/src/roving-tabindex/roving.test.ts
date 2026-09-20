import { afterEach, describe, expect, it } from 'vitest';
import { createRovingTabindex } from './index.js';

afterEach(() => { document.body.innerHTML = ''; });

function toolbar(dir?: string) {
  document.body.innerHTML = `<div id="bar" ${dir ? `dir="${dir}"` : ''}><button>1</button><button>2</button><button>3</button></div>`;
  const bar = document.getElementById('bar') as HTMLElement;
  return { bar, items: () => Array.from(bar.querySelectorAll('button')) as HTMLElement[] };
}
const key = (el: Element, k: string) => el.dispatchEvent(new KeyboardEvent('keydown', { key: k, bubbles: true, cancelable: true }));

describe('createRovingTabindex', () => {
  it('manages tabindex and moves with arrows, Home/End, looping', () => {
    const { bar, items } = toolbar();
    const r = createRovingTabindex(bar, { getItems: items });
    expect(items().map((i) => i.tabIndex)).toEqual([0, -1, -1]);
    key(bar, 'ArrowRight');
    expect(document.activeElement).toBe(items()[1]);
    key(bar, 'End');
    expect(document.activeElement).toBe(items()[2]);
    key(bar, 'ArrowRight');
    expect(document.activeElement).toBe(items()[0]);
    key(bar, 'ArrowUp'); // horizontal only: ignored
    expect(document.activeElement).toBe(items()[0]);
    expect(items().map((i) => i.tabIndex)).toEqual([0, -1, -1]);
    r.destroy();
  });

  it('swaps left/right in RTL and can stop at edges', () => {
    const { bar, items } = toolbar('rtl');
    const r = createRovingTabindex(bar, { getItems: items, loop: false });
    key(bar, 'ArrowLeft');
    expect(document.activeElement).toBe(items()[1]);
    key(bar, 'ArrowRight');
    key(bar, 'ArrowRight');
    expect(document.activeElement).toBe(items()[0]);
    r.destroy();
  });

  it('skips disabled items toward the key: End lands on the last enabled item, Home on the first', () => {
    document.body.innerHTML = `<div id="bar"><button disabled>0</button><button>1</button><button>2</button><button disabled>3</button></div>`;
    const bar = document.getElementById('bar') as HTMLElement;
    const items = () => Array.from(bar.querySelectorAll('button')) as HTMLButtonElement[];
    const r = createRovingTabindex(bar, { getItems: items, isDisabled: (item) => (item as HTMLButtonElement).disabled, initialIndex: 1 });
    key(bar, 'End');
    expect(document.activeElement).toBe(items()[2]);
    key(bar, 'Home');
    expect(document.activeElement).toBe(items()[1]);
    key(bar, 'ArrowLeft'); // wraps past the disabled first and last items
    expect(document.activeElement).toBe(items()[2]);
    r.destroy();
  });

  it('adopts a clicked item as active', () => {
    const { bar, items } = toolbar();
    const r = createRovingTabindex(bar, { getItems: items });
    items()[2]!.focus();
    expect(r.activeIndex).toBe(2);
    expect(items().map((i) => i.tabIndex)).toEqual([-1, -1, 0]);
    r.destroy();
  });
});
