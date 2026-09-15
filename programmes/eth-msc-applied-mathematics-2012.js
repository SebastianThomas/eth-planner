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

  catalogue: [
    // Kernfächer/Wahlfächer/Seminare/GESS: explicit 2026W VVZ list from the "Mathematics Master"
    // programme tree (studiengangAbschnittId 122779), which serves BOTH diplomas (Diploma A
    // Mathematics and Diploma B Applied Mathematics). The 2026S tree exposes the same section
    // headers with no course rows; VVZ evidently tags category membership only under the Autumn
    // query, so `sem` below reflects each course's own individually queried VVZ offering
    // semester, not the semester of this listing.
    // Core courses (Kernfächer) - pure and applied mathematics combined; the regulation's pure/
    // applied split (Art. 31/32) is informational only here, not separately enforced by category.
    { id: "401-3001-61L", title: "Algebraic Topology I", ects: 7, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 203671, counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "401-3132-00L", title: "Commutative Algebra", ects: 9, sem: "HS", exam: "oral", examDetail: "Oral session examination, 30 minutes", vvz: 202837, counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "401-3111-72L", title: "Number Theory I", ects: 7, sem: "HS", exam: "written", examDetail: "Written session examination, 150 minutes", vvz: 202702, counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "401-3225-00L", title: "Introduction to Lie Groups", ects: 7, sem: "HS", exam: "oral", examDetail: "Oral session examination, 30 minutes", vvz: 204135, counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "401-3651-00L", title: "Numerical Methods for Elliptic and Parabolic Partial Differential Equations", ects: 9, sem: "HS", exam: "oral", examDetail: "Oral session examination, 30 minutes", vvz: 203326, counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "401-3621-00L", title: "Fundamentals of Mathematical Statistics", ects: 9, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 203424, counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "401-3622-00L", title: "Statistical Modelling", ects: 7, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 203951, counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "401-4889-00L", title: "Mathematical Finance", ects: 10, sem: "HS", exam: "oral", examDetail: "Oral session examination, 30 minutes", vvz: 203921, counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "401-3901-00L", title: "Linear & Combinatorial Optimization", ects: 10, sem: "HS", exam: "written", examDetail: "Session exam, written 180'; optional interim exam counts 30% only if it beats the final", vvz: 203698, counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "401-4944-20L", title: "Mathematics of Data Science", ects: 8, sem: "HS", exam: "written", examDetail: "Session exam, written 180'; optional bonus up to +0.25 from participation and homework", vvz: 204200, counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "401-3461-00L", title: "Functional Analysis I", ects: 9, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 204561, note: "Recognised at Master's level only if the corresponding alternative wasn't already credited at Bachelor's level; category assignment requires contacting the D-MATH Study Administration Office.", counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "401-3531-00L", title: "Differential Geometry I", ects: 9, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 203420, note: "Recognised at Master's level only if the corresponding alternative wasn't already credited at Bachelor's level; category assignment requires contacting the D-MATH Study Administration Office.", counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "401-3601-00L", title: "Probability Theory", ects: 9, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 204087, note: "Recognised at Master's level only if the corresponding alternative wasn't already credited at Bachelor's level; category assignment requires contacting the D-MATH Study Administration Office.", counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "402-0205-00L", title: "Quantum Mechanics I", ects: 8, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 203243, note: "Recognised at Master's level only if the corresponding alternative wasn't already credited at Bachelor's level; category assignment requires contacting the D-MATH Study Administration Office.", counts: [{ cat: "Core courses (Kernfächer)" }] },
    // Electives (Wahlfächer), all VVZ "Selection" subgroups (pure + applied) combined,
    // including the electives eligible only for the Applied Mathematics diploma:
    { id: "401-3059-00L", title: "Combinatorics II", ects: 4, sem: "HS", exam: "oral", examDetail: "Oral session examination, 20 minutes", vvz: 203293, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-4202-11L", title: "Representation Theory", ects: 5, sem: "HS", exam: "oral", examDetail: "Oral session examination, 20 minutes", vvz: 206378, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3057-00L", title: "Finite Geometries II", ects: 4, sem: "HS", exam: "oral", examDetail: "Oral session examination, 20 minutes", vvz: 203570, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-4575-76L", title: "Knot Theory", ects: 4, sem: "HS", exam: "written", examDetail: "Written session examination, 90 minutes", vvz: 206320, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-4115-00L", title: "Introduction to Geometric Measure Theory", ects: 7, sem: "HS", exam: "oral", examDetail: "Oral session examination, 20 minutes", vvz: 205479, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3351-00L", title: "Partial Differential Equations", ects: 9, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 206718, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3583-76L", title: "Nonlinear Tools for Geometric Analysis", ects: 4, sem: "HS", exam: "oral", examDetail: "Oral session examination, 20 minutes", vvz: 206198, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3502-76L", title: "Reading Course", ects: 2, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3503-76L", title: "Reading Course", ects: 3, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3504-76L", title: "Reading Course", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3504-02L", title: "Reading Course (No. 2)", ects: 4, sem: "FS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 209538, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3504-03L", title: "Reading Course (No. 3)", ects: 4, sem: "FS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 209643, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3502-75L", title: "Reading Course", ects: 2, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 203223, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3504-75L", title: "Reading Course", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 203336, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-4657-00L", title: "Numerical Solution of Stochastic Ordinary Differential Equations", ects: 6, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 203459, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-4785-00L", title: "Mathematical and Computational Methods in Photonics", ects: 7, sem: "HS", exam: "oral", examDetail: "Oral session examination, 20 minutes", vvz: 203281, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-4656-21L", title: "AI in the Sciences and Engineering", ects: 6, sem: "HS", exam: "?", vvz: 204828, note: "Application field: Machine Learning.", counts: [{ cat: "Electives (Wahlfächer)" }, { cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "401-3603-60L", title: "Large Deviation Theory", ects: 4, sem: "HS", exam: "oral", examDetail: "Oral session examination, 20 minutes", vvz: 206300, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3382-25L", title: "Log-Sobolev Inequalities and Markov Semigroups", ects: 4, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 207199, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3628-14L", title: "Bayesian Statistics", ects: 4, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 204726, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-0625-01L", title: "Applied Analysis of Variance and Experimental Design", ects: 5, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 203631, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-0649-00L", title: "Applied Statistical Regression", ects: 5, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 203871, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-4632-15L", title: "Causality", ects: 5, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 202819, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-4623-00L", title: "Time Series Analysis", ects: 4, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 204244, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-4627-00L", title: "Empirical Process Theory and Applications", ects: 4, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 203604, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3631-00L", title: "Applied Risk Management", ects: 3, sem: "HS", exam: "?", vvz: 206976, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3925-00L", title: "Non-Life Insurance: Mathematics and Statistics", ects: 8, sem: "HS", exam: "oral", examDetail: "Oral session examination, 30 minutes", vvz: 203563, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3922-00L", title: "Life Insurance Mathematics", ects: 4, sem: "HS", exam: "oral", examDetail: "Oral session examination, 20 minutes", vvz: 203386, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3927-00L", title: "Mathematical Modelling in Life Insurance", ects: 4, sem: "HS", exam: "oral", examDetail: "Oral session examination, 20 minutes", vvz: 203492, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3915-73L", title: "Machine Learning in Finance and Insurance", ects: 5, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 204603, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3931-00L", title: "Responsible Machine Learning with Insurance Applications", ects: 4, sem: "HS", exam: "oral", examDetail: "Oral session examination, 30 minutes", vvz: 203497, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-8929-76L", title: "Advanced Topics in Mathematical Finance (University of Zurich)", ects: 3, sem: "HS", exam: "?", vvz: 206559, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "402-0843-00L", title: "Quantum Field Theory I", ects: 10, sem: "HS", exam: "written", examDetail: "Written session examination, 150 minutes", vvz: 202894, note: "Application field: Theoretical Physics.", counts: [{ cat: "Electives (Wahlfächer)" }, { cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "402-0861-00L", title: "Statistical Physics", ects: 10, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 204016, note: "Application field: Theoretical Physics.", counts: [{ cat: "Electives (Wahlfächer)" }, { cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "402-0830-00L", title: "General Relativity", ects: 10, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 203858, note: "Application field: Theoretical Physics.", counts: [{ cat: "Electives (Wahlfächer)" }, { cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "402-0897-00L", title: "Introduction to String Theory", ects: 6, sem: "HS", exam: "oral", examDetail: "Oral session examination, 25 minutes", vvz: 203256, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3055-64L", title: "Algebraic Methods in Combinatorics", ects: 5, sem: "HS", exam: "written", examDetail: "Session exam, written 180'; printed lecture notes permitted. No coursework.", vvz: 204084, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3054-14L", title: "Probabilistic Methods in Combinatorics", ects: 5, sem: "HS", exam: "written", examDetail: "Session exam, written 180'; printed lecture notes permitted. No coursework.", vvz: 204178, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "252-1425-00L", title: "Geometry: Combinatorics and Algorithms", ects: 8, sem: "HS", exam: "oral", examDetail: "Session exam, oral 30' with 30' preparation (60%) + 2 graded homeworks (20% each)", vvz: 204238, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "263-4500-00L", title: "Advanced Algorithms", ects: 9, sem: "HS", exam: "oral", examDetail: "Session exam, oral 25' open-book (50%) + 2 graded homeworks (50%)", vvz: 202664, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "227-0417-00L", title: "Information Theory I", ects: 6, sem: "HS", exam: "written", examDetail: "Session exam, written 180'", vvz: 203897, note: "Application field: Information and Communication Technology.", counts: [{ cat: "Electives (Wahlfächer)" }, { cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "401-3071-00L", title: "Structural Graph Theory", ects: 5, sem: "HS", exam: "written", examDetail: "Session exam, written 180'; offered only in the two sessions after the course. No coursework.", vvz: 204829, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "252-0535-00L", title: "Advanced Machine Learning", ects: 10, sem: "HS", exam: "written", examDetail: "Session exam, written 180' (70%) + mandatory practical projects (30%); the projects must be passed to sit the exam", vvz: 203151, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "263-5300-00L", title: "Guarantees for Machine Learning", ects: 7, sem: "HS", exam: "oral", examDetail: "Graded semester performance: oral midterm (60%) + course project (40%) + mandatory pass/fail homework", vvz: 204713, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "263-5210-00L", title: "Probabilistic Artificial Intelligence", ects: 8, sem: "HS", exam: "written", examDetail: "Session exam, written 120'", vvz: 204292, note: "Application field: Machine Learning.", counts: [{ cat: "Electives (Wahlfächer)" }, { cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "227-0423-00L", title: "Neural Network Theory", ects: 4, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 204236, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "261-5110-00L", title: "Optimization for Data Science", ects: 10, sem: "HS", exam: "written", examDetail: "Session exam, written 180' (60%) + two 1h in-class quizzes (20% each); optional open-problem report, bonus up to +0.25", vvz: 202589, note: "Application field: Machine Learning.", counts: [{ cat: "Electives (Wahlfächer)" }, { cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "263-4511-00L", title: "Projects in Topological Data Analysis", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance: group project, written report + oral presentation", vvz: 203248, counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "151-0532-00L", title: "Nonlinear Dynamics and Chaos I", ects: 4, sem: "HS", exam: "written", examDetail: "End-of-semester exam, written 120'", vvz: 203917, note: "Only eligible for credits toward the Master's degree in Applied Mathematics.", counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3913-01L", title: "Mathematical Foundations for Finance", ects: 4, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 203094, note: "Eligible as an elective only if 401-3888-00L Introduction to Mathematical Finance was not credited at Bachelor's or Master's level.", counts: [{ cat: "Electives (Wahlfächer)" }] },

    // Field of application (Anwendungsgebiet, Art. 32): explicit 2026W VVZ list, one entry
    // per course with a note naming its application field(s). At least 8 credits are
    // required from the ONE field the student selects; other fields' credits don't count.
    { id: "701-1221-00L", title: "Dynamics of Large-Scale Atmospheric Flow", ects: 4, sem: "HS", exam: "written", examDetail: "Written session examination, 120 minutes", vvz: 204422, note: "Application field: Atmospherical Physics.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "636-0017-00L", title: "Computational Biology", ects: 6, sem: "HS", exam: "written", examDetail: "Session exam, written 90' (75%) + compulsory homework project assignments (25%)", vvz: 203789, note: "Application field: Biology.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "636-0007-00L", title: "Computational Systems Biology", ects: 6, sem: "HS", exam: "written", examDetail: "Session exam, written 120'", vvz: 203757, note: "Application field: Biology.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "636-0009-00L", title: "Evolutionary Dynamics", ects: 6, sem: "HS", exam: "written", examDetail: "Session exam, written 90'; only offered in the session after the course, re-enrolling required to repeat", vvz: 203363, note: "Application field: Biology.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "151-0563-01L", title: "Dynamic Programming and Optimal Control", ects: 4, sem: "HS", exam: "written", examDetail: "Session exam, written 150'", vvz: 203945, note: "Application field: Control and Automation.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "401-3929-00L", title: "Financial Risk Management in Social and Pension Insurance", ects: 4, sem: "HS", exam: "oral", examDetail: "Oral session examination, 20 minutes", vvz: 203981, note: "Application field: Economics or Finance.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "363-0503-00L", title: "Principles of Microeconomics", ects: 3, sem: "HS", exam: "written", examDetail: "Written session examination, 90 minutes", vvz: 203879, note: "Application field: Economics or Finance.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "363-0565-00L", title: "Principles of Macroeconomics", ects: 3, sem: "HS", exam: "written", examDetail: "Written session examination, 90 minutes", vvz: 203028, note: "Application field: Economics or Finance.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "363-1021-00L", title: "Monetary Policy", ects: 3, sem: "HS", exam: "written", examDetail: "Written session examination, 90 minutes", vvz: 203379, note: "Application field: Economics or Finance.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "363-1017-00L", title: "Risk and Insurance Economics", ects: 3, sem: "HS", exam: "?", vvz: 204659, note: "Application field: Economics or Finance.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "363-1200-00L", title: "Economics for Actuaries", ects: 3, sem: "HS", exam: "?", vvz: 202545, note: "Application field: Economics or Finance.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "401-8913-00L", title: "Advanced Corporate Finance I (University of Zurich)", ects: 6, sem: "HS", exam: "?", vvz: 203975, note: "Application field: Finance.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "261-5111-00L", title: "Asset Management: Advanced Investments (University of Zurich)", ects: 3, sem: "HS", exam: "?", vvz: 204527, note: "Application field: Finance.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "227-0447-00L", title: "Image Analysis and Computer Vision", ects: 6, sem: "HS", exam: "written", examDetail: "Session exam, written 120'; at least 3 of 6 assignments required for admission to the exam", vvz: 203811, note: "Application field: Image Processing and Computer Vision.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "227-0105-00L", title: "Introduction to Estimation and Machine Learning", ects: 6, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 204101, note: "Application field: Information and Communication Technology.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "227-0101-00L", title: "Discrete-Time and Statistical Signal Processing", ects: 6, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 202988, note: "Application field: Information and Communication Technology.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "263-3210-00L", title: "Deep Learning", ects: 8, sem: "HS", exam: "written", examDetail: "Session exam, written 120'", vvz: 203295, note: "Application field: Machine Learning.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "252-3005-00L", title: "Natural Language Processing", ects: 7, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 204564, note: "Application field: Machine Learning.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "529-0003-01L", title: "Advanced Quantum Chemistry", ects: 6, sem: "HS", exam: "oral", examDetail: "Oral session examination, 30 minutes", vvz: 203382, note: "Application field: Quantum Chemistry.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "363-0541-00L", title: "Economic Dynamics and Complexity", ects: 3, sem: "HS", exam: "written", examDetail: "Written session examination, 90 minutes", vvz: 203413, note: "Application field: Systems Design.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "402-0809-00L", title: "Introduction to Computational Physics", ects: 8, sem: "HS", exam: "oral", examDetail: "Oral session examination, 20 minutes", vvz: 203984, note: "Application field: Theoretical Physics.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "402-2203-01L", title: "Classical Mechanics", ects: 7, sem: "HS", exam: "written", examDetail: "Written session examination, 180 minutes", vvz: 203029, note: "Application field: Theoretical Physics.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },
    { id: "101-0417-00L", title: "Transport Planning Methods", ects: 6, sem: "HS", exam: "oral", examDetail: "Oral session examination, 30 minutes", vvz: 203658, note: "Application field: Transportation Science.", counts: [{ cat: "Field of application (Anwendungsgebiet)" }] },

    // Seminars and semester papers: explicit 2026W VVZ list.
    { id: "401-2020-26L", title: "Topics in Competition Mathematics", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 207043, counts: [{ cat: "Seminars" }] },
    { id: "401-3030-76L", title: "Iterated Forcing", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 207041, counts: [{ cat: "Seminars" }] },
    { id: "401-3050-72L", title: "Student Seminar in Combinatorics", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 202748, counts: [{ cat: "Seminars" }] },
    { id: "401-3350-22L", title: "Topics in Geometric Group Theory", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 207023, counts: [{ cat: "Seminars" }] },
    { id: "401-3370-24L", title: "Furstenberg's Correspondence Principle", ects: 4, sem: "FS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 181458, counts: [{ cat: "Seminars" }] },
    { id: "401-3620-75L", title: "Student Seminar in Statistics: Representation Learning", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 202560, counts: [{ cat: "Seminars" }] },
    { id: "401-3930-76L", title: "Introduction to Stochastic Optimal Control", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 207198, counts: [{ cat: "Seminars" }] },
    { id: "401-3940-76L", title: "Student Seminar on Mathematics of Data Science: Efficient Sampling of Quadratic Gibbs Measures", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 204265, counts: [{ cat: "Seminars" }] },
    { id: "401-3950-76L", title: "Student Seminar on Mathematics of Data Science: Curvature for Graphs and Markov Chains", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 207258, counts: [{ cat: "Seminars" }] },
    { id: "401-4140-76L", title: "Foundations of Gromov-Witten Theory", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 207159, counts: [{ cat: "Seminars" }] },
    { id: "401-4320-76L", title: "Random Hyperbolic Surfaces", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 207020, counts: [{ cat: "Seminars" }] },
    { id: "401-4350-76L", title: "Collisional Kinetic Theory: Entropy and Fisher Information", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 207018, counts: [{ cat: "Seminars" }] },
    { id: "401-4550-76L", title: "Topics in Algebraic Topology", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", counts: [{ cat: "Seminars" }] },
    { id: "401-3000-76L", title: "Illustrating Mathematics with a View toward Outreach", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", counts: [{ cat: "Seminars" }] },
    { id: "401-4370-76L", title: "Ergodic Theory of Markov Chains", ects: 4, sem: "HS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 207040, counts: [{ cat: "Seminars" }] },
    { id: "401-3750-01L", title: "Semester Paper", ects: 8, sem: "FS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 208835, counts: [{ cat: "Semester papers" }] },
    { id: "401-3750-02L", title: "Semester Paper (No. 2)", ects: 8, sem: "FS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 208787, counts: [{ cat: "Semester papers" }] },
    { id: "401-3750-03L", title: "Semester Paper (No. 3)", ects: 8, sem: "FS", exam: "none", examDetail: "Graded semester performance; the VVZ publishes no further detail", vvz: 208789, counts: [{ cat: "Semester papers" }] },

    // Science in Perspective (GESS): the D-MATH-recommended Type B list (2026W).
    { id: "851-0742-00L", title: "Contract Design I", ects: 3, sem: "HS", exam: "?", vvz: 204055, counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0252-15L", title: "Network Analysis", ects: 3, sem: "HS", exam: "none", examDetail: "Graded semester performance", vvz: 203030, counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "853-0061-00L", title: "Introduction to Cybersecurity Politics", ects: 3, sem: "HS", exam: "?", vvz: 203319, counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "853-8002-00L", title: "The Role of Technology in National and International Security Policy", ects: 3, sem: "HS", exam: "?", vvz: 203454, counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0763-00L", title: "Supervised Research (Law, Economics, and Data Science)", ects: 3, sem: "HS", exam: "?", vvz: 204793, counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0562-00L", title: "Correspondence, Meeting Minutes, and Access Apps. Contemporary History of Knowledge and Media", ects: 3, sem: "HS", exam: "?", vvz: 205704, counts: [{ cat: "Science in Perspective (GESS)" }] },

    // Master's thesis
    { id: "401-4990-00L", title: "Master's Thesis", ects: 30, sem: "NA", exam: "none", vvz: 207524, note: "Requires the Bachelor's programme complete and Scientific Works in Mathematics (401-2000-00L) passed.", counts: [{ cat: "Master's thesis" }] },
  ],
});
