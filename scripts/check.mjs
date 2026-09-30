// Automated QA over the built preview pages, run in a real browser:
//  - one h1 per full page, no skipped heading levels
//  - every svg has role="img" + accessible name (or is aria-hidden)
//  - no duplicate ids; every in-page #anchor resolves
//  - external links that open new tabs use rel="noopener"
//  - WCAG AA contrast for the text colour pairs the design uses
//  - lists every internal site URL, to confirm against the live menu
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import http from "node:http";

const require = createRequire(import.meta.url);
const { chromium } = require(require.resolve("playwright", { paths: ["/opt/node22/lib/node_modules"] }));
const root = new URL("..", import.meta.url).pathname, pre = join(root, "dist/preview");
const server = http.createServer((q, r) => { let p = decodeURIComponent(q.url.split("?")[0]); if (p.endsWith("/")) p += "index.html"; try { r.end(readFileSync(join(pre, p))); } catch { r.writeHead(404); r.end(); } }).listen(0);
const seo = JSON.parse(readFileSync(join(root, "dist/seo.json"), "utf8"));
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });

const errors = [], internal = new Set(), external = new Set();
for (const s of seo) {
  const pg = await b.newPage();
  await pg.goto(`http://127.0.0.1:${server.address().port}${s.preview}`, { waitUntil: "networkidle" });
  const r = await pg.evaluate(() => {
    const out = [];
    const root = document.querySelector(".avp");
    const hs = [...root.querySelectorAll("h1,h2,h3,h4")].filter((h) => h.offsetParent !== null || h.closest("svg"));
    const h1 = hs.filter((h) => h.tagName === "H1").length;
    let prev = 1;
    for (const h of hs) { const l = +h.tagName[1]; if (l > prev + 1) out.push(`heading jumps h${prev}→h${l}: "${h.textContent.trim().slice(0, 50)}"`); prev = l; }
    for (const svg of root.querySelectorAll("svg")) {
      if (svg.getAttribute("aria-hidden") === "true" || svg.closest('[aria-hidden="true"]')) continue;
      const ids = (svg.getAttribute("aria-labelledby") || "").split(" ").filter(Boolean);
      if (svg.getAttribute("role") !== "img" || !ids.length || ids.some((id) => !document.getElementById(id))) out.push("svg without accessible name");
    }
    const all = [...document.querySelectorAll("[id]")].map((e) => e.id);
    const dup = all.filter((x, i) => all.indexOf(x) !== i);
    if (dup.length) out.push("duplicate ids: " + [...new Set(dup)].join(", "));
    for (const a of root.querySelectorAll('a[href^="#"]')) if (a.getAttribute("href").length > 1 && !document.getElementById(a.getAttribute("href").slice(1))) out.push("broken anchor " + a.getAttribute("href"));
    for (const a of root.querySelectorAll('a[target="_blank"]')) if (!(a.rel || "").includes("noopener")) out.push("target=_blank without noopener " + a.href);
    const links = [...root.querySelectorAll("a[href]")].map((a) => a.getAttribute("href"));
    return { out, h1, links };
  });
  if (!s.section && r.h1 !== 1) errors.push(`${s.preview}: expected one h1, found ${r.h1}`);
  if (s.section && r.h1 !== 0) errors.push(`${s.preview}: page section should not contain an h1`);
  r.out.forEach((e) => errors.push(`${s.preview}: ${e}`));
  r.links.forEach((l) => (l.startsWith("/") ? internal.add(l.split("#")[0]) : /^https?:/.test(l) ? external.add(l) : null));
  await pg.close();
}
await b.close(); server.close();

// Contrast of the design's text pairs (WCAG 2.1 relative luminance)
const lum = (hex) => { const c = hex.match(/\w\w/g).map((x) => parseInt(x, 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
const pairs = [
  ["body text", "#4a423b", "#f6efe3", 4.5], ["body text on paper", "#4a423b", "#fbf8f1", 4.5], ["muted text", "#6d645b", "#f6efe3", 4.5], ["muted on paper", "#6d645b", "#fbf8f1", 4.5],
  ["link red", "#b3322b", "#f6efe3", 4.5], ["white on red button", "#ffffff", "#b3322b", 4.5], ["cream on night", "#f6efe3", "#1d1a17", 4.5], ["dark-band text", "#e2d6c3", "#1d1a17", 4.5], ["gold eyebrow on night", "#c49a45", "#1d1a17", 4.5],
  ["Ed01 accent", "#3f607e", "#f6efe3", 4.5], ["Ed02 accent", "#8a5f0f", "#fbf8f1", 4.5], ["Ed03 accent", "#2f6b55", "#f6efe3", 4.5], ["Ed04 accent", "#7a2e4a", "#f6efe3", 4.5], ["Ed04 eyebrow on night", "#e7a9bf", "#1d1a17", 4.5],
  ["white on Ed01", "#ffffff", "#3f607e", 4.5], ["white on Ed02", "#ffffff", "#8a5f0f", 4.5], ["white on Ed03", "#ffffff", "#2f6b55", 4.5], ["white on Ed04", "#ffffff", "#7a2e4a", 4.5],
  ["ink on Ed01 tint", "#1d1a17", "#dfe7ee", 4.5], ["ink on Ed02 tint", "#1d1a17", "#f3e6c6", 4.5], ["urgent red text", "#8f2620", "#fff4f1", 4.5],
];
for (const [n, f, bg, min] of pairs) { const r = ratio(f, bg); if (r < min) errors.push(`contrast ${n}: ${r.toFixed(2)} < ${min}`); }

console.log(`Checked ${seo.length} pages.`);
console.log(errors.length ? "PROBLEMS:\n" + errors.join("\n") : "No problems found.");
console.log("\nInternal URLs to confirm on the live site:\n" + [...internal].sort().join("\n"));
console.log(`\nExternal links: ${external.size}`);
process.exitCode = errors.length ? 1 : 0;
