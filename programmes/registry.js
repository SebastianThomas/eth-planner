/* Programme registry.
 *
 * Each programme file calls registerProgramme(<definition>). Definitions are plain
 * JSON-shaped data - they are wrapped in a .js file only so the page works straight
 * from file:// without a server (fetch() of a local .json is blocked by CORS).
 *
 * The page can also import a programme definition as JSON at runtime; the shape is
 * identical to what these files pass in, and to what "Download programme" produces.
 *
 * A definition describes a degree programme. It contains no personal data:
 * who you are, which major you chose and which courses you picked all live in
 * your own plan file, which the page keeps in localStorage and you export yourself.
 *
 * ---------------------------------------------------------------------------
 * SHAPE
 * ---------------------------------------------------------------------------
 * id                 unique slug
 * name               e.g. "MSc Computer Science"
 * institution        e.g. "ETH Zürich"
 * regulations        e.g. "Programme Regulations 2020"
 * degreeTitle        awarded title
 * sources[]          where the data came from (shown in the footer)
 * totalRequired      credits needed to graduate
 * maxAccreditable    ceiling on credits that may be accredited
 * finalProject       { category, credits, maxMissingAtStart }
 * majors[]           selectable majors (may be empty)
 * minors[]           selectable minors (may be empty)
 * categories[]       { key, req, max, note }
 * groups[]           { key, members[], req, note }   e.g. major core + elective >= 26
 * rules              { maxEctsPerSemester, maxOralsPerSemester, atMostOne[] }
 * catalogue[]        courses - see below
 *
 * A course:
 *   id, title, ects, sem ("HS"|"FS"|"BOTH"|"NA"), exam ("oral"|"written"|"none"|"?"),
 *   examDetail?, lect?, vvz?, note?, flexEcts?: [min,max],
 *   counts: [ { cat, major?, minor? }, ... ]
 *
 * `counts` is the key idea: a course may count in different categories depending on
 * which major or minor you picked. An entry with no `major`/`minor` applies always;
 * one with `major: "X"` applies only if X is your major. The page offers you exactly
 * the categories that your chosen major/minor make available.
 */

(function (global) {
  global.PLANNER_PROGRAMMES = global.PLANNER_PROGRAMMES || [];
  global.registerProgramme = function (def) {
    if (!def || !def.id) { console.error("programme definition needs an id", def); return; }
    const i = global.PLANNER_PROGRAMMES.findIndex(p => p.id === def.id);
    if (i >= 0) global.PLANNER_PROGRAMMES[i] = def;
    else global.PLANNER_PROGRAMMES.push(def);
  };
})(window);
