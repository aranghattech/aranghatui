---
'@aranghat/primitives': patch
---

Roving tabindex skips disabled items toward the key pressed: `End` lands on the last enabled item and `Home` on the first. `End` used to search forward from a disabled last item and wrap around to the start.
