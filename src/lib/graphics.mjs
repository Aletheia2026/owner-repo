// Original inline SVG graphics for the Voice Pack archive and current edition.
// Every graphic carries role="img" with a <title> and <desc> so it is
// meaningful to screen readers, and none relies on colour alone: labels,
// numbers and line styles carry the information.

let uid = 0;
const svg = (vb, title, desc, body, { cls = "", maxw } = {}) => {
  const id = `g${++uid}`;
  const style = maxw ? ` style="max-width:${maxw}px"` : "";
  return `<svg class="${cls}" viewBox="${vb}" role="img" aria-labelledby="${id}t ${id}d" xmlns="http://www.w3.org/2000/svg"${style}><title id="${id}t">${title}</title><desc id="${id}d">${desc}</desc>${body}</svg>`;
};
const T = (x, y, s, { size = 13, w = 500, anchor = "start", fill = "#1d1a17", italic = false, family = "var(--sans, sans-serif)" } = {}) =>
  `<text x="${x}" y="${y}" font-size="${size}" font-weight="${w}" text-anchor="${anchor}" fill="${fill}" font-family="${family}"${italic ? ' font-style="italic"' : ""}>${s}</text>`;
const SERIF = "var(--serif, Georgia, serif)";

// ---------------------------------------------------------------- covers
export function cover(ed) {
  const c = { "01": "#3f607e", "02": "#8a5f0f", "03": "#2f6b55", "04": "#7a2e4a", "05": "#b3322b" }[ed];
  if (ed === "01") {
    return svg("0 0 320 240", "Edition 01 cover: an annotated body diagram", "A simple outline of the uterus, fallopian tubes and ovaries on graph paper, with handwritten-style labels and arrows.", `
      <defs><pattern id="gp01" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M16 0H0V16" fill="none" stroke="${c}" stroke-opacity=".14"/></pattern></defs>
      <rect width="320" height="240" fill="url(#gp01)"/>
      <g fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <path d="M126 96c0-40 68-40 68 0 0 34-16 52-24 62v18c0 6-20 6-20 0v-18c-8-10-24-28-24-62z" fill="#fff"/>
        <path d="M130 84c-18-12-34-10-44 2"/><path d="M190 84c18-12 34-10 44 2"/>
        <ellipse cx="82" cy="110" rx="14" ry="10" fill="#fff"/><ellipse cx="238" cy="110" rx="14" ry="10" fill="#fff"/>
        <path d="M152 180l-2 22M168 180l2 22" />
      </g>
      <g stroke="#1d1a17" stroke-width="1.5" fill="none" stroke-dasharray="3 4"><path d="M60 60l18 36"/><path d="M262 60l-20 38"/><path d="M226 196l-50-24"/></g>
      ${T(34, 54, "ovary", { size: 15, italic: true, family: SERIF, fill: c })}
      ${T(240, 54, "tube", { size: 15, italic: true, family: SERIF, fill: c })}
      ${T(212, 212, "cervix", { size: 15, italic: true, family: SERIF, fill: c })}
      ${T(20, 226, "EDITION 01 · KNOW YOUR BODY", { size: 10, w: 700 })}`);
  }
  if (ed === "02") {
    return svg("0 0 320 240", "Edition 02 cover: speech bubbles and word cards", "Three overlapping speech bubbles containing the words cramping, sharp and every month, beside a small 0 to 10 scale.", `
      <g font-family="${SERIF}">
        <path d="M24 40h150a14 14 0 0 1 14 14v40a14 14 0 0 1-14 14H70l-20 18v-18H24a14 14 0 0 1-14-14V54a14 14 0 0 1 14-14z" fill="#fff" stroke="${c}" stroke-width="2.5"/>
        ${T(96, 83, "“cramping”", { size: 22, anchor: "middle", family: SERIF, italic: true })}
        <path d="M146 112h142a14 14 0 0 1 14 14v36a14 14 0 0 1-14 14h-20v18l-20-18H146a14 14 0 0 1-14-14v-36a14 14 0 0 1 14-14z" fill="${c}"/>
        ${T(217, 152, "“sharp, on the left”", { size: 17, anchor: "middle", family: SERIF, italic: true, fill: "#fff" })}
        <path d="M40 150h70a12 12 0 0 1 12 12v24a12 12 0 0 1-12 12H62l-14 12v-12h-8a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12z" fill="#f3e6c6" stroke="${c}" stroke-width="2"/>
        ${T(75, 181, "every month", { size: 13, anchor: "middle" })}
      </g>
      <g>${Array.from({ length: 11 }, (_, i) => `<rect x="${196 + i * 10}" y="${36 + (10 - i) * 2}" width="7" height="${6 + i * 2}" rx="2" fill="${c}" fill-opacity="${0.25 + i * 0.07}"/>`).join("")}
      ${T(196, 78, "0", { size: 10 })}${T(296, 78, "10", { size: 10, anchor: "end" })}</g>
      ${T(20, 226, "EDITION 02 · FIND THE WORDS", { size: 10, w: 700 })}`);
  }
  if (ed === "03") {
    return svg("0 0 320 240", "Edition 03 cover: a healthcare pathway map", "A dotted route runs from a starting point marked you, past stops labelled GP, follow-up and second opinion, to a destination marked answers.", `
      <defs><pattern id="dt03" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="${c}" fill-opacity=".25"/></pattern></defs>
      <rect width="320" height="240" fill="url(#dt03)"/>
      <path d="M36 190C80 190 70 120 120 120s60 60 110 50 40-90 60-110" fill="none" stroke="${c}" stroke-width="4" stroke-dasharray="2 9" stroke-linecap="round"/>
      <path d="M120 120c20-40 60-60 90-56" fill="none" stroke="#1d1a17" stroke-width="2" stroke-dasharray="5 5" opacity=".5"/>
      ${[[36, 190, "you"], [120, 120, "GP"], [230, 170, "follow-up"], [210, 64, "second opinion"], [290, 60, "answers"]].map(([x, y, l], i) => `<circle cx="${x}" cy="${y}" r="${i === 4 ? 12 : 9}" fill="${i === 4 ? c : "#fff"}" stroke="${c}" stroke-width="3"/>${T(x, y + (i === 3 || i === 0 ? -16 : 28), l, { size: 12, anchor: i === 4 ? "end" : "middle", w: 700 })}`).join("")}
      ${T(20, 226, "EDITION 03 · USE YOUR VOICE", { size: 10, w: 700 })}`);
  }
  if (ed === "04") {
    const pts = [[60, 60], [110, 40], [160, 70], [90, 110], [140, 120], [200, 50], [230, 100], [60, 160], [120, 175], [190, 150], [260, 140], [250, 190]];
    const edges = [[0, 1], [1, 2], [0, 3], [3, 4], [2, 4], [2, 5], [5, 6], [4, 6], [3, 7], [7, 8], [4, 8], [8, 9], [6, 9], [9, 10], [10, 11], [6, 10]];
    return svg("0 0 320 240", "Edition 04 cover: a network of voices", "Twelve connected points form a network. Lines join each voice to others, converging on one larger point, to show individual experiences becoming collective evidence.", `
      <rect width="320" height="240" fill="#1d1a17"/>
      ${edges.map(([a, b]) => `<line x1="${pts[a][0]}" y1="${pts[a][1]}" x2="${pts[b][0]}" y2="${pts[b][1]}" stroke="#e7a9bf" stroke-opacity=".5" stroke-width="1.5"/>`).join("")}
      ${pts.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i === 9 ? 13 : 6}" fill="${i === 9 ? "#b3322b" : c}" stroke="#f6efe3" stroke-width="2"/>`).join("")}
      <path d="M270 40c10 0 18 8 18 18s-8 18-18 18h-6l-8 8v-8c-6-3-10-10-10-18 0-10 14-18 24-18z" fill="#f6efe3"/>
      ${T(20, 226, "EDITION 04 · FROM VOICE TO CHANGE", { size: 10, w: 700, fill: "#f6efe3" })}`);
  }
  // 05: the current edition
  return svg("0 0 320 240", "Current edition cover: Heard. Understood. Me.", "The words Heard, Understood and Me stacked in echoed type, circled by seven linked points representing the Aletheia loop.", `
    <rect width="320" height="240" fill="#1d1a17"/>
    <g fill="none" stroke="#c49a45" stroke-width="1.5"><circle cx="252" cy="112" r="50" stroke-dasharray="3 6"/></g>
    ${Array.from({ length: 7 }, (_, i) => { const a = (-90 + i * 360 / 7) * Math.PI / 180; return `<circle cx="${(252 + 50 * Math.cos(a)).toFixed(1)}" cy="${(112 + 50 * Math.sin(a)).toFixed(1)}" r="7" fill="${i === 0 ? "#b3322b" : "#f6efe3"}"/>`; }).join("")}
    ${["Heard.", "Understood.", "Me."].map((w, i) => `<g font-family="${SERIF}" font-size="26" font-weight="600">
      <text x="${24 + 5}" y="${78 + i * 44 + 5}" fill="none" stroke="#b3322b" stroke-opacity=".45">${w}</text>
      <text x="${24 + 2.5}" y="${78 + i * 44 + 2.5}" fill="none" stroke="#b3322b" stroke-opacity=".75">${w}</text>
      <text x="24" y="${78 + i * 44}" fill="${i === 2 ? "#e0564c" : "#f6efe3"}">${w}</text></g>`).join("")}
    ${T(20, 226, "CURRENT EDITION · APRIL 2026", { size: 10, w: 700, fill: "#c49a45" })}`);
}

// ---------------------------------------------------------------- Edition 01
export function internalAnatomy() {
  const c = "var(--acc, #3f607e)";
  const L = (x, y, t) => T(x, y, t, { size: 19, w: 700 });
  const lead = (d) => `<path d="${d}" fill="none" stroke="#1d1a17" stroke-width="1.3"/><circle cx="${d.split(/[ML ]+/).filter(Boolean).slice(-2)[0]}" cy="${d.split(/[ML ]+/).filter(Boolean).slice(-1)[0]}" r="3" fill="#1d1a17"/>`;
  return svg("0 0 640 440", "Diagram: the uterus, fallopian tubes, ovaries, cervix and vagina, seen from the front",
    "A front-view line drawing. The uterus sits in the centre, shaped like an upside-down pear, with its lining (the endometrium) inside. A fallopian tube curves out from each upper corner, ending near an ovary on each side. The narrow bottom of the uterus is the cervix, which opens into the vagina, a muscular canal leading to the outside of the body.", `
    <g fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M255 132C218 108 178 104 146 124c-8 5-10 14-4 20" />
      <path d="M385 132C422 108 462 104 494 124c8 5 10 14 4 20" />
      <path d="M142 144c-8 2-12 10-8 16M146 146c-2 8 0 14 6 16M498 144c8 2 12 10 8 16M494 146c2 8 0 14-6 16" stroke-width="2.2"/>
      <ellipse cx="180" cy="176" rx="30" ry="19" fill="#fff"/><ellipse cx="460" cy="176" rx="30" ry="19" fill="#fff"/>
      <path d="M210 178C230 180 240 176 252 170M430 178C410 180 400 176 388 170" stroke-width="1.8" stroke-dasharray="3 4"/>
      <path d="M250 152C250 96 390 96 390 152c0 64-28 100-44 118v34c0 12-52 12-52 0v-34c-16-18-44-54-44-118z" fill="#fff"/>
      <path d="M282 146Q320 158 358 146Q344 214 320 252Q296 214 282 146z" fill="${c}" fill-opacity=".12" stroke-width="2"/>
      <path d="M300 310l-4 96M340 310l4 96"/>
    </g>
    ${L(20, 70, "Fallopian tube")}${lead("M170 78L208 110")}
    ${L(20, 244, "Ovary")}${lead("M84 238L152 186")}
    ${L(460, 70, "Lining")}${T(460, 90, "(endometrium)", { size: 15, fill: "#4a423b" })}${lead("M456 74L342 158")}
    ${L(460, 244, "Uterus (womb)")}${lead("M454 238L384 200")}
    ${L(460, 318, "Cervix")}${lead("M454 312L350 300")}
    ${L(460, 392, "Vagina")}${lead("M454 386L346 380")}
    ${T(320, 432, "Simplified and not to scale. Every body varies.", { size: 15, anchor: "middle", italic: true, family: SERIF, fill: "#4a423b" })}`, { maxw: 640 });
}

export function externalAnatomy() {
  const c = "var(--acc, #3f607e)";
  const L = (x, y, t) => T(x, y, t, { size: 19, w: 700 });
  const lead = (x1, y1, x2, y2) => `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="#1d1a17" stroke-width="1.3"/><circle cx="${x2}" cy="${y2}" r="3" fill="#1d1a17"/>`;
  return svg("0 0 640 460", "Diagram: the vulva, labelled",
    "A simplified, non-realistic line diagram of the vulva from the front. Labels point to the mons pubis at the top, the clitoris, the outer labia, the inner labia, the urethral opening, the vaginal opening, the perineum and, separately below, the anus. A note says every vulva looks different.", `
    <g fill="none" stroke="${c}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M232 110c0-40 40-66 88-66s88 26 88 66" stroke-opacity=".4"/>
      <path d="M320 96c-58 10-84 70-78 140 6 68 42 108 78 114 36-6 72-46 78-114 6-70-20-130-78-140z" fill="#fff"/>
      <path d="M320 122c-26 8-38 50-36 110 2 54 18 84 36 90 18-6 34-36 36-90 2-60-10-102-36-110z"/>
      <path d="M306 128c4-12 24-12 28 0-4 10-24 10-28 0z" fill="${c}" fill-opacity=".2"/>
      <circle cx="320" cy="146" r="6" fill="${c}"/>
      <circle cx="320" cy="206" r="4" fill="#fff"/>
      <ellipse cx="320" cy="258" rx="13" ry="25" fill="#fff"/>
      <circle cx="320" cy="400" r="10" fill="#fff"/>
    </g>
    ${L(452, 58, "Mons pubis")}${lead(446, 52, 360, 64)}
    ${L(452, 150, "Clitoris")}${lead(446, 144, 328, 146)}
    ${L(452, 212, "Outer labia")}${lead(446, 206, 392, 206)}
    ${L(452, 274, "Inner labia")}${lead(446, 268, 352, 262)}
    ${L(20, 196, "Urethral")}${L(20, 218, "opening")}${lead(112, 206, 314, 206)}
    ${L(20, 262, "Vaginal")}${L(20, 284, "opening")}${lead(104, 270, 306, 262)}
    ${L(20, 344, "Perineum")}${lead(120, 338, 318, 336)}
    ${L(452, 406, "Anus")}${lead(446, 400, 332, 400)}
    ${T(320, 452, "Simplified. Every vulva looks different, and that’s normal.", { size: 15, anchor: "middle", italic: true, family: SERIF, fill: "#4a423b" })}`, { maxw: 640 });
}

export function cycleWheel() {
  const c = "var(--acc, #3f607e)";
  const cx = 210, cy = 210, r = 150;
  const arc = (a0, a1, rr = r) => {
    const p = (a) => [cx + rr * Math.cos((a - 90) * Math.PI / 180), cy + rr * Math.sin((a - 90) * Math.PI / 180)];
    const [x0, y0] = p(a0), [x1, y1] = p(a1);
    return `M${x0.toFixed(1)} ${y0.toFixed(1)}A${rr} ${rr} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1.toFixed(1)} ${y1.toFixed(1)}`;
  };
  const seg = [[0, 64, "Period", "days 1–5ish", "solid", 1], [64, 167, "Follicular", "lining rebuilds", "dash", .75], [167, 193, "Ovulation", "about day 14*", "solid", .5], [193, 360, "Luteal", "days 15–28", "dot", .35]];
  const dash = { solid: "", dash: ' stroke-dasharray="14 6"', dot: ' stroke-dasharray="3 6"' };
  return svg("0 0 640 420", "Diagram: the menstrual cycle as a wheel", "A circle divided into four phases of an example 28-day cycle: the period (about days 1 to 5), the follicular phase when the lining rebuilds, ovulation around day 14, and the luteal phase from about day 15 to 28. A note explains that cycles of 21 to 45 days are common in teenagers.", `
    ${seg.map(([a, b, , , st, op]) => `<path d="${arc(a + 1.5, b - 1.5)}" fill="none" stroke="${c}" stroke-opacity="${op}" stroke-width="30"${dash[st]}/>`).join("")}
    <circle cx="${cx}" cy="${cy}" r="86" fill="#fff" stroke="#e2d6c3"/>
    ${T(cx, cy - 8, "An example", { size: 13, anchor: "middle", fill: "#6d645b" })}${T(cx, cy + 20, "28-day cycle", { size: 22, anchor: "middle", w: 600, family: SERIF })}
    ${T(cx, cy + 40, "day 1 = first day of bleeding", { size: 11, anchor: "middle", fill: "#6d645b" })}
    ${T(cx + 6, 30, "Day 1", { size: 12, w: 700 })}
    <g>
      ${seg.map(([, , n, d], i) => `<g transform="translate(410 ${70 + i * 76})"><rect width="18" height="18" rx="3" fill="${c}" fill-opacity="${seg[i][5]}"/>${T(30, 14, `${i + 1}. ${n}`, { size: 16, w: 700 })}${T(30, 34, d, { size: 13, fill: "#6d645b" })}</g>`).join("")}
    </g>
    ${T(410, 388, "*In teens, cycles of 21–45 days are common,", { size: 12, italic: true, family: SERIF, fill: "#6d645b" })}
    ${T(410, 405, "and ovulation shifts with cycle length.", { size: 12, italic: true, family: SERIF, fill: "#6d645b" })}`, { maxw: 640 });
}

export function pubertyTimeline() {
  const c = "var(--acc, #3f607e)";
  const x = (age) => 60 + (age - 7) * 52;
  const bars = [
    ["Breast buds / chest changes", 8, 13, 0],
    ["Pubic and underarm hair", 9, 14, 1],
    ["Growth spurt", 9.5, 14.5, 2],
    ["First period (often ~2 yrs after breast buds)", 10, 15, 3],
    ["Skin, sweat and body-odour changes", 9, 16, 4],
  ];
  return svg("0 0 640 330", "Chart: common age ranges for puberty changes", "A horizontal timeline from age 7 to 17 with five bars: breast or chest development usually begins between 8 and 13, pubic and underarm hair between about 9 and 14, the growth spurt about 9.5 to 14.5, first period usually between 10 and 15, and skin and sweat changes between about 9 and 16. Ranges vary widely between people.", `
    ${Array.from({ length: 11 }, (_, i) => `<line x1="${x(7 + i)}" y1="40" x2="${x(7 + i)}" y2="280" stroke="#e2d6c3"/>${T(x(7 + i), 300, 7 + i, { size: 12, anchor: "middle", fill: "#6d645b" })}`).join("")}
    ${T(x(12), 322, "age (years)", { size: 12, anchor: "middle", fill: "#6d645b" })}
    ${bars.map(([l, a, b, i]) => `<rect x="${x(a)}" y="${54 + i * 46}" width="${x(b) - x(a)}" height="16" rx="8" fill="${c}" fill-opacity="${0.9 - i * 0.12}"/>${T(x(a), 48 + i * 46, l, { size: 12.5, w: 700 })}`).join("")}
    ${T(20, 22, "Usual ranges only. Earlier or later can be completely healthy. See ‘When to check in’ below.", { size: 12, italic: true, family: SERIF, fill: "#6d645b" })}`, { maxw: 640 });
}

// ---------------------------------------------------------------- Edition 02
export function bodyMap() {
  const c = "var(--acc, #8a5f0f)";
  const fig = (cx) => `<g fill="#fff" stroke="#1d1a17" stroke-width="2">
      <circle cx="${cx}" cy="64" r="30"/>
      <rect x="${cx - 9}" y="92" width="18" height="12"/>
      <rect x="${cx - 76}" y="108" width="24" height="168" rx="12"/><rect x="${cx + 52}" y="108" width="24" height="168" rx="12"/>
      <rect x="${cx - 48}" y="102" width="96" height="176" rx="28"/>
      <rect x="${cx - 44}" y="262" width="40" height="176" rx="18"/><rect x="${cx + 4}" y="262" width="40" height="176" rx="18"/></g>`;
  const zones = [[160, 64, "1", "head"], [160, 140, "2", "chest"], [160, 186, "3", "upper tummy"], [182, 230, "4", "lower tummy, your left"], [138, 230, "5", "lower tummy, your right"], [160, 266, "6", "pelvis"], [440, 236, "7", "lower back"], [96, 170, "8", "arms and joints"], [136, 360, "9", "legs"]];
  return svg("0 0 640 580", "Body map: front and back outlines with nine numbered zones", "Two simple body outlines, front and back. Numbered zones mark the head (1), chest (2), upper tummy (3), lower tummy on your left (4), lower tummy on your right (5), pelvis (6), lower back (7), arms and joints (8) and legs (9). On the front view, your left side appears on the right of the picture.", `
    ${fig(160)}${fig(440)}
    ${T(160, 22, "FRONT", { size: 12, w: 700, anchor: "middle", fill: "#4a423b" })}${T(440, 22, "BACK", { size: 12, w: 700, anchor: "middle", fill: "#4a423b" })}
    ${zones.map(([x, y, n]) => `<circle cx="${x}" cy="${y}" r="14" fill="${c}"/>${T(x, y + 5, n, { size: 14, w: 700, anchor: "middle", fill: "#fff" })}`).join("")}
    <line x1="20" y1="458" x2="620" y2="458" stroke="#e2d6c3"/>
    ${zones.map(([, , n, l], i) => T(24 + (i % 3) * 205, 486 + Math.floor(i / 3) * 24, `${n} · ${l}`, { size: 14 })).join("")}
    ${T(24, 568, "On the front view, your left side is on the right of the picture.", { size: 13, italic: true, family: SERIF, fill: "#4a423b" })}`, { maxw: 640 });
}

export function painScale() {
  const c = "var(--acc, #8a5f0f)";
  const anchors = [[0, ["No pain"]], [2, ["Notice it,", "carry on"]], [4, ["Distracting,", "need a break"]], [6, ["Hard to focus", "or move"]], [8, ["Have to stop", "and lie down"]], [10, ["Worst I can", "imagine"]]];
  const x = (n) => 40 + n * 56;
  return svg("0 0 640 240", "Pain scale from 0 to 10 with what each level lets you do", "A scale numbered 0 to 10. Each even number is paired with what the pain stops you doing: 0 no pain; 2 you notice it but carry on; 4 distracting and you need a break; 6 hard to focus or move; 8 you have to stop and lie down; 10 the worst you can imagine.", `
    ${T(20, 24, "Rate what the pain stops you doing, not just how it feels.", { size: 14, italic: true, family: SERIF, fill: "#4a423b" })}
    ${Array.from({ length: 11 }, (_, i) => `<rect x="${x(i) - 23}" y="44" width="46" height="36" rx="7" fill="${c}" fill-opacity="${0.12 + i * 0.085}"/>${T(x(i), 68, i, { size: 17, w: 700, anchor: "middle", fill: i > 5 ? "#fff" : "#1d1a17" })}`).join("")}
    ${anchors.map(([n, ls]) => `<line x1="${x(n)}" y1="84" x2="${x(n)}" y2="100" stroke="#1d1a17" stroke-width="1.5"/>${ls.map((l, j) => T(x(n), 120 + j * 18, l, { size: 13.5, anchor: n === 0 ? "start" : n === 10 ? "end" : "middle", w: j ? 400 : 700 })).join("")}`).join("")}
    <rect x="20" y="176" width="600" height="44" rx="10" fill="#fbf8f1" stroke="#e2d6c3"/>
    ${T(36, 204, "Give your usual number AND your worst: “Usually 4, at worst 8.”", { size: 15, w: 700 })}`, { maxw: 640 });
}

export function trackerGrid() {
  const c = "var(--acc, #8a5f0f)";
  const days = 14, cw = 34, x0 = 150, y0 = 50;
  const rows = [["Bleeding", [3, 3, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]], ["Pain (0–10)", [7, 8, 5, 3, 1, 0, 0, 0, 0, 0, 0, 0, 2, 3]], ["Missed school / plans", [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], ["Mood", ["L", "L", "", "", "", "", "", "", "", "", "", "", "L", "L"]], ["Energy", ["L", "L", "L", "", "", "", "", "", "", "", "", "", "", "L"]]];
  const cell = (r, v, i) => {
    const X = x0 + i * cw, Y = y0 + r * 40;
    if (r === 0) return v ? `<g>${Array.from({ length: v }, (_, k) => `<circle cx="${X + 9 + k * 8}" cy="${Y + 17}" r="3.3" fill="${c}"/>`).join("")}</g>` : "";
    if (r === 1) return v ? T(X + cw / 2, Y + 22, v, { size: 13, anchor: "middle", w: v >= 7 ? 700 : 500 }) : "";
    if (r === 2) return v ? `<path d="M${X + 9} ${Y + 18}l6 6 11-12" fill="none" stroke="${c}" stroke-width="3"/>` : "";
    return v ? T(X + cw / 2, Y + 22, "low", { size: 10.5, anchor: "middle", italic: true, family: SERIF }) : "";
  };
  return svg("0 0 640 290", "Example symptom tracker for 14 days", "A filled-in example grid covering days 1 to 14. Rows record bleeding (shown as one to three dots for light to heavy), pain from 0 to 10, days of missed school or plans (a tick), low mood and low energy. In the example, pain is 7 and 8 on days 1 and 2 with heavy bleeding and missed school, and mood and energy dip before and during the period.", `
    ${Array.from({ length: days }, (_, i) => T(x0 + i * cw + cw / 2, 40, `D${i + 1}`, { size: 11, anchor: "middle", fill: "#6d645b", w: 700 })).join("")}
    ${rows.map(([l], r) => `<rect x="10" y="${y0 + r * 40}" width="${x0 + days * cw - 10}" height="34" rx="6" fill="${r % 2 ? "#fff" : "#fbf8f1"}" stroke="#e2d6c3"/>${T(20, y0 + r * 40 + 22, l, { size: 12.5, w: 700 })}`).join("")}
    ${rows.map(([, vals], r) => vals.map((v, i) => cell(r, v, i)).join("")).join("")}
    ${T(10, 272, "Bleeding: ● light  ●● medium  ●●● heavy. Low = noticeably lower than your usual.", { size: 12, fill: "#6d645b" })}`, { maxw: 640 });
}

// ---------------------------------------------------------------- Edition 03
export function appointmentFlow() {
  const c = "var(--acc, #2f6b55)";
  const st = [["Before", ["Write your symptom summary", "Decide your top 1–3 concerns", "Book a longer appointment if needed", "Choose a support person (optional)"]], ["During", ["Lead with your main concern", "Use your summary: what, where, when, how much", "Ask: “What could this be?”", "Repeat back what you heard"]], ["Wrapping up", ["What’s the plan?", "What should I watch for?", "When do I come back?", "Can this be written in my notes?"]], ["After", ["Write down what was said", "Keep tracking", "Book the follow-up", "Not better? Take the next step"]]];
  return svg("0 0 640 400", "Appointment flow: before, during, before you leave, after", "Four connected stages. Before: write your symptom summary, decide your top one to three concerns, book a longer appointment if needed, choose a support person. During: lead with your main concern, use your summary, ask what it could be, repeat back what you heard. Before you leave: ask the plan, what to watch for, when to come back, and whether it can be written in your notes. After: write down what was said, keep tracking, book the follow-up, and take the next step if it isn't better.", `
    ${st.map(([h, items], i) => `<g transform="translate(${10 + i * 158} 20)">
      <rect width="148" height="360" rx="14" fill="${i === 2 ? c : "#fff"}" stroke="${c}" stroke-width="2"/>
      <circle cx="26" cy="30" r="15" fill="${i === 2 ? "#fff" : c}"/>${T(26, 35, i + 1, { size: 14, w: 700, anchor: "middle", fill: i === 2 ? c : "#fff" })}
      ${T(48, 36, h, { size: 15, w: 700, fill: i === 2 ? "#fff" : "#1d1a17" })}
      ${items.map((it, k) => {
        const words = it.split(" "); const lines = []; let cur = "";
        words.forEach((w) => { if ((cur + " " + w).trim().length > 17) { lines.push(cur.trim()); cur = w; } else cur += " " + w; }); lines.push(cur.trim());
        return `<g transform="translate(14 ${72 + k * 72})"><rect width="120" height="62" rx="8" fill="${i === 2 ? "rgba(255,255,255,.14)" : "#fbf8f1"}"/>${lines.map((ln, j) => T(8, 20 + j * 16, ln, { size: 12, fill: i === 2 ? "#fff" : "#1d1a17" })).join("")}</g>`;
      }).join("")}
    </g>${i < 3 ? `<path d="M${156 + i * 158} 200l8 0" stroke="${c}" stroke-width="3" marker-end="url(#ar03)"/>` : ""}`).join("")}
    <defs><marker id="ar03" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L10 5L0 10z" fill="${c}"/></marker></defs>`, { maxw: 640 });
}

export function afterTree() {
  const c = "var(--acc, #2f6b55)";
  const box = (x, y, w, h, t, sub, dark) => `<g transform="translate(${x} ${y})"><rect width="${w}" height="${h}" rx="12" fill="${dark ? c : "#fff"}" stroke="${c}" stroke-width="2"/>${t.map((ln, i) => T(w / 2, 26 + i * 18, ln, { size: 14, w: 700, anchor: "middle", fill: dark ? "#fff" : "#1d1a17" })).join("")}${(sub || []).map((ln, i) => T(w / 2, 26 + t.length * 18 + 4 + i * 16, ln, { size: 12, anchor: "middle", fill: dark ? "#e5f1ea" : "#4a423b" })).join("")}</g>`;
  const line = (x1, y1, x2, y2, lbl) => `<path d="M${x1} ${y1}C${x1} ${(y1 + y2) / 2} ${x2} ${(y1 + y2) / 2} ${x2} ${y2}" fill="none" stroke="#1d1a17" stroke-width="1.5"/>${lbl ? T((x1 + x2) / 2 + (x2 > x1 ? 6 : -6), (y1 + y2) / 2 - 4, lbl, { size: 11.5, italic: true, family: SERIF, anchor: x2 > x1 ? "start" : x2 < x1 ? "end" : "middle", fill: "#4a423b" }) : ""}`;
  return svg("0 0 640 470", "Decision tree: I left the appointment and I still don’t feel heard", "Starting from 'I left and I don't feel heard', three branches. If symptoms are getting worse or feel severe, seek urgent care or call 000 in an emergency. If you weren't given a plan, book a follow-up and bring your tracker. If you had a plan but it isn't working or you disagree, ask for a referral or a second opinion. If the way you were treated was disrespectful or unsafe, give feedback to the clinic, then contact your state health complaints body.", `
    ${box(190, 10, 260, 64, ["I left the appointment and", "I still don’t feel heard"], null, true)}
    ${line(320, 74, 90, 140, "worse / severe?")}${line(320, 74, 250, 140)}${line(320, 74, 400, 140)}${line(320, 74, 560, 140, "treated badly?")}
    ${box(10, 140, 150, 110, ["Urgent care"], ["Worse, sudden or", "severe: urgent care", "or ED. Emergency:", "call 000."])}
    ${box(175, 140, 140, 110, ["No plan?"], ["Book a follow-up.", "Bring your", "tracker and", "summary."])}
    ${box(330, 140, 140, 110, ["Plan not", "working?"], ["Ask for a", "referral or a", "second opinion."])}
    ${box(485, 140, 145, 110, ["Disrespected", "or unsafe?"], ["Give feedback to", "the clinic first", "if it’s safe to."])}
    ${line(245, 250, 320, 320)}${line(400, 250, 320, 320)}${line(557, 250, 557, 320)}
    ${box(210, 320, 220, 90, ["Keep your record going"], ["Dates, what was said, what", "changed. It makes the next", "step faster."])}
    ${box(452, 320, 180, 110, ["Still unresolved?"], ["Contact your state", "health complaints body", "(in Victoria: the Health", "Complaints Commissioner)"])}`, { maxw: 640 });
}

export function systemMap() {
  const c = "var(--acc, #2f6b55)";
  const X = [82, 240, 398, 556];
  const node = (x, y, t, sub) => `<g><rect x="${x - 76}" y="${y - 28}" width="152" height="56" rx="10" fill="#fff" stroke="${c}" stroke-width="2"/>${T(x, y - 5, t, { size: 14, w: 700, anchor: "middle" })}${T(x, y + 14, sub, { size: 11.5, anchor: "middle", fill: "#4a423b" })}</g>`;
  const dash = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="1.6" stroke-dasharray="4 5"/>`;
  const solid = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="3"/>`;
  return svg("0 0 640 500", "Map of where young people can go for care in Australia", "You are at the top. You can go directly to a GP, headspace (ages 12 to 25), a sexual health clinic or community health. From a GP you can be referred to a specialist, or to a psychologist with a mental health treatment plan; headspace can also connect you to psychology. For quick or urgent help you can also go straight to a pharmacist, an Urgent Care Clinic, or in an emergency a hospital emergency department or 000.", `
    ${X.map((x) => dash(320, 74, x, 142)).join("")}
    ${solid(82, 198, 82, 272)}${solid(108, 198, 220, 272)}${solid(240, 198, 240, 272)}
    <circle cx="320" cy="48" r="30" fill="${c}"/>${T(320, 55, "You", { size: 18, w: 700, anchor: "middle", fill: "#fff", family: SERIF })}
    ${node(X[0], 170, "GP / youth GP", "first stop for most things")}${node(X[1], 170, "headspace", "ages 12–25, no referral")}${node(X[2], 170, "Sexual health clinic", "confidential, often free")}${node(X[3], 170, "Community health", "usually no referral")}
    ${node(X[0], 300, "Specialist", "via GP referral")}${node(X[1], 300, "Psychologist", "GP plan = Medicare rebate")}
    <g transform="translate(326 272)"><rect width="306" height="56" rx="10" fill="#fbf8f1" stroke="#e2d6c3"/>${T(14, 23, "Dashed line: go directly.", { size: 12.5, w: 700 })}${T(14, 42, "Solid line: usually via a referral or plan.", { size: 12.5, fill: "#4a423b" })}</g>
    <rect x="9" y="360" width="622" height="130" rx="14" fill="#fff4f1" stroke="#eab7ae"/>
    ${T(28, 388, "QUICK OR URGENT HELP, STRAIGHT FROM YOU", { size: 12, w: 700, fill: "#8f2620" })}
    ${[["Pharmacist", "advice, no appointment"], ["Urgent Care Clinic", "walk in, not life-threatening"], ["Hospital ED / 000", "serious or emergency"]].map(([t, sub], i) => `<g><rect x="${28 + i * 200}" y="402" width="184" height="66" rx="10" fill="#fff" stroke="#b3322b" stroke-width="${i === 2 ? 2.5 : 1.5}"/>${T(120 + i * 200, 430, t, { size: 14, w: 700, anchor: "middle" })}${T(120 + i * 200, 450, sub, { size: 11.5, anchor: "middle", fill: "#4a423b" })}</g>`).join("")}`, { maxw: 640 });
}

// ---------------------------------------------------------------- Edition 04
export function patternDiagram() {
  const c = "var(--acc, #7a2e4a)";
  const stories = ["“told it was normal”", "“took two years”", "“no one explained”", "“mum said don’t talk about it”", "“couldn’t afford the specialist”"];
  return svg("0 0 640 330", "From one story to a pattern", "On the left, five separate speech fragments: told it was normal; took two years; no one explained; mum said don't talk about it; couldn't afford the specialist. Lines from each converge in the middle on a circle labelled pattern. From the pattern an arrow leads to three possible actions on the right: evidence, a submission and a changed policy.", `
    ${stories.map((s, i) => `<g transform="translate(10 ${20 + i * 60})"><rect width="210" height="40" rx="18" fill="#fff" stroke="${c}" stroke-width="1.5"/>${T(105, 25, s, { size: 12.5, anchor: "middle", italic: true, family: SERIF })}</g><path d="M220 ${40 + i * 60}C280 ${40 + i * 60} 280 165 330 165" fill="none" stroke="${c}" stroke-opacity=".6" stroke-width="1.5"/>`).join("")}
    <circle cx="370" cy="165" r="44" fill="${c}"/>${T(370, 161, "pattern", { size: 16, w: 700, anchor: "middle", fill: "#fff", family: SERIF })}${T(370, 180, "not a one-off", { size: 11, anchor: "middle", fill: "#f3dfe7" })}
    <path d="M414 165h40" stroke="#1d1a17" stroke-width="2" marker-end="url(#ar04)"/>
    ${["evidence", "submission", "policy change"].map((t, i) => `<g transform="translate(466 ${95 + i * 50})"><rect width="160" height="38" rx="8" fill="${i === 2 ? "#1d1a17" : "#fff"}" stroke="#1d1a17" stroke-width="1.5"/>${T(80, 24, t, { size: 13.5, w: 700, anchor: "middle", fill: i === 2 ? "#f6efe3" : "#1d1a17" })}</g>`).join("")}
    <defs><marker id="ar04" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#1d1a17"/></marker></defs>
    ${T(10, 322, "Quotes are illustrative, not real people.", { size: 11, italic: true, family: SERIF, fill: "#6d645b" })}`, { maxw: 640 });
}

export function participationLadder() {
  const c = "var(--acc, #7a2e4a)";
  const rungs = [["Informed", "Decisions are explained to young people."], ["Consulted", "Young people are asked, and told what changed."], ["Involved", "Young people sit on advisory groups and panels."], ["Co-designing", "Young people shape the thing with decision-makers."], ["Leading", "Young people set the agenda and run it."]];
  return svg("0 0 640 380", "Ladder of youth participation", "Five rungs from bottom to top: informed (decisions are explained to young people), consulted (young people are asked and told what changed), involved (young people sit on advisory groups), co-designing (young people shape it with decision-makers), leading (young people set the agenda). A note says tokenism, where young people are present but have no influence, sits below the ladder.", `
    <line x1="70" y1="20" x2="70" y2="340" stroke="#1d1a17" stroke-width="4"/><line x1="190" y1="20" x2="190" y2="340" stroke="#1d1a17" stroke-width="4"/>
    ${rungs.map(([t, d], i) => { const y = 300 - i * 64; return `<line x1="70" y1="${y}" x2="190" y2="${y}" stroke="${c}" stroke-width="${6 + i}" stroke-opacity="${0.45 + i * 0.13}"/>${T(214, y - 4, `${i + 1}. ${t}`, { size: 16, w: 700 })}${T(214, y + 15, d, { size: 12.5, fill: "#4a423b" })}`; }).join("")}
    <line x1="60" y1="352" x2="200" y2="352" stroke="#b3322b" stroke-width="2" stroke-dasharray="4 4"/>
    ${T(214, 356, "Below the ladder: tokenism, present but with no real influence.", { size: 12.5, italic: true, family: SERIF, fill: "#8f2620" })}`, { maxw: 640 });
}

export function issueBarrierAction() {
  const c = "var(--acc, #7a2e4a)";
  const cols = [["ISSUE", "what young people experience", ["Period pain dismissed as normal"]], ["BARRIER", "why it keeps happening", ["Pain normalised at home and school", "Short appointments", "Few words to describe it"]], ["ACTION", "what could shift it", ["Pain literacy in health classes", "Youth input to guidelines", "Tools to track and describe pain"]]];
  return svg("0 0 640 290", "Issue, barrier, action", "Three columns. Issue: period pain dismissed as normal. Barriers: pain normalised at home and school, short appointments, few words to describe it. Actions: pain literacy in school health classes, youth input into guidelines, tools to track and describe pain.", `
    ${cols.map(([h, s, items], i) => `<g transform="translate(${10 + i * 212} 10)">
      <rect width="196" height="270" rx="14" fill="${i === 2 ? c : "#fff"}" stroke="${c}" stroke-width="2"/>
      ${T(18, 34, h, { size: 13, w: 700, fill: i === 2 ? "#fff" : c })}${T(18, 52, s, { size: 11.5, italic: true, family: SERIF, fill: i === 2 ? "#f3dfe7" : "#4a423b" })}
      ${items.map((it, k) => { const ws = it.split(" "); const ls = []; let cur = ""; ws.forEach((w) => { if ((cur + " " + w).trim().length > 22) { ls.push(cur.trim()); cur = w; } else cur += " " + w; }); ls.push(cur.trim());
        return `<g transform="translate(14 ${72 + k * 64})"><rect width="168" height="54" rx="8" fill="${i === 2 ? "rgba(255,255,255,.14)" : "#fbf8f1"}"/>${ls.map((l, j) => T(10, 22 + j * 17, l, { size: 12.5, w: 500, fill: i === 2 ? "#fff" : "#1d1a17" })).join("")}</g>`; }).join("")}
    </g>${i < 2 ? `<path d="M${206 + i * 212} 145h16" stroke="#1d1a17" stroke-width="2.5" marker-end="url(#ar04b)"/>` : ""}`).join("")}
    <defs><marker id="ar04b" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L10 5L0 10z" fill="#1d1a17"/></marker></defs>`, { maxw: 640 });
}

// ---------------------------------------------------------------- Current edition
export const LOOP = [
  ["Understand", "Know what’s happening and the words for it."],
  ["Articulate", "Turn what you feel into a clear symptom story."],
  ["Navigate", "Know where to go, what it costs, what to bring."],
  ["Advocate", "Hold your ground when you’re not heard."],
  ["Connect", "Find people who get it, and who can help."],
  ["Act", "Take the next step: follow-up, feedback, referral."],
  ["Influence", "Add your voice to change what others face."],
];
export function aletheiaLoop() {
  const cx = 250, cy = 250, r = 170;
  const pts = LOOP.map((_, i) => { const a = (-90 + i * 360 / 7) * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; });
  return svg("-110 -10 720 530", "The Aletheia loop: seven connected capabilities", "Seven points arranged in a circle and all linked to each other and to the centre, which reads 'you'. Clockwise from the top: understand, articulate, navigate, advocate, connect, act, influence. There is no fixed start; you can enter at whichever point you need.", `
    ${pts.map((p, i) => pts.slice(i + 1).map((q) => `<line x1="${p[0].toFixed(1)}" y1="${p[1].toFixed(1)}" x2="${q[0].toFixed(1)}" y2="${q[1].toFixed(1)}" stroke="#c49a45" stroke-opacity=".28" stroke-width="1"/>`).join("")).join("")}
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#b3322b" stroke-width="2.5" stroke-dasharray="2 8" stroke-linecap="round"/>
    ${pts.map(([x, y]) => `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#b3322b" stroke-opacity=".35" stroke-width="1.5"/>`).join("")}
    <circle cx="${cx}" cy="${cy}" r="56" fill="#b3322b"/>
    ${T(cx, cy + 10, "you", { size: 30, w: 600, anchor: "middle", fill: "#fff", family: SERIF, italic: true })}
    ${pts.map(([x, y], i) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="30" fill="#1d1a17" stroke="#c49a45" stroke-width="2"/>${T(x.toFixed(1), (y + 6).toFixed(1), i + 1, { size: 18, w: 700, anchor: "middle", fill: "#f6efe3", family: SERIF })}${T((x + (x > cx + 20 ? 38 : x < cx - 20 ? -38 : 0)).toFixed(1), (y + (Math.abs(x - cx) < 20 ? -42 : y > cy + 60 ? 54 : 6)).toFixed(1), LOOP[i][0], { size: 22, w: 700, anchor: x > cx + 20 ? "start" : x < cx - 20 ? "end" : "middle" })}`).join("")}`, { maxw: 560 });
}

export function symptomStory() {
  const rows = [["WHAT", "Sharp, cramping pain", "What it feels like, in your words"], ["WHERE", "Low tummy, left side, into my back", "Use the body map numbers"], ["WHEN", "First 2 days of every period, for 18 months", "Start, pattern, how long"], ["HOW MUCH", "Usually 6, worst 9. Missed 5 school days this term", "Your number AND what it stops"], ["SO FAR", "Ibuprofen helps a bit. Heat pack. Not enough", "What you’ve tried"], ["I WANT", "To find out why, and a plan that works", "What you need from today"]];
  return svg("0 0 640 440", "The symptom story: six lines that turn a feeling into information", "A card with six labelled lines and an example for each. What: sharp, cramping pain. Where: low tummy, left side, into my back. When: first two days of every period for 18 months. How much: usually 6, worst 9, missed five school days this term. So far: ibuprofen helps a bit, heat pack, not enough. I want: to find out why and a plan that works.", `
    <rect x="4" y="4" width="632" height="432" rx="18" fill="#fff" stroke="#1d1a17" stroke-width="2"/>
    <rect x="4" y="4" width="632" height="52" rx="18" fill="#1d1a17"/><rect x="4" y="36" width="632" height="20" fill="#1d1a17"/>
    ${T(26, 38, "My symptom story", { size: 20, w: 600, fill: "#f6efe3", family: SERIF })}${T(614, 38, "6 lines · 30 seconds", { size: 12, anchor: "end", fill: "#c49a45", w: 700 })}
    ${rows.map(([k, ex, hint], i) => `<g transform="translate(24 ${76 + i * 58})"><rect width="96" height="40" rx="6" fill="${i === 5 ? "#b3322b" : "#f6efe3"}"/>${T(48, 25, k, { size: 12, w: 700, anchor: "middle", fill: i === 5 ? "#fff" : "#1d1a17" })}${T(114, 18, ex, { size: 15, family: SERIF, italic: true })}${T(114, 36, hint, { size: 11.5, fill: "#6d645b" })}<line x1="114" y1="46" x2="590" y2="46" stroke="#e2d6c3"/></g>`).join("")}`, { maxw: 640 });
}

export function meToWe() {
  return svg("0 0 640 200", "From me to we", "Four stages from left to right. Me: one dot, my experience. Us: a few dots, others have this too. Evidence: many dots in a grid, a pattern we can show. Change: a dot inside a building outline, a decision that shifts.", `
    ${[["Me", "my experience"], ["Us", "others have it too"], ["Evidence", "a pattern we can show"], ["Change", "a decision shifts"]].map(([t, s], i) => {
      const X = 20 + i * 160; let dots = "";
      if (i === 0) dots = `<circle cx="${X + 60}" cy="70" r="12" fill="#b3322b"/>`;
      if (i === 1) dots = [[40, 60], [70, 50], [80, 80], [50, 90]].map(([a, b], k) => `<circle cx="${X + a}" cy="${b}" r="9" fill="${k === 0 ? "#b3322b" : "#c49a45"}"/>`).join("");
      if (i === 2) dots = Array.from({ length: 16 }, (_, k) => `<circle cx="${X + 26 + (k % 4) * 22}" cy="${38 + Math.floor(k / 4) * 20}" r="6" fill="${k === 5 ? "#b3322b" : "#1d1a17"}"/>`).join("");
      if (i === 3) dots = `<path d="M${X + 20} 110V58l40-26 40 26v52z" fill="none" stroke="#1d1a17" stroke-width="2.5"/><circle cx="${X + 60}" cy="80" r="11" fill="#b3322b"/>`;
      return `${dots}${T(X + 60, 146, t, { size: 17, w: 700, anchor: "middle", family: SERIF })}${T(X + 60, 166, s, { size: 12, anchor: "middle", fill: "#4a423b" })}${i < 3 ? `<path d="M${X + 124} 74h26" stroke="#1d1a17" stroke-width="2" marker-end="url(#ar05)"/>` : ""}`;
    }).join("")}
    <defs><marker id="ar05" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#1d1a17"/></marker></defs>`, { maxw: 640 });
}
