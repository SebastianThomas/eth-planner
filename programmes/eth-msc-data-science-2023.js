/* ETH Zürich — MSc Data Science, Studienreglement 2023 (RSETHZ 324.1.1600.21).
 * Leading house D-INFK, jointly with D-MATH and D-ITET. For students starting
 * Autumn Semester 2023 or later. Numbers from the binding Reglement (Art. 14, 19-20, 30-32).
 *
 * CAUTION: an obsolete "Appendix to Programme Regulations 2017" is still served from the
 * same D-INFK folder with different numbers. It does not apply to the 2023 cohort.
 *
 * Catalogue not yet populated — credit rules only.
 */
registerProgramme({
  id: "eth-msc-data-science-2023",
  name: "MSc Data Science",
  institution: "ETH Zürich",
  regulations: "Studienreglement 2023 (RSETHZ 324.1.1600.21)",
  degreeTitle: "Master of Science ETH in Data Science",
  sources: [
    "Studienreglement 2023, RSETHZ 324.1.1600.21 (credit table Art. 31)",
    "Appendix 1 to the Regulations 2023, 13.10.2022 (admission profile)",
  ],

  totalRequired: 120,
  maxAccreditable: 130,
  finalProject: { category: "Master's thesis", credits: 30, maxMissingAtStart: 8 },

  majors: [],
  minors: [],

  categories: [
    { key: "Core courses - Data Analysis", req: 16, max: null },
    { key: "Core courses - Data Management and Data Processing", req: 16, max: null },
    { key: "Electives - subject-specific", req: 20, max: null },
    { key: "Electives - interdisciplinary", req: 8, max: null },
    { key: "Data Science project course", req: 10, max: 10,
      note: "The practical component. There is no separate internship requirement in this programme." },
    { key: "Seminar", req: 2, max: 2 },
    { key: "Science in Perspective (GESS)", req: 2, max: null },
    { key: "Master's thesis", req: 30, max: 30,
      note: "28 weeks full-time (26 + 2). Minimum grade 4.0." },
    { key: "(not counted)", req: 0, max: null, note: "Parked - contributes to nothing." },
  ],

  groups: [
    { key: "Core courses total", members: ["Core courses - Data Analysis",
        "Core courses - Data Management and Data Processing"], req: 32 },
    { key: "Electives total", members: ["Electives - subject-specific",
        "Electives - interdisciplinary"], req: 28 },
  ],

  // minima 104, no group excess; remainder 16 -> 120
  remainder: {
    credits: 16,
    allowedCategories: ["Core courses - Data Analysis", "Core courses - Data Management and Data Processing",
                        "Electives - subject-specific", "Electives - interdisciplinary"],
  },

  rules: {
    maxEctsPerSemester: 34,
    maxOralsPerSemester: null,
    atMostOne: [{ category: "Seminar", note: "One seminar." }],
    notes: [
      "Art. 31(2): the 16 credits still missing up to 120 may only be earned in the core-course or elective categories.",
      "Thesis admission (Art. 30(2)) is unusually strict: the Bachelor's degree complete, all admission conditions fulfilled, and within the Master at least 32 core credits, at least 28 elective credits, the full 10-credit project course, AND at least 82 credits across categories a-e. The 8-credit allowance shown here is derived (those categories hold at most 90), not stated verbatim.",
      "The individual study plan agreed with an assigned mentor is BINDING: only units listed in it count toward the degree (Art. 13(6)).",
      "Mobility is possible from the second semester, at most 30 ECTS. Students whose Bachelor's is not from ETH cannot join an ETH exchange programme and cannot credit individual mobility stays.",
      "At most 20 ECTS earned at ETH before the Master's may be credited; no other transfer from prior study.",
      "Standard study time 2 years; maximum 4 years, extendable by one or two semesters if admitted with 21-60 ECTS of conditions.",
      "Teaching language is English.",
    ],
  },

  catalogue: [],
});
