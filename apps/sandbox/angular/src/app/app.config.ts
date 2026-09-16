import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';

// The page is prerendered (angular.json: outputMode "static") and post-processed by @aranghat/hydrate
// (scripts/ssr-postprocess.mjs); the client hydrates Angular's DOM, and the `artui-ssr` build
// condition gives the elements the runtime that adopts their server-rendered shadow roots (ADR-0023).
export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration()],
};
