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
 * Compulsory catalogue: ETH VVZ, Autumn and Spring Semester 2026. Assessment
 * modes were checked on each course's LEISTUNGSKONTROLLE page on 2026-09-09.
 */
registerProgramme({
  id: "eth-bsc-mathematics-2024",
  name: "BSc Mathematics",
  institution: "ETH Zürich",
  regulations: "Studienreglement 2024 (RSETHZ 323.1.0900.14)",
  degreeTitle: "Bachelor of Science ETH in Mathematics",
  sources: [
    "Studienreglement 2024, RSETHZ 323.1.0900.14 (credit table Art. 38)",
    "ETH course catalogue (VVZ), Autumn Semester 2026 and Spring Semester 2026",
  ],

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

  catalogue: [
    // Basisjahr: the fixed 51-ECTS list in the 2026 VVZ programme tree.
    { id: "401-1261-07L", title: "Analysis I: One Variable", ects: 10, sem: "HS", exam: "written", mandatory: true, vvz: 203950,
      examDetail: "Written session examination, 150 minutes", counts: [{ cat: "Compulsory courses, first year (Basisjahr)" }] },
    { id: "402-1701-00L", title: "Physics I", ects: 7, sem: "HS", exam: "written", mandatory: true, vvz: 202960,
      examDetail: "Written session examination, 180 minutes", counts: [{ cat: "Compulsory courses, first year (Basisjahr)" }] },
    { id: "252-0847-00L", title: "Computer Science", ects: 5, sem: "HS", exam: "written", mandatory: true, vvz: 203615,
      examDetail: "Written session examination, 120 minutes", counts: [{ cat: "Compulsory courses, first year (Basisjahr)" }] },
    { id: "401-1151-00L", title: "Linear Algebra I", ects: 7, sem: "HS", exam: "written", mandatory: true, vvz: 203093,
      examDetail: "Part of the Linear Algebra I/II annual course; written session examination, 210 minutes", counts: [{ cat: "Compulsory courses, first year (Basisjahr)" }] },
    { id: "401-1152-02L", title: "Linear Algebra II", ects: 7, sem: "FS", exam: "written", mandatory: true, vvz: 199246,
      examDetail: "Part of the Linear Algebra I/II annual course; written session examination, 210 minutes", counts: [{ cat: "Compulsory courses, first year (Basisjahr)" }] },
    { id: "401-1262-07L", title: "Analysis II: Several Variables", ects: 10, sem: "FS", exam: "written", mandatory: true, vvz: 198848,
      examDetail: "Written session examination, 180 minutes", counts: [{ cat: "Compulsory courses, first year (Basisjahr)" }] },
    { id: "401-1032-00L", title: "Basic Structures", ects: 5, sem: "FS", exam: "written", mandatory: true, vvz: 198199,
      examDetail: "Written session examination, 120 minutes", counts: [{ cat: "Compulsory courses, first year (Basisjahr)" }] },

    // Second and third year: fixed 51 ECTS, including Mathematical Writing.
    { id: "401-2303-00L", title: "Complex Analysis", ects: 6, sem: "HS", exam: "written", mandatory: true, vvz: 203391,
      examDetail: "Written session examination, 120 minutes", counts: [{ cat: "Compulsory courses, later years" }] },
    { id: "401-2003-00L", title: "Algebra I", ects: 7, sem: "HS", exam: "written", mandatory: true, vvz: 203291,
      examDetail: "Written session examination, 120 minutes", counts: [{ cat: "Compulsory courses, later years" }] },
    { id: "401-2653-21L", title: "Numerical Analysis I", ects: 7, sem: "HS", exam: "written", mandatory: true, vvz: 204716,
      examDetail: "Written session examination, 180 minutes", counts: [{ cat: "Compulsory courses, later years" }] },
    { id: "401-2283-00L", title: "Analysis III (Measure Theory)", ects: 6, sem: "HS", exam: "oral", mandatory: true, vvz: 204447,
      examDetail: "Oral session examination, 20 minutes", counts: [{ cat: "Compulsory courses, later years" }] },
    { id: "401-2464-00L", title: "Analysis IV (Fourier Theory and Hilbert Spaces)", ects: 6, sem: "FS", exam: "written", mandatory: true, vvz: 198581,
      examDetail: "Written session examination, 180 minutes", counts: [{ cat: "Compulsory courses, later years" }] },
    { id: "401-2554-00L", title: "Topology", ects: 7, sem: "FS", exam: "written", mandatory: true, vvz: 197853,
      examDetail: "Written session examination, 120 minutes", counts: [{ cat: "Compulsory courses, later years" }] },
    { id: "401-2604-00L", title: "Probability and Statistics", ects: 8, sem: "FS", exam: "written", mandatory: true, vvz: 198153,
      examDetail: "Written session examination, 180 minutes", counts: [{ cat: "Compulsory courses, later years" }] },
    { id: "401-3005-00L", title: "Mathematical Writing", ects: 4, sem: "HS", exam: "none", passFail: true, mandatory: true, vvz: 202888,
      examDetail: "Ungraded semester performance", counts: [{ cat: "Compulsory courses, later years" }] },

    // Explicit 2026 VVZ lists. Unknown assessments stay unknown until their
    // LEISTUNGSKONTROLLE pages have been checked individually.
    { id: "402-2883-00L", title: "Physics III", ects: 7, sem: "HS", exam: "?", vvz: 202573,
      counts: [{ cat: "Complementary courses (Ergänzungsfächer)" }] },
    { id: "402-2203-01L", title: "Classical Mechanics", ects: 7, sem: "HS", exam: "?", vvz: 203029,
      counts: [{ cat: "Complementary courses (Ergänzungsfächer)" }] },
    { id: "252-0057-00L", title: "Theoretical Computer Science", ects: 7, sem: "HS", exam: "written", vvz: 204552,
      examDetail: "Written session examination, 180 minutes (verified in the BSc Computer Science catalogue)", counts: [{ cat: "Complementary courses (Ergänzungsfächer)" }] },
    { id: "227-0045-00L", title: "Signals and Systems I", ects: 4, sem: "HS", exam: "?", vvz: 203602,
      counts: [{ cat: "Complementary courses (Ergänzungsfächer)" }] },
    { id: "402-1782-00L", title: "Physics II", ects: 7, sem: "FS", exam: "?", vvz: 198868,
      note: "Not eligible here if Physics II was already credited through the transferred Basisprüfung block 2.", counts: [{ cat: "Complementary courses (Ergänzungsfächer)" }] },
    { id: "252-0002-00L", title: "Data Structures and Algorithms", ects: 8, sem: "FS", exam: "?", vvz: 197973,
      counts: [{ cat: "Complementary courses (Ergänzungsfächer)" }] },

    { id: "401-2534-00L", title: "Geometry", ects: 6, sem: "FS", exam: "?", vvz: 199789,
      counts: [{ cat: "Compulsory electives (Wahlpflichtfächer)" }] },
    { id: "401-2004-00L", title: "Algebra II", ects: 6, sem: "FS", exam: "?", vvz: 198143,
      counts: [{ cat: "Compulsory electives (Wahlpflichtfächer)" }] },
    { id: "401-3374-23L", title: "Dynamical Systems and Ergodic Theory (University of Zurich)", ects: 9, sem: "FS", exam: "?", vvz: 202259,
      counts: [{ cat: "Compulsory electives (Wahlpflichtfächer)" }] },
    { id: "401-2374-24L", title: "Dynamical Systems and Ergodic Theory", ects: 5, sem: "FS", exam: "?", vvz: 199643,
      counts: [{ cat: "Compulsory electives (Wahlpflichtfächer)" }] },
    { id: "401-2334-00L", title: "Mathematical Methods of Physics II", ects: 6, sem: "FS", exam: "?", vvz: 198495,
      counts: [{ cat: "Compulsory electives (Wahlpflichtfächer)" }] },
    { id: "401-2654-00L", title: "Numerical Analysis II", ects: 6, sem: "FS", exam: "?", vvz: 197857,
      counts: [{ cat: "Compulsory electives (Wahlpflichtfächer)" }] },
    { id: "401-3052-05L", title: "Introduction to Graph Theory", ects: 5, sem: "FS", exam: "?", vvz: 198280,
      counts: [{ cat: "Compulsory electives (Wahlpflichtfächer)" }] },
    { id: "401-2684-00L", title: "Mathematics of Signals, Networks, and Learning", ects: 6, sem: "FS", exam: "?", vvz: 197556,
      counts: [{ cat: "Compulsory electives (Wahlpflichtfächer)" }] },
  ],
});
