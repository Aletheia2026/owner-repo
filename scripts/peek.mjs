// Visual QA helper: screenshots a page in viewport-height tiles.
// Usage: node scripts/peek.mjs <path> <width> [tileHeight] [maxTiles]
import { createRequire } from "node:module";
import { readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import http from "node:http";
const require = createRequire(import.meta.url);
const { chromium } = require(require.resolve("playwright", { paths: ["/opt/node22/lib/node_modules"] }));
const root = new URL("..", import.meta.url).pathname, pre = join(root, "dist/preview");
const [path = "/", w = "1280", th = "1100", max = "30"] = process.argv.slice(2);
const server = http.createServer((q, r) => { let p = decodeURIComponent(q.url.split("?")[0]); if (p.endsWith("/")) p += "index.html"; try { r.end(readFileSync(join(pre, p))); } catch { r.writeHead(404); r.end(); } }).listen(0);
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const pg = await b.newPage({ viewport: { width: +w, height: +th } });
await pg.goto(`http://127.0.0.1:${server.address().port}${path}`, { waitUntil: "networkidle" });
await pg.evaluate(() => document.fonts.ready);
const H = await pg.evaluate(() => document.documentElement.scrollHeight);
const wide = await pg.evaluate(() => [...document.querySelectorAll("body *")].filter(e => e.getBoundingClientRect().right > window.innerWidth + 1).slice(0, 8).map(e => e.tagName + "." + e.className + " " + Math.round(e.getBoundingClientRect().right)));
const dir = join(root, "dist/peek"); mkdirSync(dir, { recursive: true });
const tag = path.replace(/\W+/g, "_") + w;
let i = 0;
for (let y = 0; y < H && i < +max; y += +th, i++) await pg.screenshot({ path: join(dir, `${tag}_${String(i).padStart(2, "0")}.png`), clip: { x: 0, y, width: +w, height: Math.min(+th, H - y) }, fullPage: true });
console.log(JSON.stringify({ height: H, tiles: i, overflowing: wide }));
await b.close(); server.close();
