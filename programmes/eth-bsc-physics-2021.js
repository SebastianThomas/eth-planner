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
 * Catalogue not yet populated — credit rules only.
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

  catalogue: [],
});
