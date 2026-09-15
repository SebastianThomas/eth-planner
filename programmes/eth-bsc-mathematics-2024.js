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

    // Kernfächer und Wahlfächer (category e, Art. 38): explicit 2026W VVZ list from the
    // BSc Mathematics "Core Courses and Elective Courses" tree (studiengangAbschnittId 122755).
    // The 2026S tree exposes the same section headers with no course rows; VVZ evidently
    // tags Kernfächer/Wahlfächer category membership only under the Autumn query even where
    // a course's own teaching semester is Spring, so `sem` below reflects each course's own
    // individually queried VVZ offering semester, not the semester of this listing.
    // Core courses - pure mathematics:
    { id: "401-3531-00L", title: "Differential Geometry I", ects: 9, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 203420, counts: [{ cat: "Core courses - pure mathematics" }, { cat: "Core courses - further" }] },
    { id: "401-3461-00L", title: "Functional Analysis I", ects: 9, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 204561, counts: [{ cat: "Core courses - pure mathematics" }, { cat: "Core courses - further" }] },
    { id: "401-3001-61L", title: "Algebraic Topology I", ects: 7, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 203671, counts: [{ cat: "Core courses - pure mathematics" }, { cat: "Core courses - further" }] },
    { id: "401-3132-00L", title: "Commutative Algebra", ects: 9, sem: "HS", exam: "oral", examDetail: "Oral session examination, 30 minutes", vvz: 202837, counts: [{ cat: "Core courses - pure mathematics" }, { cat: "Core courses - further" }] },
    { id: "401-3111-72L", title: "Number Theory I", ects: 7, sem: "HS", exam: "written", examDetail: "Written session examination, 150 minutes", vvz: 202702, counts: [{ cat: "Core courses - pure mathematics" }, { cat: "Core courses - further" }] },
    // Core courses - applied mathematics:
    { id: "401-3651-00L", title: "Numerical Methods for Elliptic and Parabolic Partial Differential Equations", ects: 9, sem: "HS", exam: "oral", examDetail: "Oral session examination, 30 minutes", vvz: 203326, counts: [{ cat: "Core courses - applied mathematics" }, { cat: "Core courses - further" }] },
    { id: "401-3601-00L", title: "Probability Theory", ects: 9, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 204087, counts: [{ cat: "Core courses - applied mathematics" }, { cat: "Core courses - further" }] },
    { id: "401-3621-00L", title: "Fundamentals of Mathematical Statistics", ects: 9, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 203424, counts: [{ cat: "Core courses - applied mathematics" }, { cat: "Core courses - further" }] },
    { id: "401-3901-00L", title: "Linear & Combinatorial Optimization", ects: 10, sem: "HS", exam: "written", examDetail: "Session exam, written 180'; optional interim exam counts 30% only if it beats the final", vvz: 203698, counts: [{ cat: "Core courses - applied mathematics" }, { cat: "Core courses - further" }] },
    { id: "401-3622-00L", title: "Statistical Modelling", ects: 7, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 203951, counts: [{ cat: "Core courses - applied mathematics" }, { cat: "Core courses - further" }] },
    { id: "252-0209-00L", title: "Algorithms, Probability, and Computing", ects: 8, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 202674, counts: [{ cat: "Core courses - applied mathematics" }, { cat: "Core courses - further" }] },
    { id: "402-0205-00L", title: "Quantum Mechanics I", ects: 8, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 203243, counts: [{ cat: "Core courses - applied mathematics" }, { cat: "Core courses - further" }] },
    // Electives (Wahlfächer), all VVZ "Selection" subgroups combined:
    { id: "401-3059-00L", title: "Combinatorics II", ects: 4, sem: "HS", exam: "oral", examDetail: "Oral session examination, 20 minutes", vvz: 203293, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-4202-11L", title: "Representation Theory", ects: 5, sem: "HS", exam: "oral", examDetail: "Oral session examination, 20 minutes", vvz: 206378, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3057-00L", title: "Finite Geometries II", ects: 4, sem: "HS", exam: "oral", examDetail: "Oral session examination, 20 minutes", vvz: 203570, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3351-00L", title: "Partial Differential Equations", ects: 9, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 206718, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-4115-00L", title: "Introduction to Geometric Measure Theory", ects: 7, sem: "HS", exam: "oral", examDetail: "Oral session examination, 20 minutes", vvz: 205479, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-4623-00L", title: "Time Series Analysis", ects: 4, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 204244, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-4627-00L", title: "Empirical Process Theory and Applications", ects: 4, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 203604, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-0625-01L", title: "Applied Analysis of Variance and Experimental Design", ects: 5, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 203631, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-0649-00L", title: "Applied Statistical Regression", ects: 5, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 203871, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3628-14L", title: "Bayesian Statistics", ects: 4, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 204726, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3922-00L", title: "Life Insurance Mathematics", ects: 4, sem: "HS", exam: "oral", examDetail: "Oral session examination, 20 minutes", vvz: 203386, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3925-00L", title: "Non-Life Insurance: Mathematics and Statistics", ects: 8, sem: "HS", exam: "oral", examDetail: "Oral session examination, 30 minutes", vvz: 203563, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3927-00L", title: "Mathematical Modelling in Life Insurance", ects: 4, sem: "HS", exam: "oral", examDetail: "Oral session examination, 20 minutes", vvz: 203492, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3931-00L", title: "Responsible Machine Learning with Insurance Applications", ects: 4, sem: "HS", exam: "oral", examDetail: "Oral session examination, 30 minutes", vvz: 203497, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "402-0830-00L", title: "General Relativity", ects: 10, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 203858, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3055-64L", title: "Algebraic Methods in Combinatorics", ects: 5, sem: "HS", exam: "written", examDetail: "Session exam, written 180'; printed lecture notes permitted. No coursework.", vvz: 204084, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3054-14L", title: "Probabilistic Methods in Combinatorics", ects: 5, sem: "HS", exam: "written", examDetail: "Session exam, written 180'; printed lecture notes permitted. No coursework.", vvz: 204178, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "252-1425-00L", title: "Geometry: Combinatorics and Algorithms", ects: 8, sem: "HS", exam: "oral", examDetail: "Session exam, oral 30' with 30' preparation (60%) + 2 graded homeworks (20% each)", vvz: 204238, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "263-4500-00L", title: "Advanced Algorithms", ects: 9, sem: "HS", exam: "oral", examDetail: "Session exam, oral 25' open-book (50%) + 2 graded homeworks (50%)", vvz: 202664, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3071-00L", title: "Structural Graph Theory", ects: 5, sem: "HS", exam: "written", examDetail: "Session exam, written 180'; offered only in the two sessions after the course. No coursework.", vvz: 204829, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3502-76L", title: "Reading Course", ects: 2, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3503-76L", title: "Reading Course", ects: 3, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3504-76L", title: "Reading Course", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3504-02L", title: "Reading Course (No. 2)", ects: 4, sem: "FS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 209538, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3502-75L", title: "Reading Course", ects: 2, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 203223, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3504-75L", title: "Reading Course", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 203336, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "263-4511-00L", title: "Projects in Topological Data Analysis", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance: group project, written report + oral presentation", vvz: 203248, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "263-5300-00L", title: "Guarantees for Machine Learning", ects: 7, sem: "HS", exam: "oral", examDetail: "Graded semester performance: oral midterm (60%) + course project (40%) + mandatory pass/fail homework", vvz: 204713, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3913-01L", title: "Mathematical Foundations for Finance", ects: 4, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 203094, note: "Eligible as an elective only if 401-3888-00L Introduction to Mathematical Finance was not credited at Bachelor's or Master's level.", counts: [{ cat: "Electives (Wahlfächer)" }] },

    // Seminars and semester papers: explicit 2026W VVZ list.
    { id: "401-2020-26L", title: "Topics in Competition Mathematics", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 207043, counts: [{ cat: "Seminars and semester papers" }] },
    { id: "401-3030-76L", title: "Iterated Forcing", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 207041, counts: [{ cat: "Seminars and semester papers" }] },
    { id: "401-3050-72L", title: "Student Seminar in Combinatorics", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 202748, counts: [{ cat: "Seminars and semester papers" }] },
    { id: "401-3340-76L", title: "Ordinary Differential Equations", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 207158, counts: [{ cat: "Seminars and semester papers" }] },
    { id: "401-3350-22L", title: "Topics in Geometric Group Theory", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 207023, counts: [{ cat: "Seminars and semester papers" }] },
    { id: "401-3370-24L", title: "Furstenberg's Correspondence Principle", ects: 4, sem: "FS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 181458, counts: [{ cat: "Seminars and semester papers" }] },
    { id: "401-3620-75L", title: "Student Seminar in Statistics: Representation Learning", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 202560, counts: [{ cat: "Seminars and semester papers" }] },
    { id: "401-3920-76L", title: "Probability and Finance", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 207024, counts: [{ cat: "Seminars and semester papers" }] },
    { id: "401-3930-76L", title: "Introduction to Stochastic Optimal Control", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 207198, counts: [{ cat: "Seminars and semester papers" }] },
    { id: "401-3940-76L", title: "Student Seminar on Mathematics of Data Science: Efficient Sampling of Quadratic Gibbs Measures", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 204265, counts: [{ cat: "Seminars and semester papers" }] },
    { id: "401-3950-76L", title: "Student Seminar on Mathematics of Data Science: Curvature for Graphs and Markov Chains", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 207258, counts: [{ cat: "Seminars and semester papers" }] },
    { id: "401-4350-76L", title: "Collisional Kinetic Theory: Entropy and Fisher Information", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 207018, counts: [{ cat: "Seminars and semester papers" }] },
    { id: "401-4550-76L", title: "Topics in Algebraic Topology", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", counts: [{ cat: "Seminars and semester papers" }] },
    { id: "401-3000-76L", title: "Illustrating Mathematics with a View toward Outreach", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", counts: [{ cat: "Seminars and semester papers" }] },
    { id: "401-4370-76L", title: "Ergodic Theory of Markov Chains", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 207040, counts: [{ cat: "Seminars and semester papers" }] },
    { id: "401-3400-01L", title: "Semester Paper", ects: 4, sem: "FS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 209741, counts: [{ cat: "Seminars and semester papers" }] },

    // Science in Perspective (GESS): the D-MATH-recommended Type B list (2026W).
    { id: "851-0742-00L", title: "Contract Design I", ects: 3, sem: "HS", exam: "?", vvz: 204055, counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0252-15L", title: "Network Analysis", ects: 3, sem: "HS", exam: "none", examDetail: "Graded semester performance", vvz: 203030, counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "853-0061-00L", title: "Introduction to Cybersecurity Politics", ects: 3, sem: "HS", exam: "?", vvz: 203319, counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "853-8002-00L", title: "The Role of Technology in National and International Security Policy", ects: 3, sem: "HS", exam: "?", vvz: 203454, counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0763-00L", title: "Supervised Research (Law, Economics, and Data Science)", ects: 3, sem: "HS", exam: "?", vvz: 204793, counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0562-00L", title: "Correspondence, Meeting Minutes, and Access Apps. Contemporary History of Knowledge and Media", ects: 3, sem: "HS", exam: "?", vvz: 205704, counts: [{ cat: "Science in Perspective (GESS)" }] },
  ],
});
