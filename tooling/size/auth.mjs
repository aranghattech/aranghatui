// Reference budget: auth screen (base + widgets/login) ≤ 30 kB gzip — CLAUDE.md §7.
import '@aranghat/tokens/aranghat.css';
import { defineCustomElement as defineLogin } from '@aranghat/widgets/login';
import { defineCustomElement as defineButton } from '@aranghat/base/button';
import { defineCustomElement as defineCard } from '@aranghat/base/card';
import { defineCustomElement as defineField } from '@aranghat/base/field';
import { defineCustomElement as defineInput } from '@aranghat/base/input';
import { defineCustomElement as defineLabel } from '@aranghat/base/label';
import { defineCustomElement as defineSeparator } from '@aranghat/base/separator';

for (const define of [defineButton, defineCard, defineField, defineInput, defineLabel, defineSeparator, defineLogin]) define();
