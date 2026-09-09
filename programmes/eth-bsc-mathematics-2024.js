/* ETH Zürich — BSc Mathematics, Studienreglement 2024 (RSETHZ 323.1.0900.14).
 *
 * In force from HS 2024, valid for entrants up to and including HS 2026 (the pilot
 * "aufgeteilte Basisprüfung"). Numbers read article-by-article from the Reglement
 * (Art. 2, 11, 17-18, 20-21, 31-33, 38-39) — automated summaries of this PDF were
 * found to return WRONG figures.
 *
 * NOTE: the 2024 regulations have NO bachelor's thesis. ETH's English marketing page
 * still mentions one; that page is out of date. The nearest element is a 4-ECTS
 * Semesterarbeit inside the seminars category.
 *
 * Catalogue not yet populated — credit rules only.
 */
registerProgramme({
  id: "eth-bsc-mathematics-2024",
  name: "BSc Mathematics",
  institution: "ETH Zürich",
  regulations: "Studienreglement 2024 (RSETHZ 323.1.0900.14)",
  degreeTitle: "Bachelor of Science ETH in Mathematics",
  sources: ["Studienreglement 2024, RSETHZ 323.1.0900.14 (credit table Art. 38)"],

  totalRequired: 180,
  maxAccreditable: 190,
  finalProject: null,          // no bachelor's thesis under the 2024 regulations

  majors: [],
  minors: [],

  categories: [
    { key: "Compulsory courses, first year (Basisjahr)", req: 51, max: 51,
      note: "Fixed course list, examined in the Basisprüfung (blocks BPb 1 and BPb 2)." },
    { key: "Compulsory courses, later years", req: 51, max: 51,
      note: "Fixed; examined in Prüfungsblock I and II. Includes 'Mathematisches Schreiben'." },
    { key: "Complementary courses (Ergänzungsfächer)", req: 11, max: 18,
      note: "Physics, Computer Science or Electrical Engineering. At least two course units. Ceiling is 11 + up to 7 further." },
    { key: "Compulsory electives (Wahlpflichtfächer)", req: 11, max: null,
      note: "At least two course units." },
    { key: "Core courses - pure mathematics", req: 7, max: null },
    { key: "Core courses - applied mathematics", req: 7, max: null,
      note: "Applied mathematics and other application-oriented areas." },
    { key: "Core courses - further", req: 7, max: null,
      note: "The rest of the 21 core credits, either area." },
    { key: "Electives (Wahlfächer)", req: 0, max: null },
    { key: "Seminars and semester papers", req: 4, max: null,
      note: "At least 2 ECTS must come from a seminar." },
    { key: "Science in Perspective (GESS)", req: 6, max: 9,
      note: "Ceiling is 6 + up to 3 further. At most 3 ECTS from language courses." },
    { key: "(not counted)", req: 0, max: null, note: "Parked - contributes to nothing." },
  ],

  groups: [
    { key: "Core courses total", members: ["Core courses - pure mathematics",
        "Core courses - applied mathematics", "Core courses - further"], req: 21,
      note: "At least 21 ECTS of Kernfächer, of which at least 7 pure and at least 7 applied." },
    { key: "Core courses and electives", members: ["Core courses - pure mathematics",
        "Core courses - applied mathematics", "Core courses - further", "Electives (Wahlfächer)"], req: 30,
      note: "Category e of Art. 38: 30 ECTS, of which at least 21 must be core courses." },
  ],

  // minima 155 + group excess 9 (30 - 21) = 164; remainder 16 -> 180
  remainder: {
    credits: 16,
    allowedCategories: [
      "Complementary courses (Ergänzungsfächer)", "Compulsory electives (Wahlpflichtfächer)",
      "Core courses - pure mathematics", "Core courses - applied mathematics",
      "Core courses - further", "Electives (Wahlfächer)",
      "Seminars and semester papers", "Science in Perspective (GESS)",
    ],
  },

  rules: {
    maxEctsPerSemester: 34,
    maxOralsPerSemester: null,
    atMostOne: [],
    notes: [
      "Art. 38(2): the 16 credits still missing up to 180 must be earned in categories c to g — the complementary courses, compulsory electives, core courses and electives, seminars and semester papers, or Science in Perspective. NOT in the two compulsory-course categories.",
      "The Basisprüfung is split into blocks BPb 1 and BPb 2. Both must be passed within FOUR SEMESTERS of starting the programme (note: shorter than the two-year wording used by Physics and Computer Science). One repeat per block.",
      "Maximum study time 5 years; the diploma application must be filed within 5 years of starting.",
      "The diploma application is possible once 180 ECTS and every category and subcategory minimum are reached.",
      "Mobility credits are allowed only after the Basisprüfung is passed. This regulation states no cap.",
      "Credits may not be split or double-counted, and credits used for the BSc may not be reused for an ETH Master's degree.",
      "The ETH BSc Mathematics gives condition-free admission to the ETH MSc Mathematics.",
    ],
  },

  catalogue: [],
});
