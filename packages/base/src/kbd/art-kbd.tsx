import { Component, Host, h } from '@stencil/core';

/**
 * Kbd — shadcn/ui parity. A keyboard key, on the native `<kbd>` element. Group several with
 * `<art-kbd-group>` (⌘ + K).
 *
 * @slot - The key label; an `<art-icon size="sm">` or `<svg>` works too.
 * @part kbd - The native `<kbd>`.
 */
@Component({ tag: 'art-kbd', styleUrl: 'art-kbd.css', shadow: true })
export class ArtKbd {
  render() {
    return (
      <Host>
        <kbd part="kbd" class="pointer-events-none inline-flex h-5 w-fit min-w-5 select-none items-center justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-xs font-medium text-fg">
          <slot />
        </kbd>
      </Host>
    );
  }
}
