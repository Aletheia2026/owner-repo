// Copies the finished, publishable files into deliverables/ (committed), so
// they can be uploaded without running the build.
import { cpSync, rmSync, mkdirSync, copyFileSync } from "node:fs";
const d = new URL("../dist/", import.meta.url).pathname, out = new URL("../deliverables/", import.meta.url).pathname;
rmSync(out, { recursive: true, force: true }); mkdirSync(out, { recursive: true });
for (const f of ["wordpress", "pdf", "social"]) cpSync(d + f, out + f, { recursive: true });
copyFileSync(d + "seo.json", out + "seo.json");
console.log("deliverables/ updated");
