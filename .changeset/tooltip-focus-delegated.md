---
'@aranghat/primitives': patch
---

Hover intent opens on keyboard focus of a control inside a shadow host. It checked `:focus-visible` on the retargeted event target; a delegates-focus host such as Button or Toggle never matches it, so a Tooltip whose trigger is a Button or a Toggle did not open from the keyboard.
