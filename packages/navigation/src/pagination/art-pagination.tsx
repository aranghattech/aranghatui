import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';

/**
 * Pagination — shadcn/ui parity. Previous / next, page numbers around the current page with
 * ellipses, the active page as an outline button. Buttons by default (`page-change`), links
 * with `href-template` (`?page={page}`) for crawlable pages.
 *
 * @part list - The `<ul>`.
 * @part previous - The previous control.
 * @part next - The next control.
 * @part page - A page control.
 * @part ellipsis - A gap.
 */
@Component({ tag: 'art-pagination', styleUrl: 'art-pagination.css', shadow: true })
export class ArtPagination {
  @Element() host!: HTMLElement;

  /** Current page, 1-based. */
  @Prop({ mutable: true, reflect: true }) page = 1;
  /** Number of pages. */
  @Prop() total = 1;
  /** Pages shown on each side of the current one. */
  @Prop() siblings = 1;
  /** Pages always shown at the start and end. */
  @Prop() boundaries = 1;
  /** Render links instead of buttons: `{page}` is replaced (e.g. `?page={page}`). */
  @Prop({ attribute: 'href-template' }) hrefTemplate?: string;
  /** Accessible name of the landmark. */
  @Prop() label = 'pagination';
  @Prop({ attribute: 'previous-label' }) previousLabel = 'Previous';
  @Prop({ attribute: 'next-label' }) nextLabel = 'Next';

  /** Emitted when the user picks a page; `detail.page`. */
  @Event({ eventName: 'page-change', bubbles: true, composed: true }) pageChange!: EventEmitter<{ page: number }>;

  @Watch('page') @Watch('total')
  clamp() {
    const p = Math.min(Math.max(1, Math.round(this.page || 1)), Math.max(1, this.total));
    if (p !== this.page) this.page = p;
  }

  private go(page: number, e?: Event) {
    if (page < 1 || page > this.total || page === this.page) return;
    if (this.hrefTemplate && e) return; // a real link navigates; the host page owns the new state
    this.page = page;
    this.pageChange.emit({ page });
  }
  /** Page numbers with `0` standing for an ellipsis (shadcn / Mantine algorithm). */
  private range(): number[] {
    const total = Math.max(1, this.total), s = Math.max(0, this.siblings), b = Math.max(0, this.boundaries);
    const all = 2 * s + 2 * b + 3;
    if (all >= total) return Array.from({ length: total }, (_, i) => i + 1);
    const left = Math.max(this.page - s, b + 1);
    const right = Math.min(this.page + s, total - b);
    const out: number[] = [];
    for (let i = 1; i <= b; i++) out.push(i);
    if (left > b + 2) out.push(0); else for (let i = b + 1; i < left; i++) out.push(i);
    for (let i = left; i <= right; i++) out.push(i);
    if (right < total - b - 1) out.push(0); else for (let i = right + 1; i <= total - b; i++) out.push(i);
    for (let i = total - b + 1; i <= total; i++) out.push(i);
    return out;
  }
  private href(page: number) { return this.hrefTemplate?.replace('{page}', String(page)); }

  render() {
    const base = 'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium transition-interactive motion-fast focus-ring select-none disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50';
    const ghost = `${base} text-fg hover:bg-accent`;
    const outline = `${base} border-default bg-canvas text-fg shadow-raised hover:bg-accent`;
    const link = (page: number, cls: string, part: string, ariaLabel: string, content: unknown, current = false, disabled = false) =>
      this.hrefTemplate ? (
        <a part={part} class={cls} href={disabled ? undefined : this.href(page)} aria-label={ariaLabel} aria-current={current ? 'page' : undefined} aria-disabled={disabled ? 'true' : undefined} onClick={(e) => this.go(page, e)}>{content}</a>
      ) : (
        <button part={part} type="button" class={cls} aria-label={ariaLabel} aria-current={current ? 'page' : undefined} disabled={disabled} onClick={() => this.go(page)}>{content}</button>
      );
    const prev = <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m15 18-6-6 6-6" /></svg>;
    const next = <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m9 18 6-6-6-6" /></svg>;
    return (
      <Host>
        <nav aria-label={this.label} class="mx-auto flex w-full justify-center">
          <ul part="list" class="m-0 flex flex-row items-center gap-1 p-0">
            <li>{link(this.page - 1, `${ghost} control-md px-2.5`, 'previous', 'Go to previous page', [prev, <span class="hidden sm:inline">{this.previousLabel}</span>], false, this.page <= 1)}</li>
            {this.range().map((p, i) =>
              p === 0 ? (
                <li key={`e${i}`}><span part="ellipsis" class="flex items-center justify-center control-icon-md" aria-hidden="true"><svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg></span><span class="sr-only">More pages</span></li>
              ) : (
                <li key={p}>{link(p, `${p === this.page ? outline : ghost} control-icon-md`, 'page', `Go to page ${p}`, String(p), p === this.page)}</li>
              ),
            )}
            <li>{link(this.page + 1, `${ghost} control-md px-2.5`, 'next', 'Go to next page', [<span class="hidden sm:inline">{this.nextLabel}</span>, next], false, this.page >= this.total)}</li>
          </ul>
        </nav>
      </Host>
    );
  }
}
