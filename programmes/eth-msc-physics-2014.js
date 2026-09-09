/* ETH Zürich — MSc Physics, Programme Regulations 2014 (RSETHZ 324.1.0900.21).
 *
 * Still the current regulation as of the HS 2026 study guide. Numbers from the
 * Study Guide MSc Physics ed. HS 2026 (category table p. 10; 100-credit cap p. 23)
 * and the non-binding English translation of the 2014 Regulations (Art. 16-17, 29-31).
 *
 * Catalogue not yet populated — credit rules only.
 */
registerProgramme({
  id: "eth-msc-physics-2014",
  name: "MSc Physics",
  institution: "ETH Zürich",
  regulations: "Programme Regulations 2014 (RSETHZ 324.1.0900.21)",
  degreeTitle: "Master of Science ETH in Physics",
  sources: [
    "Study Guide MSc in Physics, edition HS 2026",
    "Programme Regulations 2014, RSETHZ 324.1.0900.21 (non-binding English translation)",
  ],

  totalRequired: 90,
  maxAccreditable: 100,
  finalProject: { category: "Master's thesis", credits: 30, maxMissingAtStart: 0 },

  majors: [],
  minors: [],

  categories: [
    { key: "Core courses - theoretical", req: 10, max: null,
      note: "Split out so the theory/experiment balance inside the 30 is checkable." },
    { key: "Core courses - experimental", req: 10, max: null },
    { key: "Core courses - further", req: 10, max: null,
      note: "The remainder of the 30 core credits, either flavour. Normally three courses in total." },
    { key: "Electives in Physics and Mathematics", req: 10, max: null },
    { key: "General electives", req: 10, max: null,
      note: "The rest of the 20 elective credits; no separate minimum in the regulation." },
    { key: "Proseminars and semester projects", req: 8, max: null,
      note: "A proseminar OR a semester project. Passing this is a hard prerequisite for the thesis." },
    { key: "Science in Perspective (GESS)", req: 2, max: null,
      note: "Excluded from the final grade. Language courses count only above a defined level." },
    { key: "Master's thesis", req: 30, max: 30 },
    { key: "(not counted)", req: 0, max: null, note: "Parked - contributes to nothing." },
  ],

  groups: [
    { key: "Core courses total", members: ["Core courses - theoretical", "Core courses - experimental",
                                           "Core courses - further"], req: 30,
      note: "30 ECTS of core courses, of which at least 10 theoretical and at least 10 experimental." },
    { key: "Electives total", members: ["Electives in Physics and Mathematics", "General electives"], req: 20,
      note: "20 ECTS of electives, of which at least 10 from Physics and Mathematics." },
  ],

  // 10+10+10 + 10+10 + 8 + 2 + 30 = 90 exactly. No free remainder.

  // Art. 30: Science in Perspective grades are excluded from the final grade.
  gradeAverage: {
    categories: [
      "Core courses - theoretical", "Core courses - experimental", "Core courses - further",
      "Electives in Physics and Mathematics", "General electives",
      "Proseminars and semester projects", "Master's thesis",
    ],
  },

  rules: {
    maxEctsPerSemester: 34,
    maxOralsPerSemester: null,
    atMostOne: [],
    notes: [
      "The 8-ECTS proseminar or semester project is a hard prerequisite for starting the Master's thesis. Theory track: a proseminar, or exceptionally a small theoretical project. Experimental track: a project in a research group or at a research institute; external projects need an internal ETH supervisor.",
      "Thesis admission also requires the Bachelor's programme to be complete (at least the degree request filed) and all additional admission requirements fulfilled — the regulation allows no credit shortfall.",
      "'Scientific Works in Physics' is compulsory for students without an ETH BSc in Physics and must be taken before the thesis. The study guide states no ECTS value for it, so it is not modelled as a category.",
      "Mobility: at most 30 ECTS from an exchange count toward the degree, of which at most 10 as core courses. A thesis done abroad and UZH courses listed in the ETH catalogue do NOT count as exchange credits.",
      "Downgrading a core course to an elective is allowed, and core credits may also count toward 'Electives in Physics and Mathematics'.",
      "Normal duration 3 semesters; maximum 3 years. At most 100 ECTS count toward the degree.",
      "The 'at least 44 ECTS in the first two semesters' rule belongs to the DIRECT DOCTORATE appendix only. It is not a requirement of the standard MSc.",
    ],
  },

  catalogue: [],
});
