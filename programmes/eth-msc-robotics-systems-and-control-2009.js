/* ETH Zürich — MSc Robotics, Systems and Control, Studienreglement 2009
 * (RSETHZ 324.1.0300.40), with amendments through 2017.
 *
 * D-MAVT is the lead department, jointly with D-ITET and D-INFK. The regulation year
 * 2009 is INFERRED to be current: the official Study Guide of August 2025 still cites
 * "Program Regulations ... 2009" and no newer regulation was found.
 *
 * This is the first programme whose electives draw on THREE departments' catalogues.
 * Catalogue not yet populated — credit rules only.
 */
registerProgramme({
  id: "eth-msc-robotics-systems-and-control-2009",
  name: "MSc Robotics, Systems and Control",
  institution: "ETH Zürich (D-MAVT lead, with D-ITET and D-INFK)",
  regulations: "Studienreglement 2009 (RSETHZ 324.1.0300.40)",
  degreeTitle: "Master of Science ETH in Robotics, Systems and Control",
  sources: [
    "Study Guide MSc RSC, August 2025",
    "Studienreglement 2009, RSETHZ 324.1.0300.40 (credit table Art. 35)",
  ],

  totalRequired: 90,
  maxAccreditable: 100,
  finalProject: { category: "Master's thesis", credits: 30, maxMissingAtStart: null },

  majors: [],
  minors: [],

  categories: [
    { key: "Core courses (Kernfächer)", req: 36, max: null,
      note: "Must be graded, not pass/fail, and at Master's level. Chosen with the tutor and fixed in the Learning Agreement." },
    { key: "Multidisciplinary courses", req: 6, max: null,
      note: "Drawn from the D-MAVT, D-ITET and D-INFK catalogues. No language courses." },
    { key: "Science in Perspective (GESS)", req: 2, max: 4,
      note: "At most 4 ECTS are accreditable. At most 3 ECTS of language courses across the whole ETH bachelor and master." },
    { key: "Semester project (Studienarbeit)", req: 8, max: null,
      note: "About 6 weeks full-time, with report and presentation; graded. Must be passed before the thesis starts, and must be in a different area from it." },
    { key: "Industrial internship", req: 8, max: null,
      note: "At least 12 weeks in industry or a research lab outside a Swiss research or teaching institution. Graded pass/fail. MANDATORY." },
    { key: "Master's thesis", req: 30, max: null, note: "6 months full-time." },
    { key: "(not counted)", req: 0, max: null, note: "Parked - contributes to nothing." },
  ],

  groups: [],

  // 36 + 6 + 2 + 8 + 8 + 30 = 90 exactly. No free remainder in this programme.

  // Art. 38(2)b: the final grade averages ONLY these three categories.
  gradeAverage: {
    categories: ["Core courses (Kernfächer)", "Semester project (Studienarbeit)", "Master's thesis"],
  },

  rules: {
    maxEctsPerSemester: 34,
    maxOralsPerSemester: null,
    atMostOne: [],
    notes: [
      "The final grade is the credit-weighted average of the core courses, the semester project and the Master's thesis ONLY. Multidisciplinary courses, Science in Perspective and the internship do not affect it.",
      "The tutor system is mandatory: there is no admission without a tutor's commitment. The tutor and student agree an individual Learning Agreement covering the core and multidisciplinary courses, and it is binding.",
      "Thesis admission requires the Bachelor's degree complete, admission conditions met, at least 28 ECTS of core courses, and the semester project passed with its 8 credits earned.",
      "At least 60 ECTS must be earned at ETH Zürich — equivalently, at most 30 mobility credits are accreditable. The planner cannot check where a credit was earned; verify by hand.",
      "The internship may be done BEFORE starting the Master's (this is recommended) but only counts if completed after all Bachelor credits were earned. It may be split once and must be finished before the diploma application. A recognised university-of-applied-sciences internship can be credited here.",
      "Three departments feed the course lists; D-MAVT assigns all learning units to categories in consultation with D-ITET and D-INFK.",
      "Standard duration 3 semesters; maximum 3 years. 'Passed with distinction' at an overall average of at least 5.75.",
    ],
  },

  catalogue: [],
});
