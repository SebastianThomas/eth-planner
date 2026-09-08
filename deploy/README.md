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

`.github/workflows/deploy.yml` — **manual only**, prod only.

Run it from the Actions tab and give it a tag (`v2026.0.16`). A tag push on its
own deploys nothing. Two guards run before anything is built:

- pre-release tags (`v2026.0.16-rc.1`) are rejected
- the tag must be reachable from `main`

The second guard is stricter than `sthomas.ch`'s prod, which only rejects
pre-releases. There, a bad tag would surface in dev first; here there is no dev
environment, so the tag going to prod is the only one that ever runs. Drop the
`git merge-base` step in `deploy.yml` if you would rather ship arbitrary tags.

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
