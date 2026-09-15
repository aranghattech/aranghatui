# Settings Page

The settings layout: page heading, a section nav and the open section with its heading, description and form. shadcn/ui forms example, compiled (ADR-0010).

## Preview

<Preview frame="block">
  <art-settings-page section-heading="Profile" section-description="This is how others will see you on the site.">
    <a slot="nav" href="#profile" aria-current="page">Profile</a>
    <a slot="nav" href="#account">Account</a>
    <a slot="nav" href="#appearance">Appearance</a>
    <a slot="nav" href="#notifications">Notifications</a>
    <a slot="nav" href="#display">Display</a>
    <art-field>
      <art-label slot="label">Username</art-label>
      <art-input value="shadcn"></art-input>
      <p slot="description">This is your public display name. It can be your real name or a pseudonym.</p>
    </art-field>
    <art-field>
      <art-label slot="label">Email</art-label>
      <art-native-select>
        <option value="">Select a verified email to display</option>
        <option value="m@example.com">m@example.com</option>
        <option value="m@google.com">m@google.com</option>
      </art-native-select>
      <p slot="description">You can manage verified email addresses in your email settings.</p>
    </art-field>
    <art-field>
      <art-label slot="label">Bio</art-label>
      <art-textarea value="I own a computer."></art-textarea>
      <p slot="description">You can @mention other users and organizations to link to them.</p>
    </art-field>
    <div>
      <art-button>Update profile</art-button>
    </div>
  </art-settings-page>
</Preview>

## Installation

Lives in `@aranghat/widgets` (requires `@aranghat/base`).

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base @aranghat/widgets-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base @aranghat/widgets-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base @aranghat/widgets-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/settings-page/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/settings-page/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/settings-page/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/settings-page/basic.ts [Angular]
:::

Put `<a slot="nav">` links (or router links) with `aria-current="page"` on the open one, set `section-heading` / `section-description`, and slot the section's form as the default content. `heading` / `description` title the page; `actions` sit beside them. React `<SettingsPage sectionHeading>`, Vue and Angular likewise.

## Examples

### Basic

Section links go in `nav` (`aria-current="page"` marks the open one); `section-heading` / `section-description` title the content; the form is the default slot.

<Preview frame="block">
  <art-settings-page section-heading="Profile" section-description="This is how others will see you on the site.">
    <a slot="nav" href="#profile" aria-current="page">Profile</a>
    <a slot="nav" href="#account">Account</a>
    <a slot="nav" href="#appearance">Appearance</a>
    <a slot="nav" href="#notifications">Notifications</a>
    <a slot="nav" href="#display">Display</a>
    <art-field>
      <art-label slot="label">Username</art-label>
      <art-input value="shadcn"></art-input>
      <p slot="description">This is your public display name. It can be your real name or a pseudonym.</p>
    </art-field>
    <art-field>
      <art-label slot="label">Email</art-label>
      <art-native-select>
        <option value="">Select a verified email to display</option>
        <option value="m@example.com">m@example.com</option>
        <option value="m@google.com">m@google.com</option>
      </art-native-select>
      <p slot="description">You can manage verified email addresses in your email settings.</p>
    </art-field>
    <art-field>
      <art-label slot="label">Bio</art-label>
      <art-textarea value="I own a computer."></art-textarea>
      <p slot="description">You can @mention other users and organizations to link to them.</p>
    </art-field>
    <div>
      <art-button>Update profile</art-button>
    </div>
  </art-settings-page>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/settings-page/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/settings-page/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/settings-page/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/settings-page/basic.ts [Angular]
:::

### Another section

The same page with another section open: swap the `aria-current` link and the content.

<Preview frame="block">
  <art-settings-page section-heading="Appearance" section-description="Customize the appearance of the app. Automatically switch between day and night themes.">
    <a slot="nav" href="#profile">Profile</a>
    <a slot="nav" href="#account">Account</a>
    <a slot="nav" href="#appearance" aria-current="page">Appearance</a>
    <a slot="nav" href="#notifications">Notifications</a>
    <a slot="nav" href="#display">Display</a>
    <art-field>
      <art-label slot="label">Font</art-label>
      <art-native-select value="inter">
        <option value="inter">Inter</option>
        <option value="manrope">Manrope</option>
        <option value="system">System</option>
      </art-native-select>
      <p slot="description">Set the font you want to use in the dashboard.</p>
    </art-field>
    <art-field>
      <art-label slot="label">Theme</art-label>
      <art-radio-group value="light">
        <art-radio value="light">Light</art-radio>
        <art-radio value="dark">Dark</art-radio>
      </art-radio-group>
      <p slot="description">Select the theme for the dashboard.</p>
    </art-field>
    <div>
      <art-button>Update preferences</art-button>
    </div>
  </art-settings-page>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/settings-page/appearance.html [HTML]
<<< ../../../sandbox/react/src/samples/settings-page/appearance.tsx [React]
<<< ../../../sandbox/vue/src/samples/settings-page/appearance.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/settings-page/appearance.ts [Angular]
:::

### Single section

Without `nav` links the content takes the full width; `actions` sit beside the page heading.

<Preview frame="block">
  <art-settings-page heading="Workspace" description="Settings for this workspace." section-heading="General">
    <art-button slot="actions" variant="outline">Invite members</art-button>
    <art-field>
      <art-label slot="label">Workspace name</art-label>
      <art-input value="Acme"></art-input>
    </art-field>
    <div>
      <art-button>Save</art-button>
    </div>
  </art-settings-page>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/settings-page/no-nav.html [HTML]
<<< ../../../sandbox/react/src/samples/settings-page/no-nav.tsx [React]
<<< ../../../sandbox/vue/src/samples/settings-page/no-nav.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/settings-page/no-nav.ts [Angular]
:::

## API Reference

<ApiReference tag="art-settings-page" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | The section links, then the form |
| `Enter` | Follow a link |

A `<nav>` named by `nav-label` holds the section links (`aria-current="page"` on the open one); the page and section headings are `<h2>` / `<h3>`; separators are decorative. Forms keep their own semantics. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html).

States: Current section link (`aria-current`), hover and focus-visible on links. Everything else belongs to the form controls.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-6`, `--art-space-8`, `--art-space-12`, `--art-space-4`, `--art-space-1`, `--art-space-9`` | padding, gaps, link size |
| ``--art-container-2xl`` | content width |
| ``--art-font-size-2xl`, `--art-font-weight-bold`, `--art-font-tracking-tight`, `--art-font-size-lg`, `--art-font-weight-medium`, `--art-font-size-sm`, `--art-color-fg-muted`` | headings and descriptions |
| ``--art-color-bg-muted`, `--art-color-bg-accent`, `--art-radius-md`` | current and hovered links |
| ``--art-ring-width`, `--art-color-ring`` | link focus ring |

## Do / Don't

| Do | Don't |
|---|---|
| Group settings into a few named sections | Put every setting on one endless page |
| Mark the open section with `aria-current` | Rely on colour alone to show it |
| Keep one primary button per section | Save every field with its own button |
