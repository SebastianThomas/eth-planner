/* Template for a new programme.
 *
 * Copy this file, fill it in, and add a <script> tag for it in index.html.
 * Everything here is plain data - the same shape the page accepts through
 * "Upload programme" and produces through "Download programme".
 *
 * This file is a skeleton and is deliberately NOT loaded by index.html, so the
 * placeholder programme below never shows up in the picker. It is still checked
 * by scripts/validate-programmes.mjs, which keeps the example honest.
 * Delete it if you do not need it.
 */

registerProgramme({
  id: "template-programme",              // unique slug, used in saved plans
  name: "Template Programme",
  institution: "Your university",
  regulations: "Programme Regulations YYYY",
  degreeTitle: "Master of Science in ...",
  sources: ["Where you took the rules and course data from"],

  totalRequired: 120,                    // credits needed to graduate
  maxAccreditable: 130,                  // ceiling, or null for no ceiling

  // The capstone. Credits outside this category are what gate its start.
  finalProject: { category: "Thesis", credits: 30, maxMissingAtStart: 8 },

  majors: ["Major A", "Major B"],        // [] if the programme has none
  minors: ["Minor A", "Minor B"],        // [] if the programme has none
  forbiddenCombinations: [               // [major, minor] pairs that are not allowed
    // ["Major A", "Minor A"],
  ],

  // Every bucket credits can land in. `req` is the minimum, `max` the ceiling.
  categories: [
    { key: "Major - Core",     req: 16, max: null, note: "Minimum from core courses." },
    { key: "Major - Elective", req: 0,  max: null, note: "" },
    { key: "Minor",            req: 18, max: null, note: "" },
    { key: "Free Electives",   req: 0,  max: null, note: "" },
    { key: "Thesis",           req: 30, max: 30,   note: "" },
    { key: "(not counted)",    req: 0,  max: null, note: "Parked - contributes to nothing." },
  ],

  // Requirements spanning several categories, e.g. core + elective together.
  groups: [
    { key: "Major total", members: ["Major - Core", "Major - Elective"], req: 26,
      note: "Core and elective together." },
  ],

  rules: {
    maxEctsPerSemester: 34,              // warn above this
    maxOralsPerSemester: 1,              // warn above this
    atMostOne: [                         // categories that accept only one course
      // { category: "Seminar", note: "Only one seminar may be accredited." },
    ],
    notes: ["Free-text rules shown in the footer."],
  },

  catalogue: [
    // sem:  "HS" (autumn) | "FS" (spring) | "BOTH" | "NA"
    // exam: "oral" | "written" | "none" | "?"  ("?" = not verified)
    // counts: which categories the course may land in. An entry with no
    //         major/minor always applies; one with major:"X" applies only
    //         when X is the selected major. Same for minor.
    // flexEcts: [min, max] makes the credit value editable in that band.
    {
      id: "000-0000-00L",
      title: "An example course",
      ects: 5,
      sem: "HS",
      exam: "written",
      examDetail: "Session exam, written 120' (70%) + graded homework (30%)",
      lect: "A. Lecturer",
      vvz: null,                         // ETH course-catalogue id, or null
      note: "Anything worth remembering about this course.",
      counts: [
        { cat: "Major - Core", major: "Major A" },
        { cat: "Minor", minor: "Minor B" },
        { cat: "Free Electives" },
      ],
    },
  ],
});
