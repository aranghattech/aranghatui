# The artui documentation site.
#
#   docker build -f apps/docs/Dockerfile -t aranghat/ui-docs .      (context: the repository root)
#   docker run --rm -p 8080:8080 aranghat/ui-docs
#
# The site embeds live components, so the build needs the component packages built first. Turbo's
# filter pulls in exactly the docs' dependency graph and skips the sandbox apps, which the pages
# read as source rather than as build output.

FROM node:24-bookworm-slim AS build
ENV PNPM_HOME=/pnpm PATH=/pnpm:$PATH CI=true
RUN corepack enable
WORKDIR /repo

COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm turbo run build --filter=@artui/docs...

# nginx rather than a Node process: the output is static, and this keeps the image to the site
# plus a web server instead of a toolchain.
FROM nginx:1.29-alpine AS runtime
LABEL org.opencontainers.image.title="artui docs" \
      org.opencontainers.image.description="Documentation site for the artui design system" \
      org.opencontainers.image.source="https://github.com/aranghattech/aranghatui"

COPY apps/docs/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /repo/apps/docs/.vitepress/dist /usr/share/nginx/html

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO- http://127.0.0.1:8080/ >/dev/null || exit 1
