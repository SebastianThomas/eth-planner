#!/usr/bin/env node
/* Regression guard for MSc Computer Science.
 *
 * This is the most-used programme, so its numbers are pinned here as golden values.
 * Adding other programmes must not move any of them. Run alongside the validator:
 *   node scripts/regression-cs.mjs
 *
 * If a change to MSc CS is deliberate, update the EXPECTED block and say so in the commit.
 */
import { readFileSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";

const FILE = "programmes/eth-msc-computer-science-2020.js";
const ID = "eth-msc-computer-science-2020";

const EXPECTED = {
  totalRequired: 120,
  maxAccreditable: 130,
  courses: 61,
  categories: 10,
  exams: { written: 28, oral: 14, none: 19, "?": 0 },
  minimaSum: 92,          // sum of category req
  groupExcess: 10,        // "Major total" 26 minus (Core 16 + Elective 0)
  remainderCredits: 18,   // 92 + 10 + 18 = 120
  // courses reachable by the fully-tagged track this programme was built for
  srsTcsVisible: 61,
  finalProject: { category: "Master's Thesis", credits: 30 },
};

const problems = [];
const ok = [];
const check = (label, actual, want) => {
  const a = JSON.stringify(actual), w = JSON.stringify(want);
  if (a === w) ok.push(`${label} = ${a}`);
  else problems.push(`${label}: expected ${w}, got ${a}`);
};

// load every programme so id collisions are caught too
const defs = [];
for (const f of readdirSync("programmes").filter(f => f.endsWith(".js") && f !== "registry.js")) {
  new Function("registerProgramme", readFileSync(`programmes/${f}`, "utf8"))(d => defs.push({ f, d }));
}
const ids = defs.map(x => x.d.id);
const dupes = ids.filter((v, i) => ids.indexOf(v) !== i);
if (dupes.length) problems.push(`duplicate programme ids across files: ${[...new Set(dupes)].join(", ")}`);

const hit = defs.find(x => x.d.id === ID);
if (!hit) {
  console.error(`::error::${ID} not found — MSc CS is missing entirely`);
  process.exit(1);
}
if (hit.f !== FILE.split("/")[1]) problems.push(`${ID} came from ${hit.f}, expected ${FILE}`);
const p = hit.d;

check("totalRequired", p.totalRequired, EXPECTED.totalRequired);
check("maxAccreditable", p.maxAccreditable, EXPECTED.maxAccreditable);
check("catalogue size", p.catalogue.length, EXPECTED.courses);
check("categories", p.categories.length, EXPECTED.categories);
check("finalProject", { category: p.finalProject?.category, credits: p.finalProject?.credits },
      EXPECTED.finalProject);

const exams = { written: 0, oral: 0, none: 0, "?": 0 };
for (const c of p.catalogue) exams[c.exam] = (exams[c.exam] || 0) + 1;
check("exam modes", exams, EXPECTED.exams);

const minima = p.categories.reduce((a, c) => a + (c.req || 0), 0);
check("category minima sum", minima, EXPECTED.minimaSum);

const excess = (p.groups || []).reduce((a, g) => {
  const mem = g.members.reduce((n, m) => n + (p.categories.find(c => c.key === m)?.req || 0), 0);
  return a + Math.max(0, g.req - mem);
}, 0);
check("group excess", excess, EXPECTED.groupExcess);
check("remainder credits", p.remainder?.credits, EXPECTED.remainderCredits);
check("minima + excess + remainder", minima + excess + (p.remainder?.credits ?? 0), p.totalRequired);

// the SRS + TCS track must still see every course this file was built for
const visible = p.catalogue.filter(c => c.counts.some(t =>
  (!t.major || t.major === "Secure and Reliable Systems") &&
  (!t.minor || t.minor === "Theoretical Computer Science"))).length;
check("courses visible to SRS+TCS", visible, EXPECTED.srsTcsVisible);

// index.html must still load it
if (!readFileSync("index.html", "utf8").includes(FILE)) problems.push(`index.html no longer loads ${FILE}`);

const sha = createHash("sha256").update(readFileSync(FILE)).digest("hex").slice(0, 12);
console.log(`MSc CS regression — ${FILE} (sha256 ${sha})`);
for (const line of ok) console.log(`  ok   ${line}`);
if (problems.length) {
  for (const x of problems) console.error(`::error::MSc CS regression: ${x}`);
  console.error(`\n${problems.length} regression(s) in the most-used programme`);
  process.exit(1);
}
console.log(`\nMSc CS intact — ${ok.length} checks passed, ${defs.length} programme(s) loaded`);
