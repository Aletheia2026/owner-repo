import { readFileSync } from "node:fs";
import { VoicePackHero, PackContents, ArchiveAnnotation, SectionIntro, renderBlock, WhereItWentNext, ResourceFooter, EditionPager, esc } from "./components.mjs";
import { SITE } from "./routes.mjs";

const CSS = readFileSync(new URL("../styles/avp.css", import.meta.url), "utf8");

// Progress bar + contents highlighting. Scoped to its own root so it cannot
// interfere with Elementor or theme scripts. No dependencies.
const JS = `(function(){var root=document.currentScript&&document.currentScript.previousElementSibling;if(!root||!root.classList.contains('avp'))root=document.querySelector('.avp');if(!root)return;
var bar=root.querySelector('.progress span'),main=root.querySelector('.pack-main');
if(bar&&main){var t=false;function upd(){var r=main.getBoundingClientRect(),h=r.height-window.innerHeight;var p=h>0?Math.min(1,Math.max(0,-r.top/h)):0;bar.style.width=(p*100).toFixed(1)+'%';t=false}window.addEventListener('scroll',function(){if(!t){t=true;requestAnimationFrame(upd)}},{passive:true});upd()}
var links=root.querySelectorAll('[data-toc]');if(links.length&&'IntersectionObserver'in window){var map={};links.forEach(function(a){map[a.getAttribute('data-toc')]=a});var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.removeAttribute('aria-current')});var a=map[e.target.id];if(a)a.setAttribute('aria-current','true')}})},{rootMargin:'-20% 0px -70% 0px'});root.querySelectorAll('.chapter[id]').forEach(function(s){io.observe(s)})}
root.querySelectorAll('.toc-mobile a').forEach(function(a){a.addEventListener('click',function(){var d=a.closest('details');if(d)d.open=false})});})();`;

export function renderPack(pk) {
  const chapters = pk.chapters.map((ch, i) => `<section class="chapter" id="${ch.id}" aria-labelledby="${ch.id}-h">${SectionIntro(ch, i).replace("<h2>", `<h2 id="${ch.id}-h">`)}${ch.blocks.map(renderBlock).join("")}</section>`).join("");
  return `<div class="avp" data-ed="${pk.ed}">
<div class="progress" aria-hidden="true"><span></span></div>
${VoicePackHero(pk)}
<div class="wrap section" style="padding-top:clamp(28px,4vw,48px)">
  ${pk.annotation ? `<div style="margin-bottom:clamp(28px,4vw,44px)">${ArchiveAnnotation(pk.annotation)}</div>` : ""}
  <div class="layout">
    ${PackContents(pk.chapters)}
    <article class="pack-main">
      ${PackContents(pk.chapters, true)}
      ${chapters}
      ${pk.next ? `<div style="margin-top:clamp(36px,5vw,64px)">${WhereItWentNext(pk.next)}</div>` : ""}
      ${EditionPager(pk.prev, pk.nextEd)}
      ${ResourceFooter(pk)}
    </article>
  </div>
</div>
</div>`;
}

export function jsonLd(meta) {
  return `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": meta.schemaType || "LearningResource", name: meta.title, description: meta.description, url: SITE + meta.path, inLanguage: "en-AU", educationalLevel: "Young people aged 12–25", learningResourceType: meta.resourceType || "Health literacy resource", isAccessibleForFree: true, publisher: { "@type": "NGO", name: "The Aletheia Project", url: SITE } })}</script>`;
}

const FONTS_GOOGLE = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&display=swap" rel="stylesheet">`;

// WordPress: paste into an Elementor "HTML" widget on a full-width template.
export function wpFragment(inner, meta) {
  return `<!-- Aletheia Voice Packs · ${esc(meta.title)} · generated file, edit the source in the repo and rebuild -->
${FONTS_GOOGLE}
<style>${CSS}</style>
${inner}
<script>${JS}</script>
${jsonLd(meta)}
`;
}

// Stand-alone page for previews, screenshots and PDF export.
export function fullPage(inner, meta, { fontsCss = "", print = false } = {}) {
  const url = SITE + meta.path;
  return `<!doctype html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(meta.seoTitle || meta.title)} · The Aletheia Project</title>
<meta name="description" content="${esc(meta.description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="The Aletheia Project">
<meta property="og:title" content="${esc(meta.seoTitle || meta.title)}">
<meta property="og:description" content="${esc(meta.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/wp-content/uploads/2026/10/${meta.ogImage}">
<meta name="twitter:card" content="summary_large_image">
<style>${fontsCss}
html,body{margin:0;background:#f6efe3}
.site-bar{font-family:"DM Sans",system-ui,sans-serif;background:#fbf8f1;border-bottom:1px solid #e2d6c3;padding:14px 20px;display:flex;justify-content:space-between;align-items:center;font-size:14px;color:#1d1a17}
.site-bar b{font-family:"Fraunces",Georgia,serif;font-size:18px}
.site-bar span{color:#6d645b}
${CSS}
${print ? `@page{size:A4;margin:14mm 12mm}.site-bar{display:none}` : ""}
</style>
</head>
<body>
${print ? "" : `<div class="site-bar" aria-hidden="true"><b>The Aletheia Project</b><span>Preview · ${esc(meta.path)}</span></div>`}
<main>${inner}</main>
<script>${JS}</script>
${jsonLd(meta)}
</body>
</html>`;
}
