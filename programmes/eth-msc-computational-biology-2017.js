/* ETH Zürich — MSc Computational Biology and Bioinformatics, Studienreglement 2017
 * (RSETHZ 324.1.0600.20, vom 18. Oktober 2016, in Kraft ab 01.11.2016; gilt für
 * Eintritte ab HS 2017). No newer Studienreglement was found — this is the current
 * binding regulation. Numbers read article-by-article from the German legal text
 * (Art. 16, 20-22, 33-35, 37).
 *
 * JOINT DEGREE: Department of Biosystems Science and Engineering D-BSSE (ETH Zürich,
 * Basel campus, Leading House) together with the Mathematisch-naturwissenschaftliche
 * Fakultät of the University of Zurich (UZH) and the Philosophisch-Naturwissenschaftliche
 * Fakultät of the University of Basel (UNIBAS). Diploma: "Master of Science ETH UZH
 * UNIBAS in Computational Biology and Bioinformatics" (Art. 4).
 *
 * This is a MENTOR-DRIVEN programme (cbb.ethz.ch/studies/mentor-system.html): students
 * agree an individual, binding study plan with a personal mentor. The Vertiefungsfächer
 * (advanced courses) and Science in Perspective categories draw on explicitly OPEN,
 * mentor-approved lists spanning the ETH, UZH and UniBasel catalogues — comparable to
 * the "Free Electives"/GESS pools in other programme files, these are NOT enumerated
 * here (see HANDOFF.md convention). Only the four Kernfächer (core course) subject
 * areas have a bounded-enough, department-published autumn schedule to draw real
 * courses from.
 *
 * Catalogue: 9 Kernfächer-area courses, individually VVZ-verified (VVZ, Autumn
 * Semester 2026 / 2026W), drawn from the official HS2026 CBB planning-aid schedules
 * (Zurich-based schedule + D-BSSE Basel schedule, both published on cbb.ethz.ch). The
 * Zurich schedule colour-codes courses by CBB subject area (Biophysics/Bioinformatics/
 * Biosystems/Data Science); the Basel (D-BSSE) schedule does not, so three courses'
 * area tags are INFERRED from course topic/lecturer, not confirmed against an official
 * per-area list — flagged individually below. No Spring/2026S CBB planning-aid schedule
 * was found, so the Kernfächer catalogue is HS-only; Anwendungen (lab rotations) has no
 * catalogue (it is individually arranged, not course-based).
 *
 * Vertiefungsfächer - Theory / Vertiefungsfächer - Biology: cbb.ethz.ch/studies/courses.html
 * confirms these ARE genuinely open, mentor-approved lists ("other courses may be taken as
 * advanced courses upon approval of the mentor") spanning the ETH, UZH and UniBasel
 * catalogues — there is no official bounded CBB list to enumerate exhaustively, unlike the
 * Kernfächer. Per the same convention used for MSc CS's "Free Electives" (~90 example
 * courses listed despite being open-ended), this file lists a representative, individually
 * VVZ- or source-checked SAMPLE of real courses per subcategory rather than leaving the
 * category empty — NOT an exhaustive or department-endorsed shortlist. Theory sample =
 * quantitative/computational method courses (ML, statistics, optimisation, algorithms),
 * reused from the verified MSc Data Science / MSc CS catalogues plus a few D-BSSE
 * modelling/AI courses found on the HS2026 D-BSSE Basel schedule. Biology sample = D-BSSE
 * biotech/bioengineering courses from that same Basel schedule plus two D-BIOL master
 * courses (VVZ-verified individually, 2026W).
 *
 * Science in Perspective: CBB has no programme-specific GESS shortlist (it draws on the
 * university-wide Wissenschaft im Kontext pool, per cbb.ethz.ch). This file reuses the
 * D-INFK-recommended GESS Type B list already VVZ-verified in
 * programmes/eth-msc-computer-science-2020.js, for the same reason MSc CS itself carries
 * it — it is a real, checkable list rather than the full all-ETH Type A/B pool. It is a
 * convenience default, not a CBB-endorsed list; CBB's mentor-approval requirement still
 * applies to whatever a student actually picks.
 */

registerProgramme({
  id: "eth-msc-computational-biology-2017",
  name: "MSc Computational Biology and Bioinformatics",
  institution: "ETH Zürich (joint degree with University of Zurich and University of Basel)",
  regulations: "Studienreglement 2017 (RSETHZ 324.1.0600.20)",
  degreeTitle: "Master of Science ETH UZH UNIBAS in Computational Biology and Bioinformatics",
  sources: [
    "Studienreglement 2017 für den Joint Degree Master-Studiengang Computational Biology and Bioinformatics, RSETHZ 324.1.0600.20, vom 18.10.2016 (credit table Art. 34)",
    "cbb.ethz.ch — The Programme / Studies / Courses / Mentor System / Mobility / Degree Request pages",
    "CBB HS2026 planning-aid schedules: Zurich-based schedule and D-BSSE Basel schedule (cbb.ethz.ch/studies/courses.html)",
    "ETH course catalogue (VVZ), Autumn Semester 2026 (2026W)",
    "cbb.ethz.ch/studies/courses.html — confirms Vertiefungsfächer are an open, mentor-approved list",
    "programmes/eth-msc-data-science-2023.js and programmes/eth-msc-computer-science-2020.js — reused, already-verified course entries (Theory sample and GESS Type B list)",
  ],

  totalRequired: 120,
  maxAccreditable: 130,
  finalProject: { category: "Master's Thesis", credits: 30, maxMissingAtStart: 32 },
  // Gate is Art. 33(1)(c): the thesis needs Kernfächer+Seminar (40) AND Anwendungen (18)
  // complete = 58 of the 90 non-thesis credits. The remaining 32 (Vertiefungsfächer 30 +
  // Science in Perspective 2) may still be missing. Derived, not stated as one number.

  majors: [],   // No specialisation/Vertiefung mechanism - the mentor-agreed study plan IS the specialisation.
  minors: [],

  categories: [
    { key: "Kernfächer - Biophysics",     req: 1,  max: null, note: "At least 1 ECTS (i.e. one course) from this CBB core-course area." },
    { key: "Kernfächer - Bioinformatics", req: 1,  max: null, note: "At least 1 ECTS (i.e. one course) from this CBB core-course area." },
    { key: "Kernfächer - Biosystems",     req: 1,  max: null, note: "At least 1 ECTS (i.e. one course) from this CBB core-course area." },
    { key: "Kernfächer - Data Science",   req: 1,  max: null, note: "At least 1 ECTS (i.e. one course) from this CBB core-course area." },
    { key: "Seminar",                     req: 2,  max: 2,    note: "The CBB Seminar (636-0704-00L) is compulsory; exclusion after two failed attempts." },
    { key: "Vertiefungsfächer - Theory",  req: 18, max: null, note: "Open, mentor-approved list from Informatics/Biology/Mathematics. Catalogue below is a representative sample, not exhaustive — the mentor may approve other ETH/UZH/UniBasel courses." },
    { key: "Vertiefungsfächer - Biology", req: 12, max: null, note: "Open, mentor-approved list. Catalogue below is a representative sample, not exhaustive — the mentor may approve other ETH/UZH/UniBasel courses." },
    { key: "Anwendungen",                 req: 18, max: null, note: ">=2 lab rotations / research projects in DIFFERENT research groups, each >=6 ECTS. May be done in academia or industry." },
    { key: "Science in Perspective",      req: 2,  max: null, note: "Any ETH GESS Science-in-Perspective unit; UniBasel language courses also accepted (BSSE students only). Catalogue below reuses the D-INFK GESS Type B shortlist as a convenience default, not a CBB-specific list." },
    { key: "Master's Thesis",             req: 30, max: 30,   note: "28 weeks full-time (26 + 2 weeks compensation). Needs Kernfächer+Seminar and Anwendungen complete first." },
    { key: "(not counted)",               req: 0,  max: null, note: "Parked - contributes to nothing." },
  ],

  groups: [
    { key: "Kernfächer total", members: [
        "Kernfächer - Biophysics", "Kernfächer - Bioinformatics",
        "Kernfächer - Biosystems", "Kernfächer - Data Science",
      ], req: 38,
      note: "The four core-course areas together must reach 38 ECTS (plus the 2-ECTS Seminar = 40, Art. 34(1)(a))." },
  ],

  // Category minima (with the Kernfächer group's excess) sum EXACTLY to 120 - no remainder.
  // 4 (area minima) + 34 (group excess to 38) + 2 (Seminar) + 18 + 12 (Vertiefungsfächer)
  // + 18 (Anwendungen) + 2 (SiP) + 30 (Thesis) = 120.

  rules: {
    maxEctsPerSemester: 34,
    maxOralsPerSemester: 1,
    atMostOne: [{ category: "Seminar", note: "Only the one compulsory CBB Seminar is foreseen." }],
    notes: [
      "MENTOR-DRIVEN PROGRAMME: every student's course selection is agreed with a personal mentor and " +
        "recorded in a binding individual study plan, submitted by the end of the first semester (Art. 15).",
      "Regular duration 2 years, maximum 4 years (Art. 16). The Diplomantrag must be filed within 4 years of starting.",
      "Where a subject area offers several 'fachlich vergleichbare' (comparable) Kernfächer or Vertiefungsfächer, " +
        "only ONE may be credited toward the diploma (Art. 34(2)(b), 34(3)(c)).",
      "Mobility: max 30 Mobilitäts-ECTS toward the diploma (Art. 20). Credits earned at UZH or UniBasel do NOT " +
        "count as mobility credits (they are native to the joint degree) and are uncapped. The Master's Thesis " +
        "can never be a mobility credit, since its supervision must always sit with an ETH/UZH/UniBasel professor. " +
        "Students whose BSc is not from ETH/UZH/UniBasel cannot take part in ETH exchange at all (Art. 20(3)).",
      "Grade point average: the final grade is the ECTS-weighted mean of every graded course listed in the " +
        "Diplomantrag (Art. 37(2)(b)) — this programme has no restricted grade-average scope, unlike some others.",
      "Admission with conditions (Zulassungsauflagen) can add up to 60 ECTS of prerequisite coursework, which " +
        "does NOT count toward the 120 ECTS diploma credits and extends the maximum study duration.",
    ],
  },

  catalogue: [
    // ------------------------------------------------------------ Kernfächer (VVZ-verified, HS2026/2026W)
    { id: "529-0004-00L", title: "Classical Simulation of (Bio) Molecular Systems", ects: 6, sem: "HS", exam: "oral",
      examDetail: "Session exam, oral; offered every session, repeatable without re-enrolling",
      lect: "P. H. Hünenberger, S. Riniker", vvz: 204302,
      counts: [{ cat: "Kernfächer - Biophysics" }] },
    { id: "636-0007-00L", title: "Computational Systems Biology", ects: 6, sem: "HS", exam: "written",
      examDetail: "Session exam, written 120'",
      lect: "J. Stelling", vvz: 203757,
      counts: [{ cat: "Kernfächer - Biosystems" }] },
    { id: "636-0017-00L", title: "Computational Biology", ects: 6, sem: "HS", exam: "written",
      examDetail: "Session exam, written 90' (75%) + compulsory homework project assignments (25%)",
      lect: "T. Vaughan, T. Stadler", vvz: 203789,
      note: "Sequence alignment, phylogenetics/phylodynamics. Taught from Basel, streamed to Zurich.",
      counts: [{ cat: "Kernfächer - Bioinformatics" }] },
    { id: "636-0101-00L", title: "Systems Genomics", ects: 4, sem: "HS", exam: "written",
      examDetail: "End-of-semester exam, written 90'; repetition in the first two weeks of the following semester",
      lect: "B. Treutlein, C. Beisel, Z. He", vvz: 203710,
      note: "Area tag (Bioinformatics) inferred from topic — the D-BSSE Basel schedule does not colour-code by CBB subject area the way the Zurich schedule does.",
      counts: [{ cat: "Kernfächer - Bioinformatics" }] },
    { id: "636-0009-00L", title: "Evolutionary Dynamics", ects: 6, sem: "HS", exam: "written",
      examDetail: "Session exam, written 90'; only offered in the session after the course, re-enrolling required to repeat",
      lect: "N. Beerenwinkel", vvz: 203363,
      note: "Area tag (Bioinformatics) inferred from topic — not confirmed against an official per-area list.",
      counts: [{ cat: "Kernfächer - Bioinformatics" }] },
    { id: "636-0117-00L", title: "Mathematical Modelling for Bioengineering and Systems Biology", ects: 4, sem: "HS", exam: "written",
      examDetail: "Session exam, written 120'; only offered in the session after the course",
      lect: "D. Iber", vvz: 203156,
      note: "Taught online. Area tag (Biosystems) inferred from title/lecturer — not confirmed against an official per-area list.",
      counts: [{ cat: "Kernfächer - Biosystems" }] },
    { id: "636-0706-00L", title: "Spatio-Temporal Modelling in Biology", ects: 4, sem: "HS", exam: "written",
      examDetail: "Session exam, written 120'; only offered in the session after the course",
      lect: "D. Iber", vvz: 203218,
      note: "Taught online. Area tag (Biosystems) inferred from title/lecturer — not confirmed against an official per-area list.",
      counts: [{ cat: "Kernfächer - Biosystems" }] },
    { id: "227-0447-00L", title: "Image Analysis and Computer Vision", ects: 6, sem: "HS", exam: "written",
      examDetail: "Session exam, written 120'; at least 3 of 6 assignments required for admission to the exam",
      lect: "E. Konukoglu", vvz: 203811,
      counts: [{ cat: "Kernfächer - Data Science" }] },
    { id: "252-0535-00L", title: "Advanced Machine Learning", ects: 10, sem: "HS", exam: "written",
      examDetail: "Session exam, written 180' (70%) + mandatory practical projects (30%); the projects must be passed to sit the exam",
      note: "Assessment data reused from programmes/eth-msc-computer-science-2020.js, where it is already VVZ-verified.",
      counts: [{ cat: "Kernfächer - Data Science" }] },

    // ------------------------------------------------------------ Vertiefungsfächer - Theory
    // Representative sample of quantitative/computational-method courses (ML, statistics,
    // optimisation, algorithms) a CBB mentor could plausibly approve. NOT exhaustive - see
    // file header. Most entries reuse assessment data already VVZ-verified in
    // eth-msc-data-science-2023.js / eth-msc-computer-science-2020.js; unverified ones are
    // honestly marked exam: "?".
    { id: "263-5210-00L", title: "Probabilistic Artificial Intelligence", ects: 8, sem: "HS", exam: "?",
      note: "Reused from programmes/eth-msc-data-science-2023.js.",
      counts: [{ cat: "Vertiefungsfächer - Theory" }] },
    { id: "401-4944-20L", title: "Mathematics of Data Science", ects: 8, sem: "HS", exam: "written",
      note: "Assessment reused from programmes/eth-msc-data-science-2023.js (there VVZ-verified).",
      counts: [{ cat: "Vertiefungsfächer - Theory" }] },
    { id: "401-3632-00L", title: "Computational Statistics", ects: 8, sem: "FS", exam: "?",
      note: "Reused from programmes/eth-msc-data-science-2023.js.",
      counts: [{ cat: "Vertiefungsfächer - Theory" }] },
    { id: "263-3010-00L", title: "Big Data", ects: 10, sem: "HS", exam: "?",
      note: "Reused from programmes/eth-msc-data-science-2023.js.",
      counts: [{ cat: "Vertiefungsfächer - Theory" }] },
    { id: "263-4500-00L", title: "Advanced Algorithms", ects: 9, sem: "HS", exam: "oral",
      note: "Assessment reused from the verified MSc CS entry (via eth-msc-data-science-2023.js).",
      counts: [{ cat: "Vertiefungsfächer - Theory" }] },
    { id: "261-5110-00L", title: "Optimization for Data Science", ects: 10, sem: "HS", exam: "written",
      note: "Assessment reused from programmes/eth-msc-data-science-2023.js (there VVZ-verified).",
      counts: [{ cat: "Vertiefungsfächer - Theory" }] },
    { id: "263-4508-00L", title: "Algorithmic Foundations of Data Science", ects: 10, sem: "FS", exam: "written",
      note: "Assessment reused from programmes/eth-msc-data-science-2023.js (there VVZ-verified).",
      counts: [{ cat: "Vertiefungsfächer - Theory" }] },
    { id: "263-3210-00L", title: "Deep Learning", ects: 8, sem: "HS", exam: "?",
      note: "Reused from programmes/eth-msc-data-science-2023.js.",
      counts: [{ cat: "Vertiefungsfächer - Theory" }] },
    { id: "263-5351-00L", title: "Machine Learning for Genomics", ects: 6, sem: "HS", exam: "?",
      note: "Reused from programmes/eth-msc-data-science-2023.js. Directly CBB-relevant (ML applied to genomics).",
      counts: [{ cat: "Vertiefungsfächer - Theory" }] },
    { id: "401-3601-00L", title: "Probability Theory", ects: 9, sem: "HS", exam: "?",
      note: "Reused from programmes/eth-msc-data-science-2023.js.",
      counts: [{ cat: "Vertiefungsfächer - Theory" }] },
    { id: "401-3621-00L", title: "Fundamentals of Mathematical Statistics", ects: 9, sem: "HS", exam: "?",
      note: "Reused from programmes/eth-msc-data-science-2023.js.",
      counts: [{ cat: "Vertiefungsfächer - Theory" }] },
    { id: "401-4632-15L", title: "Causality", ects: 5, sem: "HS", exam: "?",
      note: "Reused from programmes/eth-msc-data-science-2023.js.",
      counts: [{ cat: "Vertiefungsfächer - Theory" }] },
    { id: "401-4656-21L", title: "AI in the Sciences and Engineering", ects: 8, sem: "HS", exam: "?",
      note: "Reused from programmes/eth-msc-data-science-2023.js.",
      counts: [{ cat: "Vertiefungsfächer - Theory" }] },
    { id: "261-5113-00L", title: "Computational Challenges in Medical Genomics", ects: 2, sem: "FS", exam: "none",
      examDetail: "Graded semester performance",
      note: "Reused from programmes/eth-msc-data-science-2023.js. Directly CBB-relevant.",
      counts: [{ cat: "Vertiefungsfächer - Theory" }] },
    { id: "262-0201-00L", title: "Multimodal Medical AI", ects: 4, sem: "HS", exam: "?",
      lect: "M. Moor",
      note: "From the HS2026 D-BSSE Basel schedule (cbb.ethz.ch/studies/courses.html); not individually VVZ-verified.",
      counts: [{ cat: "Vertiefungsfächer - Theory" }] },
    { id: "636-0118-00L", title: "Introduction to Dynamical Systems with Applications to Biology", ects: 4, sem: "HS", exam: "?",
      lect: "M. Khammash",
      note: "From the HS2026 D-BSSE Basel schedule (cbb.ethz.ch/studies/courses.html); not individually VVZ-verified.",
      counts: [{ cat: "Vertiefungsfächer - Theory" }] },
    { id: "636-0119-00L", title: "Introduction to Statistics and R", ects: 6, sem: "HS", exam: "?",
      lect: "J. Kuipers",
      note: "From the HS2026 D-BSSE Basel schedule (cbb.ethz.ch/studies/courses.html); not individually VVZ-verified.",
      counts: [{ cat: "Vertiefungsfächer - Theory" }] },

    // ------------------------------------------------------------ Vertiefungsfächer - Biology
    // D-BSSE (Basel) biotech/bioengineering courses from the HS2026 D-BSSE Basel schedule,
    // plus two D-BIOL master courses individually VVZ-verified (2026W). Representative
    // sample, NOT exhaustive - see file header.
    { id: "636-0125-00L", title: "Protein Design", ects: 4, sem: "HS", exam: "?",
      lect: "S. Wicky",
      note: "From the HS2026 D-BSSE Basel schedule; not individually VVZ-verified.",
      counts: [{ cat: "Vertiefungsfächer - Biology" }] },
    { id: "636-0104-00L", title: "Biophysical Methods", ects: 4, sem: "HS", exam: "?",
      lect: "D. J. Müller",
      note: "From the HS2026 D-BSSE Basel schedule; not individually VVZ-verified.",
      counts: [{ cat: "Vertiefungsfächer - Biology" }] },
    { id: "636-0108-00L", title: "Biological Engineering and Biotechnology", ects: 4, sem: "HS", exam: "?",
      lect: "M. Fussenegger",
      note: "From the HS2026 D-BSSE Basel schedule; not individually VVZ-verified.",
      counts: [{ cat: "Vertiefungsfächer - Biology" }] },
    { id: "636-0103-00L", title: "Microtechnology", ects: 4, sem: "HS", exam: "?",
      lect: "A. Hierlemann",
      note: "From the HS2026 D-BSSE Basel schedule; not individually VVZ-verified.",
      counts: [{ cat: "Vertiefungsfächer - Biology" }] },
    { id: "636-0107-00L", title: "Biotechnology of Enzymes", ects: 4, sem: "HS", exam: "?",
      lect: "S. Panke",
      note: "From the HS2026 D-BSSE Basel schedule; not individually VVZ-verified.",
      counts: [{ cat: "Vertiefungsfächer - Biology" }] },
    { id: "636-0126-00L", title: "Multicellular Systems", ects: 4, sem: "HS", exam: "?",
      lect: "P. Liberali",
      note: "From the HS2026 D-BSSE Basel schedule; not individually VVZ-verified.",
      counts: [{ cat: "Vertiefungsfächer - Biology" }] },
    { id: "551-0309-00L", title: "Concepts in Modern Genetics", ects: 6, sem: "HS", exam: "?",
      lect: "Y. Barral, R. Bachmann-Gagescu, E. A. Brunner, O. Voinnet", vvz: 204120,
      note: "D-BIOL master course, individually VVZ-verified (2026W). Exam mode not checked.",
      counts: [{ cat: "Vertiefungsfächer - Biology" }] },
    { id: "551-0317-00L", title: "Immunology I", ects: 3, sem: "HS", exam: "?",
      lect: "M. Kopf, I. Quast", vvz: 203404,
      note: "D-BIOL master course, individually VVZ-verified (2026W). Exam mode not checked.",
      counts: [{ cat: "Vertiefungsfächer - Biology" }] },

    // ------------------------------------------------------------ Science in Perspective (GESS)
    // Bulk-reused from the D-INFK-recommended GESS Type B list, already VVZ-verified in
    // programmes/eth-msc-computer-science-2020.js — CBB itself publishes no GESS shortlist
    // (see file header). exam "?" = not yet independently VVZ-verified.
    {"id":"363-0311-00L","title":"AI Implementation & Risk: The Human Factor","ects":3,"sem":"HS","exam":"?","vvz":203795,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0101-86L","title":"Complex Social Systems: Modeling Agents, Learning, and Games","ects":3,"sem":"HS","exam":"?","vvz":204250,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0125-65L","title":"A Sampler of Histories and Philosophies of Mathematics","ects":3,"sem":"FS","exam":"?","vvz":200427,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0252-13L","title":"Network Modeling","ects":3,"sem":"FS","exam":"?","vvz":200272,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0271-00L","title":"Neuroaesthetics - Exploring the Science of Aesthetic Experience","ects":2,"sem":"HS","exam":"?","vvz":206298,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0272-00L","title":"The Cutting Edge of Social Brain Imaging","ects":2,"sem":"HS","exam":"?","vvz":206278,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0390-00L","title":"Human-Centered IT Security and Privacy","ects":3,"sem":"FS","exam":"?","vvz":200275,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0391-00L","title":"Human-Centered Security & Privacy Lab","ects":3,"sem":"HS","exam":"?","vvz":204453,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0453-00L","title":"Artificial Intelligence and Human Values","ects":3,"sem":"HS","exam":"?","vvz":204308,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0467-00L","title":"From Traffic Modeling to Smart Cities and Digital Democracies","ects":3,"sem":"HS","exam":"?","vvz":202706,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0557-00L","title":"Soccer Analytics","ects":3,"sem":"FS","exam":"?","vvz":199148,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0562-00L","title":"Correspondence, Meeting Minutes, and Access Apps. Contemporary History of Knowledge and Media","ects":3,"sem":"HS","exam":"?","vvz":205704,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0585-38L","title":"Data Science in Techno-Socio-Economic Systems","ects":3,"sem":"FS","exam":"?","vvz":199597,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0691-00L","title":"Human-Centered AI for Social Good: Peace, Health, Climate","ects":3,"sem":"FS","exam":"?","vvz":199891,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0727-01L","title":"Telecommunications Law","ects":2,"sem":"FS","exam":"?","vvz":198191,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0727-02L","title":"E-Business-Law","ects":2,"sem":"HS","exam":"?","vvz":203846,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0732-03L","title":"Intellectual Property: An Introduction","ects":2,"sem":"FS","exam":"?","vvz":198046,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0732-06L","title":"Law & Tech","ects":3,"sem":"HS","exam":"?","vvz":202633,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0735-14L","title":"Seminar Business Law: AI Projects","ects":2,"sem":"FS","exam":"?","vvz":198471,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0738-00L","title":"Intellectual Property: Introduction","ects":2,"sem":"FS","exam":"?","vvz":199917,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0739-01L","title":"Language Models for Law and Social Science","ects":3,"sem":"FS","exam":"?","vvz":198000,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0740-00L","title":"AI, Law, and Policy","ects":3,"sem":"FS","exam":"?","vvz":198363,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0742-00L","title":"Contract Design I","ects":3,"sem":"HS","exam":"?","vvz":204055,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"851-0745-00L","title":"Ethics Workshop: The Impact of Digital Life on Society","ects":2,"sem":"HS","exam":"?","vvz":203657,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"860-0024-00L","title":"Digital Society: Ethical, Societal and Economic Challenges","ects":3,"sem":"FS","exam":"?","vvz":198289,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},
    {"id":"871-0270-00L","title":"Mind Meets Machine: Cognitive and Social Perspectives on Social Robotics","ects":2,"sem":"FS","exam":"?","vvz":199671,"note":"Reused from programmes/eth-msc-computer-science-2020.js (D-INFK GESS Type B).","counts":[{"cat":"Science in Perspective"}]},

    // ------------------------------------------------------------ Mandatory fixed items
    { id: "636-0704-00L", title: "CBB Seminar", ects: 2, sem: "HS", exam: "none",
      examDetail: "Graded semester performance; repetition only possible after re-enrolling",
      lect: "N. Beerenwinkel, D. Iber, T. Stadler", vvz: 203307,
      note: "Compulsory. Exclusion from the programme after two failed attempts (Art. 22(1)).",
      mandatory: true,
      counts: [{ cat: "Seminar" }] },
    { id: "ANWENDUNGEN", title: "Anwendungen — lab rotations / research projects", ects: 18, sem: "NA", exam: "none",
      flexEcts: [12, 18],
      note: "Not a catalogue course: at least 2 lab rotations or research projects, in DIFFERENT research groups, " +
        "each with a minimum of 6 ECTS, arranged individually (academia or industry) and approved by the mentor. " +
        "Gates the Master's Thesis together with Kernfächer+Seminar.",
      counts: [{ cat: "Anwendungen" }] },
    { id: "CBB-MASTER-THESIS", title: "Master's Thesis", ects: 30, sem: "NA", exam: "none",
      note: "28 weeks full-time. Needs Kernfächer+Seminar (40) and Anwendungen (18) complete first (Art. 33(1)(c)). " +
        "May be carried out at ETH, UZH, UniBasel, in industry, or at a research institute, always under an " +
        "ETH/UZH/UniBasel professor's supervision.",
      counts: [{ cat: "Master's Thesis" }] },
  ],
});
