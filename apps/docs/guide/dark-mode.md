# Dark Mode

`aranghat.css` ships both themes. Dark applies when either:

- `<html data-theme="dark">` is set, or
- the OS prefers dark **and** `data-theme="light"` is not set.

An explicit `data-theme="light"` always wins over the OS preference.
