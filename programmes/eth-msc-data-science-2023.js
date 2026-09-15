/* ETH Zürich — MSc Data Science, Studienreglement 2023 (RSETHZ 324.1.1600.21).
 * Leading house D-INFK, jointly with D-MATH and D-ITET. For students starting
 * Autumn Semester 2023 or later. Numbers from the binding Reglement (Art. 14, 19-20, 30-32).
 *
 * CAUTION: an obsolete "Appendix to Programme Regulations 2017" is still served from the
 * same D-INFK folder with different numbers. It does not apply to the 2023 cohort.
 *
 */
registerProgramme({
  id: "eth-msc-data-science-2023",
  name: "MSc Data Science",
  institution: "ETH Zürich",
  regulations: "Studienreglement 2023 (RSETHZ 324.1.1600.21)",
  degreeTitle: "Master of Science ETH in Data Science",
  sources: [
    "Studienreglement 2023, RSETHZ 324.1.1600.21 (credit table Art. 31)",
    "Appendix 1 to the Regulations 2023, 13.10.2022 (admission profile)",
  ],

  totalRequired: 120,
  maxAccreditable: 130,
  finalProject: { category: "Master's thesis", credits: 30, maxMissingAtStart: 8 },

  majors: [],
  minors: [],

  categories: [
    { key: "Core courses - Data Analysis", req: 16, max: null },
    { key: "Core courses - Data Management and Data Processing", req: 16, max: null },
    { key: "Electives - subject-specific", req: 20, max: null },
    { key: "Electives - interdisciplinary", req: 8, max: null },
    { key: "Data Science project course", req: 10, max: 10,
      note: "The practical component. There is no separate internship requirement in this programme." },
    { key: "Seminar", req: 2, max: 2 },
    { key: "Science in Perspective (GESS)", req: 2, max: null },
    { key: "Master's thesis", req: 30, max: 30,
      note: "28 weeks full-time (26 + 2). Minimum grade 4.0." },
    { key: "(not counted)", req: 0, max: null, note: "Parked - contributes to nothing." },
  ],

  groups: [
    { key: "Core courses total", members: ["Core courses - Data Analysis",
        "Core courses - Data Management and Data Processing"], req: 32 },
    { key: "Electives total", members: ["Electives - subject-specific",
        "Electives - interdisciplinary"], req: 28 },
  ],

  // minima 104, no group excess; remainder 16 -> 120
  remainder: {
    credits: 16,
    allowedCategories: ["Core courses - Data Analysis", "Core courses - Data Management and Data Processing",
                        "Electives - subject-specific", "Electives - interdisciplinary"],
  },

  rules: {
    maxEctsPerSemester: 34,
    maxOralsPerSemester: null,
    atMostOne: [{ category: "Seminar", note: "One seminar." }],
    notes: [
      "Art. 31(2): the 16 credits still missing up to 120 may only be earned in the core-course or elective categories.",
      "Thesis admission (Art. 30(2)) is unusually strict: the Bachelor's degree complete, all admission conditions fulfilled, and within the Master at least 32 core credits, at least 28 elective credits, the full 10-credit project course, AND at least 82 credits across categories a-e. The 8-credit allowance shown here is derived (those categories hold at most 90), not stated verbatim.",
      "The individual study plan agreed with an assigned mentor is BINDING: only units listed in it count toward the degree (Art. 13(6)).",
      "Mobility is possible from the second semester, at most 30 ECTS. Students whose Bachelor's is not from ETH cannot join an ETH exchange programme and cannot credit individual mobility stays.",
      "At most 20 ECTS earned at ETH before the Master's may be credited; no other transfer from prior study.",
      "Standard study time 2 years; maximum 4 years, extendable by one or two semesters if admitted with 21-60 ECTS of conditions.",
      "Teaching language is English.",
    ],
  },

  // Catalogue sources:
  // - Tentative Course Catalogue - Regulations 2023 (D-INFK, "Course_Catalog_Reg_2023.pdf",
  //   June 2026 edition): Core Courses (Data Analysis / Data Management and Processing) and
  //   Subject-specific Electives split by department (D-INFK/D-ITET/D-MATH/Others), Seminar,
  //   Science in Perspective.
  // - Data Science Study Guide (Study_Guide_MSc_DS_Content.pdf): confirms the sub-minima
  //   (Data Analysis >=16 split Information&Learning>=8/Statistics>=8; Data Management>=16)
  //   and that Interdisciplinary Electives are an open per-application-area pool published
  //   separately at inf.ethz.ch/ds-electives (courses worth >=8 ECTS, >=2 courses, from ONE
  //   chosen area, tutor-approved). The site (fetched 2026-09-15) names 11 application areas,
  //   each with its own PDF course compilation; five representative areas (Computational
  //   Biology/Bioinformatics/Biomedicine, Finance and Insurance, Social Networks, Weather and
  //   Climate Systems, Law/Policy/Innovation) are enumerated below under "Electives -
  //   interdisciplinary", mirroring how MSc CS enumerates ~90 example courses for its
  //   similarly open-ended Free Electives category. Not exhaustive - see the block comment
  //   above that category for the six areas NOT enumerated.
  // - exam/ects/sem cross-checked against programmes/eth-msc-computer-science-2020.js for
  //   every course code shared with the MSc CS catalogue (D-INFK draws from the same Machine
  //   Intelligence / Data Management Systems pool); those reuse its VVZ-verified exam mode.
  //   Everything else is honestly `exam: "?"` - not individually checked against VVZ here.
  catalogue: [
    // ------------------------------------------------------------ Core: Data Analysis
    { id: "252-0535-00L", title: "Advanced Machine Learning", ects: 10, sem: "HS", exam: "written",
      examDetail: "Session exam, written 180' (70%) + mandatory practical projects (30%); the projects must be passed to sit the exam",
      periodicity: "yearly", note: "exam/ects reused from the verified MSc CS entry (same course).",
      counts: [{ cat: "Core courses - Data Analysis" }] },
    { id: "263-5210-00L", title: "Probabilistic Artificial Intelligence", ects: 8, sem: "HS", exam: "?",
      periodicity: "yearly",
      counts: [{ cat: "Core courses - Data Analysis" }] },
    { id: "401-4944-20L", title: "Mathematics of Data Science", ects: 8, sem: "HS", exam: "written",
      examDetail: "Session exam, written 180'; optional bonus up to +0.25 from participation and homework",
      periodicity: "yearly", note: "exam reused from the verified MSc CS entry (same course).",
      counts: [{ cat: "Core courses - Data Analysis" }] },
    { id: "227-0434-10L", title: "Mathematics of Information", ects: 9, sem: "FS", exam: "?",
      counts: [{ cat: "Core courses - Data Analysis" }] },
    { id: "401-3632-00L", title: "Computational Statistics", ects: 8, sem: "FS", exam: "?",
      counts: [{ cat: "Core courses - Data Analysis" }] },

    // ------------------------------------------------------------ Core: Data Management and Processing
    { id: "263-3010-00L", title: "Big Data", ects: 10, sem: "HS", exam: "?",
      counts: [{ cat: "Core courses - Data Management and Data Processing" }] },
    { id: "263-3845-00L", title: "Data Management Systems", ects: 8, sem: "HS", exam: "?",
      counts: [{ cat: "Core courses - Data Management and Data Processing" }] },
    { id: "263-4500-00L", title: "Advanced Algorithms", ects: 9, sem: "HS", exam: "oral",
      examDetail: "Session exam, oral 25' open-book (50%) + 2 graded homeworks (50%)",
      periodicity: "yearly", note: "exam reused from the verified MSc CS entry (same course).",
      counts: [{ cat: "Core courses - Data Management and Data Processing" }] },
    { id: "261-5110-00L", title: "Optimization for Data Science", ects: 10, sem: "HS", exam: "written",
      examDetail: "Session exam, written 180' (60%) + two 1h in-class quizzes (20% each); optional open-problem report, bonus up to +0.25",
      periodicity: "yearly", note: "exam reused from the verified MSc CS entry (same course); the department catalogue also lists a spring offering.",
      counts: [{ cat: "Core courses - Data Management and Data Processing" }] },
    { id: "263-4508-00L", title: "Algorithmic Foundations of Data Science", ects: 10, sem: "FS", exam: "written",
      examDetail: "Session exam, written 240' (70%) + 2 graded homeworks (30%)",
      periodicity: "yearly", note: "exam reused from the verified MSc CS entry (same course).",
      counts: [{ cat: "Core courses - Data Management and Data Processing" }] },

    // ------------------------------------------------------------ Subject-specific electives - D-INFK
    {"id":"261-5130-00L","title":"Research in Data Science","ects":6,"sem":"BOTH","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"263-5059-00L","title":"Large-Scale AI Engineering","ects":3,"sem":"BOTH","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"252-3005-00L","title":"Natural Language Processing","ects":7,"sem":"HS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"263-2400-00L","title":"Reliable and Trustworthy Artificial Intelligence","ects":6,"sem":"HS","exam":"written","examDetail":"Session exam, written 180' (70%) + mandatory project work (30%); two A4 pages of aids permitted","note":"exam reused from the verified MSc CS entry.","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"263-3210-00L","title":"Deep Learning","ects":8,"sem":"HS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"263-5005-00L","title":"Artificial Intelligence in Education","ects":3,"sem":"HS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"263-5056-00L","title":"Applications of Deep Learning on Graphs","ects":4,"sem":"HS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"263-5300-00L","title":"Guarantees for Machine Learning","ects":7,"sem":"HS","exam":"oral","examDetail":"Graded semester performance: oral midterm (60%) + course project (40%) + mandatory pass/fail homework","note":"No session exam - the midterm is oral. Exam reused from the verified MSc CS entry.","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"263-5351-00L","title":"Machine Learning for Genomics","ects":6,"sem":"HS","exam":"?","note":"Listed by the DS catalogue under a mistyped code shared with a D-ITET course; this is the correct code, cross-checked against the MSc CS catalogue. Also listed under the Computational Biology, Bioinformatics and Biomedicine interdisciplinary-elective compilation.","counts":[{"cat":"Electives - subject-specific"},{"cat":"Electives - interdisciplinary"}]},
    {"id":"263-5902-00L","title":"Computer Vision","ects":8,"sem":"HS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"263-0008-00L","title":"Computational Intelligence Lab","ects":8,"sem":"FS","exam":"written","examDetail":"End-of-semester exam, written 180' (70%) + project (30%, must be passed)","note":"exam reused from the verified MSc CS entry.","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"263-3855-00L","title":"Cloud Computing Architecture","ects":9,"sem":"FS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"263-4510-00L","title":"Introduction to Topological Data Analysis","ects":8,"sem":"FS","exam":"oral","examDetail":"2 graded homeworks (40%) + oral 30' with 30' preparation (60%)","note":"exam reused from the verified MSc CS entry.","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"263-5000-00L","title":"Computational Semantics for Natural Language Processing","ects":6,"sem":"FS","exam":"?","note":"Not offered in 2026 per the department's tentative catalogue.","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"263-5051-00L","title":"AI Center Projects in Machine Learning","ects":4,"sem":"FS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"263-5354-00L","title":"Large Language Models","ects":8,"sem":"FS","exam":"?","note":"The DS catalogue mistypes this as 263-5353-00; corrected against the MSc CS catalogue.","counts":[{"cat":"Electives - subject-specific"}]},

    // ------------------------------------------------------------ Subject-specific electives - D-ITET
    {"id":"227-0155-00L","title":"Machine Learning on Microcontrollers","ects":6,"sem":"BOTH","exam":"?","note":"Not offered in AS 2026 per the department's tentative catalogue.","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"227-0417-00L","title":"Information Theory I","ects":6,"sem":"HS","exam":"written","examDetail":"Session exam, written 180'","note":"exam reused from the verified MSc CS entry.","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"227-0560-00L","title":"Computer Vision and Artificial Intelligence for Autonomous Cars","ects":6,"sem":"HS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"227-0689-00L","title":"System Identification","ects":4,"sem":"HS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"227-0150-00L","title":"Systems-on-Chip for Data Analytics and Machine Learning","ects":6,"sem":"FS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"227-0427-10L","title":"Model-Based Estimation and Signal Analysis","ects":6,"sem":"FS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"227-0420-00L","title":"Information Theory II","ects":6,"sem":"FS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"227-0432-00L","title":"Learning, Classification, and Compression","ects":4,"sem":"FS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},

    // ------------------------------------------------------------ Subject-specific electives - D-MATH
    {"id":"401-0625-01L","title":"Applied Analysis of Variance and Experimental Design","ects":5,"sem":"HS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"401-3054-14L","title":"Probabilistic Methods in Combinatorics","ects":5,"sem":"HS","exam":"written","examDetail":"Session exam, written 180'; printed lecture notes permitted. No coursework.","periodicity":"two-yearly","note":"exam reused from the verified MSc CS entry.","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"401-3055-64L","title":"Algebraic Methods in Combinatorics","ects":5,"sem":"HS","exam":"written","examDetail":"Session exam, written 180'; printed lecture notes permitted. No coursework.","note":"Did not take place in HS 2026; exam reused from the verified MSc CS entry.","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"401-3601-00L","title":"Probability Theory","ects":9,"sem":"HS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"401-3622-00L","title":"Statistical Modelling","ects":7,"sem":"HS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"401-3621-00L","title":"Fundamentals of Mathematical Statistics","ects":9,"sem":"HS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"401-4623-00L","title":"Time Series Analysis","ects":4,"sem":"HS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"401-4632-15L","title":"Causality","ects":5,"sem":"HS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"401-4656-21L","title":"AI in the Sciences and Engineering","ects":8,"sem":"HS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"401-3602-00L","title":"Applied Stochastic Processes","ects":8,"sem":"FS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"401-3682-26L","title":"Core Concepts in Statistical Learning","ects":4,"sem":"FS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"401-0102-00L","title":"Applied Multivariate Statistics","ects":5,"sem":"FS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"401-3902-25L","title":"Discrete Optimization","ects":9,"sem":"FS","exam":"written","examDetail":"Session exam, written 120'; no coursework","note":"exam reused from the verified MSc CS entry.","counts":[{"cat":"Electives - subject-specific"}]},

    // ------------------------------------------------------------ Subject-specific electives - Others (D-MAVT / D-PHYS)
    {"id":"151-0563-01L","title":"Dynamic Programming and Optimal Control","ects":4,"sem":"HS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"151-0566-00L","title":"Recursive Estimation","ects":4,"sem":"FS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},
    {"id":"402-0461-00L","title":"Quantum Information Theory","ects":8,"sem":"FS","exam":"?","counts":[{"cat":"Electives - subject-specific"}]},

    // ------------------------------------------------------------ Electives - interdisciplinary
    // Study Guide: an open per-application-area pool published at inf.ethz.ch/ds-electives.
    // Students commit to ONE application area (tutor-approved) and take >=2 courses worth
    // >=8 ECTS from its compilation. The site lists 11 named areas, each with its own PDF
    // course compilation; a representative sample of five areas (their PDFs fetched
    // 2026-09-15) is enumerated below so the category is not left empty, mirroring how MSc
    // CS enumerates ~90 example courses for its similarly open-ended Free Electives category.
    // This is NOT exhaustive - the other six areas (Computer Networks, Geographic Information
    // Systems, Neural Information Processing, Quantum Information and Quantum Computing,
    // Robotics, Transport Planning and Systems) are not enumerated here.
    // exam "?" = not individually VVZ-verified for this programme; where an id is shared with
    // an already-verified entry elsewhere in this repo, that verified mode is reused (noted).

    // -- Computational Biology, Bioinformatics and Biomedicine (Computational_Biol_Bioinfo_Biomedicine.pdf, Dec 2025)
    {"id":"227-0945-10L","title":"Cell and Molecular Biology for Engineers","ects":6,"sem":"FS","exam":"?","note":"Interdisciplinary elective: Computational Biology, Bioinformatics and Biomedicine (basic course).","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"636-0017-00L","title":"Computational Biology","ects":6,"sem":"HS","exam":"written","note":"Interdisciplinary elective: Computational Biology, Bioinformatics and Biomedicine. Exam reused from the verified MSc Applied Mathematics / Computational Biology entries.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"261-5112-00L","title":"Algorithms and Data Structures for Population Scale Genomics","ects":3,"sem":"HS","exam":"?","note":"Interdisciplinary elective: Computational Biology, Bioinformatics and Biomedicine.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"636-0702-00L","title":"Statistical Models in Computational Biology","ects":6,"sem":"FS","exam":"?","note":"Interdisciplinary elective: Computational Biology, Bioinformatics and Biomedicine.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"262-0200-00L","title":"Bayesian Phylodynamics","ects":4,"sem":"FS","exam":"?","note":"Interdisciplinary elective: Computational Biology, Bioinformatics and Biomedicine (listed under both Bioinformatics and Biomedicine tracks).","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"227-0391-00L","title":"Medical Image Analysis","ects":3,"sem":"FS","exam":"?","note":"Interdisciplinary elective: Computational Biology, Bioinformatics and Biomedicine.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"261-5120-00L","title":"Machine Learning for Health Care","ects":5,"sem":"FS","exam":"?","note":"Interdisciplinary elective: Computational Biology, Bioinformatics and Biomedicine. exam left honest - conflicting values seen in other programme files.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"252-0312-00L","title":"Mobile Health and Activity Monitoring","ects":6,"sem":"FS","exam":"?","note":"Interdisciplinary elective: Computational Biology, Bioinformatics and Biomedicine. exam left honest - conflicting values seen in other programme files.","counts":[{"cat":"Electives - interdisciplinary"}]},

    // -- Finance and Insurance (Finance_and_Insurance.pdf, June 2026)
    {"id":"363-1000-00L","title":"Financial Economics","ects":3,"sem":"FS","exam":"?","note":"Interdisciplinary elective: Finance and Insurance.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"401-3888-00L","title":"Introduction to Mathematical Finance","ects":10,"sem":"FS","exam":"written","note":"Interdisciplinary elective: Finance and Insurance. Exam reused from the verified MSc/BSc Mathematics entries.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"401-3913-01L","title":"Mathematical Foundations for Finance","ects":4,"sem":"HS","exam":"written","note":"Interdisciplinary elective: Finance and Insurance. Exam reused from the verified BSc Mathematics / BSc CS entries.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"401-3925-00L","title":"Non-Life Insurance: Mathematics and Statistics","ects":8,"sem":"HS","exam":"oral","note":"Interdisciplinary elective: Finance and Insurance. Exam reused from the verified MSc/BSc Mathematics entries.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"401-3922-00L","title":"Life Insurance Mathematics","ects":4,"sem":"HS","exam":"oral","note":"Interdisciplinary elective: Finance and Insurance. Exam reused from the verified MSc/BSc Mathematics entries.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"401-3915-73L","title":"Machine Learning in Finance and Insurance","ects":5,"sem":"HS","exam":"written","note":"Interdisciplinary elective: Finance and Insurance. Exam reused from the verified MSc Mathematics / Applied Mathematics entries.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"401-4889-00L","title":"Mathematical Finance","ects":10,"sem":"HS","exam":"oral","note":"Interdisciplinary elective: Finance and Insurance. Exam reused from the verified MSc Mathematics / Applied Mathematics entries.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"401-3629-00L","title":"Quantitative Risk Management","ects":4,"sem":"FS","exam":"?","note":"Interdisciplinary elective: Finance and Insurance.","counts":[{"cat":"Electives - interdisciplinary"}]},

    // -- Social Networks (Social_networks.pdf, Nov 2025) - Network Analysis/Modeling above under GESS
    {"id":"851-0586-03L","title":"Applied Network Science","ects":3,"sem":"BOTH","exam":"?","note":"Interdisciplinary elective: Social Networks.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"851-0252-07L","title":"Humans and Social Networks in the Digital Age","ects":3,"sem":"FS","exam":"?","note":"Interdisciplinary elective: Social Networks.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"851-0254-00L","title":"Network Science Project","ects":3,"sem":"FS","exam":"?","note":"Interdisciplinary elective: Social Networks. Advisable to have taken Network Analysis or Modeling first.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"363-1091-00L","title":"Social Data Science","ects":2,"sem":"FS","exam":"?","note":"Interdisciplinary elective: Social Networks.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"263-4509-00L","title":"Complex Network Models","ects":5,"sem":"FS","exam":"oral","note":"Interdisciplinary elective: Social Networks. Exam reused from the verified MSc CS / Cyber Security entries.","counts":[{"cat":"Electives - interdisciplinary"}]},

    // -- Weather and Climate Systems (Weather-and-Climate-Systems.pdf, Dec 2024)
    {"id":"701-0473-00","title":"Wettersysteme","ects":3,"sem":"HS","exam":"?","note":"Interdisciplinary elective: Weather and Climate Systems (basic course). Taught and assessed in German.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"701-0023-00","title":"Atmosphäre","ects":3,"sem":"HS","exam":"?","note":"Interdisciplinary elective: Weather and Climate Systems (basic course). Taught and assessed in German.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"701-1251-00","title":"Land-Climate Dynamics","ects":3,"sem":"HS","exam":"?","note":"Interdisciplinary elective: Weather and Climate Systems (advanced course).","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"701-1252-00","title":"Climate Change Uncertainty and Risk: From Probabilistic Forecasts to Economics of Climate Adaptation","ects":3,"sem":"FS","exam":"?","note":"Interdisciplinary elective: Weather and Climate Systems (advanced course).","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"701-1222-00","title":"Weather and Climate Modeling","ects":4,"sem":"FS","exam":"?","note":"Interdisciplinary elective: Weather and Climate Systems (advanced course).","counts":[{"cat":"Electives - interdisciplinary"}]},

    // -- Law, Policy, and Innovation (Law_Policy_Innovation.pdf, Nov 2025) - AI, Law, and Policy above under GESS
    {"id":"851-0760-00","title":"Building a Robot Judge: Data Science for Decision-Making","ects":3,"sem":"HS","exam":"?","note":"Interdisciplinary elective: Law, Policy, and Innovation.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"851-0763-00","title":"Supervised Research (Law, Economics, and Data Science)","ects":3,"sem":"HS","exam":"?","note":"Interdisciplinary elective: Law, Policy, and Innovation.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"851-0732-06","title":"Law & Tech","ects":3,"sem":"HS","exam":"?","note":"Interdisciplinary elective: Law, Policy, and Innovation.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"851-0739-01","title":"Natural Language Processing for Law and Social Science","ects":3,"sem":"FS","exam":"?","note":"Interdisciplinary elective: Law, Policy, and Innovation.","counts":[{"cat":"Electives - interdisciplinary"}]},
    {"id":"860-0033-00","title":"Data Science for Public Policy","ects":3,"sem":"FS","exam":"?","note":"Interdisciplinary elective: Law, Policy, and Innovation.","counts":[{"cat":"Electives - interdisciplinary"}]},

    // ------------------------------------------------------------ Seminar
    {"id":"252-5051-00L","title":"Advanced Topics in Machine Learning","ects":2,"sem":"HS","exam":"none","examDetail":"Graded semester performance","note":"Deregistration closes early; staying registered without attending is an official fail.","counts":[{"cat":"Seminar"}]},
    {"id":"263-3504-00L","title":"Hardware Acceleration for Data Processing","ects":2,"sem":"HS","exam":"none","examDetail":"Graded semester performance","counts":[{"cat":"Seminar"}]},
    {"id":"263-3713-00L","title":"Advanced Topics in Human-Centric Computer Vision","ects":2,"sem":"HS","exam":"none","examDetail":"Graded semester performance","counts":[{"cat":"Seminar"}]},
    {"id":"263-5100-00L","title":"Topics in Medical Machine Learning","ects":2,"sem":"HS","exam":"none","examDetail":"Graded semester performance","counts":[{"cat":"Seminar"}]},
    {"id":"263-5057-00L","title":"From Publication to the Doctor's Office","ects":3,"sem":"HS","exam":"none","examDetail":"Graded semester performance","counts":[{"cat":"Seminar"}]},
    {"id":"263-2931-00L","title":"AI Security Seminar: From Code to Agent Security","ects":2,"sem":"HS","exam":"none","examDetail":"Graded semester performance","counts":[{"cat":"Seminar"}]},
    {"id":"263-3857-00L","title":"Vector Search in Databases for AI Seminar","ects":2,"sem":"HS","exam":"none","note":"Not offered in AS 2026 per the department's tentative catalogue.","counts":[{"cat":"Seminar"}]},
    {"id":"252-5256-00L","title":"AI for Mathematics and Optimization","ects":3,"sem":"FS","exam":"none","examDetail":"Graded semester performance","counts":[{"cat":"Seminar"}]},
    {"id":"261-5113-00L","title":"Computational Challenges in Medical Genomics","ects":2,"sem":"FS","exam":"none","examDetail":"Graded semester performance","note":"Also listed under the Computational Biology, Bioinformatics and Biomedicine interdisciplinary-elective compilation.","counts":[{"cat":"Seminar"},{"cat":"Electives - interdisciplinary"}]},
    {"id":"263-5157-00L","title":"Representations in Generative AI: Causal Methods, Images, Music, Language","ects":2,"sem":"FS","exam":"none","examDetail":"Graded semester performance","counts":[{"cat":"Seminar"}]},
    {"id":"263-3851-00L","title":"Green Computing","ects":2,"sem":"FS","exam":"none","examDetail":"Graded semester performance","counts":[{"cat":"Seminar"}]},
    {"id":"263-5225-00L","title":"Advanced Topics in Machine Learning and Data Science","ects":2,"sem":"FS","exam":"none","examDetail":"Graded semester performance","counts":[{"cat":"Seminar"}]},
    {"id":"227-0559-00L","title":"Seminar in Deep Neural Networks","ects":2,"sem":"FS","exam":"none","examDetail":"Graded semester performance","counts":[{"cat":"Seminar"}]},
    {"id":"401-3620-75L","title":"Student Seminar in Statistics","ects":4,"sem":"BOTH","exam":"none","examDetail":"Graded semester performance","counts":[{"cat":"Seminar"}]},

    // ------------------------------------------------------------ Science in Perspective (GESS)
    { id: "851-0740-00L", title: "AI, Law, and Policy", ects: 3, sem: "FS", exam: "?", vvz: 198363,
      note: "Listed by the D-INFK DS course catalogue under the title \"Big Data, Law, and Policy\" - same code, cross-checked against the MSc CS catalogue's current VVZ title. Also in the Law, Policy, and Innovation interdisciplinary-elective compilation.",
      counts: [{ cat: "Science in Perspective (GESS)" }, { cat: "Electives - interdisciplinary" }] },
    // Bulk-added from the same D-INFK-recommended GESS Type B list already verified for
    // MSc/BSc CS (programmes/eth-msc-computer-science-2020.js); D-INFK leads this programme
    // too. exam "?" = not yet individually VVZ-verified for THIS programme's semester.
    {"id":"363-0311-00L","title":"AI Implementation & Risk: The Human Factor","ects":3,"sem":"HS","exam":"?","vvz":203795,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0101-86L","title":"Complex Social Systems: Modeling Agents, Learning, and Games","ects":3,"sem":"HS","exam":"?","vvz":204250,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0252-15L","title":"Network Analysis","ects":3,"sem":"HS","exam":"none","examDetail":"Graded semester performance","vvz":203030,"note":"Recommended Science in Perspective (Type B) for D-INFK. Also in the Social Networks interdisciplinary-elective compilation.","counts":[{"cat":"Science in Perspective (GESS)"},{"cat":"Electives - interdisciplinary"}]},
    {"id":"851-0252-13L","title":"Network Modeling","ects":3,"sem":"FS","exam":"?","vvz":200272,"note":"Recommended Science in Perspective (Type B) for D-INFK. Also in the Social Networks interdisciplinary-elective compilation.","counts":[{"cat":"Science in Perspective (GESS)"},{"cat":"Electives - interdisciplinary"}]},
    {"id":"851-0390-00L","title":"Human-Centered IT Security and Privacy","ects":3,"sem":"FS","exam":"?","vvz":200275,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0391-00L","title":"Human-Centered Security & Privacy Lab","ects":3,"sem":"HS","exam":"?","vvz":204453,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0453-00L","title":"Artificial Intelligence and Human Values","ects":3,"sem":"HS","exam":"?","vvz":204308,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"851-0691-00L","title":"Human-Centered AI for Social Good: Peace, Health, Climate","ects":3,"sem":"FS","exam":"?","vvz":199891,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},
    {"id":"860-0024-00L","title":"Digital Society: Ethical, Societal and Economic Challenges","ects":3,"sem":"FS","exam":"?","vvz":198289,"note":"Recommended Science in Perspective (Type B) for D-INFK.","counts":[{"cat":"Science in Perspective (GESS)"}]},

    // ------------------------------------------------------------ Data Science project course / thesis
    { id: "DS-PROJECT-COURSE", title: "Data Science Project Course", ects: 10, sem: "NA", exam: "none",
      examDetail: "Graded semester performance: group project (~3 students), report + presentation",
      note: "Not a catalogue course: has prerequisites listed in the VVZ. There is no separate internship requirement in this programme.",
      passFail: false,
      counts: [{ cat: "Data Science project course" }] },
    { id: "MSC-DS-THESIS", title: "Master's Thesis", ects: 30, sem: "NA", exam: "none",
      note: "28 weeks. Gate (Art. 30(2)): Bachelor's complete, all admission conditions fulfilled, and within the Master >=32 core, >=28 electives, the full 10-credit project course, and >=82 credits across categories a-e.",
      counts: [{ cat: "Master's thesis" }] },
  ],
});
