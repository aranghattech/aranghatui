import { Component, Host, h } from '@stencil/core';

/**
 * Skeleton — shadcn/ui parity. A pulsing placeholder that takes the size you give the host
 * (`style="width: …; height: …"` or a class). Hidden from assistive tech: announce loading
 * once with `aria-busy` on the region instead.
 *
 * @part skeleton - The pulsing box.
 */
@Component({ tag: 'art-skeleton', styleUrl: 'art-skeleton.css', shadow: true })
export class ArtSkeleton {
  render() {
    return (
      <Host aria-hidden="true">
        <div part="skeleton" class="h-full w-full animate-pulse rounded-md bg-accent" />
      </Host>
    );
  }
}
