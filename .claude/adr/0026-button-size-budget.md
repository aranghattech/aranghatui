# ADR-0026: Button's component budget is 3.25 kB, not the 3 kB tier-2 atom budget

**Status:** Accepted (2026-09-20)

## Context

CLAUDE.md §7 gives every tier-2 atom a 3 kB gzip budget. `art-button` has been the closest to it
since 1.0, and `fix(base): forward aria-keyshortcuts and aria-description to the native button`
pushed it 23 B over.

Button is the largest atom for reasons that are not incidental:

- it renders **two controls**, `<button>` and `<a>` (`href` makes it a real anchor rather than a
  button with a click handler — §12: no `asChild`), so the class strings and the ARIA wiring exist
  twice in the module;
- it carries the **loading spinner** inline, because an icon dependency in an atom would cost more;
- it **adopts five ARIA attributes** off the host (`aria-label`, `-expanded`, `-haspopup`,
  `-description`, `-keyshortcuts`). A generic host may carry none of them (axe
  `aria-prohibited-attr`) while the focusable element lives in the shadow root, so each one is a
  prop, a state and a removal.

An attempt to buy the 23 B back by writing the forwarded ARIA once and spreading it into whichever
control renders made the module **11 B bigger**: the duplicated attribute list costs almost nothing
after gzip, while the spread adds `Object.assign`-shaped runtime machinery that does not compress
away. The remaining levers are all behavioural — drop an ARIA attribute, drop the anchor branch, or
move the spinner out — and each of them is worse than 250 B.

## Decision

`art-button`'s per-component budget is **3.25 kB gzip**, recorded as `budgetKb: 3.25` on its entry
in `tooling/catalog.json`; `scripts/gen-size-limit.mjs` emits the limit from there, so
`.size-limit.json` stays generated.

Every other tier-2 atom keeps the 3 kB budget of §7. This is an exception for one component, not a
new tier budget: the 27 other atoms are between 0.9 kB and 2.6 kB and none of them is near it.

## Consequences

- The Button entry in `.size-limit.json` reads `3.25 kB` and CI fails on a regression past that, so
  the component is still bounded — the overage cannot grow silently.
- The reference-app budgets in §7 are unchanged: the landing page (tokens + runtime + Button + icon)
  stays at 15 kB and is measured at 14.2 kB, so the extra 250 B is already inside a budget that
  holds.
- The next atom that wants an exception needs its own ADR, and the question it must answer is the
  one Button answers above: which of its bytes are a platform obligation rather than a choice.
