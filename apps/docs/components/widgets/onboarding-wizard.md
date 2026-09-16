# Onboarding Wizard

A multi-step onboarding flow: a stepper with numbers and check marks, one step at a time, Back / Next / Finish and Skip on optional steps. Compiled widget (ADR-0010).

## Preview

<Preview frame="block">
  <art-onboarding-wizard step="2">
    <art-wizard-step label="Account" description="Sign in details">
      <art-field>
        <art-label slot="label">Email</art-label>
        <art-input type="email" value="ada@example.com"></art-input>
      </art-field>
    </art-wizard-step>
    <art-wizard-step label="Profile" description="Tell us about you">
      <art-field>
        <art-label slot="label">Full name</art-label>
        <art-input value="Ada Lovelace"></art-input>
      </art-field>
      <art-field>
        <art-label slot="label">Role</art-label>
        <art-native-select value="engineer">
          <option value="engineer">Engineer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
        </art-native-select>
      </art-field>
    </art-wizard-step>
    <art-wizard-step label="Team" description="Invite your colleagues" optional>
      <art-field>
        <art-label slot="label">Invite by email</art-label>
        <art-input placeholder="name@company.com"></art-input>
        <p slot="description">You can skip this and invite people later.</p>
      </art-field>
    </art-wizard-step>
    <art-wizard-step label="Done" description="Review and finish">
      <p style="margin: 0; font-size: var(--art-font-size-sm); color: var(--art-color-fg-muted)">Everything is set. Press Finish to open your workspace.</p>
    </art-wizard-step>
  </art-onboarding-wizard>
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
<<< ../../../sandbox/html/src/samples/onboarding-wizard/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/onboarding-wizard/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/onboarding-wizard/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/onboarding-wizard/basic.ts [Angular]
:::

Slot `art-wizard-step`s (`label`, `description`, `optional`) with their content; control `step` (1-based) and listen to `step-change` (cancelable, `detail.step` / `detail.from`) and `finish`. React `<OnboardingWizard step onStepChange onFinish>`, Vue `v-model:step @finish`, Angular `[step] (stepChange) (finish)`.

## Examples

### Basic

`art-wizard-step`s with a `label` and `description` fill the stepper; `step` (1-based) picks the visible one. Back / Next move, the last step shows Finish (`finish` event). `step-change` is cancelable — validate the current step and `preventDefault()` to stay.

<Preview frame="block">
  <art-onboarding-wizard step="2">
    <art-wizard-step label="Account" description="Sign in details">
      <art-field>
        <art-label slot="label">Email</art-label>
        <art-input type="email" value="ada@example.com"></art-input>
      </art-field>
    </art-wizard-step>
    <art-wizard-step label="Profile" description="Tell us about you">
      <art-field>
        <art-label slot="label">Full name</art-label>
        <art-input value="Ada Lovelace"></art-input>
      </art-field>
      <art-field>
        <art-label slot="label">Role</art-label>
        <art-native-select value="engineer">
          <option value="engineer">Engineer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
        </art-native-select>
      </art-field>
    </art-wizard-step>
    <art-wizard-step label="Team" description="Invite your colleagues" optional>
      <art-field>
        <art-label slot="label">Invite by email</art-label>
        <art-input placeholder="name@company.com"></art-input>
        <p slot="description">You can skip this and invite people later.</p>
      </art-field>
    </art-wizard-step>
    <art-wizard-step label="Done" description="Review and finish">
      <p style="margin: 0; font-size: var(--art-font-size-sm); color: var(--art-color-fg-muted)">Everything is set. Press Finish to open your workspace.</p>
    </art-wizard-step>
  </art-onboarding-wizard>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/onboarding-wizard/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/onboarding-wizard/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/onboarding-wizard/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/onboarding-wizard/basic.ts [Angular]
:::

### Optional step

An `optional` step offers Skip.

<Preview frame="block">
  <art-onboarding-wizard step="3">
    <art-wizard-step label="Account" description="Sign in details">
      <art-field>
        <art-label slot="label">Email</art-label>
        <art-input type="email" value="ada@example.com"></art-input>
      </art-field>
    </art-wizard-step>
    <art-wizard-step label="Profile" description="Tell us about you">
      <art-field>
        <art-label slot="label">Full name</art-label>
        <art-input value="Ada Lovelace"></art-input>
      </art-field>
      <art-field>
        <art-label slot="label">Role</art-label>
        <art-native-select value="engineer">
          <option value="engineer">Engineer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
        </art-native-select>
      </art-field>
    </art-wizard-step>
    <art-wizard-step label="Team" description="Invite your colleagues" optional>
      <art-field>
        <art-label slot="label">Invite by email</art-label>
        <art-input placeholder="name@company.com"></art-input>
        <p slot="description">You can skip this and invite people later.</p>
      </art-field>
    </art-wizard-step>
    <art-wizard-step label="Done" description="Review and finish">
      <p style="margin: 0; font-size: var(--art-font-size-sm); color: var(--art-color-fg-muted)">Everything is set. Press Finish to open your workspace.</p>
    </art-wizard-step>
  </art-onboarding-wizard>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/onboarding-wizard/optional.html [HTML]
<<< ../../../sandbox/react/src/samples/onboarding-wizard/optional.tsx [React]
<<< ../../../sandbox/vue/src/samples/onboarding-wizard/optional.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/onboarding-wizard/optional.ts [Angular]
:::

### Vertical

`orientation="vertical"` puts the stepper beside the content; `horizontal` (the default) puts it above.

<Preview frame="block">
  <art-onboarding-wizard orientation="vertical" step="2">
    <art-wizard-step label="Account" description="Sign in details">
      <art-field>
        <art-label slot="label">Email</art-label>
        <art-input type="email" value="ada@example.com"></art-input>
      </art-field>
    </art-wizard-step>
    <art-wizard-step label="Profile" description="Tell us about you">
      <art-field>
        <art-label slot="label">Full name</art-label>
        <art-input value="Ada Lovelace"></art-input>
      </art-field>
      <art-field>
        <art-label slot="label">Role</art-label>
        <art-native-select value="engineer">
          <option value="engineer">Engineer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
        </art-native-select>
      </art-field>
    </art-wizard-step>
    <art-wizard-step label="Team" description="Invite your colleagues" optional>
      <art-field>
        <art-label slot="label">Invite by email</art-label>
        <art-input placeholder="name@company.com"></art-input>
        <p slot="description">You can skip this and invite people later.</p>
      </art-field>
    </art-wizard-step>
    <art-wizard-step label="Done" description="Review and finish">
      <p style="margin: 0; font-size: var(--art-font-size-sm); color: var(--art-color-fg-muted)">Everything is set. Press Finish to open your workspace.</p>
    </art-wizard-step>
  </art-onboarding-wizard>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/onboarding-wizard/vertical.html [HTML]
<<< ../../../sandbox/react/src/samples/onboarding-wizard/vertical.tsx [React]
<<< ../../../sandbox/vue/src/samples/onboarding-wizard/vertical.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/onboarding-wizard/vertical.ts [Angular]
:::

### Loading

`loading` puts a spinner on Next / Finish and ignores moves while you save.

<Preview frame="block">
  <art-onboarding-wizard step="4" loading>
    <art-wizard-step label="Account" description="Sign in details">
      <art-field>
        <art-label slot="label">Email</art-label>
        <art-input type="email" value="ada@example.com"></art-input>
      </art-field>
    </art-wizard-step>
    <art-wizard-step label="Profile" description="Tell us about you">
      <art-field>
        <art-label slot="label">Full name</art-label>
        <art-input value="Ada Lovelace"></art-input>
      </art-field>
      <art-field>
        <art-label slot="label">Role</art-label>
        <art-native-select value="engineer">
          <option value="engineer">Engineer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
        </art-native-select>
      </art-field>
    </art-wizard-step>
    <art-wizard-step label="Team" description="Invite your colleagues" optional>
      <art-field>
        <art-label slot="label">Invite by email</art-label>
        <art-input placeholder="name@company.com"></art-input>
        <p slot="description">You can skip this and invite people later.</p>
      </art-field>
    </art-wizard-step>
    <art-wizard-step label="Done" description="Review and finish">
      <p style="margin: 0; font-size: var(--art-font-size-sm); color: var(--art-color-fg-muted)">Everything is set. Press Finish to open your workspace.</p>
    </art-wizard-step>
  </art-onboarding-wizard>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/onboarding-wizard/loading.html [HTML]
<<< ../../../sandbox/react/src/samples/onboarding-wizard/loading.tsx [React]
<<< ../../../sandbox/vue/src/samples/onboarding-wizard/loading.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/onboarding-wizard/loading.ts [Angular]
:::

## API Reference

<ApiReference tag="art-onboarding-wizard" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | The current step's controls, then Back, Skip and Next / Finish |
| `Enter / Space` | Activate a button; focus moves to the new step's content |

The stepper is a `<nav>` with an ordered list; the current item carries `aria-current="step"`, and a visually hidden live region announces "Step n of m: label". Each step is a `role="group"` named by its label; hidden steps are `hidden`. Focus moves to the panel after a step change. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html).

States: Complete / current / upcoming steps, `optional` steps with Skip, `loading`. Interactive states belong to the buttons and fields.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-6`, `--art-space-8`, `--art-space-4`, `--art-space-2`` | gaps, indicator size, footer padding |
| ``--art-color-primary-solid`, `--art-color-fg-on-primary`, `--art-color-border-default`, `--art-ring-width`` | indicators and connectors |
| ``--art-color-fg-default`, `--art-color-fg-muted`, `--art-font-size-sm`, `--art-font-size-xs`, `--art-font-weight-medium`` | labels and descriptions |
| ``--art-radius-full`, `--art-duration-base`, `--art-ease-out`` | indicator shape and motion |

## Do / Don't

| Do | Don't |
|---|---|
| Keep three to five steps with short labels | Chain ten screens of settings |
| Validate on `step-change` and keep the user on the step with an error | Let a broken step through |
| Mark truly optional steps `optional` | Offer Skip on required data |
