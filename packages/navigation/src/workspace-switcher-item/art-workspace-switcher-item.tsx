import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Workspace Switcher Item — one workspace of an `art-workspace-switcher`. The default slot is the
 * workspace's logo (any markup: an `svg`, an `img`, an avatar), and the switcher copies it into
 * its trigger while this workspace is the active one.
 *
 * @slot - The workspace logo / avatar.
 * @part item - The `role="menuitemradio"` row.
 * @part logo - The logo tile.
 * @part text - The name and plan column.
 * @part name - The workspace name.
 * @part plan - The secondary line.
 * @part shortcut - The keyboard hint.
 * @part check - The tick on the active workspace.
 */
@Component({ tag: 'art-workspace-switcher-item', styleUrl: 'art-workspace-switcher-item.css', shadow: true })
export class ArtWorkspaceSwitcherItem {
  @Element() host!: HTMLElement;

  /** The workspace's value — what the switcher's `value` becomes when this row is chosen. */
  @Prop() value = '';
  /** The workspace's name: shown in the row, copied into the trigger, and used for type-ahead. */
  @Prop() name = '';
  /** Secondary line — the plan, the role, the member count. */
  @Prop() plan?: string;
  /** Keyboard hint at the end of the row (`⌘1`). Display only: bind the accelerator yourself. */
  @Prop() shortcut?: string;
  /** Data object for this workspace; handed back as `detail.item` on the switcher's `value-change`. */
  @Prop() item?: unknown;
  @Prop({ reflect: true }) disabled = false;
  /** The active workspace. Set by the switcher — do not set it by hand. */
  @Prop({ reflect: true }) active = false;

  /**
   * The host is the menu row itself (role, focus, ARIA state), so assistive tech and the menu's
   * focus handling see one element — the same arrangement as `art-menu-item`.
   */
  componentWillRender() {
    const el = this.host;
    el.setAttribute('role', 'menuitemradio');
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
    el.setAttribute('aria-checked', String(this.active));
    // The light DOM holds only the logo, so the row's text for type-ahead has to come from the prop.
    el.setAttribute('data-text', this.name);
    if (this.disabled) el.setAttribute('aria-disabled', 'true');
    else el.removeAttribute('aria-disabled');
  }

  render() {
    return (
      <Host>
        <div part="item" class="item relative flex w-full cursor-default items-center gap-2 rounded-sm p-2 text-sm outline-none select-none">
          <span part="logo" class="logo flex shrink-0 items-center justify-center overflow-hidden border-default">
            <slot />
          </span>
          <span part="text" class="text flex min-w-0 flex-1 flex-col text-start">
            <span part="name" class="name truncate">{this.name}</span>
            {this.plan && <span part="plan" class="plan truncate">{this.plan}</span>}
          </span>
          {this.shortcut && <span part="shortcut" class="shortcut shrink-0">{this.shortcut}</span>}
          {/* Always rendered so the rows keep one column and nothing shifts as the choice moves. */}
          <span part="check" class="check icon-sm shrink-0" aria-hidden="true">
            {this.active && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false"><path d="M20 6 9 17l-5-5" /></svg>
            )}
          </span>
        </div>
      </Host>
    );
  }
}
