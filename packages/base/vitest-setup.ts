// Registers the built custom elements for spec tests (build runs first via Turborepo).
import { defineCustomElementArtButton, defineCustomElementArtHello, defineCustomElementArtIcon } from './dist/components/index.js';

defineCustomElementArtButton();
defineCustomElementArtHello();
defineCustomElementArtIcon();
