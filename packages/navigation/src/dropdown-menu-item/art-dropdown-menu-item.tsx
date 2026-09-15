import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

/**
 * Dropdown Menu Item — an action (`type="item"`), a toggle (`type="checkbox"`) or a choice
 * (`type="radio"`, inside `art-dropdown-menu-radio-group`); with `href` it is a link.
 * Emits `select` when activated (cancelable: `preventDefault()` keeps the menu open); checkbox
 * and radio items also emit `change`.
 *
 * @slot - The label (with an icon before it).
 * @slot shortcut - A keyboard hint at the end.
 * @part item - The `role="menuitem*"` element.
 * @part indicator - The check / dot of a checkbox / radio item.
 */
@Component({ tag: 'art-dropdown-menu-item', styleUrl: 'art-dropdown-menu-item.css', shadow: true })
export class ArtDropdownMenuItem {
  @Element() host!: HTMLElement;

  @Prop({ reflect: true }) type: 'item' | 'checkbox' | 'radio' = 'item';
  /** Value reported by `select` / `change` (radio items need one). */
  @Prop() value = '';
  /** Checkbox / radio state. */
  @Prop({ mutable: true, reflect: true }) checked = false;
  @Prop({ reflect: true }) disabled = false;
  /** Indent to align with checkbox / radio items. */
  @Prop({ reflect: true }) inset = false;
  @Prop({ reflect: true }) variant: 'default' | 'destructive' = 'default';
  /** Renders the item as a link. */
  @Prop() href?: string;
  @Prop() target?: string;

  /** Emitted when the item is activated; `detail.value`, `detail.checked`. Cancelable — `preventDefault()` keeps the menu open. */
  @Event({ eventName: 'select', bubbles: true, composed: true, cancelable: true }) selectEvent!: EventEmitter<{ value: string; checked?: boolean }>;
  /** Checkbox / radio state changed; `detail.checked`, `detail.value`. */
  @Event({ eventName: 'change', bubbles: true, composed: true }) changeEvent!: EventEmitter<{ value: string; checked: boolean }>;

  connectedCallback() {
    this.host.addEventListener('click', this.onClick);
  }
  /** The host is the menu item itself (role, focus, ARIA state): assistive tech and the menu's focus handling see one element. */
  componentWillRender() {
    this.host.setAttribute('role', this.type === 'checkbox' ? 'menuitemcheckbox' : this.type === 'radio' ? 'menuitemradio' : 'menuitem');
    if (!this.host.hasAttribute('tabindex')) this.host.setAttribute('tabindex', '-1');
    if (this.type !== 'item') this.host.setAttribute('aria-checked', String(this.checked)); else this.host.removeAttribute('aria-checked');
    if (this.disabled) this.host.setAttribute('aria-disabled', 'true'); else this.host.removeAttribute('aria-disabled');
  }
  disconnectedCallback() { this.host.removeEventListener('click', this.onClick); }

  private onClick = (e: MouseEvent) => {
    if (this.disabled) { e.preventDefault(); e.stopPropagation(); return; }
    // a keyboard activation lands on the host: forward it to the link so it navigates
    const a = this.host.shadowRoot?.querySelector('a');
    if (a && !e.composedPath().includes(a)) { a.click(); return; }
    if (this.type === 'checkbox') { this.checked = !this.checked; this.changeEvent.emit({ value: this.value, checked: this.checked }); }
    else if (this.type === 'radio' && !this.checked) { this.checked = true; this.changeEvent.emit({ value: this.value, checked: true }); }
    const ev = this.selectEvent.emit({ value: this.value, checked: this.type === 'item' ? undefined : this.checked });
    if (ev.defaultPrevented && this.href) e.preventDefault();
  };

  render() {
    const cls = 'item relative flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none';
    const inner = [
      this.type !== 'item' && (
        <span part="indicator" class="indicator absolute flex items-center justify-center" aria-hidden="true">
          {this.checked && (this.type === 'checkbox' ? (
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false"><path d="M20 6 9 17l-5-5" /></svg>
          ) : (
            <svg class="dot" viewBox="0 0 24 24" fill="currentColor" focusable="false"><circle cx="12" cy="12" r="6" /></svg>
          ))}
        </span>
      ),
      <slot />,
      <slot name="shortcut" />,
      <svg class="sub-chevron icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m9 18 6-6-6-6" /></svg>,
    ];
    return (
      <Host>
        {this.href ? (
          <a part="item" role="none" class={cls} href={this.href} target={this.target} tabindex="-1">{inner}</a>
        ) : (
          <div part="item" role="none" class={cls}>{inner}</div>
        )}
      </Host>
    );
  }
}
