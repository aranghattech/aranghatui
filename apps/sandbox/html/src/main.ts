// Consumers import exactly one stylesheet (CLAUDE.md §4) …
import '@aranghat/tokens/aranghat.css';
// … and register only the elements they use.
import { defineCustomElement as defineButton } from '@aranghat/base/button';
import { defineCustomElement as defineHello } from '@aranghat/base/hello';
import { defineCustomElement as defineIcon } from '@aranghat/base/icon';
import { defineCustomElement as defineHelloOverlay } from '@aranghat/modals/hello-overlay';
import { defineCustomElement as defineLabel } from '@aranghat/base/label';
import { defineCustomElement as defineInput } from '@aranghat/base/input';
import { defineCustomElement as defineTextarea } from '@aranghat/base/textarea';
import { defineCustomElement as defineCheckbox } from '@aranghat/base/checkbox';
import { defineCustomElement as defineSwitch } from '@aranghat/base/switch';
import { defineCustomElement as defineRadioGroup } from '@aranghat/base/radio-group';
import { defineCustomElement as defineNativeSelect } from '@aranghat/base/native-select';
import { defineCustomElement as defineToggle } from '@aranghat/base/toggle';
import { defineCustomElement as defineToggleGroup } from '@aranghat/base/toggle-group';
import { defineCustomElement as defineSlider } from '@aranghat/base/slider';
import { defineCustomElement as defineSeparator } from '@aranghat/base/separator';
import { defineCustomElement as defineBadge } from '@aranghat/base/badge';
import { defineCustomElement as defineKbd } from '@aranghat/base/kbd';
import { defineCustomElement as defineKbdGroup } from '@aranghat/base/kbd-group';
import { defineCustomElement as defineSkeleton } from '@aranghat/base/skeleton';
import { defineCustomElement as defineSpinner } from '@aranghat/base/spinner';
import { defineCustomElement as defineProgress } from '@aranghat/base/progress';
import { defineCustomElement as defineButtonGroup } from '@aranghat/base/button-group';
import { defineCustomElement as defineButtonGroupText } from '@aranghat/base/button-group-text';
import { defineCustomElement as defineInputGroup } from '@aranghat/base/input-group';
import { defineCustomElement as defineField } from '@aranghat/base/field';
import { defineCustomElement as defineFieldSet } from '@aranghat/base/field-set';
import { defineCustomElement as defineFieldGroup } from '@aranghat/base/field-group';
import { defineCustomElement as defineInputOtp } from '@aranghat/base/input-otp';
import { defineCustomElement as defineAspectRatio } from '@aranghat/base/aspect-ratio';
import { defineCustomElement as defineCard } from '@aranghat/base/card';
import { defineCustomElement as defineItem } from '@aranghat/base/item';
import { defineCustomElement as defineItemGroup } from '@aranghat/base/item-group';
import { defineCustomElement as defineEmpty } from '@aranghat/base/empty';
import { defineCustomElement as defineMarker } from '@aranghat/base/marker';
import { defineCustomElement as defineTable } from '@aranghat/base/table';
import { defineCustomElement as defineTypography } from '@aranghat/base/typography';
import { defineCustomElement as defineTooltip } from '@aranghat/components/tooltip';
import { defineCustomElement as definePopover } from '@aranghat/components/popover';
import { defineCustomElement as defineHoverCard } from '@aranghat/components/hover-card';
import './sandbox.css';

defineButton();
defineHello();
defineIcon();
defineHelloOverlay();
defineLabel();
defineInput();
defineTextarea();
defineCheckbox();
defineSwitch();
defineRadioGroup();
defineNativeSelect();
defineToggle();
defineToggleGroup();
defineSlider();
defineSeparator();
defineBadge();
defineKbd();
defineKbdGroup();
defineSkeleton();
defineSpinner();
defineProgress();
defineButtonGroup();
defineButtonGroupText();
defineInputGroup();
defineField();
defineFieldSet();
defineFieldGroup();
defineInputOtp();
defineAspectRatio();
defineCard();
defineItem();
defineItemGroup();
defineEmpty();
defineMarker();
defineTable();
defineTypography();
defineTooltip();
definePopover();
defineHoverCard();

// Every sample is a real file under src/samples/<component>/<example>.html — the
// docs site embeds these files verbatim, and the smoke test asserts each renders.
const samples = import.meta.glob('./samples/**/*.html', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const app = document.getElementById('app')!;
for (const [path, html] of Object.entries(samples).sort()) {
  const id = path.replace('./samples/', '').replace(/\.html$/, '');
  const section = document.createElement('section');
  section.dataset.sample = id;
  section.innerHTML = `<h2>${id}</h2>${html}`;
  app.append(section);
}

// theme toggle for manual checks
document.addEventListener('keydown', (e) => {
  if (e.key === 'd' && (e.metaKey || e.ctrlKey)) {
    e.preventDefault();
    const root = document.documentElement;
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  }
});
