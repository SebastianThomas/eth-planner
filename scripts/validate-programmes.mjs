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
const EXAM_MODES = new Set(["oral", "written", "none", "?"]);
const SEMESTERS = new Set(["HS", "FS", "BOTH", "NA"]);

const problems = [];
const warnings = [];
const fail = (m) => problems.push(m);
const warn = (m) => warnings.push(m);

const files = readdirSync(DIR).filter(f => f.endsWith(".js") && f !== "registry.js");
if (!files.length) fail("no programme definitions found");

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
