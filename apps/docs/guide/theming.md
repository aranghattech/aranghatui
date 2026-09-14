# Theming

Components read **semantic** tokens (`--art-color-bg-surface`, `--art-color-fg-muted`, `--art-radius`, …) through the shadow boundary. A theme is a stylesheet that overrides semantic tokens — nothing else.

```css
/* my-brand.css — import after aranghat.css */
:root { --art-color-primary-solid: #1a7a55; --art-radius: 0.5rem; }
[data-theme="dark"] { --art-color-primary-solid: #3ecf8e; }
```

Brand themes shipped by artui live at `@aranghat/tokens/themes/<name>.css` (Phase 1). Changing `--art-radius` restyles every component: `sm/md/lg/xl` derive from it with `calc()`.
