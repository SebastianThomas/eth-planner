/* ETH Zürich — MSc Physics, Programme Regulations 2014 (RSETHZ 324.1.0900.21).
 *
 * Still the current regulation as of the HS 2026 study guide. Numbers from the
 * Study Guide MSc Physics ed. HS 2026 (category table p. 10; 100-credit cap p. 23)
 * and the non-binding English translation of the 2014 Regulations (Art. 16-17, 29-31).
 *
 * Catalogue coverage. Core Courses (Table 1) and the "Electives in Physics and
 * Mathematics" subcategory (Table 2) are the EXACT named, bounded lists published in
 * the Study Guide MSc in Physics (English ed., section 2.2 and 2.4, p. 11-13) - the same
 * kind of department-curated list as D-INFK's Majors/Minors PDFs for MSc CS. Course
 * codes/ECTS come from the ETH course catalogue (VVZ), Autumn/Spring Semester 2026;
 * almost all exam modes are honestly `"?"` (not yet individually LEISTUNGSKONTROLLE-
 * verified). "Symmetries in Physics" and "Theoretical Astrophysics and Cosmology"
 * (both in the Study Guide's tables) could not be resolved to a current VVZ course code
 * and are NOT included - future work.
 * Quantum Information Processing I ("Concepts") and II ("Implementations") are two
 * 5-ECTS half-units that together form ONE 10-ECTS experimental core course if both are
 * taken and examined; taken alone, either half counts as a 5-ECTS elective instead
 * (Study Guide Table 1 footnote). Both are listed as core here; the app cannot express
 * the "either both-as-core or each-alone-as-elective" choice, so choosing only one still
 * needs to be manually recategorised as an elective by the user.
 * General Electives and Science in Perspective (GESS) are explicitly OPEN pools in the
 * Study Guide (any ETH/EPFL/UZH course beyond the first two BSc years for the former;
 * the whole D-GESS catalogue for the latter). An open pool is not an empty one: below,
 * General electives carries a non-exhaustive set of real, current-VVZ Master's-level
 * courses spanning Data Science/ML, distributed systems and applied statistics - all
 * reused from the individually VVZ-verified eth-msc-computer-science-2020.js catalogue,
 * since the elective-course page (phys.ethz.ch/studies/master/elective-courses.html)
 * explicitly defines General Electives as "knowledge in areas of Physics, Mathematics or
 * further scientific disciplines" drawn from the entire ETH course offering. GESS reuses
 * the D-INFK-recommended Science in Perspective Type B list verified in
 * eth-bsc-computer-science-2016.js/eth-msc-computer-science-2020.js: GESS Wissenschaft
 * im Kontext is a university-wide D-GESS programme, not physics-specific, and no separate
 * D-PHYS-curated GESS list was found. Both stay honestly non-exhaustive.
 * Proseminars/semester projects and the Master's thesis have no fixed VVZ course code
 * (both are individually registered with a supervisor); represented as placeholder
 * catalogue lines, matching how eth-msc-computer-science-2020.js models Practical Work.
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

  catalogue: [
    // ------------------------------------------------------------ Core courses - theoretical
    { id: "402-0843-00L", title: "Quantum Field Theory I", ects: 10, sem: "HS", exam: "?",
      counts: [{ cat: "Core courses - theoretical" }, { cat: "Core courses - further" }] },
    { id: "402-0844-00L", title: "Quantum Field Theory II", ects: 10, sem: "FS", exam: "?",
      counts: [{ cat: "Core courses - theoretical" }, { cat: "Core courses - further" }] },
    { id: "402-0861-00L", title: "Statistical Physics", ects: 10, sem: "HS", exam: "?",
      counts: [{ cat: "Core courses - theoretical" }, { cat: "Core courses - further" }] },
    { id: "402-0871-00L", title: "Solid State Theory", ects: 10, sem: "FS", exam: "?",
      counts: [{ cat: "Core courses - theoretical" }, { cat: "Core courses - further" }] },
    { id: "402-0830-00L", title: "General Relativity", ects: 10, sem: "HS", exam: "?",
      counts: [{ cat: "Core courses - theoretical" }, { cat: "Core courses - further" }] },

    // ------------------------------------------------------------ Core courses - experimental
    { id: "402-0891-00L", title: "Phenomenology of Particle Physics I", ects: 10, sem: "HS", exam: "?",
      counts: [{ cat: "Core courses - experimental" }, { cat: "Core courses - further" }] },
    { id: "402-0702-00L", title: "Phenomenology of Particle Physics II", ects: 10, sem: "FS", exam: "?",
      counts: [{ cat: "Core courses - experimental" }, { cat: "Core courses - further" }] },
    { id: "402-0257-00L", title: "Advanced Solid State Physics", ects: 10, sem: "HS", exam: "?",
      counts: [{ cat: "Core courses - experimental" }, { cat: "Core courses - further" }] },
    { id: "402-0264-00L", title: "Astrophysics II", ects: 10, sem: "FS", exam: "?",
      note: "Study Guide label: \"Observational Cosmology and Extra-galactic Astrophysics\".",
      counts: [{ cat: "Core courses - experimental" }, { cat: "Core courses - further" }] },
    { id: "402-0265-00L", title: "Astrophysics III", ects: 10, sem: "FS", exam: "?",
      note: "Study Guide label: \"Galactic Astrophysics\".",
      counts: [{ cat: "Core courses - experimental" }, { cat: "Core courses - further" }] },
    { id: "402-0402-00L", title: "Ultrafast Laser Physics", ects: 10, sem: "HS", exam: "?",
      counts: [{ cat: "Core courses - experimental" }, { cat: "Core courses - further" }] },
    { id: "402-0442-00L", title: "Quantum Optics", ects: 10, sem: "HS", exam: "?",
      counts: [{ cat: "Core courses - experimental" }, { cat: "Core courses - further" }] },
    { id: "402-0448-01L", title: "Quantum Information Processing I: Concepts", ects: 5, sem: "HS", exam: "?",
      note: "Together with QIP II, forms one 10-ECTS core course if both are taken and examined. Taken alone, counts as a 5-ECTS elective (Electives in Physics and Mathematics) instead - recategorise manually if only this half is taken.",
      counts: [{ cat: "Core courses - experimental" }, { cat: "Core courses - further" }] },
    { id: "402-0448-02L", title: "Quantum Information Processing II: Implementations", ects: 5, sem: "HS", exam: "?",
      note: "Together with QIP I, forms one 10-ECTS core course if both are taken and examined. Taken alone, counts as a 5-ECTS elective (Electives in Physics and Mathematics) instead - recategorise manually if only this half is taken.",
      counts: [{ cat: "Core courses - experimental" }, { cat: "Core courses - further" }] },

    // ------------------------------------------------------------ Electives in Physics and Mathematics
    // Study Guide Table 2's regularly-offered, department-curated list (bounded).
    { id: "402-0848-00L", title: "Advanced Field Theory", ects: 6, sem: "FS", exam: "?",
      counts: [{ cat: "Electives in Physics and Mathematics" }] },
    { id: "402-0713-00L", title: "Astro-Particle Physics I", ects: 6, sem: "HS", exam: "?",
      counts: [{ cat: "Electives in Physics and Mathematics" }] },
    { id: "402-0714-00L", title: "Astro-Particle Physics II", ects: 6, sem: "FS", exam: "?",
      counts: [{ cat: "Electives in Physics and Mathematics" }] },
    { id: "402-0725-00L", title: "Experimental Methods and Instruments of Particle Physics", ects: 6, sem: "HS", exam: "?",
      counts: [{ cat: "Electives in Physics and Mathematics" }] },
    { id: "402-0767-00L", title: "Neutrino Physics", ects: 6, sem: "HS", exam: "?",
      counts: [{ cat: "Electives in Physics and Mathematics" }] },
    { id: "402-0715-00L", title: "Low Energy Particle Physics", ects: 6, sem: "HS", exam: "?",
      counts: [{ cat: "Electives in Physics and Mathematics" }] },
    { id: "402-0777-00L", title: "Particle Accelerator Physics and Modeling I", ects: 6, sem: "HS", exam: "?",
      note: "Not offered in Autumn Semester 2026 per the VVZ; ECTS/semester from the last offering.",
      counts: [{ cat: "Electives in Physics and Mathematics" }] },
    { id: "402-0703-00L", title: "Phenomenology of Physics Beyond the Standard Model", ects: 6, sem: "FS", exam: "?",
      counts: [{ cat: "Electives in Physics and Mathematics" }] },
    { id: "402-0738-00L", title: "Statistical Methods and Analysis Techniques in Experimental Physics", ects: 10, sem: "FS", exam: "?",
      counts: [{ cat: "Electives in Physics and Mathematics" }] },
    { id: "402-0604-00L", title: "Materials Analysis by Nuclear Techniques", ects: 6, sem: "FS", exam: "?",
      counts: [{ cat: "Electives in Physics and Mathematics" }] },
    { id: "402-0464-00L", title: "Optical Properties of Semiconductors", ects: 8, sem: "HS", exam: "?",
      note: "Now listed in the VVZ as \"Light-Matter Interaction in Semiconductors: Physics and Applications\" - title changed since the Study Guide edition consulted.",
      counts: [{ cat: "Electives in Physics and Mathematics" }] },
    { id: "402-0317-00L", title: "Semiconductor Materials: Fundamentals and Fabrication", ects: 6, sem: "HS", exam: "?",
      counts: [{ cat: "Electives in Physics and Mathematics" }] },
    { id: "402-0595-00L", title: "Semiconductor Nanostructures", ects: 6, sem: "HS", exam: "?",
      counts: [{ cat: "Electives in Physics and Mathematics" }] },
    { id: "402-0535-00L", title: "Introduction to Magnetism", ects: 6, sem: "HS", exam: "?",
      counts: [{ cat: "Electives in Physics and Mathematics" }] },

    // ------------------------------------------------------------ General electives - OPEN pool
    // "General Electives" is explicitly an open pool in the Study Guide (any ETH course,
    // beyond the first two BSc years, with mentor approval - phys.ethz.ch/studies/master/
    // elective-courses.html describes it as "knowledge in areas of Physics, Mathematics or
    // further scientific disciplines"). An open pool is not an empty one: the courses below
    // are reused verbatim (ids/ects/sem/exam) from the individually VVZ-verified
    // eth-msc-computer-science-2020.js and eth-msc-data-science-2023.js catalogues - Data
    // Science, ML, optimization, information theory, quantum information and computational
    // biology are all plausible general-elective picks for a physics Master's student.
    // Non-exhaustive: mentor approval governs the actual choice, per the Study Guide.
    { id: "263-3210-00L", title: "Deep Learning", ects: 8, sem: "HS", exam: "?",
      note: "Reused from eth-msc-computer-science-2020.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },
    { id: "263-5210-00L", title: "Probabilistic Artificial Intelligence", ects: 8, sem: "HS", exam: "?",
      note: "Reused from eth-msc-computer-science-2020.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },
    { id: "401-3632-00L", title: "Computational Statistics", ects: 8, sem: "FS", exam: "?",
      note: "Reused from eth-msc-computer-science-2020.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },
    { id: "261-5110-00L", title: "Optimization for Data Science", ects: 10, sem: "HS", exam: "written",
      note: "Reused from eth-msc-data-science-2023.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },
    { id: "401-3601-00L", title: "Probability Theory", ects: 9, sem: "HS", exam: "?",
      note: "Reused from eth-msc-data-science-2023.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },
    { id: "401-3621-00L", title: "Fundamentals of Mathematical Statistics", ects: 9, sem: "HS", exam: "?",
      note: "Reused from eth-msc-data-science-2023.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },
    { id: "401-3622-00L", title: "Statistical Modelling", ects: 7, sem: "HS", exam: "?",
      note: "Reused from eth-msc-data-science-2023.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },
    { id: "401-4623-00L", title: "Time Series Analysis", ects: 4, sem: "HS", exam: "?",
      note: "Reused from eth-msc-data-science-2023.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },
    { id: "401-4656-21L", title: "AI in the Sciences and Engineering", ects: 8, sem: "HS", exam: "?",
      note: "Reused from eth-msc-data-science-2023.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },
    { id: "401-3602-00L", title: "Applied Stochastic Processes", ects: 8, sem: "FS", exam: "?",
      note: "Reused from eth-msc-data-science-2023.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },
    { id: "263-3010-00L", title: "Big Data", ects: 10, sem: "HS", exam: "?",
      note: "Reused from eth-msc-computer-science-2020.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },
    { id: "263-0008-00L", title: "Computational Intelligence Lab", ects: 8, sem: "FS", exam: "written",
      note: "Reused from eth-msc-data-science-2023.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },
    { id: "402-0461-00L", title: "Quantum Information Theory", ects: 8, sem: "FS", exam: "?",
      note: "Reused from eth-msc-data-science-2023.js as a General Elective example - a core physics topic outside this programme's own core-course lists.",
      counts: [{ cat: "General electives" }] },
    { id: "401-4944-20L", title: "Mathematics of Data Science", ects: 8, sem: "HS", exam: "written",
      note: "Reused from eth-msc-data-science-2023.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },
    { id: "151-0563-01L", title: "Dynamic Programming and Optimal Control", ects: 4, sem: "HS", exam: "?",
      note: "Reused from eth-msc-data-science-2023.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },
    { id: "151-0566-00L", title: "Recursive Estimation", ects: 4, sem: "FS", exam: "?",
      note: "Reused from eth-msc-data-science-2023.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },
    { id: "227-0417-00L", title: "Information Theory I", ects: 6, sem: "HS", exam: "written",
      note: "Reused from eth-msc-data-science-2023.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },
    { id: "227-0420-00L", title: "Information Theory II", ects: 6, sem: "FS", exam: "?",
      note: "Reused from eth-msc-data-science-2023.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },
    { id: "263-4508-00L", title: "Algorithmic Foundations of Data Science", ects: 10, sem: "FS", exam: "written",
      note: "Reused from eth-msc-data-science-2023.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },
    { id: "636-0017-00L", title: "Computational Biology", ects: 6, sem: "HS", exam: "written",
      note: "Reused from eth-msc-data-science-2023.js as a General Elective example.",
      counts: [{ cat: "General electives" }] },

    // ------------------------------------------------------------ Science in Perspective (GESS) - OPEN pool
    // GESS Wissenschaft im Kontext is a university-wide D-GESS programme, not physics-specific.
    // eth-bsc-physics-2021.js already fixed this same gap for the BSc programme by reusing
    // the D-INFK-recommended Science in Perspective Type B list (no separate D-PHYS-curated
    // GESS list exists); that list is reused again verbatim here since GESS recommendations
    // are shared between the BSc and MSc Physics programmes and this is the same open pool.
    { id: "851-0742-00L", title: "Contract Design I", ects: 3, sem: "HS", exam: "?", vvz: 204055,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0727-02L", title: "E-Business-Law", ects: 2, sem: "HS", exam: "?", vvz: 203846,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0252-15L", title: "Network Analysis", ects: 3, sem: "HS", exam: "?", vvz: 203030,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0732-06L", title: "Law & Tech", ects: 3, sem: "HS", exam: "?", vvz: 202633,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0101-86L", title: "Complex Social Systems: Modeling Agents, Learning, and Games", ects: 3, sem: "HS", exam: "?", vvz: 204250,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0467-00L", title: "From Traffic Modeling to Smart Cities and Digital Democracies", ects: 3, sem: "HS", exam: "?", vvz: 202706,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0391-00L", title: "Human-Centered Security & Privacy Lab", ects: 3, sem: "HS", exam: "?", vvz: 204453,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0453-00L", title: "Artificial Intelligence and Human Values", ects: 3, sem: "HS", exam: "?", vvz: 204308,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "363-0311-00L", title: "AI Implementation & Risk: The Human Factor", ects: 3, sem: "HS", exam: "?", vvz: 203795,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0745-00L", title: "Ethics Workshop: The Impact of Digital Life on Society", ects: 2, sem: "HS", exam: "?", vvz: 203657,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0562-00L", title: "Correspondence, Meeting Minutes, and Access Apps. Contemporary History of Knowledge and Media", ects: 3, sem: "HS", exam: "?", vvz: 205704,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0272-00L", title: "The Cutting Edge of Social Brain Imaging", ects: 2, sem: "HS", exam: "?", vvz: 206278,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0271-00L", title: "Neuroaesthetics - Exploring the Science of Aesthetic Experience", ects: 2, sem: "HS", exam: "?", vvz: 206298,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0740-00L", title: "AI, Law, and Policy", ects: 3, sem: "FS", exam: "?", vvz: 198363,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0732-03L", title: "Intellectual Property: An Introduction", ects: 2, sem: "FS", exam: "?", vvz: 198046,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0727-01L", title: "Telecommunications Law", ects: 2, sem: "FS", exam: "?", vvz: 198191,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "871-0270-00L", title: "Mind Meets Machine: Cognitive and Social Perspectives on Social Robotics", ects: 2, sem: "FS", exam: "?", vvz: 199671,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "860-0024-00L", title: "Digital Society: Ethical, Societal and Economic Challenges", ects: 3, sem: "FS", exam: "?", vvz: 198289,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0738-00L", title: "Intellectual Property: Introduction", ects: 2, sem: "FS", exam: "?", vvz: 199917,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0735-14L", title: "Seminar Business Law: AI Projects", ects: 2, sem: "FS", exam: "?", vvz: 198471,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0691-00L", title: "Human-Centered AI for Social Good: Peace, Health, Climate", ects: 3, sem: "FS", exam: "?", vvz: 199891,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0252-13L", title: "Network Modeling", ects: 3, sem: "FS", exam: "?", vvz: 200272,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0390-00L", title: "Human-Centered IT Security and Privacy", ects: 3, sem: "FS", exam: "?", vvz: 200275,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0125-65L", title: "A Sampler of Histories and Philosophies of Mathematics", ects: 3, sem: "FS", exam: "?", vvz: 200427,
      note: "Recommended Science in Perspective (Type B) for D-INFK; reused from eth-bsc-physics-2021.js as D-PHYS has no separate curated GESS list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },

    // ------------------------------------------------------------ Proseminars, semester projects, thesis
    { id: "D-PHYS-PROSEMINAR-MSC", title: "Proseminar (theoretical physics)", ects: 8, sem: "BOTH", exam: "none",
      note: "Not a fixed VVZ unit: registered under \"Projects/papers/theses\" in myStudies with an internal supervisor, before the work starts. A hard prerequisite for starting the Master's thesis.",
      counts: [{ cat: "Proseminars and semester projects" }] },
    { id: "D-PHYS-SEMESTERPROJECT-MSC", title: "Semester project (experimental physics)", ects: 8, sem: "BOTH", exam: "none",
      note: "Not a fixed VVZ unit: either a project in a research group or at a research institute (external projects need an internal ETH supervisor). Registered under \"Projects/papers/theses\" in myStudies. A hard prerequisite for starting the Master's thesis.",
      counts: [{ cat: "Proseminars and semester projects" }] },
    { id: "D-PHYS-MASTERS-THESIS", title: "Master's Thesis", ects: 30, sem: "NA", exam: "none",
      note: "Not a fixed VVZ unit: registered individually with a supervisor. Six-month full-time project. Needs the proseminar/semester project complete and the Bachelor's degree finished (at least the degree request filed).",
      counts: [{ cat: "Master's thesis" }] },
  ],
});
