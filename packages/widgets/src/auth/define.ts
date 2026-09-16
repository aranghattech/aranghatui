import { defineCustomElement as defineButton } from '@aranghat/base/button';
import { defineCustomElement as defineCard } from '@aranghat/base/card';
import { defineCustomElement as defineField } from '@aranghat/base/field';
import { defineCustomElement as defineInput } from '@aranghat/base/input';
import { defineCustomElement as defineLabel } from '@aranghat/base/label';
import { defineCustomElement as defineSeparator } from '@aranghat/base/separator';
import { defineOnClient } from '../define';

/**
 * The base elements an auth screen renders in its shadow root (lower tiers register lazily; peers,
 * never bundled). A no-op on the server: the hydrate app of each tier renders its own elements.
 */
export function defineAuthElements(): void {
  defineOnClient(defineButton, defineCard, defineField, defineInput, defineLabel, defineSeparator);
}

/**
 * Enter in an `art-input` submits the form. Implicit submission is a native-control behaviour:
 * the field's `<input>` lives in its own shadow root and has no form owner, so the widget does it.
 */
export function submitOnEnter(e: KeyboardEvent): void {
  if (e.key !== 'Enter' || e.defaultPrevented) return;
  const input = (e.composedPath() as Element[]).find((n) => n.nodeType === 1 && n.tagName === 'ART-INPUT');
  const form = (e.currentTarget as HTMLElement | null)?.closest?.('form') ?? (e.currentTarget as HTMLFormElement | null);
  if (!input || !form) return;
  e.preventDefault();
  form.requestSubmit();
}
