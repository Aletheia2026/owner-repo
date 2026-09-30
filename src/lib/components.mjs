// Reusable Voice Pack components. Content files describe a pack as data
// (chapters made of typed blocks); these functions turn that data into
// markup. Content strings are authored in this repo and may contain inline
// HTML (links, <em>, <strong>).

import { R } from "./routes.mjs";

export const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const P = (x) => (Array.isArray(x) ? x.map((p) => `<p>${p}</p>`).join("") : x ? `<p>${x}</p>` : "");
const list = (items, cls = "") => `<ul${cls ? ` class="${cls}"` : ""}>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

// ------------------------------------------------------------ small parts
export const EditionBadge = (label, current = false) => `<span class="badge${current ? " current" : ""}"><span class="dot" aria-hidden="true"></span>${label}</span>`;
export const Tags = (tags) => `<ul class="tags" aria-label="Themes">${tags.map((t) => `<li>${t}</li>`).join("")}</ul>`;
export const Framework = (words, label = "How this edition is organised") => `<ol class="frame" aria-label="${esc(label)}">${words.map((w) => `<li>${w}</li>`).join("")}</ol>`;

export function VoicePackHero(pk) {
  return `<header class="hero">
  <div class="wrap">
    <div>
      ${EditionBadge(pk.badge, pk.current)}
      <p class="eyebrow" style="margin-top:1.2rem">${pk.eyebrow}</p>
      <h1>${pk.heroTitle || pk.title}</h1>
      <p class="q">${pk.question}</p>
      <p class="lede" style="margin-top:1rem">${pk.lede}</p>
      ${Framework(pk.framework)}
      <div class="btns no-print">
        <a class="btn" href="#${pk.chapters[0].id}">Start reading</a>
        ${pk.pdf ? `<a class="btn ghost" href="${R.pdf(pk.pdf)}" target="_blank" rel="noopener">Open the PDF<span class="sr-only"> (opens in a new tab)</span></a>` : ""}
      </div>
      <div class="meta"><span>${pk.readTime}</span><span>${pk.audience}</span></div>
    </div>
    <div class="art">${pk.cover}</div>
  </div>
</header>`;
}

export function PackContents(chapters, mobile = false) {
  const items = chapters.map((c, i) => `<li><a href="#${c.id}" data-toc="${c.id}"><span class="n">${String(i + 1).padStart(2, "0")}</span>${c.short || c.title}</a></li>`).join("");
  if (mobile) return `<details class="toc-mobile no-print"><summary>Contents</summary><ol>${chapters.map((c) => `<li><a href="#${c.id}">${c.short || c.title}</a></li>`).join("")}</ol></details>`;
  return `<nav class="toc no-print" aria-label="Contents"><h2>Contents</h2><ol>${items}</ol></nav>`;
}

export const ArchiveAnnotation = (text) => `<aside class="annot" aria-label="From the archive"><span class="stamp">From the archive</span><p>${text}</p></aside>`;

export function SectionIntro(ch, i) {
  return `<div class="ch-head"><span class="ch-num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span><p class="eyebrow">${ch.eyebrow}</p><h2>${ch.title}</h2></div>${ch.intro ? `<div class="ch-intro">${P(ch.intro)}</div>` : ""}`;
}

// ------------------------------------------------------------ blocks
const blocks = {
  h3: (b) => `<h3>${b.text}</h3>`,
  p: (b) => `<div class="prose">${P(b.text)}</div>`,
  list: (b) => `<div class="prose">${b.lead ? `<p>${b.lead}</p>` : ""}${b.ordered ? `<ol>${b.items.map((i) => `<li>${i}</li>`).join("")}</ol>` : list(b.items)}</div>`,
  html: (b) => b.html,
  figure: (b) => `<figure class="diagram"><p class="swipe" aria-hidden="true">Swipe sideways to see the whole diagram →</p>${b.svg}${b.caption ? `<figcaption>${b.caption}</figcaption>` : ""}</figure>`,
  pull: (b) => `<blockquote class="pull"><p>${b.text}</p>${b.cite ? `<cite>${b.cite}</cite>` : ""}</blockquote>`,

  card: (b) => `<div class="card${b.tone ? ` ${b.tone}` : ""}">${b.kicker ? `<p class="eyebrow">${b.kicker}</p>` : ""}${b.title ? `<h${b.level || 3}>${b.title}</h${b.level || 3}>` : ""}${P(b.body)}${b.items ? list(b.items) : ""}${b.say ? WordsYouCanUse(b.say, b.sayHead) : ""}${b.after ? P(b.after) : ""}</div>`,
  grid: (b) => `<div class="grid ${b.cols || "g2"}">${b.items.map(renderBlock).join("")}</div>`,

  vocab: (b) => VocabularyCard(b),
  mythfact: (b) => `<div class="grid ${b.cols || "g2"}">${b.items.map(([m, f]) => `<div class="mf"><div class="myth"><span class="lbl">Myth</span><p>${m}</p></div><div class="fact"><span class="lbl">Fact</span><p>${f}</p></div></div>`).join("")}</div>`,
  say: (b) => `<div>${b.head ? `<p class="say-head">${b.head}</p>` : ""}${WordsYouCanUse(b.lines)}</div>`,
  script: (b) => ConversationScript(b),
  scenario: (b) => ScenarioCard(b),
  reflect: (b) => ReflectionPrompt(b),
  callout: (b) => `<div class="callout${b.urgent ? " urgent" : ""}"><span class="ic" aria-hidden="true">${b.icon || "!"}</span><div>${b.title ? `<h3 class="h4">${b.title}</h3>` : ""}${P(b.body)}${b.items ? list(b.items) : ""}</div></div>`,
  levels: (b) => CareLevels(b),
  steps: (b) => ActionPathway(b),
  check: (b) => `<div class="card">${b.title ? `<h3>${b.title}</h3>` : ""}<ul class="check">${b.items.map((i) => `<li>${i}</li>`).join("")}</ul></div>`,
  table: (b) => `<div class="tbl-wrap"><table>${b.caption ? `<caption class="sr-only">${b.caption}</caption>` : ""}<thead><tr>${b.head.map((h) => `<th scope="col">${h}</th>`).join("")}</tr></thead><tbody>${b.rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row" style="font-weight:700;color:var(--ink)">${c}</th>` : `<td>${c}</td>`)).join("")}</tr>`).join("")}</tbody></table></div>`,
  dcard: (b) => `<div class="grid ${b.cols || "g2"}">${b.items.map(DismissalCard).join("")}</div>`,
  dir: (b) => SupportDirectory(b.items),
  doors: (b) => `<div class="doors">${b.items.map((d) => `<a class="door" href="#${d.to}"><span class="stage">${d.stage}</span><span class="s">${d.title}</span><span class="go">${d.go}</span></a>`).join("")}</div>`,
  loop: (b) => b.html,
};
export const renderBlock = (b) => {
  const fn = blocks[b.type];
  if (!fn) throw new Error(`Unknown block type: ${b.type}`);
  const inner = fn(b);
  return b.bare ? inner : `<div class="block">${b.heading ? `<h3>${b.heading}</h3>` : ""}${b.sub ? `<div class="prose" style="margin-bottom:.9rem">${P(b.sub)}</div>` : ""}${inner}</div>`;
};

export function VocabularyCard(b) {
  return `<div class="grid ${b.cols || "g2"}">${b.items.map((v) => `<article class="card vocab">
    ${v.corner ? `<span class="corner">${v.corner}</span>` : ""}
    <h3 class="term">${v.term}</h3>${v.pron ? `<span class="say">${v.pron}</span>` : ""}
    <dl>
      ${v.what ? `<div><dt>What it is</dt><dd>${v.what}</dd></div>` : ""}
      ${v.feels ? `<div><dt>What it can feel like</dt><dd>${v.feels}</dd></div>` : ""}
      ${v.why ? `<div><dt>Why it gets missed</dt><dd>${v.why}</dd></div>` : ""}
      ${v.check ? `<div><dt>Worth checking when</dt><dd>${v.check}</dd></div>` : ""}
      ${v.note ? `<div><dt>${v.noteLabel || "Good to know"}</dt><dd>${v.note}</dd></div>` : ""}
    </dl>
    ${v.say ? `<p class="say-head">You can say</p>${WordsYouCanUse(v.say)}` : ""}
    ${v.stages ? `<ul class="stagechips" aria-label="Loop stages">${v.stages.map((s) => `<li>${s}</li>`).join("")}</ul>` : ""}
  </article>`).join("")}</div>`;
}

export const WordsYouCanUse = (lines, head) => `${head ? `<p class="say-head">${head}</p>` : ""}<ul class="say-list">${lines.map((l) => `<li>${l}</li>`).join("")}</ul>`;

export function ConversationScript(b) {
  return `<div class="card">${b.title ? `<h3 class="h4" style="margin-bottom:.4rem">${b.title}</h3>` : ""}${b.intro ? P(b.intro) : ""}<div class="script">${b.lines.map(([who, text]) => {
    const cls = { Clinician: "them", "They say": "them", Receptionist: "them", Parent: "them", You: "you", Note: "note", Friend: "them", Teacher: "them" }[who] || "them";
    return `<div class="line ${cls}"><span class="who">${who}</span><div class="bub">${text}</div></div>`;
  }).join("")}</div>${b.after ? `<div style="margin-top:.8rem">${P(b.after)}</div>` : ""}</div>`;
}

export function ScenarioCard(b) {
  return `<article class="scenario"><span class="tag">${b.tag || "Scenario"}</span><h3>${b.title}</h3>${P(b.body)}${b.say ? WordsYouCanUse(b.say, b.sayHead) : ""}${b.after ? P(b.after) : ""}<small class="fic">${b.fic || "A fictional scenario, written to show how this works in real life."}</small></article>`;
}

export function ReflectionPrompt(b) {
  return `<div class="reflect"><span class="tag">${b.tag || "Reflect"}</span>${b.title ? `<h3 style="margin:.3rem 0 .3rem">${b.title}</h3>` : ""}${b.intro ? `<div class="prose">${P(b.intro)}</div>` : ""}<ol>${b.prompts.map((q) => `<li>${q}</li>`).join("")}</ol>${b.lines === false ? "" : `<div class="lines" aria-hidden="true"></div>`}</div>`;
}

export function CareLevels(b) {
  const L = (cls, lv, x) => `<div class="level ${cls}"><span class="lv">${lv}</span><h3 class="h4">${x.title}</h3>${list(x.items)}</div>`;
  return `<div class="levels">${L("l1", b.l1.label || "Keep learning", b.l1)}${L("l2", b.l2.label || "Book a GP", b.l2)}${L("l3", b.l3.label || "Urgent", b.l3)}</div>`;
}

export function ActionPathway(b) {
  return `<ol class="steps">${b.items.map((s) => `<li><h3 class="h4">${s.title}</h3>${P(s.body)}${s.items ? list(s.items) : ""}${s.say ? WordsYouCanUse(s.say) : ""}</li>`).join("")}</ol>`;
}

export function DismissalCard(d) {
  return `<article class="dcard"><p class="heard"><small>If you hear</small>${d.heard}</p><div class="b">
    <div><span class="k">What might be going on</span><p>${d.why}</p></div>
    <div><span class="k">You can say</span>${d.you.map((y) => `<p class="you">“${y}”</p>`).join("")}</div>
    <div><span class="k">Next move</span><p>${d.next}</p></div></div></article>`;
}

export function SupportDirectory(items) {
  return `<div class="dir">${items.map(([n, num, s]) => `<div><strong>${n}</strong><span class="num">${num}</span><span>${s}</span></div>`).join("")}</div>`;
}

export function WhereItWentNext(n) {
  return `<section class="next" aria-labelledby="next-h"><p class="eyebrow">Where this idea went next</p><h2 id="next-h">${n.title}</h2>${P(n.body)}<div class="links">${n.links.map(([href, t, s]) => `<a href="${href}">${t}<span>${s}</span></a>`).join("")}</div></section>`;
}

export const HELP = [
  ["Emergency", "000", "If you or someone else is in danger or needs urgent medical help."],
  ["Kids Helpline", "1800 55 1800", "Free, 24/7 phone and webchat, ages 5–25."],
  ["Lifeline", "13 11 14", "24/7 crisis support. Text 0477 13 11 14."],
  ["headspace", "headspace.org.au", "Free or low-cost support, ages 12–25."],
  ["13YARN", "13 92 76", "24/7 crisis support by Aboriginal and Torres Strait Islander people."],
  ["QLife", "1800 184 527", "LGBTIQ+ peer support, 3pm–midnight."],
  ["healthdirect", "1800 022 222", "24/7 nurse advice: is this urgent, and where should I go?"],
  ["TIS National", "131 450", "Free interpreting, when you need to talk to a service in your language."],
];

export function ResourceFooter(pk) {
  return `<footer class="rfoot">
  <p><strong style="color:var(--ink)">Health education, not medical advice.</strong> This pack explains general health information so you can understand your body and talk about it. It cannot diagnose you. If you're worried about your health, speak to a doctor, nurse or other health professional. <strong style="color:var(--ink)">In an emergency, call 000.</strong></p>
  <div class="help">${HELP.slice(0, pk.helpCount || 4).map(([n, num, s]) => `<div><strong>${n} · ${num}</strong>${s}</div>`).join("")}</div>
  ${pk.sources?.length ? `<details><summary>Sources and fact-checking (${pk.sources.length})</summary><ol>${pk.sources.map(([t, u]) => `<li>${u ? `<a href="${u}" target="_blank" rel="noopener">${t}</a>` : t}</li>`).join("")}</ol></details>` : ""}
  <p style="margin-top:1rem">${pk.credit || "Written and designed by The Aletheia Project resource development team."} Scenarios are fictional. We acknowledge the Wurundjeri Woi-wurrung people of the Kulin Nation, where Aletheia was founded. Sovereignty was never ceded.</p>
</footer>`;
}

export function EditionPager(prev, next) {
  if (!prev && !next) return "";
  const a = (x, dir) => (x ? `<a href="${x.href}"><small>${dir}</small>${x.label}</a>` : "<span></span>");
  return `<nav class="pager no-print" aria-label="Other editions">${a(prev, "Previous")}${a(next, "Next")}</nav>`;
}
