/* ETH Zürich — MSc Applied Mathematics, Studienreglement 2012 (RSETHZ 324.1.0900.11),
 * consolidated edition 23.05.2023-5, Art. 32.
 *
 * The SECOND diploma of the MSc Mathematics programme. Its credit table differs from the
 * "Mathematics" diploma, which is why it is a separate file — see
 * eth-msc-mathematics-2012.js. The two diplomas cannot share credits (Art. 12).
 *
 * Catalogue not yet populated — credit rules only.
 */
registerProgramme({
  id: "eth-msc-applied-mathematics-2012",
  name: "MSc Applied Mathematics",
  institution: "ETH Zürich",
  regulations: "Studienreglement 2012 (RSETHZ 324.1.0900.11), edition 23.05.2023-5, Art. 32",
  degreeTitle: "Master of Science ETH in Applied Mathematics",
  sources: ["Studienreglement 2012, RSETHZ 324.1.0900.11, edition 23.05.2023-5 (credit table Art. 32)"],

  totalRequired: 90,
  maxAccreditable: 100,
  finalProject: { category: "Master's thesis", credits: 30, maxMissingAtStart: 0 },

  majors: [],
  minors: [],

  categories: [
    { key: "Core courses (Kernfächer)", req: 14, max: null },
    { key: "Electives (Wahlfächer)", req: 0, max: null },
    { key: "Field of application (Anwendungsgebiet)", req: 8, max: null,
      note: "Only credits from the ONE chosen field of application count here." },
    { key: "Semester papers", req: 8, max: null,
      note: "At least one semester paper must be linked to the chosen field of application." },
    { key: "Seminars", req: 0, max: null },
    { key: "Science in Perspective (GESS)", req: 2, max: null,
      note: "Excluded from the final grade." },
    { key: "Master's thesis", req: 30, max: 30 },
    { key: "(not counted)", req: 0, max: null, note: "Parked - contributes to nothing." },
  ],

  groups: [
    { key: "Core courses and electives", members: ["Core courses (Kernfächer)", "Electives (Wahlfächer)"], req: 26,
      note: "Art. 32 category a: 26 ECTS, of which at least 14 core courses AND at least 14 from the applied-mathematics area." },
    { key: "Seminars and semester papers", members: ["Semester papers", "Seminars"], req: 12,
      note: "Art. 32 category c: 12 ECTS, of which at least 8 from semester papers." },
  ],

  // minima 62 + group excess 12 (26-14) + 4 (12-8) = 78; remainder 12 -> 90
  remainder: {
    credits: 12,
    allowedCategories: ["Core courses (Kernfächer)", "Electives (Wahlfächer)",
                        "Field of application (Anwendungsgebiet)", "Semester papers", "Seminars"],
  },

  rules: {
    maxEctsPerSemester: 34,
    maxOralsPerSemester: null,
    atMostOne: [],
    notes: [
      "Art. 32(2): the 12 credits still missing up to 90 must be earned in categories a, b or c — core courses and electives, the field of application, or seminars and semester papers.",
      "Of the 26 core-and-elective credits, at least 14 must come from the applied-mathematics area. The planner cannot express that sub-rule directly; check it by hand.",
      "Thesis admission requires the Bachelor's studies to be successfully completed and any admission conditions fulfilled. Processing time 5 months.",
      "Standard duration 3 semesters; maximum study time 3 years.",
      "At most 30 mobility credits count toward the diploma.",
      "This diploma and the MSc Mathematics diploma cannot share credits; earning both requires re-matriculation.",
    ],
  },

  catalogue: [],
});
