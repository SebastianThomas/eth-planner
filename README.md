# Study Planner

Try it out at [eth-planner.sthomas.ch](https://eth-planner.sthomas.ch/).

A single-page planner for degree programmes with credit-category rules — the sort where you must
collect *N* credits here, *M* there, and a course may count in one category but not two.

> **Disclaimer — not an official source.** This is an unofficial planning aid, not a source of
> truth. Course data and credit rules are copied from published university sources on a
> best-effort basis; they go out of date, some entries are explicitly marked unverified, and
> mistakes are possible. Always confirm against the official course catalogue, the programme
> regulations and your studies administration office before making any decision. **No guarantee
> is given that anything here is correct, complete or current.** Provided as-is, without warranty.

Open `index.html` in a browser. No server, no build step, no dependencies.

```bash
open index.html
```

Ships with **ETH Zürich MSc Computer Science (Programme Regulations 2020)**. Other programmes are
plain data files — see [Adding a programme](#adding-a-programme).

## What it does

Pick your programme, major and minor; add courses; assign each one a **category**, **semester** and
**status**. Everything else updates live.

- **Clear credit accounting.** Category requirements show *Earned*, *Provisional* (registered or
  fixed, not yet graded), then *Required*. A status explains whether the minimum is met,
  awaiting grades, still to arrange, or needs more courses added. Requirements needing attention
  are colored; earned and provisional credits stay neutral. The semester table breaks down
  commitments by semester. *Considering* and *Waitlist* are visible but count for nothing.
- **Grade averages.** Enter a grade per course and get the credit-weighted average per semester and
  overall, the way a final transcript computes it. Pass/fail work is excluded automatically, and
  completed courses still lacking a grade are flagged rather than silently skipped.
- **Rules are checked, not just displayed.** Category minima and ceilings, multi-category groups
  (e.g. "core + elective ≥ 26"), the accreditation ceiling, the credits needed before the final
  project, and "only one seminar".
- **Categories follow your major and minor.** A course carries the categories it may count in *per
  major/minor*, so switching your minor changes what each course is worth. In the category dropdown
  the whole programme is listed but everything your course cannot count towards is **disabled**, and
  the rule is enforced on assignment too, so it cannot be bypassed. A saved plan that puts a course
  somewhere it no longer belongs is reported rather than silently accepted.
- **Mandatory courses stay mandatory.** Programme definitions may mark fixed curriculum courses;
  these are added automatically, locked to their required category, and cannot be removed or moved
  into an opt-out status. Their completion and semester can still be updated normally.
- **Personal constraints too.** Set a maximum ECTS and a maximum number of oral exams per semester;
  the semester table flags breaches.
- **Assessment is first class.** Every course is tagged oral / written / no exam, so you can plan
  around exam style, not just credits.
- **Offering frequency.** Courses carry a periodicity, and the ones that are *two-yearly* or
  *one-off* are called out — dropping those costs far more than a single year.

## Your data

Everything you enter — name, student number, major, minor, semesters, course choices — is stored in
`localStorage` in your browser and nowhere else. Nothing is sent anywhere.
Each programme has its own saved workspace, so switching between a Bachelor's and Master's plan
does not lose either one. The last active programme is restored when the planner reopens.

| Button | Effect |
|---|---|
| **Download plan** | writes all programme workspaces to a JSON file |
| **Upload plan** | **replaces** what is stored here; unknown courses are skipped and reported, invalid values fall back to safe defaults |
| **Copy JSON** | the same document, to the clipboard |
| **Clear** | wipes every programme workspace from this browser — gated by a confirmation dialog that names exactly what will be lost and offers to download a copy first |
| **Download / Upload programme** | export the active programme definition, or load one of your own |

The repository ships **no plan** — it starts empty. `.gitignore` excludes `*.json`, so a plan you
download into this folder is never committed.

## Adding a programme

Copy `programmes/template.js`, fill it in, and add a `<script>` tag for it in `index.html`. Or build
the same object as JSON and use **Upload programme** — no file editing needed.

Programme files are wrapped in `.js` rather than `.json` only so the page works from `file://`,
where fetching a local JSON file is blocked. The contents are plain data.

The key idea is `counts`, which makes a course's value depend on your track:

```js
{ id: "263-4665-00L", title: "Zero-Knowledge Proofs", ects: 5, sem: "HS", exam: "written",
  counts: [
    { cat: "Major - Elective", major: "Secure and Reliable Systems" },
    { cat: "Minor",            minor: "Theoretical Computer Science" },
    { cat: "Free Electives" }                       // applies whatever you picked
  ] }
```

Other fields: `sem` is `HS` / `FS` / `BOTH` / `NA`; `exam` is `oral` / `written` / `none` / `?`;
`flexEcts: [8, 10]` makes the credit value editable within a band (for a project whose size you
negotiate); `passFail: true` keeps a course out of the grade average; `vvz` links to the ETH course
catalogue.

## Deployment

Containerised as a single nginx stage (there is nothing to compile) and deployed to K3s via
`.github/workflows/deploy.yml` — manual, prod only, serving `eth-planner.sthomas.ch`.
See [`deploy/README.md`](deploy/README.md) for the required secrets and the DNS record.

```bash
docker build -t eth-planner . && docker run --rm -p 8080:80 eth-planner
```

`scripts/validate-programmes.mjs` is the CI gate: it checks every programme definition for unknown
category, major and minor references, duplicate course ids, bad ECTS/semester/exam values and
courses that can never be assigned. Run it locally before pushing.

## Files

| File | Purpose |
|---|---|
| `index.html` | markup |
| `style.css` | styling, light and dark |
| `app.js` | state, rule checking, rendering, JSON import/export — no programme or personal data |
| `programmes/registry.js` | how programme files register themselves, and the full schema |
| `programmes/eth-msc-computer-science-2020.js` | ETH MSc CS |
| `programmes/template.js` | skeleton for a new programme |
| `scripts/validate-programmes.mjs` | consistency check for programme definitions (the CI gate) |
| `Dockerfile`, `nginx.conf` | container image |
| `deploy/` | K3s manifests, prod overlay only |

## Data quality

The ETH programme file draws its credit rules from the D-INFK Study Guide MSc CS 2020 (March 2026)
and its course data from the ETH course catalogue (VVZ) for Autumn Semester 2026 and Spring
Semester 2026.

The `counts` tags are complete for the **Secure and Reliable Systems** and **Theoretical Computer
Science** tracks, which were checked course by course against the VVZ "Offered in" table. Other
majors and minors are selectable but only partially tagged — additions welcome.

**Every one of the 61 catalogue entries has a VVZ-verified assessment mode** — 28 written, 14 oral,
19 with no session exam at all — along with the coursework breakdown where the catalogue publishes
one. Two entries carry data from an earlier run because the course did not take place in the
current year (Concepts of Object-Oriented Programming, Algorithmics for Hard Problems); both say so
in their note, and ETH can change the format when a course returns.

Note that `exam: "oral"` marks any *oral assessment*, not only a session exam: Hardware Security and
Guarantees for Machine Learning have no session exam but are graded partly by oral assessments, and
they are tagged accordingly so an oral-per-semester limit catches them.

The VVZ notes that assessment details may change until a semester begins. This is a planning aid;
the binding sources are the official course catalogue, the study guide and your studies
administration office.
