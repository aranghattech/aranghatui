// Angular cannot glob; list every sample here (kept in sync by the docs scaffolder).
import { HelloBasic } from './hello/basic';
import { HelloOutline } from './hello/outline';
import { HelloOverlayBasic } from './hello-overlay/basic';
import { ButtonBasic } from './button/basic';
import { ButtonVariants } from './button/variants';
import { ButtonSizes } from './button/sizes';
import { ButtonWithIcon } from './button/with-icon';
import { ButtonIconOnly } from './button/icon-only';
import { ButtonLoading } from './button/loading';
import { ButtonDisabled } from './button/disabled';
import { ButtonLink } from './button/link';
import { ButtonForm } from './button/form';

/** Static array so `imports: [...SAMPLE_COMPONENTS]` stays analysable (NG1010). */
export const SAMPLE_COMPONENTS = [HelloBasic, HelloOutline, HelloOverlayBasic, ButtonBasic, ButtonVariants, ButtonSizes, ButtonWithIcon, ButtonIconOnly, ButtonLoading, ButtonDisabled, ButtonLink, ButtonForm];

export const SAMPLES = [
  { id: 'hello/basic', component: HelloBasic },
  { id: 'hello/outline', component: HelloOutline },
  { id: 'hello-overlay/basic', component: HelloOverlayBasic },
  { id: 'button/basic', component: ButtonBasic },
  { id: 'button/variants', component: ButtonVariants },
  { id: 'button/sizes', component: ButtonSizes },
  { id: 'button/with-icon', component: ButtonWithIcon },
  { id: 'button/icon-only', component: ButtonIconOnly },
  { id: 'button/loading', component: ButtonLoading },
  { id: 'button/disabled', component: ButtonDisabled },
  { id: 'button/link', component: ButtonLink },
  { id: 'button/form', component: ButtonForm },
];
