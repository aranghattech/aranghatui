// Angular cannot glob; list every sample here (kept in sync by the docs scaffolder).
import { HelloBasic } from './hello/basic';
import { HelloOutline } from './hello/outline';
import { HelloOverlayBasic } from './hello-overlay/basic';

export { HelloBasic, HelloOutline, HelloOverlayBasic };

export const SAMPLES = [
  { id: 'hello/basic', component: HelloBasic },
  { id: 'hello/outline', component: HelloOutline },
  { id: 'hello-overlay/basic', component: HelloOverlayBasic },
];
