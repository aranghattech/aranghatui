---
'@aranghat/base': patch
---

Button and Toggle move `aria-keyshortcuts` from the host onto their native button, so the shortcut is announced with the focused control. Toggle does the same for `aria-description`, which Tooltip sets on its trigger. Button's forwarding of `aria-expanded`, `aria-haspopup` and `aria-description` works again: the values were dropped, so popover and dropdown triggers built on Button lost their expanded state.
