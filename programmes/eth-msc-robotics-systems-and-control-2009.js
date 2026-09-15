/* ETH Zürich — MSc Robotics, Systems and Control, Studienreglement 2009
 * (RSETHZ 324.1.0300.40), with amendments through 2017.
 *
 * D-MAVT is the lead department, jointly with D-ITET and D-INFK. The regulation year
 * 2009 is INFERRED to be current: the official Study Guide of August 2025 still cites
 * "Program Regulations ... 2009" and no newer regulation was found.
 *
 * This is the first programme whose electives draw on THREE departments' catalogues.
 * Catalogue not yet populated — credit rules only.
 */
registerProgramme({
  id: "eth-msc-robotics-systems-and-control-2009",
  name: "MSc Robotics, Systems and Control",
  institution: "ETH Zürich (D-MAVT lead, with D-ITET and D-INFK)",
  regulations: "Studienreglement 2009 (RSETHZ 324.1.0300.40)",
  degreeTitle: "Master of Science ETH in Robotics, Systems and Control",
  sources: [
    "Study Guide MSc RSC, August 2025",
    "Studienreglement 2009, RSETHZ 324.1.0300.40 (credit table Art. 35)",
  ],

  totalRequired: 90,
  maxAccreditable: 100,
  finalProject: { category: "Master's thesis", credits: 30, maxMissingAtStart: null },

  majors: [],
  minors: [],

  categories: [
    { key: "Core courses (Kernfächer)", req: 36, max: null,
      note: "Must be graded, not pass/fail, and at Master's level. Chosen with the tutor and fixed in the Learning Agreement." },
    { key: "Multidisciplinary courses", req: 6, max: null,
      note: "Drawn from the D-MAVT, D-ITET and D-INFK catalogues. No language courses." },
    { key: "Science in Perspective (GESS)", req: 2, max: 4,
      note: "At most 4 ECTS are accreditable. At most 3 ECTS of language courses across the whole ETH bachelor and master." },
    { key: "Semester project (Studienarbeit)", req: 8, max: null,
      note: "About 6 weeks full-time, with report and presentation; graded. Must be passed before the thesis starts, and must be in a different area from it." },
    { key: "Industrial internship", req: 8, max: null,
      note: "At least 12 weeks in industry or a research lab outside a Swiss research or teaching institution. Graded pass/fail. MANDATORY." },
    { key: "Master's thesis", req: 30, max: null, note: "6 months full-time." },
    { key: "(not counted)", req: 0, max: null, note: "Parked - contributes to nothing." },
  ],

  groups: [],

  // 36 + 6 + 2 + 8 + 8 + 30 = 90 exactly. No free remainder in this programme.

  // Art. 38(2)b: the final grade averages ONLY these three categories.
  gradeAverage: {
    categories: ["Core courses (Kernfächer)", "Semester project (Studienarbeit)", "Master's thesis"],
  },

  rules: {
    maxEctsPerSemester: 34,
    maxOralsPerSemester: null,
    atMostOne: [],
    notes: [
      "The final grade is the credit-weighted average of the core courses, the semester project and the Master's thesis ONLY. Multidisciplinary courses, Science in Perspective and the internship do not affect it.",
      "The tutor system is mandatory: there is no admission without a tutor's commitment. The tutor and student agree an individual Learning Agreement covering the core and multidisciplinary courses, and it is binding.",
      "Thesis admission requires the Bachelor's degree complete, admission conditions met, at least 28 ECTS of core courses, and the semester project passed with its 8 credits earned.",
      "At least 60 ECTS must be earned at ETH Zürich — equivalently, at most 30 mobility credits are accreditable. The planner cannot check where a credit was earned; verify by hand.",
      "The internship may be done BEFORE starting the Master's (this is recommended) but only counts if completed after all Bachelor credits were earned. It may be split once and must be finished before the diploma application. A recognised university-of-applied-sciences internship can be credited here.",
      "Three departments feed the course lists; D-MAVT assigns all learning units to categories in consultation with D-ITET and D-INFK.",
      "Standard duration 3 semesters; maximum 3 years. 'Passed with distinction' at an overall average of at least 5.75.",
    ],
  },

  // Catalogue coverage note. RSC has NO bounded, officially-published Kernfächer or
  // Multidisziplinfächer course list: the Study Guide (Aug 2025 / Sept 2018 editions)
  // and the admission Anhang (RSETHZ 324.1.0300.40, Stand 01.09.2019) both describe the
  // categories only structurally - "chosen with the tutor, fixed in the Learning
  // Agreement" - and explicitly say course-by-course details are "published in the
  // course catalogue (www.vvz.ethz.ch)", not in a fixed departmental list. Unlike BSc/MSc
  // CS or Cyber Security, there is no D-MAVT "Majors/Minors PDF" enumerating RSC courses.
  // The 15 courses below were individually verified against the VVZ (2026W/2026S,
  // KATALOGDATEN + LEISTUNGSKONTROLLE) and are commonly-taken robotics/systems/control
  // courses spanning all three feeder departments (151-xxx D-MAVT, 227-xxx D-ITET,
  // 252-/263-xxx D-INFK). Their Kernfächer vs. Multidisziplinfächer split below is this
  // agent's reasonable categorisation (control/robotics core vs. broader CS/EE electives),
  // NOT an official ETH grouping - the real split is whatever the student's tutor signs
  // off in the Learning Agreement. Treat both categories as open pools; add any other
  // graded Master's-level D-MAVT/D-ITET/D-INFK course by hand as needed.
  catalogue: [
    // ------------------------------------------------------------ Kernfächer (illustrative)
    { id: "151-0591-00L", title: "Control Systems I", ects: 4, sem: "HS", exam: "written",
      examDetail: "Session exam, written 150'", lect: "E. Frazzoli", vvz: 203378, periodicity: "yearly",
      counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "151-0563-01L", title: "Dynamic Programming and Optimal Control", ects: 4, sem: "HS", exam: "written",
      examDetail: "Session exam, written 150'", lect: "R. D'Andrea", vvz: 203945, periodicity: "yearly",
      counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "151-0593-00L", title: "Embedded Control Systems", ects: 4, sem: "HS", exam: "none",
      examDetail: "Graded semester performance; no further published breakdown",
      lect: "C. Onder, M. Schmid Daners", vvz: 203755, periodicity: "yearly",
      note: "VVZ 2026W notice: this course is offered for the last time in Autumn Semester 2026.",
      counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "151-0660-00L", title: "Model Predictive Control", ects: 4, sem: "HS", exam: "written",
      examDetail: "Session exam, written 120'", lect: "M. Zeilinger", vvz: 206498, periodicity: "yearly",
      counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "151-0851-00L", title: "Robot Dynamics", ects: 4, sem: "HS", exam: "written",
      examDetail: "Session exam, written 120'", lect: "M. Hutter, S. Leutenegger", vvz: 203486, periodicity: "yearly",
      counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "151-0566-00L", title: "Recursive Estimation", ects: 4, sem: "FS", exam: "written",
      examDetail: "Session exam, written 150'", lect: "R. D'Andrea", vvz: 198295, periodicity: "yearly",
      counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "151-0854-00L", title: "Autonomous Mobile Robots", ects: 5, sem: "FS", exam: "written",
      examDetail: "Session exam, written 120'", lect: "S. Leutenegger", vvz: 197909, periodicity: "yearly",
      counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "227-0225-00L", title: "Linear System Theory", ects: 6, sem: "HS", exam: "written",
      examDetail: "Session exam, written 120'", lect: "J. Lygeros, A. Tsiamis", vvz: 204169, periodicity: "yearly",
      note: "D-ITET course; foundational for control theory, commonly taken as a Kernfach.",
      counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "151-0532-00L", title: "Nonlinear Dynamics and Chaos I", ects: 4, sem: "HS", exam: "written",
      examDetail: "End-of-semester exam, written 120'", lect: "G. Haller", vvz: 203917, periodicity: "yearly",
      counts: [{ cat: "Core courses (Kernfächer)" }] },
    { id: "151-0575-01L", title: "Signals and Systems", ects: 4, sem: "HS", exam: "written",
      examDetail: "Session exam, written 150'", lect: "A. Carron", vvz: 203054, periodicity: "yearly",
      counts: [{ cat: "Core courses (Kernfächer)" }] },

    // ------------------------------------------------------------ Multidisziplinfächer (illustrative)
    { id: "227-0447-00L", title: "Image Analysis and Computer Vision", ects: 6, sem: "HS", exam: "written",
      examDetail: "Session exam, written 120'", lect: "E. Konukoglu, E. Erdil", vvz: 203811, periodicity: "yearly",
      note: "D-ITET course.", counts: [{ cat: "Multidisciplinary courses" }] },
    { id: "263-3210-00L", title: "Deep Learning", ects: 8, sem: "HS", exam: "written",
      examDetail: "Session exam, written 120'", lect: "G. R. Obozinski, F. Perez Cruz", vvz: 203295, periodicity: "yearly",
      note: "D-INFK course.", counts: [{ cat: "Multidisciplinary courses" }] },
    { id: "263-5210-00L", title: "Probabilistic Artificial Intelligence", ects: 8, sem: "HS", exam: "written",
      examDetail: "Session exam, written 120'", lect: "A. Krause", vvz: 204292, periodicity: "yearly",
      note: "D-INFK course.", counts: [{ cat: "Multidisciplinary courses" }] },
    { id: "252-0535-00L", title: "Advanced Machine Learning", ects: 10, sem: "HS", exam: "written",
      examDetail: "Session exam, written 180'", lect: "J. M. Buhmann, C. Cotrini Jimenez", vvz: 203151, periodicity: "yearly",
      note: "D-INFK course.", counts: [{ cat: "Multidisciplinary courses" }] },
    { id: "227-0104-00L", title: "Communication and Detection Theory", ects: 6, sem: "FS", exam: "written",
      examDetail: "Session exam, written 180'", lect: "A. Lapidoth", vvz: 198858, periodicity: "yearly",
      note: "D-ITET course.", counts: [{ cat: "Multidisciplinary courses" }] },

    // ------------------------------------------------------------ semester project / internship / thesis
    { id: "STUDIENARBEIT", title: "Semester Project (Studienarbeit)", ects: 8, sem: "NA", exam: "none",
      examDetail: "Graded report and presentation, pass/fail component only in that it must be passed before the thesis",
      note: "Not a catalogue course: ~6 weeks full-time, arranged with a professor. Must be passed and in a different area from the Master's thesis before the thesis can start.",
      counts: [{ cat: "Semester project (Studienarbeit)" }] },
    { id: "INDUSTRIE-PRAXIS", title: "Industrial Internship", ects: 8, sem: "NA", exam: "none",
      examDetail: "Pass/fail", passFail: true,
      note: "Not a catalogue course: at least 12 weeks in industry or a research lab outside a Swiss research/teaching institution. Mandatory. May be done before the Master's starts (recommended) but only counts once all Bachelor's credits are earned; may be split once.",
      counts: [{ cat: "Industrial internship" }] },
    { id: "MASTER-THESIS-RSC", title: "Master's Thesis", ects: 30, sem: "NA", exam: "none",
      note: "6 months full-time. Gate: Bachelor's degree complete, admission conditions met, ≥28 ECTS of core courses, and the Semester Project passed with its 8 credits earned.",
      counts: [{ cat: "Master's thesis" }] },
  
    // ------------------------------------------------------------ Science in Perspective (GESS)
    // Reused from the D-INFK-recommended GESS Type B list, already VVZ-verified in eth-msc-computer-science-2020.js.
    {"id":"363-0311-00L","title":"AI Implementation & Risk: The Human Factor","ects":3,"sem":"HS","exam":"?","vvz":203795,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0101-86L","title":"Complex Social Systems: Modeling Agents, Learning, and Games","ects":3,"sem":"HS","exam":"?","vvz":204250,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0125-65L","title":"A Sampler of Histories and Philosophies of Mathematics","ects":3,"sem":"FS","exam":"?","vvz":200427,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0252-13L","title":"Network Modeling","ects":3,"sem":"FS","exam":"?","vvz":200272,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0271-00L","title":"Neuroaesthetics - Exploring the Science of Aesthetic Experience","ects":2,"sem":"HS","exam":"?","vvz":206298,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0272-00L","title":"The Cutting Edge of Social Brain Imaging","ects":2,"sem":"HS","exam":"?","vvz":206278,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0390-00L","title":"Human-Centered IT Security and Privacy","ects":3,"sem":"FS","exam":"?","vvz":200275,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0391-00L","title":"Human-Centered Security & Privacy Lab","ects":3,"sem":"HS","exam":"?","vvz":204453,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0453-00L","title":"Artificial Intelligence and Human Values","ects":3,"sem":"HS","exam":"?","vvz":204308,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0467-00L","title":"From Traffic Modeling to Smart Cities and Digital Democracies","ects":3,"sem":"HS","exam":"?","vvz":202706,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0557-00L","title":"Soccer Analytics","ects":3,"sem":"FS","exam":"?","vvz":199148,"counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0562-00L","title":"Correspondence, Meeting Minutes, and Access Apps. Contemporary History of Knowledge and Media","ects":3,"sem":"HS","exam":"?","vvz":205704,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0585-38L","title":"Data Science in Techno-Socio-Economic Systems","ects":3,"sem":"FS","exam":"?","vvz":199597,"counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0691-00L","title":"Human-Centered AI for Social Good: Peace, Health, Climate","ects":3,"sem":"FS","exam":"?","vvz":199891,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0727-01L","title":"Telecommunications Law","ects":2,"sem":"FS","exam":"?","vvz":198191,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0727-02L","title":"E-Business-Law","ects":2,"sem":"HS","exam":"?","vvz":203846,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0732-03L","title":"Intellectual Property: An Introduction","ects":2,"sem":"FS","exam":"?","vvz":198046,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0732-06L","title":"Law & Tech","ects":3,"sem":"HS","exam":"?","vvz":202633,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0735-14L","title":"Seminar Business Law: AI Projects","ects":2,"sem":"FS","exam":"?","vvz":198471,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0738-00L","title":"Intellectual Property: Introduction","ects":2,"sem":"FS","exam":"?","vvz":199917,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0739-01L","title":"Language Models for Law and Social Science","ects":3,"sem":"FS","exam":"?","vvz":198000,"counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0740-00L","title":"AI, Law, and Policy","ects":3,"sem":"FS","exam":"?","vvz":198363,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0742-00L","title":"Contract Design I","ects":3,"sem":"HS","exam":"?","vvz":204055,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0745-00L","title":"Ethics Workshop: The Impact of Digital Life on Society","ects":2,"sem":"HS","exam":"?","vvz":203657,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"860-0024-00L","title":"Digital Society: Ethical, Societal and Economic Challenges","ects":3,"sem":"FS","exam":"?","vvz":198289,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"871-0270-00L","title":"Mind Meets Machine: Cognitive and Social Perspectives on Social Robotics","ects":2,"sem":"FS","exam":"?","vvz":199671,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
],
});
