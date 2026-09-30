// Screenshots every preview page at phone, tablet, laptop and desktop widths.
// Usage: node scripts/screens.mjs [pathFilter] [--full]
import { createRequire } from "node:module";
import { mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import http from "node:http";

const require = createRequire(import.meta.url);
const { chromium } = require(require.resolve("playwright", { paths: ["/opt/node22/lib/node_modules"] }));
const root = new URL("..", import.meta.url).pathname;
const pre = join(root, "dist/preview");
const out = join(root, "dist/screens");
mkdirSync(out, { recursive: true });

const types = { html: "text/html", woff2: "font/woff2", css: "text/css", js: "text/javascript", png: "image/png" };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p.endsWith("/")) p += "index.html";
  try { const b = readFileSync(join(pre, p)); res.writeHead(200, { "content-type": types[p.split(".").pop()] || "application/octet-stream" }); res.end(b); }
  catch { res.writeHead(404); res.end("404"); }
}).listen(0);
const base = `http://127.0.0.1:${server.address().port}`;

const seo = JSON.parse(readFileSync(join(root, "dist/seo.json"), "utf8"));
const filter = process.argv[2] && !process.argv[2].startsWith("--") ? process.argv[2] : "";
const full = process.argv.includes("--full");
const widths = [["phone", 390], ["tablet", 820], ["laptop", 1280], ["desktop", 1600]];

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" }).catch(() => chromium.launch());
const problems = [];
for (const { preview: url } of seo.filter((s) => s.preview.includes(filter))) {
  for (const [name, w] of widths) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    await page.goto(base + url, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (overflow > 1) problems.push(`${url} @${w}px: horizontal overflow ${overflow}px`);
    const slug = url.replace(/\//g, "_").replace(/^_|_$/g, "") || "root";
    await page.screenshot({ path: join(out, `${slug}__${name}.png`), fullPage: full });
    await page.close();
  }
}
await browser.close();
server.close();
console.log(problems.length ? problems.join("\n") : "No horizontal overflow at any width.");
