import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { defineCustomElement as defineSeparator } from '@aranghat/base/separator';

/**
 * Settings Page — the shadcn settings layout: a page heading, a section nav (vertical beside the
 * content on wide screens, a scrolling row above it on narrow ones) and the section's heading,
 * description and content. Links are plain `<a slot="nav">`s (or router links) and
 * `aria-current="page"` marks the open section.
 *
 * @slot nav - The section links (`<a slot="nav" href aria-current="page">`).
 * @slot - The section content (a form).
 * @slot actions - Buttons beside the page heading.
 * @part header - Page heading and description.
 * @part nav - The `<nav>`.
 * @part section - The section wrapper.
 * @part section-header - Section heading and description.
 * @part content - The content wrapper.
 */
@Component({ tag: 'art-settings-page', styleUrl: 'art-settings-page.css', shadow: true })
export class ArtSettingsPage {
  @Element() host!: HTMLElement;

  @Prop() heading = 'Settings';
  @Prop() description = 'Manage your account settings and set e-mail preferences.';
  /** Accessible name of the section nav. */
  @Prop({ attribute: 'nav-label' }) navLabel = 'Settings sections';
  /** The open section's heading. */
  @Prop({ attribute: 'section-heading' }) sectionHeading?: string;
  @Prop({ attribute: 'section-description' }) sectionDescription?: string;
  @State() hasNav = false;
  @State() hasActions = false;

  connectedCallback() {
    defineSeparator();
  }
  componentWillLoad() {
    this.wire();
  }
  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.wire);
  }
  private wire = () => {
    this.hasNav = !!this.host.querySelector(':scope > [slot="nav"]');
    this.hasActions = !!this.host.querySelector(':scope > [slot="actions"]');
  };

  render() {
    return (
      <Host>
        <div part="header" class="header flex flex-wrap items-start justify-between gap-4">
          <div class="flex flex-col gap-1">
            <h2 class="m-0 text-2xl font-bold tracking-tight">{this.heading}</h2>
            <p class="m-0 text-fg-muted" hidden={!this.description}>{this.description}</p>
          </div>
          <div class="actions flex items-center gap-2" hidden={!this.hasActions}><slot name="actions" /></div>
        </div>
        <art-separator class="my-6" />
        <div class="layout flex flex-col gap-8 lg:flex-row lg:gap-12">
          <nav part="nav" aria-label={this.navLabel} class="nav flex gap-2 lg:w-1/5 lg:flex-col lg:gap-1" hidden={!this.hasNav}><slot name="nav" /></nav>
          <div part="section" class="section flex flex-1 flex-col gap-6">
            <div part="section-header" class="flex flex-col gap-1" hidden={!this.sectionHeading && !this.sectionDescription}>
              <h3 class="m-0 text-lg font-medium" hidden={!this.sectionHeading}>{this.sectionHeading}</h3>
              <p class="m-0 text-sm text-fg-muted" hidden={!this.sectionDescription}>{this.sectionDescription}</p>
            </div>
            <art-separator hidden={!this.sectionHeading && !this.sectionDescription} />
            <div part="content" class="content flex flex-col gap-6"><slot /></div>
          </div>
        </div>
      </Host>
    );
  }
}
