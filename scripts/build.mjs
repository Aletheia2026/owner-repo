// Builds every Voice Pack page three ways:
//   dist/wordpress/*.html  paste into an Elementor HTML widget (scoped CSS + JS)
//   dist/preview/**        stand-alone pages at their real URL paths, for review
//   dist/print/*.html      print layouts used to generate the PDFs
import { mkdirSync, writeFileSync, copyFileSync, rmSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { renderPack, wpFragment, fullPage } from "../src/lib/page.mjs";
import packs from "../src/content/index.mjs";
import { pages } from "../src/content/landing.mjs";

const root = new URL("..", import.meta.url).pathname;
const dist = join(root, "dist");
rmSync(dist, { recursive: true, force: true });

// Local copies of the site fonts so previews and PDFs render exactly.
const fontDir = join(dist, "fonts");
mkdirSync(fontDir, { recursive: true });
const faces = [];
const addFace = (pkg, family, weights, style) => {
  for (const w of weights) {
    const f = `${pkg}-latin-${w}-${style}.woff2`;
    copyFileSync(join(root, "node_modules/@fontsource", pkg, "files", f), join(fontDir, f));
    faces.push({ family, w, style, f });
  }
};
addFace("fraunces", "Fraunces", [300, 400, 500, 600, 700], "normal");
addFace("fraunces", "Fraunces", [400, 500, 600], "italic");
addFace("dm-sans", "DM Sans", [400, 500, 700], "normal");
addFace("dm-sans", "DM Sans", [400, 700], "italic");
const fontsCss = (prefix) => faces.map(({ family, w, style, f }) => `@font-face{font-family:"${family}";font-weight:${w};font-style:${style};font-display:swap;src:url(${prefix}fonts/${f}) format("woff2")}`).join("\n");

const write = (p, s) => { mkdirSync(dirname(p), { recursive: true }); writeFileSync(p, s); };
const depth = (path) => path.split("/").filter(Boolean).length;

const all = [
  ...packs.map((pk) => ({ meta: pk, inner: renderPack(pk), wpName: `voice-pack-${pk.ed === "05" ? "current-edition" : "archive-" + pk.ed}-${pk.slug}`, print: true })),
  ...pages.map((pg) => ({ meta: pg, inner: pg.render(), wpName: pg.wpName, print: false })),
];

const seo = [];
for (const { meta, inner, wpName, print } of all) {
  write(join(dist, "wordpress", `${wpName}.html`), wpFragment(inner, meta));
  const pp = meta.previewPath || meta.path;
  write(join(dist, "preview", pp, "index.html"), fullPage(inner, meta, { fontsCss: fontsCss("../".repeat(depth(pp))) }));
  if (print) write(join(dist, "print", `${meta.slug}.html`), fullPage(inner, meta, { fontsCss: fontsCss("../"), print: true }));
  seo.push({ page: meta.title, url: meta.path, preview: meta.previewPath || meta.path, section: !!meta.section, seoTitle: `${meta.seoTitle || meta.title} · The Aletheia Project`, description: meta.description, socialImage: meta.ogImage, wordpressFile: `dist/wordpress/${wpName}.html`, pdf: meta.pdf || null });
}
// fonts reachable from preview root and print dir
mkdirSync(join(dist, "preview", "fonts"), { recursive: true });
for (const f of readdirSync(fontDir)) copyFileSync(join(fontDir, f), join(dist, "preview", "fonts", f));

write(join(dist, "seo.json"), JSON.stringify(seo, null, 2));
write(join(dist, "preview", "index.html"), `<!doctype html><meta charset="utf-8"><title>Voice Pack previews</title><style>body{font:16px/1.6 system-ui;margin:40px;background:#f6efe3}a{color:#b3322b}</style><h1>Voice Pack previews</h1><ul>${all.map(({ meta }) => `<li><a href=".${meta.previewPath || meta.path}">${meta.title}</a> <small>${meta.path}</small></li>`).join("")}</ul>`);
console.log(`Built ${all.length} pages → dist/wordpress, dist/preview, dist/print`);
