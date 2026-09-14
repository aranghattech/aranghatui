#!/usr/bin/env bash
# Runs a command inside the official Playwright image so screenshots are
# byte-identical on every machine and in CI (ADR-0018). Servers used by the
# tests are zero-dependency Node static servers over BUILT output, so the
# host's macOS node_modules never needs native Linux binaries.
#
#   scripts/pw-docker.sh npx playwright test --project=visual
#
# Set ARTUI_NO_DOCKER=1 to run on the host instead (baselines will not match).
set -euo pipefail
IMG="mcr.microsoft.com/playwright:v1.63.0-noble"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
if [[ -n "${ARTUI_NO_DOCKER:-}" || -f /.dockerenv || -n "${GITHUB_ACTIONS:-}" ]]; then
  cd "$ROOT/tests" && exec "$@"
fi
exec docker run --rm -t --ipc=host --init \
  -v "$ROOT":/work -w /work/tests \
  -e CI="${CI:-}" -e HOME=/tmp -e ARTUI_UPDATE_SNAPSHOTS="${ARTUI_UPDATE_SNAPSHOTS:-}" \
  "$IMG" "$@"
