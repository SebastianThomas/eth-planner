/* Study planner - generic engine.
 *
 * Holds no programme data and no personal data. Programmes come from
 * programmes/*.js (or an uploaded JSON); everything about you lives in your
 * own plan, kept in localStorage and exported by you.
 */
(function () {
  "use strict";

  const STORAGE_KEY = "study-planner.v1";
  const SCHEMA = 1;

  // Three-way accounting.
  //   earned      credits actually awarded - status Completed
  //   provisional committed but not yet graded - Registered and Fixed
  //   outstanding still to arrange - Open
  // Considering, Waitlist, Dropped and Not taken count for nothing.
  const EARNED = ["Completed"];
  const PROVISIONAL = ["Registered", "Fixed"];
  const OUTSTANDING = ["Open"];
  const SETTLED = EARNED.concat(PROVISIONAL);
  const COUNTED = SETTLED.concat(OUTSTANDING);
  const TIER = { done: EARNED, fixed: SETTLED, live: COUNTED };

  // Grades: ETH scale, 1.0-6.0 in quarter steps, 4.0 passes.
  const GRADE_MIN = 1, GRADE_MAX = 6, GRADE_STEP = 0.25;
  const STATUSES = ["Completed", "Registered", "Fixed", "Open", "Considering", "Waitlist", "Dropped", "Not taken"];
  // Shown in the plan table by default. Considering and Waitlist are visible but
  // contribute no credits - they are things you are weighing, not commitments.
  const SHOWN = ["Completed", "Registered", "Fixed", "Open", "Considering", "Waitlist"];
  const TIER_OF = { Completed: "done", Registered: "fixed", Fixed: "fixed", Open: "open",
                    Considering: "considering", Waitlist: "considering" };
  const UNDECIDED = "(undecided)";
  const DEFAULT_SEMESTERS = ["HS26", "FS27", "HS27", "FS28"];

  /* ------------------------------------------------------------ state */

  let programmes = (window.PLANNER_PROGRAMMES || []).slice();
  let prog = null;                 // active programme definition
  let state = null;                // { programmeId, profile, preferences, plan, customProgrammes }
  let showInactive = false;

  function blankState() {
    return {
      schema: SCHEMA,
      programmeId: programmes.length ? programmes[0].id : null,
      profile: { name: "", studentId: "", major: "", minor: "", semesters: DEFAULT_SEMESTERS.slice() },
      preferences: { maxEctsPerSemester: null, maxOralsPerSemester: null },
      plan: {},
      customProgrammes: [],
    };
  }

  function load() {
    let raw = null;
    try { raw = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (raw) {
      try {
        const p = JSON.parse(raw);
        if (p && typeof p === "object") { state = normaliseState(p); return; }
      } catch (e) { console.warn("stored plan unreadable", e); }
    }
    state = blankState();
  }

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function normaliseState(p) {
    const s = blankState();
    s.programmeId = p.programmeId || s.programmeId;
    Object.assign(s.profile, p.profile || {});
    if (!Array.isArray(s.profile.semesters) || !s.profile.semesters.length) {
      s.profile.semesters = DEFAULT_SEMESTERS.slice();
    }
    Object.assign(s.preferences, p.preferences || {});
    s.plan = (p.plan && typeof p.plan === "object") ? p.plan : {};
    s.customProgrammes = Array.isArray(p.customProgrammes) ? p.customProgrammes : [];
    for (const def of s.customProgrammes) registerCustom(def);
    return s;
  }

  function registerCustom(def) {
    if (!def || !def.id) return;
    const i = programmes.findIndex(x => x.id === def.id);
    if (i >= 0) programmes[i] = def; else programmes.push(def);
  }

  function activate() {
    prog = programmes.find(p => p.id === state.programmeId) || programmes[0] || null;
    if (prog) state.programmeId = prog.id;
  }

  /* ------------------------------------------------------------ helpers */

  const byId = () => Object.fromEntries((prog ? prog.catalogue : []).map(c => [c.id, c]));
  let CAT = {};

  function semesters() { return state.profile.semesters.concat([UNDECIDED]); }

  function categoryList() { return prog ? prog.categories : []; }

  /** Categories this course may count in, given the chosen major/minor. */
  function eligibleCats(course) {
    const { major, minor } = state.profile;
    const out = [];
    for (const c of course.counts || []) {
      if (c.major && c.major !== major) continue;
      if (c.minor && c.minor !== minor) continue;
      if (!out.includes(c.cat)) out.push(c.cat);
    }
    return out;
  }

  function isEligible(course) { return eligibleCats(course).length > 0; }

  function ectsOf(id) {
    const e = state.plan[id] && state.plan[id].ects;
    if (typeof e === "number") return e;
    return CAT[id] ? CAT[id].ects : 0;
  }

  function entries(statuses) {
    return Object.keys(state.plan)
      .filter(id => CAT[id] && statuses.includes(state.plan[id].status))
      .map(id => ({ id, ...state.plan[id], course: CAT[id], ects: ectsOf(id) }));
  }

  function sumBy(statuses, cat) {
    return entries(statuses).filter(e => e.category === cat).reduce((a, e) => a + e.ects, 0);
  }

  function groupSum(statuses, g) {
    return g.members.reduce((a, m) => a + sumBy(statuses, m), 0);
  }

  function totals() {
    const sum = sts => entries(sts).reduce((a, e) => a + e.ects, 0);
    const t = {
      earned: sum(EARNED), provisional: sum(PROVISIONAL), outstanding: sum(OUTSTANDING),
    };
    t.now = sum(["Registered"]); t.later = sum(["Fixed"]);
    t.settled = t.earned + t.provisional;
    t.live = t.settled + t.outstanding;
    // kept for the older call sites
    t.done = t.earned; t.fixed = t.settled; t.open = t.outstanding; t.registeredFixed = t.provisional;
    const fpCat = prog && prog.finalProject ? prog.finalProject.category : null;
    t.beforeFinal = entries(COUNTED).filter(e => e.category !== fpCat).reduce((a, e) => a + e.ects, 0);
    t.beforeFinalEarned = entries(EARNED).filter(e => e.category !== fpCat).reduce((a, e) => a + e.ects, 0);
    return t;
  }

  /* ------------------------------------------------------------ grades */

  function gradeOf(id) {
    const g = state.plan[id] && state.plan[id].grade;
    return typeof g === "number" && Number.isFinite(g) ? g : null;
  }

  /** Credit-weighted average, the way ETH computes the final GPA. */
  function gpa(filter) {
    let num = 0, den = 0, counted = 0, ungraded = 0;
    for (const e of entries(COUNTED)) {
      if (filter && !filter(e)) continue;
      if (e.course.passFail) continue;          // pass/fail never enters an average
      const g = gradeOf(e.id);
      if (g === null) { if (EARNED.includes(e.status)) ungraded++; continue; }
      num += g * e.ects; den += e.ects; counted++;
    }
    return { value: den ? num / den : null, credits: den, courses: counted, ungraded };
  }

  function fmtGrade(v) { return v === null ? "\u2013" : v.toFixed(2); }

  function beforeFinalRequired() {
    if (!prog || !prog.finalProject) return null;
    return prog.totalRequired - prog.finalProject.credits;
  }

  function pref(key) {
    const v = state.preferences[key];
    if (typeof v === "number" && Number.isFinite(v)) return v;
    return prog && prog.rules ? prog.rules[key] : null;
  }

  const $ = s => document.querySelector(s);
  const uniq = (v, i, a) => a.indexOf(v) === i;
  function esc(s) {
    return String(s).replace(/[&<>"']/g, m =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  }

  /* ------------------------------------------------------------ alerts */

  function buildAlerts() {
    const out = [];
    if (!prog) return [{ level: "bad", title: "No programme", text: "No programme definition is loaded." }];
    const t = totals();

    for (const c of categoryList()) {
      if (c.key === "(not counted)") continue;
      const fixed = sumBy(TIER.fixed, c.key), live = sumBy(TIER.live, c.key);
      if (c.req && live < c.req) {
        out.push({ level: "bad", title: c.key, text: `${live} of ${c.req} ECTS even counting open items. Short by ${c.req - live}.` });
      } else if (c.req && fixed < c.req) {
        out.push({ level: "warn", title: c.key, text: `${fixed} of ${c.req} settled; reaches ${live} once the open items land.` });
      }
      if (c.max && live > c.max) {
        out.push({ level: "bad", title: c.key, text: `${live} ECTS assigned but at most ${c.max} may be accredited.` });
      }
    }

    for (const g of prog.groups || []) {
      const live = groupSum(TIER.live, g), fixed = groupSum(TIER.fixed, g);
      if (live < g.req) out.push({ level: "bad", title: g.key, text: `${live} of ${g.req} ECTS, even counting open items.` });
      else if (fixed < g.req) out.push({ level: "warn", title: g.key, text: `${fixed} of ${g.req} settled; reaches ${live} with the open items.` });
    }

    if (t.live < prog.totalRequired) {
      out.push({ level: "bad", title: "Total credits", text: `${t.live} of ${prog.totalRequired}. Short by ${prog.totalRequired - t.live}.` });
    } else if (prog.maxAccreditable && t.live > prog.maxAccreditable) {
      out.push({ level: "bad", title: "Accreditation ceiling", text: `${t.live} assigned but at most ${prog.maxAccreditable} may be accredited.` });
    }

    const need = beforeFinalRequired();
    if (need !== null && t.beforeFinal < need) {
      const gap = need - t.beforeFinal;
      const allow = prog.finalProject.maxMissingAtStart || 0;
      out.push({ level: gap > allow ? "bad" : "warn", title: `Before the ${prog.finalProject.category.toLowerCase()}`,
        text: `${t.beforeFinal} of ${need} ECTS outside it. ` + (gap > allow
          ? `${gap} missing - more than the ${allow} the regulations allow at registration.`
          : `${gap} missing, inside the ${allow}-ECTS allowance, but you still need ${prog.totalRequired} to graduate.`) });
    }

    for (const r of (prog.rules && prog.rules.atMostOne) || []) {
      const n = entries(TIER.live).filter(e => e.category === r.category).length;
      if (n > 1) out.push({ level: "bad", title: r.category, text: `${n} assigned. ${r.note || "Only one may be accredited."}` });
    }

    const maxE = pref("maxEctsPerSemester"), maxO = pref("maxOralsPerSemester");
    for (const s of state.profile.semesters) {
      const inS = entries(TIER.live).filter(e => e.semester === s);
      const load = inS.reduce((a, e) => a + e.ects, 0);
      const orals = inS.filter(e => e.course.exam === "oral").length;
      if (maxE && load > maxE) out.push({ level: "warn", title: s, text: `${load} ECTS - above your ${maxE} limit.` });
      if (maxO !== null && maxO !== undefined && orals > maxO) {
        out.push({ level: "warn", title: s, text: `${orals} oral exams - above your limit of ${maxO}.` });
      }
    }

    const undec = entries(TIER.live).filter(e => e.semester === UNDECIDED);
    if (undec.length) out.push({ level: "warn", title: "Unscheduled", text: `${undec.length} item(s) have no semester yet.` });

    const parked = Object.keys(state.plan).filter(id =>
      CAT[id] && ["Considering", "Waitlist"].includes(state.plan[id].status));
    if (parked.length) {
      out.push({ level: "warn", title: "Not counted yet",
        text: `${parked.length} course(s) are Considering or Waitlist, so they add no credits. ` +
              `Set them to Open once you commit.` });
    }

    const misplaced = entries(TIER.live).filter(e =>
      e.category !== "(not counted)" && !eligibleCats(e.course).includes(e.category));
    if (misplaced.length) {
      out.push({ level: "bad", title: "Category not allowed",
        text: misplaced.map(e => `${e.course.title} cannot count as "${e.category}" with your major/minor`).join("; ") + "." });
    }

    const g = gpa();
    if (g.ungraded) {
      out.push({ level: "warn", title: "Missing grades",
        text: `${g.ungraded} completed course(s) have no grade, so they are outside the average.` });
    }

    const rare = entries(COUNTED).filter(e => {
      const d = PERIODICITY[e.course.periodicity];
      return d && d.risk;
    });
    if (rare.length) {
      out.push({ level: "warn", title: "Cannot be deferred a year",
        text: rare.map(e => `${e.course.title} is ${PERIODICITY[e.course.periodicity].label}`).join("; ") +
              ". Dropping one of these costs more than a single year." });
    }

    const unk = entries(TIER.live).filter(e => e.course.exam === "?");
    if (unk.length) {
      out.push({ level: "warn", title: "Unverified assessment",
        text: `${unk.length} course(s) have an assessment mode nobody has checked: ` + unk.map(e => e.course.title).join(", ") + "." });
    }

    if (!Object.keys(state.plan).length) {
      return [{ level: "warn", title: "Empty plan", text: "Add courses from the catalogue below to get started." }];
    }
    if (!out.length) out.push({ level: "ok", title: "All clear", text: "Every requirement is met and no constraint is broken." });
    return out;
  }

  /* ------------------------------------------------------------ render */

  function render() {
    if (!prog) return;
    CAT = byId();
    renderSetup();
    renderCards();
    renderAlerts();
    renderCategories();
    renderSemesters();
    renderPlan();
    renderCatalogue();
    renderFoot();
    save();
  }

  function renderSetup() {
    $("#f-programme").innerHTML = programmes.map(p =>
      `<option value="${esc(p.id)}"${p.id === prog.id ? " selected" : ""}>${esc(p.name)} &mdash; ${esc(p.institution || "")}</option>`).join("");
    $("#f-name").value = state.profile.name || "";
    $("#f-sid").value = state.profile.studentId || "";
    $("#f-semesters").value = state.profile.semesters.join(", ");
    $("#f-maxects").value = pref("maxEctsPerSemester") ?? "";
    $("#f-maxorals").value = pref("maxOralsPerSemester") ?? "";
    const opt = (list, val) => `<option value=""${!val ? " selected" : ""}>&mdash; none &mdash;</option>` +
      list.map(x => `<option${x === val ? " selected" : ""}>${esc(x)}</option>`).join("");
    $("#f-major").innerHTML = opt(prog.majors || [], state.profile.major);
    $("#f-minor").innerHTML = opt(prog.minors || [], state.profile.minor);

    const bad = (prog.forbiddenCombinations || []).some(
      ([a, b]) => a === state.profile.major && b === state.profile.minor);
    const w = $("#combo-warning");
    w.hidden = !bad;
    if (bad) w.textContent = `${state.profile.major} with ${state.profile.minor} is not a permitted major/minor combination in this programme.`;

    $("#brandsub").textContent = [
      state.profile.name, prog.name, prog.institution, prog.regulations,
      state.profile.major && `major ${state.profile.major}`,
      state.profile.minor && `minor ${state.profile.minor}`,
    ].filter(Boolean).join(" · ");
  }

  function renderCards() {
    const t = totals(), need = beforeFinalRequired();
    const g = gpa();
    const orals = entries(COUNTED).filter(e => e.course.exam === "oral").length;
    const cards = [
      { lbl: "Earned", val: t.earned, sub: "credits awarded", cls: "" },
      { lbl: "Provisional", val: t.provisional, sub: "registered or fixed, ungraded", cls: "" },
      { lbl: "Still to arrange", val: t.outstanding, sub: "still to arrange", cls: t.outstanding ? "warn" : "" },
      { lbl: "Planned total", val: t.live, sub: `of ${prog.totalRequired} required`,
        cls: t.live >= prog.totalRequired && (!prog.maxAccreditable || t.live <= prog.maxAccreditable) ? "ok" : "bad" },
      { lbl: "Grade average", val: fmtGrade(g.value),
        sub: g.value === null ? "no grades entered yet" : `over ${g.credits} graded ECTS`, cls: "" },
      { lbl: "Oral exams", val: orals, sub: "across the degree", cls: "" },
    ];
    if (need !== null) cards.splice(3, 0, {
      lbl: `Before ${prog.finalProject.category.toLowerCase()}`, val: t.beforeFinal, sub: `of ${need} to start`,
      cls: t.beforeFinal >= need ? "ok" : (need - t.beforeFinal <= (prog.finalProject.maxMissingAtStart || 0) ? "warn" : "bad") });
    $("#cards").innerHTML = cards.map(c =>
      `<div class="card ${c.cls}"><div class="lbl">${esc(c.lbl)}</div><div class="val">${esc(c.val)}</div>
       <div class="sub">${esc(c.sub)}</div></div>`).join("");
  }

  function renderAlerts() {
    $("#alerts").innerHTML = buildAlerts().map(a =>
      `<div class="alert ${a.level}"><b>${esc(a.title)}</b><span>${esc(a.text)}</span></div>`).join("");
  }

  function renderCategories() {
    const rows = [];
    const push = (key, req, done, now, later, live, note, indent) => {
      const fixed = done + now + later;
      const mf = Math.max(0, req - fixed), ml = Math.max(0, req - live);
      const me = Math.max(0, req - done);
      const pill = !req ? `<span class="pill unk">no minimum</span>`
        : me === 0 ? `<span class="pill ok">met</span>`
        : mf === 0 ? `<span class="pill prov">covered, awaiting grades</span>`
        : ml === 0 ? `<span class="pill later">${mf} ECTS still to arrange</span>`
        : `<span class="pill short">${mf} ECTS needed · ${ml} unplanned</span>`;
      rows.push(`<tr><td${indent ? ' style="padding-left:22px"' : ""}>${indent ? `<em>${esc(key)}</em>` : `<strong>${esc(key)}</strong>`}</td>
        <td class="num">${done || "&ndash;"}</td>
        <td class="num">${now || "&ndash;"}</td>
        <td class="num">${later || "&ndash;"}</td>
        <td class="num${req && mf > 0 ? (ml > 0 ? " credit-short" : " credit-pending") : ""}">${req || "&ndash;"}</td>
        <td>${pill}</td><td class="cnote">${esc(note || "")}</td></tr>`);
    };
    for (const c of categoryList()) {
      if (c.key === "(not counted)") continue;
      push(c.key, c.req, sumBy(EARNED, c.key), sumBy(["Registered"], c.key),
           sumBy(["Fixed"], c.key), sumBy(TIER.live, c.key), c.note, false);
      for (const g of prog.groups || []) {
        if (g.members[g.members.length - 1] === c.key) {
          push(g.key, g.req, groupSum(EARNED, g), groupSum(["Registered"], g),
               groupSum(["Fixed"], g), groupSum(TIER.live, g), g.note, true);
        }
      }
    }
    const t = totals();
    push("TOTAL", prog.totalRequired, t.earned, t.now, t.later, t.live,
      prog.maxAccreditable ? `At most ${prog.maxAccreditable} ECTS may be accredited.` : "", false);
    $("#cat-table tbody").innerHTML = rows.join("");
  }

  function renderSemesters() {
    const maxE = pref("maxEctsPerSemester"), maxO = pref("maxOralsPerSemester");
    $("#sem-table tbody").innerHTML = semesters().map(s => {
      const inS = entries(COUNTED).filter(e => e.semester === s);
      if (!inS.length) return "";
      const sum = sts => inS.filter(e => sts.includes(e.status)).reduce((a, e) => a + e.ects, 0);
      const earned = sum(EARNED), provisional = sum(PROVISIONAL), outstanding = sum(OUTSTANDING);
      const live = earned + provisional + outstanding;
      const n = k => inS.filter(e => e.course.exam === k).length;
      const g = gpa(e => e.semester === s);
      const heavy = maxE && live > maxE, manyOral = maxO !== null && n("oral") > maxO;
      return `<tr><td><strong>${esc(s)}</strong></td>
        <td class="num">${earned || "&ndash;"}</td>
        <td class="num">${provisional || "&ndash;"}</td>
        <td class="num${outstanding ? " credit-pending" : ""}">${outstanding || "&ndash;"}</td>
        <td class="num"><strong>${live}</strong>${heavy ? ' <span class="pill short">heavy</span>' : ""}</td>
        <td class="num"><strong>${fmtGrade(g.value)}</strong></td>
        <td class="num">${n("oral") ? `<span class="pill ${manyOral ? "oral" : "written"}">${n("oral")}</span>` : "&ndash;"}</td>
        <td class="num">${n("written") || "&ndash;"}</td><td class="num">${n("none") || "&ndash;"}</td>
        <td class="cnote">${inS.map(e => `<button type="button" class="semester-course" data-course="${esc(e.id)}">${esc(e.course.title)}</button>`).join(" &middot; ")}</td></tr>`;
    }).join("");
    // Keep the course list stable while previewing only its row's numbers.
    $("#sem-table tbody").querySelectorAll("tr").forEach(row => {
      const cells = Array.from(row.cells).slice(1, 9);
      const original = cells.map(cell => ({ html: cell.innerHTML, cls: cell.className }));
      let hovered = null, focused = null;
      const preview = () => {
        const button = hovered || focused;
        row.querySelectorAll(".semester-course").forEach(b => b.classList.toggle("previewing", b === button));
        cells.forEach((cell, i) => {
          cell.innerHTML = original[i].html;
          cell.className = original[i].cls;
        });
        if (!button) return;
        const id = button.dataset.course, course = CAT[id], plan = state.plan[id];
        const credits = ectsOf(id);
        const values = [
          EARNED.includes(plan.status) ? credits : 0,
          PROVISIONAL.includes(plan.status) ? credits : 0,
          OUTSTANDING.includes(plan.status) ? credits : 0,
          credits, fmtGrade(course.passFail ? null : gradeOf(id)),
          course.exam === "oral" ? 1 : 0,
          course.exam === "written" ? 1 : 0,
          course.exam === "none" ? 1 : 0,
        ];
        cells.forEach((cell, i) => {
          cell.textContent = values[i] || "–";
          cell.className = "num course-preview" + (i === 2 && values[i] ? " credit-pending" : "");
          if (i >= 5 && values[i]) cell.classList.add("exam-preview");
        });
      };
      row.querySelectorAll(".semester-course").forEach(button => {
        button.addEventListener("mouseenter", () => { hovered = button; preview(); });
        button.addEventListener("mouseleave", () => { hovered = null; preview(); });
        button.addEventListener("focus", () => { focused = button; preview(); });
        button.addEventListener("blur", () => { focused = null; preview(); });
      });
    });
    const t = totals(), g = gpa();
    $("#sem-total").innerHTML = `<tr><td><strong>All semesters</strong></td>
      <td class="num"><strong>${t.earned}</strong></td><td class="num"><strong>${t.provisional}</strong></td>
      <td class="num${t.outstanding ? " credit-pending" : ""}"><strong>${t.outstanding}</strong></td><td class="num"><strong>${t.live}</strong></td>
      <td class="num"><strong>${fmtGrade(g.value)}</strong></td>
      <td class="num" colspan="4">${g.value === null ? "no grades entered"
        : `weighted over ${g.credits} ECTS from ${g.courses} course(s)` +
          (g.ungraded ? ` &middot; ${g.ungraded} completed course(s) still have no grade` : "")}</td></tr>`;
  }

  function renderPlan() {
    const ids = Object.keys(state.plan).filter(id => CAT[id]);
    const so = Object.fromEntries(semesters().map((s, i) => [s, i]));
    const to = Object.fromEntries(STATUSES.map((s, i) => [s, i]));
    ids.sort((a, b) => (so[state.plan[a].semester] ?? 99) - (so[state.plan[b].semester] ?? 99)
      || (to[state.plan[a].status] ?? 9) - (to[state.plan[b].status] ?? 9));
    const visible = ids.filter(id => showInactive || SHOWN.includes(state.plan[id].status));
    $("#plan-empty").hidden = visible.length > 0;
    $("#plan-table tbody").innerHTML = visible.map(id => {
      const p = state.plan[id], c = CAT[id];
      const tier = TIER_OF[p.status];
      // every category is listed so the shape of the programme stays visible,
      // but the ones this course cannot count in for your major/minor are disabled
      const allowed = eligibleCats(c).concat(["(not counted)"]).filter(uniq);
      const opts = categoryList().map(x => x.key);
      if (!opts.includes(p.category)) opts.unshift(p.category);
      return `<tr class="${tier ? "tier-" + tier : "inactive"}">
        <td><div class="ctitle">${esc(c.title)}</div>
          <div class="cid">${esc(c.id)}${c.vvz ? ` &middot; <a href="https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=${c.vvz}&semkez=${c.sem === "FS" ? "2026S" : "2026W"}&lang=en" target="_blank" rel="noopener">VVZ</a>` : ""}</div>
          ${c.examDetail ? `<div class="cnote">${esc(c.examDetail)}</div>` : ""}
          ${c.note ? `<div class="cnote">${esc(c.note)}</div>` : ""}</td>
        <td class="num">${c.flexEcts
          ? `<input class="inp" type="number" min="${c.flexEcts[0]}" max="${c.flexEcts[1]}" step="1" value="${ectsOf(id)}" data-ects="${esc(id)}">`
          : ectsOf(id)}</td>
        <td>${examPill(c.exam)}${c.periodicity && PERIODICITY[c.periodicity] && PERIODICITY[c.periodicity].risk
          ? " " + periodicityPill(c.periodicity) : ""}</td>
        <td>${select(opts, p.category, "cat", id, allowed)}</td>
        <td>${select(semesters(), p.semester, "sem", id)}</td>
        <td>${select(STATUSES, p.status, "status", id)}</td>
        <td class="num">${c.passFail
          ? '<span class="pill unk">pass/fail</span>'
          : `<input class="inp grade" type="number" min="${GRADE_MIN}" max="${GRADE_MAX}" step="${GRADE_STEP}"
               value="${gradeOf(id) === null ? "" : gradeOf(id)}" placeholder="&ndash;" data-grade="${esc(id)}">`}</td>
        <td><button class="iconbtn" data-remove="${esc(id)}" title="remove">&times;</button></td></tr>`;
    }).join("");
  }

  function renderCatalogue() {
    const q = ($("#cat-search").value || "").toLowerCase().trim();
    const fc = $("#cat-filter").value, fs = $("#sem-filter").value, fe = $("#exam-filter").value;
    const onlyOk = $("#only-eligible").checked;
    const rows = prog.catalogue.filter(c => {
      if (onlyOk && !isEligible(c)) return false;
      if (q && !(c.title.toLowerCase().includes(q) || c.id.toLowerCase().includes(q))) return false;
      if (fc && !eligibleCats(c).includes(fc)) return false;
      if (fs && c.sem !== fs) return false;
      if (fe && c.exam !== fe) return false;
      return true;
    });
    $("#cat-browse tbody").innerHTML = rows.map(c => {
      const inPlan = !!state.plan[c.id];
      const cats = eligibleCats(c);
      return `<tr><td><div class="ctitle">${esc(c.title)}</div><div class="cid">${esc(c.id)}</div>
          ${c.note ? `<div class="cnote">${esc(c.note)}</div>` : ""}</td>
        <td class="num">${c.ects}</td><td>${esc(c.sem === "NA" ? "&ndash;" : c.sem)}</td>
        <td>${examPill(c.exam)} ${periodicityPill(c.periodicity)}</td>
        <td class="cats">${cats.length ? cats.map(esc).join(" &middot; ") : '<em>not available with your major/minor</em>'}</td>
        <td><button class="addbtn" data-add="${esc(c.id)}" ${inPlan || !cats.length ? "disabled" : ""}>${inPlan ? "in plan" : "add"}</button></td></tr>`;
    }).join("") || `<tr><td colspan="6" class="cnote">Nothing matches those filters.</td></tr>`;
  }

  function renderFoot() {
    const src = (prog.sources || []).map(esc).join("; ");
    const notes = ((prog.rules && prog.rules.notes) || []).map(n => `<li>${esc(n)}</li>`).join("");
    $("#foot").innerHTML =
      `<p><strong>${esc(prog.name)}</strong> &mdash; ${esc(prog.institution || "")}, ${esc(prog.regulations || "")}.
        ${prog.degreeTitle ? "Awards " + esc(prog.degreeTitle) + "." : ""}</p>
       ${src ? `<p><strong>Sources.</strong> ${src}.</p>` : ""}
       ${notes ? `<ul>${notes}</ul>` : ""}
       <p>Assessment marked <span class="pill unk">?</span> has not been verified. Course details can change until a
          semester begins &mdash; always check the official catalogue before relying on one. This is a planning aid,
          not an authoritative record.</p>
       <p>Your plan is kept in this browser only and travels in the file you download. Uploading a plan replaces what is stored here.</p>`;
  }

  const PERIODICITY = {
    "every-semester": { label: "every semester", cls: "none",    risk: false },
    "yearly":         { label: "yearly",         cls: "unk",     risk: false },
    "two-yearly":     { label: "two-yearly",     cls: "written", risk: true  },
    "non-recurring":  { label: "one-off",        cls: "oral",    risk: true  },
  };
  function periodicityPill(p) {
    const d = PERIODICITY[p];
    return d ? `<span class="pill ${d.cls}" title="offered ${esc(d.label)}">${esc(d.label)}</span>` : "";
  }

  function examPill(e) {
    const label = { oral: "oral", written: "written", none: "no exam", "?": "?" }[e] || e;
    return `<span class="pill ${e === "?" ? "unk" : e}">${label}</span>`;
  }

  /** `enabled` (optional) lists the values that may be picked; the rest render disabled. */
  function select(options, value, kind, id, enabled) {
    return `<select class="inp" data-${kind}="${esc(id)}">` +
      options.map(o => {
        const off = enabled && !enabled.includes(o) && o !== value;
        return `<option${o === value ? " selected" : ""}${off ? " disabled" : ""}>${esc(o)}</option>`;
      }).join("") + `</select>`;
  }

  /* ------------------------------------------------------------ events */

  document.addEventListener("change", e => {
    const t = e.target, d = t.dataset;
    let dirty = true;
    if (d.cat) {
      // `disabled` stops a click, but not a scripted assignment - enforce it here too
      const allowed = eligibleCats(CAT[d.cat]).concat(["(not counted)"]);
      if (!allowed.includes(t.value)) {
        toast(`${CAT[d.cat].title} cannot count towards "${t.value}" with your major/minor`);
        render(); return;
      }
      state.plan[d.cat].category = t.value;
    }
    else if (d.sem) state.plan[d.sem].semester = t.value;
    else if (d.status) state.plan[d.status].status = t.value;
    else if (d.ects) {
      const c = CAT[d.ects], [lo, hi] = c.flexEcts;
      let v = Math.round(Number(t.value));
      if (!Number.isFinite(v)) v = c.ects;
      state.plan[d.ects].ects = Math.min(hi, Math.max(lo, v));
    }
    else if (d.grade) {
      const raw = t.value.trim();
      if (raw === "") delete state.plan[d.grade].grade;
      else {
        let v = Number(raw);
        if (!Number.isFinite(v)) { delete state.plan[d.grade].grade; }
        else {
          v = Math.round(v / GRADE_STEP) * GRADE_STEP;
          v = Math.min(GRADE_MAX, Math.max(GRADE_MIN, v));
          state.plan[d.grade].grade = Number(v.toFixed(2));
        }
      }
    }
    else if (t.id === "show-inactive") showInactive = t.checked;
    else if (t.id === "f-programme") { state.programmeId = t.value; state.plan = {}; activate(); }
    else if (t.id === "f-name") state.profile.name = t.value.trim();
    else if (t.id === "f-sid") state.profile.studentId = t.value.trim();
    else if (t.id === "f-major") state.profile.major = t.value;
    else if (t.id === "f-minor") state.profile.minor = t.value;
    else if (t.id === "f-semesters") {
      const list = t.value.split(",").map(s => s.trim()).filter(Boolean).filter(uniq);
      state.profile.semesters = list.length ? list : DEFAULT_SEMESTERS.slice();
      for (const id of Object.keys(state.plan)) {
        if (!state.profile.semesters.includes(state.plan[id].semester)) state.plan[id].semester = UNDECIDED;
      }
    }
    else if (t.id === "f-maxects") state.preferences.maxEctsPerSemester = t.value === "" ? null : Number(t.value);
    else if (t.id === "f-maxorals") state.preferences.maxOralsPerSemester = t.value === "" ? null : Number(t.value);
    else if (["cat-filter", "sem-filter", "exam-filter", "only-eligible"].includes(t.id)) { renderCatalogue(); return; }
    else dirty = false;
    if (dirty) render();
  });

  document.addEventListener("input", e => { if (e.target.id === "cat-search") renderCatalogue(); });

  document.addEventListener("click", e => {
    const add = e.target.closest("[data-add]");
    if (add) {
      const c = CAT[add.dataset.add], cats = eligibleCats(c);
      if (!cats.length) return;
      const sems = state.profile.semesters;
      const guess = c.sem === "HS" ? sems.find(s => /^HS/i.test(s))
                  : c.sem === "FS" ? sems.find(s => /^FS/i.test(s)) : null;
      state.plan[c.id] = { status: "Open", category: cats[0], semester: guess || UNDECIDED };
      if (c.flexEcts) state.plan[c.id].ects = c.ects;
      render(); toast(`Added ${c.title}`); return;
    }
    const rm = e.target.closest("[data-remove]");
    if (rm) { delete state.plan[rm.dataset.remove]; render(); }
  });

  /* ------------------------------------------------------------ json io */

  function download(obj, name) {
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function planDocument() {
    return {
      schema: SCHEMA,
      savedAt: new Date().toISOString(),
      programmeId: state.programmeId,
      programmeName: prog ? prog.name : null,
      profile: state.profile,
      preferences: state.preferences,
      plan: state.plan,
      customProgrammes: state.customProgrammes,
    };
  }

  $("#btn-export").addEventListener("click", () => {
    const slug = (state.profile.name || "plan").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "plan";
    download(planDocument(), `${slug}-${new Date().toISOString().slice(0, 10)}.json`);
    toast("Plan downloaded");
  });

  $("#btn-prog-export").addEventListener("click", () => {
    if (!prog) return;
    download(prog, `${prog.id}.json`);
    toast("Programme downloaded");
  });

  $("#btn-copy").addEventListener("click", async () => {
    const text = JSON.stringify(planDocument(), null, 2);
    try { await navigator.clipboard.writeText(text); toast("JSON copied"); }
    catch (err) {
      const ta = document.createElement("textarea");
      ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); toast("JSON copied"); }
      catch (e2) { toast("Could not copy - use Download instead"); }
      ta.remove();
    }
  });

  function readJson(file, onOk) {
    const r = new FileReader();
    r.onload = () => {
      try { onOk(JSON.parse(r.result)); }
      catch (err) { toast("Could not read that file: " + err.message); }
    };
    r.onerror = () => toast("Could not read that file");
    r.readAsText(file);
  }

  $("#file-import").addEventListener("change", ev => {
    const f = ev.target.files && ev.target.files[0];
    if (f) readJson(f, data => {
      if (!data || typeof data !== "object" || !data.plan || typeof data.plan !== "object") {
        toast('That file has no "plan" object'); return;
      }
      state = normaliseState(data);
      activate();
      if (!prog) { toast("That plan needs a programme that is not loaded"); return; }
      CAT = byId();
      const cleaned = {}; let skipped = 0;
      for (const [id, v] of Object.entries(state.plan)) {
        if (!CAT[id]) { skipped++; continue; }
        cleaned[id] = {
          status: STATUSES.includes(v.status) ? v.status : "Open",
          category: v.category || (eligibleCats(CAT[id])[0] || "(not counted)"),
          semester: semesters().includes(v.semester) ? v.semester : UNDECIDED,
        };
        if (typeof v.ects === "number" && CAT[id].flexEcts) cleaned[id].ects = v.ects;
        if (typeof v.grade === "number" && Number.isFinite(v.grade)
            && v.grade >= GRADE_MIN && v.grade <= GRADE_MAX && !CAT[id].passFail) {
          cleaned[id].grade = v.grade;
        }
      }
      state.plan = cleaned;
      render();
      toast(`Loaded ${Object.keys(cleaned).length} course(s)` + (skipped ? ` - ${skipped} unknown skipped` : ""));
    });
    ev.target.value = "";
  });

  $("#file-prog").addEventListener("change", ev => {
    const f = ev.target.files && ev.target.files[0];
    if (f) readJson(f, def => {
      if (!def || !def.id || !Array.isArray(def.catalogue)) {
        toast("That is not a programme definition (needs id and catalogue)"); return;
      }
      registerCustom(def);
      state.customProgrammes = state.customProgrammes.filter(p => p.id !== def.id).concat([def]);
      state.programmeId = def.id; state.plan = {};
      activate(); render();
      toast(`Loaded programme "${def.name || def.id}"`);
    });
    ev.target.value = "";
  });

  const clearDialog = $("#confirm-clear");

  function doClear() {
    state = blankState(); activate(); render();
    toast("Cleared");
  }

  $("#btn-clear").addEventListener("click", () => {
    const n = Object.keys(state.plan).length;
    const bits = [`${n} course${n === 1 ? "" : "s"}`];
    if (state.profile.name) bits.push("your name");
    if (state.profile.studentId) bits.push("your student number");
    if (state.profile.major || state.profile.minor) bits.push("your major and minor");
    const graded = Object.values(state.plan).filter(v => typeof v.grade === "number").length;
    if (graded) bits.push(`${graded} grade${graded === 1 ? "" : "s"}`);
    $("#clear-detail").textContent = n || state.profile.name
      ? `This removes ${bits.join(", ")} from this browser.`
      : "There is nothing stored yet.";

    if (typeof clearDialog.showModal === "function") clearDialog.showModal();
    else if (confirm("Clear your plan and profile from this browser?")) doClear();  // very old browsers
  });

  clearDialog.addEventListener("close", () => {
    if (clearDialog.returnValue === "clear") doClear();
    else if (clearDialog.returnValue === "download") {
      $("#btn-export").click();
      toast("Downloaded - nothing was cleared");
    }
  });

  let toastTimer = null;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg; el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 2600);
  }

  /* ------------------------------------------------------------ boot */

  load();
  activate();
  if (!prog) {
    document.querySelector("main").innerHTML =
      '<section class="panel"><h2>No programme loaded</h2><p class="hint">Add a programme file under <code>programmes/</code> and reference it from index.html, or upload a programme JSON.</p></section>';
    return;
  }
  $("#cat-filter").innerHTML = `<option value="">all categories</option>` +
    categoryList().filter(c => c.key !== "(not counted)").map(c => `<option>${esc(c.key)}</option>`).join("");
  render();
})();
