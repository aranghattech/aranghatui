// Reference budget: landing page (base only, ~6 atoms) ≤ 15 kB gzip — CLAUDE.md §7.
// Grows as atoms land (Badge, Card, Separator, Typography…); until then Button + Icon + tokens.
import '@aranghat/tokens/aranghat.css';
import { defineCustomElement as defineButton } from '@aranghat/base/button';
import { defineCustomElement as defineIcon } from '@aranghat/base/icon';

defineButton();
defineIcon();
