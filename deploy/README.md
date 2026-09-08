# deploy/

K3s manifests for the study planner. Self-contained — `homelab-infra` knows
nothing about this app; it only provides the shared `app-deployer` identity that
`KUBE_TOKEN` authenticates as.

| | prod |
|---|---|
| namespace | `eth-planner-prod` |
| hostname | `eth-planner.sthomas.ch` |
| overlay | `deploy/prod` |

**Prod is the only environment.** `base/` holds the Namespace + Deployment +
Service + HTTPRoute; `prod/` only overlays the namespace. The Namespace name in
`base/` is a placeholder that the overlay's `namespace:` transformer rewrites.
If a dev environment is ever wanted, add a `dev/` overlay that sets the
namespace and patches the HTTPRoute hostname, exactly as `sthomas.ch` does.

## Before the first deploy

**TLS needs nothing.** The `gateway-tls-public` `Certificate` in `homelab-infra`
already lists `*.sthomas.ch`, which covers `eth-planner.sthomas.ch` — a wildcard
matches exactly one label, and this hostname is one label deep. Nothing to add.

(The wildcard does *not* cover the apex `sthomas.ch`, which is why that is listed
separately, nor anything multi-label like `a.b.sthomas.ch`. Only a hostname of
either of those shapes would need a new SAN.)

**DNS does need a record**, unless a `*.sthomas.ch` record already resolves to
the same address as `sthomas.ch`. Certificates and DNS are separate concerns — a
wildcard cert does not imply a wildcard A record.

To use a different hostname, change it in `base/httproute.yaml` and the comment
in `prod/kustomization.yaml`.

## Routing

Traefik is the public edge (`service.type: LoadBalancer`). The
`traefik-gateway` listeners have no hostname restriction, so this HTTPRoute
attaches and matches on `Host`.

## Workflow

`.github/workflows/deploy.yml` — prod only, two ways in.

**Push a calver tag** and it deploys automatically, provided the tag is a final
release *and* is reachable from `main`. Anything else is **skipped, not failed** —
tagging an `-rc.1` is a normal thing to do and should not turn the run red.

**Run workflow** (manual) deploys whatever tag you name, **pre-releases
included**. This is the deliberate override path, so it does not block: it warns
in the log about whatever is unusual about the tag and ships it.

| | pre-release | reachable from `main` | result |
|---|---|---|---|
| tag push | no | yes | deploys |
| tag push | no | no | skipped, notice |
| tag push | yes | either | skipped, notice |
| manual | no | yes | deploys |
| manual | no | no | deploys, warning |
| manual | yes | either | deploys, warning |

Note the tag filter is a glob, so `v2026.0.16-rc.1` *does* start the workflow —
the pre-release decision is made in the `gate` job, not by the filter.

The `latest` image tag only moves for a final release. A manual pre-release
deploy pushes its own version tag and leaves `latest` pointing at the last real
release.

`lint-build` gates every run and every push. Since the app has no build step, it
instead `node --check`s every JS file, runs `scripts/validate-programmes.mjs`,
and asserts that `index.html` actually loads each shipped programme file.

## Required secrets

Same set as `sthomas.ch`, in the `Prod` environment:
`DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN`, `TS_AUTHKEY`, `HEADSCALE_URL`,
`KUBE_API`, `KUBE_CA`, `KUBE_TOKEN`.

## Image

`<dockerhub-user>/eth-planner`, multi-arch (amd64 + arm64) so it runs on the
arm64 worker. The image is a single nginx stage — there is nothing to compile.

`.dockerignore` excludes `*.json`, so a downloaded personal plan sitting in the
working tree can never be baked into a published image.
