/* ETH Zürich — MSc Mathematics, Studienreglement 2012 (RSETHZ 324.1.0900.11),
 * consolidated edition 23.05.2023-5. This is the current regulation.
 *
 * IMPORTANT: this programme awards TWO DISTINCT DIPLOMAS with DIFFERENT credit tables —
 * "Mathematics" (Art. 31) and "Applied Mathematics" (Art. 32). They are separate files,
 * because the `majors` mechanism varies which categories a course may count in, not the
 * category minima themselves. The two diplomas cannot share credits; earning both
 * requires re-matriculation (Art. 12).
 *
 * This file is the "Mathematics" diploma. See eth-msc-applied-mathematics-2012.js.
 * Catalogue not yet populated — credit rules only.
 */
registerProgramme({
  id: "eth-msc-mathematics-2012",
  name: "MSc Mathematics",
  institution: "ETH Zürich",
  regulations: "Studienreglement 2012 (RSETHZ 324.1.0900.11), edition 23.05.2023-5",
  degreeTitle: "Master of Science ETH in Mathematics",
  sources: ["Studienreglement 2012, RSETHZ 324.1.0900.11, edition 23.05.2023-5 (credit table Art. 31)"],

  totalRequired: 90,
  maxAccreditable: 100,
  finalProject: { category: "Master's thesis", credits: 30, maxMissingAtStart: 0 },

  majors: [],
  minors: [],

  categories: [
    { key: "Core courses (Kernfächer)", req: 14, max: null,
      note: "At least 14 of the 38 core-and-elective credits must be core courses." },
    { key: "Electives (Wahlfächer)", req: 0, max: null,
      note: "Both core and elective courses split further into pure and applied mathematics." },
    { key: "Seminars", req: 4, max: null, note: "At least 4 of the 8 credits in this block." },
    { key: "Semester papers", req: 0, max: null },
    { key: "Science in Perspective (GESS)", req: 2, max: null,
      note: "No ceiling at Master's level, unlike the BSc. Excluded from the final grade." },
    { key: "Master's thesis", req: 30, max: 30 },
    { key: "(not counted)", req: 0, max: null, note: "Parked - contributes to nothing." },
  ],

  groups: [
    { key: "Core courses and electives", members: ["Core courses (Kernfächer)", "Electives (Wahlfächer)"], req: 38,
      note: "Art. 31 category a: 38 ECTS, of which at least 14 core courses." },
    { key: "Seminars and semester papers", members: ["Seminars", "Semester papers"], req: 8,
      note: "Art. 31 category b: 8 ECTS, of which at least 4 from seminars." },
  ],

  // minima 50 + group excess 24 (38-14) + 4 (8-4) = 78; remainder 12 -> 90
  remainder: {
    credits: 12,
    allowedCategories: ["Core courses (Kernfächer)", "Electives (Wahlfächer)",
                        "Seminars", "Semester papers"],
  },

  rules: {
    maxEctsPerSemester: 34,
    maxOralsPerSemester: null,
    atMostOne: [],
    notes: [
      "Art. 31(2): the 12 credits still missing up to 90 must be earned in the core-and-elective or seminars-and-semester-papers categories.",
      "Thesis admission requires the Bachelor's studies to be successfully completed and any admission conditions fulfilled. The regulation states no Master-credit threshold. Processing time 5 months.",
      "Standard duration 3 semesters; maximum study time 3 years. Admission conditions of 21-30 ECTS extend the maximum by one semester.",
      "At most 30 mobility credits count toward the diploma, and none while admission conditions are unfulfilled.",
      "Crediting coursework from a prior degree is excluded, with a narrow exception for ETH credits earned before the Master's and not yet used for a degree.",
      "This programme's two diplomas (Mathematics and Applied Mathematics) cannot share credits; earning both requires re-matriculation.",
      "Language of instruction is normally English.",
    ],
  },

  catalogue: [],
});
