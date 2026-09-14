// Registers the built custom elements for spec tests (build runs first via Turborepo).
import { defineCustomElementArtHello, defineCustomElementArtIcon } from './dist/components/index.js';

defineCustomElementArtHello();
defineCustomElementArtIcon();
