# Contributing

Read `CLAUDE.md` first. One component at a time; `pnpm verify` is the gate. Docker is required for the visual, a11y and smoke suites (`scripts/pw-docker.sh`). Repo-local skills in `skills/` describe each workflow.

## Running this site

For writing docs, run it from source with hot reload:

```bash
pnpm -F @artui/docs dev
```

To serve exactly what gets deployed, build the container image:

```bash
pnpm docs:image     # docker build -f apps/docs/Dockerfile -t aranghat/ui-docs .
pnpm docs:serve     # docker run --rm -p 8080:8080 aranghat/ui-docs  → http://localhost:8080
```

The build runs inside the image, so it needs nothing installed but Docker. It is a two-stage build: the first stage installs the workspace and runs `turbo run build --filter=@artui/docs...`, which builds the component packages the live previews embed and skips the sandbox apps, whose files the pages read as source. The second stage is nginx serving the static output, so the image carries the site and a web server rather than a toolchain.

Port 8080 rather than 5173, which `vitepress dev` already uses — otherwise the dev server and the container fight over it and you read whichever answers first.

nginx is configured for VitePress's `cleanUrls`: a request for `/guide/theming` tries the path, then `theming.html`, then a directory index. A miss returns a real 404 status with VitePress's own 404 page as the body. Hashed assets under `/assets/` are immutable for a year; everything else revalidates, so a redeploy is picked up immediately.
