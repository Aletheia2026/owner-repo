// Visual QA helper: screenshots every diagram and cover on every page, at two widths.
import { createRequire } from "node:module";
import { readFileSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import http from "node:http";
const require = createRequire(import.meta.url);
const { chromium } = require(require.resolve("playwright", { paths: ["/opt/node22/lib/node_modules"] }));
const root = new URL("..", import.meta.url).pathname, pre = join(root, "dist/preview"), out = join(root, "dist/figs");
rmSync(out, { recursive: true, force: true }); mkdirSync(out, { recursive: true });
const server = http.createServer((q, r) => { let p = decodeURIComponent(q.url.split("?")[0]); if (p.endsWith("/")) p += "index.html"; try { r.end(readFileSync(join(pre, p))); } catch { r.writeHead(404); r.end(); } }).listen(0);
const seo = JSON.parse(readFileSync(join(root, "dist/seo.json"), "utf8"));
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const widths = (process.argv[2] || "1280,390").split(",").map(Number);
const only = process.argv[3] || "";
for (const w of widths) for (const { preview } of seo.filter((s) => !s.section && s.preview.includes(only))) {
  const pg = await b.newPage({ viewport: { width: w, height: 1000 } });
  await pg.goto(`http://127.0.0.1:${server.address().port}${preview}`, { waitUntil: "networkidle" });
  await pg.evaluate(() => document.fonts.ready);
  const figs = await pg.$$(".hero .art svg, figure.diagram");
  const tag = preview.split("/").filter(Boolean).pop();
  for (let i = 0; i < figs.length; i++) await figs[i].screenshot({ path: join(out, `${tag}_${w}_${i}.png`) });
  await pg.close();
}
await b.close(); server.close(); console.log("ok");
