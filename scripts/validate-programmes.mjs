#!/usr/bin/env node
/* Validates every programme definition under programmes/.
 *
 * There is no build step in this project, so this is the CI gate: it proves
 * each definition is internally consistent before an image is ever built.
 * Run it locally with `node scripts/validate-programmes.mjs`.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "programmes";
const ENTRY = "index.html";
// Three kinds of file live in programmes/:
//   registry.js  - infrastructure. Must ship (it defines registerProgramme), but
//                  is not a programme, so it is not validated as one.
//   template.js  - a skeleton. Must NOT ship, or its placeholder programme turns
//                  up in the picker. Still validated, to keep the example honest.
//   everything else - a real programme. Must ship.
const INFRASTRUCTURE = new Set(["registry.js"]);
const MUST_NOT_SHIP = new Set(["template.js"]);
const EXAM_MODES = new Set(["oral", "written", "none", "?"]);
const SEMESTERS = new Set(["HS", "FS", "BOTH", "NA"]);

/* Sum of the minima a plan must actually satisfy. A group minimum can exceed the sum of
   its members' own minima (e.g. Major total 26 vs Core 16 + Elective 0); that excess is a
   genuine extra requirement, so count it once. */
function effectiveMinima(def, cats) {
  let n = (def.categories || []).reduce((a, c) => a + (c.req || 0), 0);
  for (const g of def.groups || []) {
    const members = (g.members || []).reduce((a, m) => {
      const c = (def.categories || []).find(x => x.key === m);
      return a + (c ? (c.req || 0) : 0);
    }, 0);
    n += Math.max(0, (g.req || 0) - members);
  }
  return n;
}

const problems = [];
const warnings = [];
const fail = (m) => problems.push(m);
const warn = (m) => warnings.push(m);

const files = readdirSync(DIR).filter(f => f.endsWith(".js") && f !== "registry.js");
if (!files.length) fail("no programme definitions found");

// Cross-check against index.html, both directions: a new programme that nobody
// wired up is invisible, and a stale <script> tag is a 404 at runtime.
const html = readFileSync(ENTRY, "utf8");
const allJs = readdirSync(DIR).filter(f => f.endsWith(".js"));
for (const f of allJs) {
  const referenced = html.includes(`${DIR}/${f}`);
  if (MUST_NOT_SHIP.has(f)) {
    if (referenced) fail(`${ENTRY} loads ${DIR}/${f}, which is a skeleton and must not ship`);
  } else if (!referenced) {
    const what = INFRASTRUCTURE.has(f) ? "is required but" : "is a programme that";
    fail(`${DIR}/${f} ${what} is never loaded by ${ENTRY} - add a <script> tag for it`);
  }
}
for (const m of html.matchAll(new RegExp(`${DIR}/([A-Za-z0-9._-]+\\.js)`, "g"))) {
  if (!allJs.includes(m[1])) fail(`${ENTRY} references ${DIR}/${m[1]}, which does not exist`);
}

const programmes = [];
for (const f of files) {
  const src = readFileSync(join(DIR, f), "utf8");
  try {
    new Function("registerProgramme", src)(def => programmes.push({ file: f, def }));
  } catch (e) {
    fail(`${f}: did not evaluate - ${e.message}`);
  }
}

const seenIds = new Set();
for (const { file, def } of programmes) {
  const where = (m) => `${file}: ${m}`;

  for (const k of ["id", "name", "totalRequired", "categories", "catalogue"]) {
    if (def[k] === undefined) fail(where(`missing required field "${k}"`));
  }
  if (!def.id) continue;
  if (seenIds.has(def.id)) fail(where(`duplicate programme id "${def.id}"`));
  seenIds.add(def.id);

  const cats = new Set((def.categories || []).map(c => c.key));
  const majors = new Set(def.majors || []);
  const minors = new Set(def.minors || []);

  if (def.finalProject && !cats.has(def.finalProject.category)) {
    fail(where(`finalProject.category "${def.finalProject.category}" is not a category`));
  }
  for (const g of def.groups || []) {
    for (const m of g.members || []) {
      if (!cats.has(m)) fail(where(`group "${g.key}" references unknown category "${m}"`));
    }
  }
  // remainder: the free credits topping the plan up to the total, restricted by category
  if (def.remainder) {
    const r = def.remainder;
    if (typeof r.credits !== "number") fail(where("remainder.credits must be a number"));
    if (!Array.isArray(r.allowedCategories) || !r.allowedCategories.length) {
      fail(where("remainder.allowedCategories must be a non-empty array"));
    } else {
      for (const k of r.allowedCategories) {
        if (!cats.has(k)) fail(where(`remainder.allowedCategories references unknown category "${k}"`));
      }
    }
    const minima = effectiveMinima(def, cats);
    if (typeof r.credits === "number" && minima + r.credits !== def.totalRequired) {
      fail(where(`category minima (${minima}) + remainder (${r.credits}) = ${minima + r.credits}, `
               + `but totalRequired is ${def.totalRequired}`));
    }
  } else {
    const minima = effectiveMinima(def, cats);
    if (minima < def.totalRequired) {
      warn(where(`category minima sum to ${minima} but the total is ${def.totalRequired} — `
               + `${def.totalRequired - minima} credits are unaccounted for. Add a remainder block.`));
    }
  }

  // gradeAverage: which categories the final grade averages over
  if (def.gradeAverage) {
    if (!Array.isArray(def.gradeAverage.categories)) {
      fail(where("gradeAverage.categories must be an array"));
    } else {
      for (const k of def.gradeAverage.categories) {
        if (!cats.has(k)) fail(where(`gradeAverage references unknown category "${k}"`));
      }
    }
  }

  for (const r of (def.rules && def.rules.atMostOne) || []) {
    if (!cats.has(r.category)) fail(where(`rules.atMostOne references unknown category "${r.category}"`));
  }
  for (const [a, b] of def.forbiddenCombinations || []) {
    if (!majors.has(a)) fail(where(`forbiddenCombinations references unknown major "${a}"`));
    if (!minors.has(b)) fail(where(`forbiddenCombinations references unknown minor "${b}"`));
  }

  const seenCourses = new Set();
  let unverified = 0;
  for (const c of def.catalogue || []) {
    const at = where(`course ${c.id || "(no id)"}`);
    if (!c.id) { fail(`${at} has no id`); continue; }
    if (seenCourses.has(c.id)) fail(`${at} is listed twice`);
    seenCourses.add(c.id);

    if (!c.title) fail(`${at} has no title`);
    if (typeof c.ects !== "number" || c.ects <= 0) fail(`${at} has a bad ects value: ${c.ects}`);
    if (!SEMESTERS.has(c.sem)) fail(`${at} has a bad sem value: ${c.sem}`);
    if (!EXAM_MODES.has(c.exam)) fail(`${at} has a bad exam value: ${c.exam}`);
    if (c.exam === "?") unverified++;
    if (c.mandatory !== undefined && c.mandatory !== true) fail(`${at} mandatory must be true when present`);

    if (c.flexEcts) {
      const [lo, hi] = c.flexEcts;
      if (!(lo <= c.ects && c.ects <= hi)) fail(`${at} default ects ${c.ects} is outside flexEcts [${lo}, ${hi}]`);
    }

    if (!Array.isArray(c.counts) || !c.counts.length) {
      fail(`${at} has no counts entries, so it can never be assigned`);
      continue;
    }
    for (const t of c.counts) {
      if (!cats.has(t.cat)) fail(`${at} counts towards unknown category "${t.cat}"`);
      if (t.major && !majors.has(t.major)) fail(`${at} references unknown major "${t.major}"`);
      if (t.minor && !minors.has(t.minor)) fail(`${at} references unknown minor "${t.minor}"`);
    }
    if (c.mandatory && (c.counts.length !== 1 || c.counts[0].major || c.counts[0].minor)) {
      fail(`${at} is mandatory but does not have exactly one unconditional category`);
    }
  }

  // Unverified assessment is a known, documented state - surface it, don't fail on it.
  if (unverified) warn(where(`${unverified} of ${def.catalogue.length} courses have exam: "?" (unverified)`));

  console.log(`ok  ${file}: ${def.name} - ${def.catalogue.length} courses, ${cats.size} categories`);
}

for (const w of warnings) console.log(`::warning::${w}`);

if (problems.length) {
  for (const p of problems) console.error(`::error::${p}`);
  console.error(`\n${problems.length} problem(s) found`);
  process.exit(1);
}
console.log(`\nall ${programmes.length} programme definition(s) valid`);
