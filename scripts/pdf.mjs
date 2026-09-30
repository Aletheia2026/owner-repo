// Generates the downloadable PDFs (A4) and the 1200x630 social preview images.
import { createRequire } from "node:module";
import { readFileSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";
import http from "node:http";
import packs from "../src/content/index.mjs";
import { cover } from "../src/lib/graphics.mjs";

const require = createRequire(import.meta.url);
const { chromium } = require(require.resolve("playwright", { paths: ["/opt/node22/lib/node_modules"] }));
const root = new URL("..", import.meta.url).pathname;
const dist = join(root, "dist");
mkdirSync(join(dist, "pdf"), { recursive: true });
mkdirSync(join(dist, "social"), { recursive: true });

const server = http.createServer((q, r) => { const p = decodeURIComponent(q.url.split("?")[0]); try { r.end(readFileSync(join(dist, p))); } catch { r.writeHead(404); r.end(); } }).listen(0);
const base = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });

for (const pk of packs) {
  const page = await browser.newPage();
  await page.goto(`${base}/print/${pk.slug}.html`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: join(dist, "pdf", pk.pdf), format: "A4", printBackground: true, preferCSSPageSize: true,
    displayHeaderFooter: true, headerTemplate: "<span></span>",
    footerTemplate: `<div style="width:100%;font:8px 'DM Sans',sans-serif;color:#6d645b;padding:0 12mm;display:flex;justify-content:space-between"><span>The Aletheia Project · ${pk.current ? "Voice Pack · April 2026" : "Voice Pack Archive · Edition " + pk.ed} · thealetheiaproject.org</span><span>Health education, not medical advice · <span class="pageNumber"></span>/<span class="totalPages"></span></span></div>`,
    margin: { top: "14mm", bottom: "16mm", left: "0", right: "0" },
  });
  await page.close();
  console.log("pdf", pk.pdf);
}

// Social images (1200x630), rendered on the same local origin so fonts load.
const fonts = readdirSync(join(dist, "fonts")).map((f) => {
  const m = f.match(/^(fraunces|dm-sans)-latin-(\d+)-(normal|italic)\.woff2$/);
  return m ? `@font-face{font-family:"${m[1] === "dm-sans" ? "DM Sans" : "Fraunces"}";font-weight:${m[2]};font-style:${m[3]};src:url(/fonts/${f})}` : "";
}).join("");
const cards = [
  ...packs.map((p) => ({ file: p.ogImage, ed: p.ed, kicker: p.current ? "The Aletheia Voice Pack · Current edition" : `Voice Pack Archive · Edition ${p.ed}`, title: p.title, sub: p.question })),
  { file: "voice-pack-archive-og.png", ed: "arc", kicker: "Our Work · Voice Packs", title: "The Voice Pack Archive", sub: "Before advocacy came vocabulary. Before vocabulary came understanding." },
];
const acc = { "01": "#3f607e", "02": "#8a5f0f", "03": "#2f6b55", "04": "#7a2e4a", "05": "#b3322b", arc: "#b3322b" };
for (const c of cards) {
  const dark = c.ed === "05" || c.ed === "04";
  const art = c.ed === "arc" ? `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">${["01", "02", "03", "04"].map((e) => `<div style="background:#fff;border-radius:10px;padding:6px">${cover(e)}</div>`).join("")}</div>` : cover(c.ed);
  const kc = c.ed === "05" ? "#c49a45" : dark ? "#e7a9bf" : acc[c.ed];
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto(`${base}/print/${packs[0].slug}.html`);
  await page.setContent(`<!doctype html><html><head><base href="${base}/"><style>${fonts}
  :root{--serif:Fraunces,serif;--sans:'DM Sans',sans-serif}
  body{margin:0;width:1200px;height:630px;display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:center;padding:0 64px;box-sizing:border-box;background:${dark ? "#1d1a17" : "#f6efe3"};color:${dark ? "#f6efe3" : "#1d1a17"};font-family:'DM Sans'}
  .k{font-size:20px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${kc}}h1{font:600 70px/1.02 Fraunces;margin:18px 0}p{font:italic 400 27px/1.35 Fraunces;margin:0;opacity:.88}
  .b{position:absolute;left:64px;bottom:40px;font:600 22px Fraunces}.bar{position:absolute;left:0;top:0;height:12px;width:100%;background:${acc[c.ed]}}svg{width:100%;height:auto;border-radius:14px;display:block}</style></head>
  <body><div class="bar"></div><div><div class="k">${c.kicker}</div><h1>${c.title}</h1><p>${c.sub}</p></div><div>${art}</div><div class="b">The Aletheia Project</div></body></html>`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: join(dist, "social", c.file) });
  await page.close();
  console.log("social", c.file);
}

await browser.close();
server.close();
