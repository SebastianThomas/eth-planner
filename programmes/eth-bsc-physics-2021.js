/* ETH Zürich — BSc Physics, Studienreglement 2021 (RSETHZ 323.1.0900.23).
 *
 * Credit rules from the Wegleitung Bachelor-Studiengang Physik, ed. HS 2025
 * (credit table under "DIPLOMANTRAG", p. 22-23). The binding text is the
 * Studienreglement 2021 itself, which was NOT consulted directly — the 58/59 split
 * between first-year and later compulsory courses is the study guide's presentation.
 *
 * NOTE: this programme has NO bachelor's thesis. The nearest equivalent is the
 * 25-ECTS practicals / proseminars / semester-papers category.
 *
 * Catalogue coverage. The Basisjahr (8 courses, 58 ECTS) and the later-year compulsory
 * courses (9 courses, 59 ECTS) are the EXACT explicit lists from the Wegleitung's
 * per-semester diagrams (Abbildungen 1-3, p. 8-15), cross-checked against the diploma
 * credit table (p. 22-23): both sums match exactly. Course codes/ECTS/exam modes come
 * from the ETH course catalogue (VVZ), Autumn/Spring Semester 2026. The first-year
 * courses are shared with BSc Mathematics (same Basisjahr); several codes and verified
 * exam modes are reused from `eth-bsc-mathematics-2024.js` where identical.
 * The 6 Kernfächer (4 experimental, 2 theoretical, 8 ECTS each) are the Wegleitung's
 * named "Kernfächer des Bachelor-Studiums" table (p. 15) - a fixed, bounded list.
 * The 3 Physikpraktika (1-3, 4+5+8=17 ECTS) are mandatory; the 6th-semester 8-ECTS
 * "Physikpraktikum 4, Proseminare und Semesterarbeiten" slot is a choice among named
 * VVZ lab options plus a supervised Proseminar/Semesterarbeit with no fixed VVZ unit.
 * Wahlfächer (8 ECTS) and Science in Perspective (6 ECTS) are explicitly OPEN pools in
 * the Wegleitung: p.15 states Wahlfächer let students "get to know further areas of
 * Physics and Mathematics and/or related disciplines" (Physik, Mathematik und/oder
 * benachbarter Disziplinen) with no department-curated shortlist like D-INFK's GESS
 * Type B list, and p.17 states GESS is a free choice from the whole D-GESS catalogue.
 * An open pool is not an empty one: below, Wahlfächer carries a non-exhaustive set of
 * real current-VVZ physics/astro-particle/condensed-matter/mathematics courses (mostly
 * reused, verified ECTS/semester, from the MSc Physics elective and core lists, which
 * the Wegleitung explicitly allows as Wahlfächer subject matter), and GESS reuses the
 * D-INFK-recommended Science in Perspective Type B list verified in
 * eth-bsc-computer-science-2016.js - GESS Wissenschaft im Kontext is a university-wide
 * D-GESS programme, not physics-specific, so no separate D-PHYS list is needed or was
 * found. Both stay honestly non-exhaustive: neither is the complete eligible universe.
 * Most exam modes are honestly `"?"` - only individually LEISTUNGSKONTROLLE-verified
 * courses carry "written"/"oral"/"none".
 */
registerProgramme({
  id: "eth-bsc-physics-2021",
  name: "BSc Physics",
  institution: "ETH Zürich",
  regulations: "Programme Regulations 2021 (Studienreglement 2021)",
  degreeTitle: "Bachelor of Science ETH in Physics",
  sources: [
    "Wegleitung Bachelor-Studiengang Physik, Studienreglement 2021, edition HS 2025",
    "Studienreglement 2021, RSETHZ 323.1.0900.23 (binding text, not consulted directly)",
  ],

  totalRequired: 180,
  maxAccreditable: 190,
  finalProject: null,          // BSc Physics has no bachelor's thesis

  majors: [],
  minors: [],

  categories: [
    { key: "Compulsory courses, first year (Basisjahr)", req: 58, max: null,
      note: "Examined in the Basisprüfung, which is split into two blocks." },
    { key: "Compulsory courses, later years", req: 59, max: null,
      note: "Obligatorische Fächer des übrigen Studiums." },
    { key: "Core courses (Kernfächer) - experimental", req: 8, max: null,
      note: "At least one experimental core subject, 8 ECTS." },
    { key: "Core courses (Kernfächer) - other", req: 16, max: null,
      note: "Split out so the experimental minimum is checkable; together they make the 24." },
    { key: "Electives (Wahlfächer)", req: 8, max: null },
    { key: "Practicals, proseminars and semester papers", req: 25, max: null,
      note: "Praktika 17 + Physikpraktikum / Proseminar / Semesterarbeit 8. Lab courses 1-3 are compulsory." },
    { key: "Science in Perspective (GESS)", req: 6, max: null,
      note: "At least two different D-GESS courses; at most 3 ECTS from language courses." },
    { key: "(not counted)", req: 0, max: null, note: "Parked - contributes to nothing." },
  ],

  groups: [
    { key: "Core courses total", members: ["Core courses (Kernfächer) - experimental",
                                           "Core courses (Kernfächer) - other"], req: 24,
      note: "24 ECTS of Kernfächer, of which at least 8 must be experimental." },
  ],

  // 58 + 59 + 8 + 16 + 8 + 25 + 6 = 180 exactly. No free remainder in this programme.

  rules: {
    maxEctsPerSemester: 34,
    maxOralsPerSemester: null,
    atMostOne: [],
    notes: [
      "The Basisprüfung is split into two blocks: block 1 after the autumn semester, block 2 after the spring semester. Each must be passed separately with a weighted grade average of at least 4.0.",
      "Both blocks must be passed within two years of matriculation for studies to continue. Two attempts per block; failing either block twice means exclusion from the programme.",
      "Consecutive transfer to the MSc Physics is allowed once at most 62 ECTS are still missing for the BSc, exam blocks I, IIa and IIb are passed, and all three physics lab courses are complete. MSc enrolment stays provisional until the BSc diploma is issued.",
      "At most 190 ECTS may be credited toward the BSc diploma. BSc course work done for the MSc transfers to the MSc once enrolled.",
      "Project work (Proseminar / Semesterarbeit, normally the 6th semester) must be registered in myStudies before it starts and needs a written report with a declaration of originality.",
      "An overall grade average of at least 5.75 earns the diploma mark 'mit Auszeichnung'.",
      "'Ergänzende Fächer' do not count toward the 180 ECTS; they appear only on the transcript addendum.",
    ],
  },

  catalogue: [
    // ------------------------------------------------------------ Basisjahr (mandatory, 58 ECTS)
    // Shared first year with BSc Mathematics. Codes/exam modes for the four courses also
    // mandatory in eth-bsc-mathematics-2024.js are reused verified from that file.
    { id: "402-1701-00L", title: "Physics I", ects: 7, sem: "HS", exam: "written", mandatory: true, vvz: 202960,
      examDetail: "Written session examination, 180 minutes",
      counts: [{ cat: "Compulsory courses, first year (Basisjahr)" }] },
    { id: "401-1261-07L", title: "Analysis I: One Variable", ects: 10, sem: "HS", exam: "written", mandatory: true, vvz: 203950,
      examDetail: "Written session examination, 150 minutes",
      counts: [{ cat: "Compulsory courses, first year (Basisjahr)" }] },
    { id: "252-0847-00L", title: "Computer Science", ects: 5, sem: "HS", exam: "written", mandatory: true, vvz: 203615,
      examDetail: "Written session examination, 120 minutes",
      counts: [{ cat: "Compulsory courses, first year (Basisjahr)" }] },
    { id: "401-1151-00L", title: "Linear Algebra I", ects: 7, sem: "HS", exam: "written", mandatory: true, vvz: 203093,
      examDetail: "Part of the Linear Algebra I/II annual course; written session examination, 210 minutes",
      counts: [{ cat: "Compulsory courses, first year (Basisjahr)" }] },
    { id: "402-1782-00L", title: "Physics II", ects: 7, sem: "FS", exam: "?", vvz: 198868,
      note: "Examined as part of Basisprüfungsblock 2 (weight 2 of 5); mode not individually verified.",
      mandatory: true, counts: [{ cat: "Compulsory courses, first year (Basisjahr)" }] },
    { id: "401-1262-07L", title: "Analysis II: Several Variables", ects: 10, sem: "FS", exam: "written", mandatory: true, vvz: 198848,
      examDetail: "Written session examination, 180 minutes",
      counts: [{ cat: "Compulsory courses, first year (Basisjahr)" }] },
    { id: "401-1152-02L", title: "Linear Algebra II", ects: 7, sem: "FS", exam: "written", mandatory: true, vvz: 199246,
      examDetail: "Part of the Linear Algebra I/II annual course; written session examination, 210 minutes",
      counts: [{ cat: "Compulsory courses, first year (Basisjahr)" }] },
    { id: "402-1900-00L", title: "Data Analysis in Physics", ects: 5, sem: "FS", exam: "?",
      note: "Datenanalyse in der Physik. Examined as part of Basisprüfungsblock 2; mode not individually verified.",
      mandatory: true, counts: [{ cat: "Compulsory courses, first year (Basisjahr)" }] },
    // Sum check: 7+10+5+7+7+10+7+5 = 58, matching the diploma table exactly.

    // ------------------------------------------------------------ later years (mandatory, 59 ECTS)
    { id: "402-2883-00L", title: "Physics III", ects: 7, sem: "HS", exam: "?", vvz: 202573, mandatory: true,
      counts: [{ cat: "Compulsory courses, later years" }] },
    { id: "401-2303-00L", title: "Complex Analysis", ects: 6, sem: "HS", exam: "written", vvz: 203391, mandatory: true,
      examDetail: "Written session examination, 120 minutes", note: "Funktionentheorie.",
      counts: [{ cat: "Compulsory courses, later years" }] },
    { id: "402-2203-01L", title: "Classical Mechanics", ects: 7, sem: "HS", exam: "written", vvz: 203029, mandatory: true,
      examDetail: "Written session examination, 180 minutes", note: "Allgemeine Mechanik.",
      counts: [{ cat: "Compulsory courses, later years" }] },
    { id: "401-2333-00L", title: "Mathematical Methods of Physics I", ects: 6, sem: "HS", exam: "?", vvz: 203184, mandatory: true,
      counts: [{ cat: "Compulsory courses, later years" }] },
    { id: "401-2334-00L", title: "Mathematical Methods of Physics II", ects: 6, sem: "FS", exam: "?", vvz: 198495, mandatory: true,
      counts: [{ cat: "Compulsory courses, later years" }] },
    { id: "402-0204-00L", title: "Electrodynamics", ects: 7, sem: "FS", exam: "written", vvz: 198298, mandatory: true,
      examDetail: "Written session examination, 180 minutes",
      counts: [{ cat: "Compulsory courses, later years" }] },
    { id: "402-2214-10L", title: "Theory of Heat", ects: 6, sem: "FS", exam: "?", mandatory: true,
      note: "Theorie der Wärme.", counts: [{ cat: "Compulsory courses, later years" }] },
    { id: "401-2664-00L", title: "Introduction to Numerical Methods", ects: 6, sem: "FS", exam: "?", mandatory: true,
      note: "Numerische Methoden.", counts: [{ cat: "Compulsory courses, later years" }] },
    { id: "402-0205-00L", title: "Quantum Mechanics I", ects: 8, sem: "HS", exam: "written", vvz: 203243, mandatory: true,
      examDetail: "Written session examination, 180 minutes",
      note: "3rd-year course. A definitively failed exam here can be compensated by a theoretical Kernfach.",
      counts: [{ cat: "Compulsory courses, later years" }] },
    // Sum check: 7+6+7+6+6+7+6+6+8 = 59, matching the diploma table exactly.

    // ------------------------------------------------------------ Praktika (mandatory, 17 ECTS)
    { id: "402-0000-01L", title: "Physics Lab 1", ects: 4, sem: "HS", exam: "none", passFail: true, mandatory: true, vvz: 203999,
      examDetail: "Ungraded semester performance", note: "3rd semester. Physikpraktikum 1.",
      counts: [{ cat: "Practicals, proseminars and semester papers" }] },
    { id: "402-0000-04L", title: "Physics Lab 2", ects: 5, sem: "FS", exam: "none", passFail: true, mandatory: true,
      note: "4th semester. Physikpraktikum 2; assumed same ungraded semester-performance format as Physics Lab 1 (verified) - not individually re-checked.",
      counts: [{ cat: "Practicals, proseminars and semester papers" }] },
    { id: "402-0000-09L", title: "Physics Lab 3", ects: 8, sem: "HS", exam: "none", passFail: true, mandatory: true,
      note: "5th semester. Physikpraktikum 3; assumed same ungraded semester-performance format as Physics Lab 1 (verified) - not individually re-checked.",
      counts: [{ cat: "Practicals, proseminars and semester papers" }] },
    // Sum check: 4+5+8 = 17, matching the diploma table's "Praktika (17 KP)" line exactly.

    // ------------------------------------------------------------ Kernfächer (selectable; >=24 ECTS, >=8 experimental)
    { id: "402-0255-00L", title: "Introduction to Solid State Physics", ects: 8, sem: "HS", exam: "?",
      note: "Experimental Kernfach. Einführung in die Festkörperphysik.",
      counts: [{ cat: "Core courses (Kernfächer) - experimental" }] },
    { id: "402-0263-00L", title: "Astrophysics I", ects: 8, sem: "HS", exam: "?",
      note: "Experimental Kernfach.",
      counts: [{ cat: "Core courses (Kernfächer) - experimental" }] },
    { id: "402-0275-00L", title: "Quantum Electronics", ects: 8, sem: "FS", exam: "?",
      note: "Experimental Kernfach. Quantenelektronik.",
      counts: [{ cat: "Core courses (Kernfächer) - experimental" }] },
    { id: "402-0266-00L", title: "Introduction to Nuclear and Particle Physics", ects: 8, sem: "FS", exam: "?",
      note: "Experimental Kernfach. Einführung in die Kern- und Teilchenphysik.",
      counts: [{ cat: "Core courses (Kernfächer) - experimental" }] },
    { id: "402-0234-00L", title: "Mechanics of Continua", ects: 8, sem: "FS", exam: "?",
      note: "Theoretical Kernfach. Kontinuumsmechanik.",
      counts: [{ cat: "Core courses (Kernfächer) - other" }] },
    { id: "402-0206-00L", title: "Quantum Mechanics II", ects: 8, sem: "FS", exam: "?",
      note: "Theoretical Kernfach. Can compensate a definitively failed Quantum Mechanics I.",
      counts: [{ cat: "Core courses (Kernfächer) - other" }] },

    // ------------------------------------------------------------ 6th-semester 8-ECTS project slot
    // "Physikpraktikum 4, Proseminare und Semesterarbeiten" - choose ONE of these options.
    { id: "402-0000-10L", title: "Physics Lab 4", ects: 8, sem: "FS", exam: "?",
      note: "One option for the 6th-semester project slot.",
      counts: [{ cat: "Practicals, proseminars and semester papers" }] },
    { id: "402-0000-14L", title: "P+: Project-based Physics Lab", ects: 8, sem: "FS", exam: "?",
      note: "One option for the 6th-semester project slot.",
      counts: [{ cat: "Practicals, proseminars and semester papers" }] },
    { id: "D-PHYS-PROSEMINAR", title: "Proseminar (theoretical physics)", ects: 8, sem: "BOTH", exam: "none",
      note: "Not a fixed VVZ unit: registered individually under \"Arbeiten\" in myStudies with an internal supervisor, before the work starts. Requires a written report with a declaration of originality.",
      counts: [{ cat: "Practicals, proseminars and semester papers" }] },
    { id: "D-PHYS-SEMESTERARBEIT", title: "Semesterarbeit / In-Group Project (experimental or theoretical)", ects: 8, sem: "BOTH", exam: "none",
      note: "Not a fixed VVZ unit: registered individually under \"Arbeiten\" in myStudies with an internal supervisor, before the work starts. Requires a written report with a declaration of originality.",
      counts: [{ cat: "Practicals, proseminars and semester papers" }] },

    // ------------------------------------------------------------ Electives (Wahlfächer) - OPEN pool
    // Non-exhaustive real-course selection, mentor approval required per the Wegleitung.
    // ECTS/semester for 402-0442-00L verified live in the VVZ (Autumn 2026); the rest are
    // reused, VVZ-sourced ECTS/semester figures already carried in eth-msc-physics-2014.js's
    // Core and "Electives in Physics and Mathematics" categories, plus two D-MATH courses
    // individually VVZ-verified for Spring 2026 (Functional Analysis II, Differential
    // Geometry II - actual current VVZ titles, not the "I" working titles first assumed).
    // Exam modes are honestly `"?"` - not individually re-verified for Bachelor Wahlfach use.
    { id: "402-0843-00L", title: "Quantum Field Theory I", ects: 10, sem: "HS", exam: "?",
      note: "Graduate-level theoretical physics course commonly taken as a Wahlfach with mentor approval.",
      counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "402-0861-00L", title: "Statistical Physics", ects: 10, sem: "HS", exam: "?",
      counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "402-0830-00L", title: "General Relativity", ects: 10, sem: "HS", exam: "?",
      counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "402-0442-00L", title: "Quantum Optics", ects: 10, sem: "HS", exam: "?",
      note: "ECTS/semester verified live in the VVZ for Autumn 2026.",
      counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "402-0713-00L", title: "Astro-Particle Physics I", ects: 6, sem: "HS", exam: "?",
      counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "402-0714-00L", title: "Astro-Particle Physics II", ects: 6, sem: "FS", exam: "?",
      counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "402-0725-00L", title: "Experimental Methods and Instruments of Particle Physics", ects: 6, sem: "HS", exam: "?",
      counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "402-0767-00L", title: "Neutrino Physics", ects: 6, sem: "HS", exam: "?",
      counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "402-0715-00L", title: "Low Energy Particle Physics", ects: 6, sem: "HS", exam: "?",
      counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "402-0777-00L", title: "Particle Accelerator Physics and Modeling I", ects: 6, sem: "HS", exam: "?",
      note: "Not offered in Autumn Semester 2026 per the VVZ; ECTS/semester from the last offering.",
      counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "402-0703-00L", title: "Phenomenology of Physics Beyond the Standard Model", ects: 6, sem: "FS", exam: "?",
      counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "402-0738-00L", title: "Statistical Methods and Analysis Techniques in Experimental Physics", ects: 10, sem: "FS", exam: "?",
      counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "402-0604-00L", title: "Materials Analysis by Nuclear Techniques", ects: 6, sem: "FS", exam: "?",
      counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "402-0464-00L", title: "Optical Properties of Semiconductors", ects: 8, sem: "HS", exam: "?",
      note: "Now listed in the VVZ as \"Light-Matter Interaction in Semiconductors: Physics and Applications\".",
      counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "402-0317-00L", title: "Semiconductor Materials: Fundamentals and Fabrication", ects: 6, sem: "HS", exam: "?",
      counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "402-0595-00L", title: "Semiconductor Nanostructures", ects: 6, sem: "HS", exam: "?",
      counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "402-0535-00L", title: "Introduction to Magnetism", ects: 6, sem: "HS", exam: "?",
      counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3462-00L", title: "Functional Analysis II", ects: 9, sem: "FS", exam: "?",
      note: "D-MATH course open to Physics Wahlfach credit; ECTS/semester verified live in the VVZ for Spring 2026.",
      counts: [{ cat: "Electives (Wahlfächer)" }] },
    { id: "401-3532-08L", title: "Differential Geometry II", ects: 9, sem: "FS", exam: "?",
      note: "D-MATH course open to Physics Wahlfach credit; ECTS/semester verified live in the VVZ for Spring 2026.",
      counts: [{ cat: "Electives (Wahlfächer)" }] },

    // ------------------------------------------------------------ Science in Perspective (GESS) - OPEN pool
    // Reused verbatim from the D-INFK-recommended Science in Perspective Type B list in
    // eth-bsc-computer-science-2016.js: GESS Wissenschaft im Kontext is a university-wide
    // D-GESS programme (not physics-specific), and no separate D-PHYS-curated GESS list
    // was found, so the verified D-INFK list is reused here rather than left empty.
    { id: "851-0742-00L", title: "Contract Design I", ects: 3, sem: "HS", exam: "?", vvz: 204055, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0727-02L", title: "E-Business-Law", ects: 2, sem: "HS", exam: "?", vvz: 203846, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0252-15L", title: "Network Analysis", ects: 3, sem: "HS", exam: "?", vvz: 203030, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0732-06L", title: "Law & Tech", ects: 3, sem: "HS", exam: "?", vvz: 202633, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0101-86L", title: "Complex Social Systems: Modeling Agents, Learning, and Games", ects: 3, sem: "HS", exam: "?", vvz: 204250, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0467-00L", title: "From Traffic Modeling to Smart Cities and Digital Democracies", ects: 3, sem: "HS", exam: "?", vvz: 202706, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0391-00L", title: "Human-Centered Security & Privacy Lab", ects: 3, sem: "HS", exam: "?", vvz: 204453, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0453-00L", title: "Artificial Intelligence and Human Values", ects: 3, sem: "HS", exam: "?", vvz: 204308, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "363-0311-00L", title: "AI Implementation & Risk: The Human Factor", ects: 3, sem: "HS", exam: "?", vvz: 203795, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0745-00L", title: "Ethics Workshop: The Impact of Digital Life on Society", ects: 2, sem: "HS", exam: "?", vvz: 203657, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0562-00L", title: "Correspondence, Meeting Minutes, and Access Apps. Contemporary History of Knowledge and Media", ects: 3, sem: "HS", exam: "?", vvz: 205704, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0272-00L", title: "The Cutting Edge of Social Brain Imaging", ects: 2, sem: "HS", exam: "?", vvz: 206278, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0271-00L", title: "Neuroaesthetics - Exploring the Science of Aesthetic Experience", ects: 2, sem: "HS", exam: "?", vvz: 206298, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0740-00L", title: "AI, Law, and Policy", ects: 3, sem: "FS", exam: "?", vvz: 198363, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0732-03L", title: "Intellectual Property: An Introduction", ects: 2, sem: "FS", exam: "?", vvz: 198046, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0727-01L", title: "Telecommunications Law", ects: 2, sem: "FS", exam: "?", vvz: 198191, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "871-0270-00L", title: "Mind Meets Machine: Cognitive and Social Perspectives on Social Robotics", ects: 2, sem: "FS", exam: "?", vvz: 199671, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "860-0024-00L", title: "Digital Society: Ethical, Societal and Economic Challenges", ects: 3, sem: "FS", exam: "?", vvz: 198289, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0738-00L", title: "Intellectual Property: Introduction", ects: 2, sem: "FS", exam: "?", vvz: 199917, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0735-14L", title: "Seminar Business Law: AI Projects", ects: 2, sem: "FS", exam: "?", vvz: 198471, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0691-00L", title: "Human-Centered AI for Social Good: Peace, Health, Climate", ects: 3, sem: "FS", exam: "?", vvz: 199891, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0252-13L", title: "Network Modeling", ects: 3, sem: "FS", exam: "?", vvz: 200272, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0390-00L", title: "Human-Centered IT Security and Privacy", ects: 3, sem: "FS", exam: "?", vvz: 200275, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
    { id: "851-0125-65L", title: "A Sampler of Histories and Philosophies of Mathematics", ects: 3, sem: "FS", exam: "?", vvz: 200427, note: "Recommended Science in Perspective (Type B) for D-INFK; reused here as D-PHYS has no separate curated list.",
      counts: [{ cat: "Science in Perspective (GESS)" }] },
  ],
});
