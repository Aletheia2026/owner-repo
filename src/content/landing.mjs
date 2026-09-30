import { R } from "../lib/routes.mjs";
import { cover, LOOP } from "../lib/graphics.mjs";
import { EditionBadge, Tags } from "../lib/components.mjs";
import packs from "./index.mjs";

const COL = { "01": ["#3f607e", "#dfe7ee"], "02": ["#8a5f0f", "#f3e6c6"], "03": ["#2f6b55", "#dcebe3"], "04": ["#7a2e4a", "#efdde3"], "05": ["#b3322b", "#f6dcd6"] };
const cv = (ed) => `--c:${COL[ed][0]};--c-soft:${COL[ed][1]}`;
const archive = packs.filter((p) => !p.current);
const current = packs.find((p) => p.current);

const STAGES = [
  { ed: "01", k: "Knowledge", w: "Body", d: "Understand what’s happening in your body." },
  { ed: "02", k: "Language", w: "Words", d: "Describe what you’re experiencing." },
  { ed: "03", k: "Agency", w: "Voice", d: "Navigate care and advocate for yourself." },
  { ed: "04", k: "Collective voice", w: "Systems", d: "Connect experiences and push for change." },
];

const SHORT = {
  "01": "Anatomy, puberty, hormones and periods, explained plainly, with myth-busting and clear signs for when to see a GP.",
  "02": "How to notice what’s normal for you, describe symptoms clearly, track patterns, and prepare for a GP appointment.",
  "03": "Recognising medical dismissal, conversation scripts, finding your way through the health system, and knowing your rights.",
  "04": "When individual experiences form a pattern: sharing lived experience safely, and where young voices can influence decisions.",
};
const SELF = {
  "01": "“I understand my body.”",
  "02": "“I understand what I’m experiencing, and can describe it.”",
  "03": "“I can navigate healthcare and advocate for myself.”",
  "04": "“My experience connects to other young people’s, and our voices can influence systems.”",
};
const LEARNED = {
  "01": ["Knowledge removes shame", "Plain, accurate information made bodies less embarrassing to talk about. But young people still froze when it came to explaining a symptom."],
  "02": ["Knowledge needs language", "With the right words, young people described symptoms clearly. Many were still told it was normal."],
  "03": ["Language needs agency", "Scripts, rights and pathways helped young people hold their ground. But each person was fighting the same fight alone."],
  "04": ["Agency needs collective voice", "Shared experiences became evidence that could change schools, services and policy. The next step was bringing it all together."],
};
const MAYA = {
  "01": "Maya learns what period cramps are, and why they happen.",
  "02": "She tracks her pain: where it is, how long it lasts, how strong it is, what it stops.",
  "03": "She explains persistent pain to a clinician, is told it’s normal, and asks the questions that get her a referral.",
  "04": "She notices friends have similar stories, gathers them ethically through her SRC, and contributes to a youth consultation.",
};

export function editionCard(pk) {
  return `<article class="ed-card" style="${cv(pk.ed)}">
    <div class="cov">${pk.cover}</div>
    <div class="body">
      <span class="no">Archive Edition ${pk.ed}</span>
      <h3>${pk.title}</h3>
      <p class="qq">${pk.question}</p>
      <p>${SHORT[pk.ed]}</p>
      ${Tags(pk.tags.slice(0, 4))}
      <p class="cta"><a href="${pk.path}">View archive<span class="sr-only">: Edition ${pk.ed}, ${pk.title}</span> →</a></p>
    </div>
  </article>`;
}

function timeline() {
  return `<ol class="timeline" aria-label="How the Voice Pack evolved">${STAGES.map((s) => `<li style="${cv(s.ed)}"><span class="node" aria-hidden="true">${s.ed}</span><span class="k">${s.k}</span><span class="w">${s.w}</span><span class="d">${s.d}</span></li>`).join("")}<li class="now" style="${cv("05")}"><span class="node" aria-hidden="true">Now</span><span class="k">Current model</span><span class="w">All of it, connected</span><span class="d">Understand, articulate, navigate, advocate, connect, act, influence.</span></li></ol>`;
}

function equation() {
  const terms = ["knowledge", "language", "agency", "collective voice"];
  const row = (ed, n, label, isNow) => `<div class="eq-row${isNow ? " now" : ""}" style="${cv(ed)}"><span class="ed">${label}</span><span class="terms">${terms.slice(0, n).map((t, i) => `${i ? '<span class="op" aria-hidden="true">+</span>' : ""}<span class="t${i === n - 1 && !isNow ? " new" : ""}">${t}</span>`).join("")}<span class="op" aria-hidden="true">=</span><span class="t${isNow ? " new" : ""}">${isNow ? "integrated health agency" : ["confidence in your body", "confidence describing it", "self-advocacy", "change"][n - 1]}</span></span></div>`;
  return `<div class="equation" role="list">${[1, 2, 3, 4].map((n) => `<div role="listitem">${row(`0${n}`, n, `Edition 0${n}`, false)}</div>`).join("")}<div role="listitem">${row("05", 4, "Current edition", true)}</div></div>`;
}

export function currentFeature({ heading = "h2", compact = false } = {}) {
  return `<section class="current" aria-labelledby="cur-h">
    <div class="in">
      <div>
        ${EditionBadge("Current edition · April 2026", true)}
        <${heading} id="cur-h">Heard. Understood. Me.</${heading}>
        <p>${compact ? "Aletheia’s current Voice Pack, and the most complete one we’ve made." : "Everything the archive shows Aletheia learning, brought together. The current Voice Pack doesn’t treat knowledge, language, advocacy and change as separate stages. It treats them as one connected set of things young people can do, and lets you start wherever you are."}</p>
        <ul class="loop-words" aria-label="The Aletheia loop">${LOOP.map(([k]) => `<li>${k}</li>`).join("")}</ul>
        <div class="btns">
          <a class="btn" href="${R.current}">Read the current Voice Pack</a>
          <a class="btn light" href="${R.pdf(current.pdf)}" target="_blank" rel="noopener">Open the PDF<span class="sr-only"> (opens in a new tab)</span></a>
        </div>
      </div>
      <div>${current.cover}</div>
    </div>
  </section>`;
}

function renderArchive() {
  return `<div class="avp" data-ed="arc">
<header class="hero" style="padding-bottom:clamp(24px,4vw,48px)">
  <div class="wrap" style="grid-template-columns:1fr">
    <div>
      ${EditionBadge("Our Work · Voice Packs")}
      <h1 style="max-width:14ch">The Voice Pack Archive</h1>
      <p class="q" style="max-width:40ch">Before advocacy came vocabulary. Before vocabulary came understanding.</p>
      <div class="prose" style="margin-top:1.2rem">
        <p class="lede">These four earlier editions of the Voice Pack are a record of how Aletheia’s thinking changed. Each one is a good resource in its own right. Read together, they show an organisation listening to young people, learning what they actually needed, and going back to make something better.</p>
        <p>We started out thinking the problem was missing information. Young people kept showing us it was bigger than that: they needed words, then the confidence and know-how to use them, then a way to connect what was happening to them with what was happening to everyone else.</p>
      </div>
      <div class="btns"><a class="btn" href="#editions">Browse the editions</a><a class="btn ghost" href="#current">Skip to the current edition</a></div>
    </div>
  </div>
</header>

<section class="section wrap" aria-labelledby="tl-h" style="padding-top:clamp(24px,4vw,48px)">
  <p class="eyebrow">How it evolved</p>
  <h2 id="tl-h">Body, words, voice, systems, and now all of it</h2>
  ${timeline()}
</section>

<section class="section band" aria-labelledby="q-h">
  <div class="wrap">
    <p class="eyebrow">The question kept changing</p>
    <h2 id="q-h" style="max-width:22ch">Each edition asked a bigger question than the last</h2>
    <ol class="thread" style="margin-top:1.8rem">${archive.map((p) => `<li style="${cv(p.ed)};border-color:rgba(246,239,227,.18)"><span class="ed" style="color:${COL[p.ed][1]}">Edition ${p.ed}</span><div><p style="font-family:var(--serif);font-size:1.3rem;color:var(--cream)">${p.question}</p><p style="margin-top:.3rem">A reader finishes it thinking: <em>${SELF[p.ed]}</em></p></div></li>`).join("")}
    <li style="border-color:rgba(246,239,227,.18)"><span class="ed" style="color:#f4b3aa">Current</span><div><p style="font-family:var(--serif);font-size:1.3rem;color:var(--cream)">“What do young people need to learn, speak, take part in and change their health, together?”</p><p style="margin-top:.3rem">Aletheia now builds the structures that make that possible.</p></div></li></ol>
  </div>
</section>

<section class="section wrap" aria-labelledby="eq-h">
  <p class="eyebrow">Improvement through accumulation</p>
  <h2 id="eq-h" style="max-width:24ch">Nothing was thrown away. Each edition added something.</h2>
  <div class="prose" style="margin-top:.8rem"><p>The later packs didn’t replace body knowledge with advocacy. They kept every earlier idea and built on it. The current edition is different in one way: it connects them.</p></div>
  ${equation()}
</section>

<section class="section wrap" id="editions" aria-labelledby="ed-h">
  <p class="eyebrow">The archive</p>
  <h2 id="ed-h">Four editions</h2>
  <div class="prose" style="margin:.8rem 0 1.6rem"><p>Each edition has been re-edited and re-set for this archive so it can still be read and used today. Health information has been checked against current Australian sources.</p></div>
  <div class="ed-cards">${archive.map(editionCard).join("")}</div>
</section>

<section class="section wrap" aria-labelledby="lr-h">
  <p class="eyebrow">What each edition taught us</p>
  <h2 id="lr-h" style="max-width:22ch">Learning, one edition at a time</h2>
  <div class="learned" style="margin-top:1.6rem">${archive.map((p) => `<div class="card" style="${cv(p.ed)}"><span class="from">After Edition ${p.ed}</span><h3>${LEARNED[p.ed][0]}</h3><p>${LEARNED[p.ed][1]}</p></div>`).join("")}</div>
</section>

<section class="section wrap" aria-labelledby="maya-h">
  <div class="grid g2" style="align-items:start">
    <div>
      <p class="eyebrow">One story, four editions</p>
      <h2 id="maya-h">Why the model had to grow</h2>
      <div class="prose" style="margin-top:.8rem"><p>Across the archive, a fictional young person called Maya has the same period pain. What changes is what each edition can do for her. Her story is the clearest way we know to explain why information on its own was never going to be enough.</p></div>
    </div>
    <ol class="thread">${archive.map((p) => `<li style="${cv(p.ed)}"><span class="ed">Edition ${p.ed}</span><p>${MAYA[p.ed]}</p></li>`).join("")}</ol>
  </div>
</section>

<section class="section wrap" id="current" aria-label="The current edition">
  ${currentFeature()}
  <div class="prose" style="margin-top:1.6rem"><p>The archive documents the thinking behind today’s model. Aletheia began by trying to give young people better health information. Then we realised they needed words. Then that words needed to become agency. Then that individual agency operates inside systems. That’s how we became an organisation where young people aren’t just taught about health, but are equipped to navigate it, speak about it, advocate within it and help change it.</p></div>
  <div class="btns"><a class="btn ghost" href="${R.voicePacks}">Back to Voice Packs</a><a class="btn ghost" href="${R.getInvolved}">Help write the next edition</a></div>
</section>
</div>`;
}

// Section for the TOP of the existing Voice Packs page: the current edition.
function renderVPFeature() {
  return `<div class="avp" data-ed="arc"><div class="wrap section" style="padding-bottom:clamp(28px,4vw,48px)">${currentFeature()}</div></div>`;
}

// Section for NEAR THE END of the existing Voice Packs page: the archive, as a visual.
function renderVPTeaser() {
  return `<div class="avp" data-ed="arc"><section class="wrap section" aria-labelledby="arc-h">
  <p class="eyebrow">The Voice Pack Archive</p>
  <h2 id="arc-h" style="max-width:24ch">How we got here: four earlier editions</h2>
  <div class="prose" style="margin-top:.8rem"><p>Before advocacy came vocabulary. Before vocabulary came understanding. Our earlier Voice Packs show how Aletheia’s approach grew, from body basics to youth-led change.</p></div>
  <div class="strip">${archive.map((p) => `<a href="${p.path}" style="${cv(p.ed)}"><span class="cov" aria-hidden="true">${p.cover.replace(/role="img" aria-labelledby="[^"]+"/, 'aria-hidden="true" focusable="false"')}</span><small>Edition ${p.ed}</small><strong>${p.title}</strong></a>`).join("")}
  <a class="now" href="${R.current}" style="${cv("05")}"><span class="cov" aria-hidden="true">${current.cover.replace(/role="img" aria-labelledby="[^"]+"/, 'aria-hidden="true" focusable="false"')}</span><small>Current edition</small><strong>Heard. Understood. Me.</strong></a></div>
  <div class="btns"><a class="btn" href="${R.archive}">Explore the archive</a></div>
</section></div>`;
}

export const pages = [
  { title: "The Voice Pack Archive", seoTitle: "The Voice Pack Archive", slug: "archive", path: R.archive, wpName: "voice-pack-archive-landing", ogImage: "voice-pack-archive-og.png", schemaType: "CollectionPage", description: "Four earlier editions of the Aletheia Voice Pack, showing how our approach to youth health grew from body knowledge to language, self-advocacy and youth-led systems change, and led to today’s Voice Pack.", render: renderArchive },
  { title: "Voice Packs page: current edition feature", slug: "vp-feature", path: "/our-work/voice-packs/#current-edition", previewPath: "/_sections/voice-packs-current-feature/", wpName: "voice-packs-page-section-1-current-edition", ogImage: "voice-pack-current-og.png", description: "Section for the top of the Voice Packs page featuring the current edition.", render: renderVPFeature, section: true },
  { title: "Voice Packs page: archive teaser", slug: "vp-teaser", path: "/our-work/voice-packs/#archive", previewPath: "/_sections/voice-packs-archive-teaser/", wpName: "voice-packs-page-section-2-archive-teaser", ogImage: "voice-pack-archive-og.png", description: "Section for near the end of the Voice Packs page showing the archive.", render: renderVPTeaser, section: true },
];
