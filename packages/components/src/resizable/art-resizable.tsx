import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { children } from '@aranghat/primitives/dom';

type PanelEl = HTMLElement & { defaultSize?: number; minSize: number; maxSize: number; size: number };

/**
 * Resizable — shadcn/ui parity. A group of `<art-resizable-panel>`s split by
 * `<art-resizable-handle>`s that can be dragged with a pointer or moved with the keyboard.
 * Sizes are percentages of the group.
 *
 * @slot - Panels and handles, alternating.
 */
@Component({ tag: 'art-resizable', styleUrl: 'art-resizable.css', shadow: true })
export class ArtResizable {
  @Element() host!: HTMLElement;
  private drag?: { handle: HTMLElement; start: number; before: number; after: number; sizes: number[] };

  @Prop({ reflect: true }) direction: 'horizontal' | 'vertical' = 'horizontal';

  /** Emitted after a resize; `detail.sizes` are the panel percentages in order. */
  @Event({ eventName: 'layout-change', bubbles: true, composed: true }) layoutChange!: EventEmitter<{ sizes: number[] }>;

  private panels(): PanelEl[] { return children(this.host, 'art-resizable-panel'); }
  private handles(): HTMLElement[] { return children(this.host, 'art-resizable-handle'); }

  connectedCallback() {
    this.host.setAttribute('role', 'group');
    this.host.addEventListener('pointerdown', this.onPointerDown);
    this.host.addEventListener('keydown', this.onKeydown);
  }
  componentDidLoad() {
    this.layout();
  }
  disconnectedCallback() {
    this.host.removeEventListener('pointerdown', this.onPointerDown);
    this.host.removeEventListener('keydown', this.onKeydown);
  }

  /** Initial sizes: `default-size` where given, the rest shared equally. */
  @Watch('direction')
  layout() {
    const panels = this.panels();
    const given = panels.map((p) => p.defaultSize);
    const used = given.reduce<number>((a, b) => a + (b ?? 0), 0);
    const free = given.filter((g) => g == null).length;
    const sizes = given.map((g) => g ?? Math.max(0, (100 - used) / (free || 1)));
    this.apply(sizes);
  }
  private apply(sizes: number[]) {
    const panels = this.panels();
    panels.forEach((p, i) => { p.size = sizes[i] ?? 0; p.style.flexBasis = `${sizes[i] ?? 0}%`; });
    this.handles().forEach((h, i) => {
      h.setAttribute('data-direction', this.direction);
      h.setAttribute('aria-orientation', this.direction === 'horizontal' ? 'vertical' : 'horizontal');
      h.setAttribute('aria-valuenow', String(Math.round(sizes[i] ?? 0)));
      h.setAttribute('aria-valuemin', String(panels[i]?.minSize ?? 0));
      h.setAttribute('aria-valuemax', String(panels[i]?.maxSize ?? 100));
    });
  }
  /** Move the boundary after panel `i` by `delta` percentage points, within both panels' limits. */
  private resize(i: number, delta: number, base?: number[]) {
    const panels = this.panels();
    const sizes = base ?? panels.map((p) => p.size);
    const a = panels[i], b = panels[i + 1];
    if (!a || !b) return;
    const total = (sizes[i] ?? 0) + (sizes[i + 1] ?? 0);
    let na = Math.min(Math.max((sizes[i] ?? 0) + delta, a.minSize), a.maxSize);
    let nb = total - na;
    if (nb < b.minSize) { nb = b.minSize; na = total - nb; }
    if (nb > b.maxSize) { nb = b.maxSize; na = total - nb; }
    const next = [...sizes]; next[i] = na; next[i + 1] = nb;
    this.apply(next);
    this.layoutChange.emit({ sizes: next });
  }
  private handleIndex(target: EventTarget | null): number {
    const h = (target as HTMLElement)?.closest?.('art-resizable-handle') as HTMLElement | null;
    return h && h.parentElement === this.host ? this.handles().indexOf(h) : -1;
  }
  private extent(): number {
    const r = this.host.getBoundingClientRect();
    return this.direction === 'horizontal' ? r.width : r.height;
  }

  private onPointerDown = (e: PointerEvent) => {
    const i = this.handleIndex(e.target);
    if (i < 0) return;
    e.preventDefault();
    const handle = this.handles()[i]!;
    handle.setPointerCapture(e.pointerId);
    this.drag = { handle, start: this.direction === 'horizontal' ? e.clientX : e.clientY, before: i, after: i + 1, sizes: this.panels().map((p) => p.size) };
    handle.setAttribute('data-dragging', '');
    handle.addEventListener('pointermove', this.onPointerMove);
    handle.addEventListener('pointerup', this.onPointerUp);
    handle.addEventListener('pointercancel', this.onPointerUp);
  };
  private onPointerMove = (e: PointerEvent) => {
    if (!this.drag) return;
    const px = (this.direction === 'horizontal' ? e.clientX : e.clientY) - this.drag.start;
    const rtl = this.direction === 'horizontal' && getComputedStyle(this.host).direction === 'rtl';
    this.resize(this.drag.before, ((rtl ? -px : px) / this.extent()) * 100, this.drag.sizes);
  };
  private onPointerUp = () => {
    if (!this.drag) return;
    const { handle } = this.drag;
    handle.removeAttribute('data-dragging');
    handle.removeEventListener('pointermove', this.onPointerMove);
    handle.removeEventListener('pointerup', this.onPointerUp);
    handle.removeEventListener('pointercancel', this.onPointerUp);
    this.drag = undefined;
  };
  /** Arrows move the boundary by 1 % (10 % with Shift); Home / End collapse to the limits. */
  private onKeydown = (e: KeyboardEvent) => {
    const i = this.handleIndex(e.target);
    if (i < 0) return;
    const horizontal = this.direction === 'horizontal';
    const rtl = horizontal && getComputedStyle(this.host).direction === 'rtl';
    const grow = horizontal ? (rtl ? 'ArrowLeft' : 'ArrowRight') : 'ArrowDown';
    const shrink = horizontal ? (rtl ? 'ArrowRight' : 'ArrowLeft') : 'ArrowUp';
    const step = e.shiftKey ? 10 : 1;
    if (e.key === grow) this.resize(i, step);
    else if (e.key === shrink) this.resize(i, -step);
    else if (e.key === 'Home') this.resize(i, -100);
    else if (e.key === 'End') this.resize(i, 100);
    else return;
    e.preventDefault();
  };

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
