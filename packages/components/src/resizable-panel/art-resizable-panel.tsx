import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Resizable Panel — one pane of an `<art-resizable>` group. Sizes are percentages.
 *
 * @slot - The pane content.
 */
@Component({ tag: 'art-resizable-panel', styleUrl: 'art-resizable-panel.css', shadow: true })
export class ArtResizablePanel {
  /** Initial size in %; panels without one share what is left. */
  @Prop({ attribute: 'default-size' }) defaultSize?: number;
  @Prop({ attribute: 'min-size' }) minSize = 10;
  @Prop({ attribute: 'max-size' }) maxSize = 100;
  /** Current size in %, kept by the group. */
  @Prop({ mutable: true }) size = 0;

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
