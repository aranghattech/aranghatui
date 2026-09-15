import { Component, Element, Host, Prop, Watch, h } from '@stencil/core';

type Disableable = HTMLElement & { disabled: boolean };
const CONTROLS = 'art-input, art-textarea, art-native-select, art-checkbox, art-switch, art-radio-group, art-slider, art-toggle-group, art-toggle, art-input-otp, art-button';

/**
 * Field Set — a native `<fieldset>` with a legend, grouping related fields (a radio group with
 * its question, an address block). `disabled` disables every control inside — the slotted
 * controls are not DOM descendants of the shadow `<fieldset>`, so the component applies it
 * (and restores only what it disabled).
 *
 * @slot legend - The group title.
 * @slot - Fields.
 * @part fieldset - The native `<fieldset>`.
 * @part legend - The native `<legend>`.
 */
@Component({ tag: 'art-field-set', styleUrl: 'art-field-set.css', shadow: true })
export class ArtFieldSet {
  @Element() host!: HTMLElement;
  private disabledByMe: Disableable[] = [];

  @Prop({ reflect: true }) disabled = false;

  @Watch('disabled')
  sync() {
    if (this.disabled) {
      this.disabledByMe = Array.from(this.host.querySelectorAll<Disableable>(CONTROLS)).filter((c) => !c.disabled);
      this.disabledByMe.forEach((c) => (c.disabled = true));
    } else {
      this.disabledByMe.forEach((c) => (c.disabled = false));
      this.disabledByMe = [];
    }
  }
  componentDidLoad() {
    if (this.disabled) this.sync();
  }

  render() {
    return (
      <Host>
        <fieldset part="fieldset" class="m-0 flex min-w-0 flex-col gap-6 border-0 p-0" disabled={this.disabled}>
          <legend part="legend" class="mb-3 p-0 text-md font-medium leading-none">
            <slot name="legend" />
          </legend>
          <slot />
        </fieldset>
      </Host>
    );
  }
}
