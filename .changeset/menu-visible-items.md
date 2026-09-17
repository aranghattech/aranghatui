---
'@aranghat/navigation': minor
'@aranghat/primitives': minor
---

Menus size themselves to their content. An open Dropdown or Context Menu is now as tall as its items and scrolls only when the viewport leaves no room, instead of clipping at a fixed height; `visible-items` caps it at a number of rows measured from a real item. The floating primitive publishes the room it has as `--art-available-height`, and a Context Menu written with `open` now opens at the corner of its area rather than staying shut.
