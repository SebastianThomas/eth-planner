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
