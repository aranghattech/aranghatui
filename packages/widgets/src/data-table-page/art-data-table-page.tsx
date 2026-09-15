import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { defineCustomElement as defineButton } from '@aranghat/base/button';
import { defineCustomElement as defineInput } from '@aranghat/base/input';
import { defineCustomElement as defineNativeSelect } from '@aranghat/base/native-select';

/**
 * Data Table Page — the chrome around a data table (shadcn "tasks" example): page heading and
 * actions, a toolbar with the filter field, faceted filters, a reset and the view menu, the
 * table itself, and a footer with the selection count, rows-per-page, the page position and
 * first / previous / next / last. The page owns no data: drive it from `createTableState`
 * (`@aranghat/components`) — feed `selected`, `total`, `page`, `page-count`, `page-size` from the
 * snapshot and listen to `filter-change`, `page-change`, `page-size-change`.
 *
 * @slot actions - Buttons beside the page heading.
 * @slot filters - Faceted filter buttons after the filter field.
 * @slot view - The columns / view menu at the end of the toolbar.
 * @slot - The `art-table`.
 * @part header - Heading, description and actions.
 * @part toolbar - The toolbar.
 * @part filter - The filter field.
 * @part reset - The reset button.
 * @part table - The table wrapper.
 * @part footer - The pagination footer.
 */
@Component({ tag: 'art-data-table-page', styleUrl: 'art-data-table-page.css', shadow: true })
export class ArtDataTablePage {
  @Element() host!: HTMLElement;

  @Prop() heading = 'Welcome back!';
  @Prop() description = "Here's a list of your tasks for this month.";
  /** Current filter text (mirror it from your state to keep the field in sync). */
  @Prop({ mutable: true }) filter = '';
  @Prop({ attribute: 'filter-placeholder' }) filterPlaceholder = 'Filter…';
  /** Drop the filter field (keep `filters` / `view` slots). */
  @Prop({ reflect: true, attribute: 'hide-filter' }) hideFilter = false;
  /** Selected rows (over every page). */
  @Prop() selected = 0;
  /** Rows after filtering. */
  @Prop() total = 0;
  @Prop({ mutable: true }) page = 1;
  @Prop({ attribute: 'page-count' }) pageCount = 1;
  @Prop({ mutable: true, attribute: 'page-size' }) pageSize = 10;
  /** Choices for rows per page, comma-separated. */
  @Prop({ attribute: 'page-sizes' }) pageSizes = '10,20,30,40,50';
  @State() hasActions = false;
  @State() hasFilters = false;
  @State() hasView = false;

  /** The filter field changed; `detail.value`. */
  @Event({ eventName: 'filter-change', bubbles: true, composed: true }) filterChange!: EventEmitter<{ value: string }>;
  /** A pagination control was used; `detail.page`. */
  @Event({ eventName: 'page-change', bubbles: true, composed: true }) pageChange!: EventEmitter<{ page: number }>;
  /** Rows per page changed; `detail.pageSize`. */
  @Event({ eventName: 'page-size-change', bubbles: true, composed: true }) pageSizeChange!: EventEmitter<{ pageSize: number }>;

  connectedCallback() {
    defineButton();
    defineInput();
    defineNativeSelect();
  }
  componentWillLoad() {
    this.wire();
  }
  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.wire);
  }
  private wire = () => {
    this.hasActions = !!this.host.querySelector(':scope > [slot="actions"]');
    this.hasFilters = !!this.host.querySelector(':scope > [slot="filters"]');
    this.hasView = !!this.host.querySelector(':scope > [slot="view"]');
  };
  /** The field's native `input` bubbles out of its shadow root retargeted to the `art-input`, whose `value` is already in sync. */
  private setFilter(value: string) {
    if (value === this.filter) return;
    this.filter = value;
    this.filterChange.emit({ value });
  }
  private go(page: number) {
    const p = Math.min(Math.max(1, page), Math.max(1, this.pageCount));
    if (p === this.page) return;
    this.page = p;
    this.pageChange.emit({ page: p });
  }
  private setPageSize(v: string) {
    const n = Number(v);
    if (!n || n === this.pageSize) return;
    this.pageSize = n;
    this.pageSizeChange.emit({ pageSize: n });
  }

  render() {
    const sizes = this.pageSizes.split(',').map((s) => s.trim()).filter(Boolean);
    const first = this.page <= 1;
    const last = this.page >= this.pageCount;
    const nav = (label: string, page: number, disabled: boolean, path: string) => (
      <art-button variant="outline" size="sm" icon aria-label={label} disabled={disabled} onClick={() => this.go(page)}>
        <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d={path} /></svg>
      </art-button>
    );
    return (
      <Host>
        <div part="header" class="header flex flex-wrap items-start justify-between gap-4">
          <div class="flex flex-col gap-1">
            <h2 class="m-0 text-2xl font-bold tracking-tight">{this.heading}</h2>
            <p class="m-0 text-fg-muted" hidden={!this.description}>{this.description}</p>
          </div>
          <div class="actions flex items-center gap-2" hidden={!this.hasActions}><slot name="actions" /></div>
        </div>
        <div part="toolbar" class="toolbar flex flex-wrap items-center gap-2">
          {!this.hideFilter && <art-input part="filter" class="filter" size="sm" placeholder={this.filterPlaceholder} value={this.filter} aria-label={this.filterPlaceholder} onInput={(e) => this.setFilter((e.target as HTMLElement & { value: string }).value ?? '')} />}
          <div class="filters flex flex-wrap items-center gap-2" hidden={!this.hasFilters}><slot name="filters" /></div>
          {this.filter && (
            <art-button part="reset" variant="ghost" size="sm" onClick={() => this.setFilter('')}>
              Reset
              <svg slot="end" class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </art-button>
          )}
          <div class="view ms-auto flex items-center gap-2" hidden={!this.hasView}><slot name="view" /></div>
        </div>
        <div part="table" class="table"><slot /></div>
        <div part="footer" class="footer flex flex-wrap items-center justify-between gap-4">
          <p class="m-0 text-sm text-fg-muted">{this.selected} of {this.total} row(s) selected.</p>
          <div class="flex flex-wrap items-center gap-6">
            <label class="flex items-center gap-2 text-sm font-medium">
              Rows per page
              <art-native-select size="sm" value={String(this.pageSize)} onChange={(e) => this.setPageSize((e as CustomEvent<{ value?: string }>).detail?.value ?? (e.target as HTMLElement & { value: string }).value)}>
                {sizes.map((s) => <option value={s} selected={Number(s) === this.pageSize}>{s}</option>)}
              </art-native-select>
            </label>
            <p class="m-0 text-sm font-medium">Page {this.page} of {Math.max(1, this.pageCount)}</p>
            <div class="flex items-center gap-2">
              {nav('Go to first page', 1, first, 'm11 17-5-5 5-5M18 17l-5-5 5-5')}
              {nav('Go to previous page', this.page - 1, first, 'm15 18-6-6 6-6')}
              {nav('Go to next page', this.page + 1, last, 'm9 18 6-6-6-6')}
              {nav('Go to last page', this.pageCount, last, 'm6 17 5-5-5-5M13 17l5-5-5-5')}
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
