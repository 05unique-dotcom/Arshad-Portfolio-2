#!/usr/bin/env node
/**
 * Builds the site and assembles a static GitHub Pages export in
 * `github-pages-export/`. Copy the CONTENTS of that folder to the root of
 * your GitHub Pages repository (or gh-pages branch) and push.
 *
 * Works both for user sites (https://<user>.github.io/) and project sites
 * (https://<user>.github.io/<repo>/): asset URLs are rewritten to relative
 * paths and the router basepath is derived from the current URL at runtime.
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const distClient = path.join(root, "dist/client");
const outDir = path.join(root, "github-pages-export");

console.log("Building…");
execSync("bun run build", { cwd: root, stdio: "inherit" });

if (!fs.existsSync(path.join(distClient, "index.html"))) {
  throw new Error("dist/client/index.html missing — prerendering did not run.");
}

// 1. Patch the client bundle: TanStack Start's hydrate entry hardcodes
//    `basepath:`` ` (empty). Replace it with a runtime derivation so the
//    router works under a GitHub Pages project-site subpath.
const assetsDir = path.join(distClient, "assets");
let patched = false;
for (const file of fs.readdirSync(assetsDir)) {
  if (!file.endsWith(".js")) continue;
  const p = path.join(assetsDir, file);
  let code = fs.readFileSync(p, "utf8");
  if (code.includes("basepath:``")) {
    code = code.replaceAll(
      "basepath:``",
      "basepath:location.pathname.replace(/\\/[^/]*$/,'')||'/'",
    );
    fs.writeFileSync(p, code);
    patched = true;
  }
}
if (!patched) {
  // Not an error: when vite `base` is set (e.g. "/Arshad-Portfolio-2/"),
  // the correct basepath is already baked into the bundle at build time.
  console.log(
    "No `basepath:`` ` literal found — assuming basepath is baked in via vite base config.",
  );
}

// 2. Assemble the export directory.
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const entry of fs.readdirSync(distClient)) {
  if (entry === "_headers") continue; // Netlify-style headers, not used by Pages
  fs.cpSync(path.join(distClient, entry), path.join(outDir, entry), {
    recursive: true,
  });
}

// 3. Rewrite root-absolute references to relative ones so the site works
//    from a subpath.
let html = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
html = html
  .replaceAll('"/Arshad-Portfolio-2/assets/', '"./assets/')
  .replaceAll('"/Arshad-Portfolio-2/favicon.ico', '"./favicon.ico')
  .replaceAll('"/assets/', '"./assets/')
  .replaceAll('"/favicon.ico', '"./favicon.ico')
  .replaceAll('href="/Arshad-Portfolio-2/"', 'href="./"')
  .replaceAll('href="/"', 'href="./"');
fs.writeFileSync(path.join(outDir, "index.html"), html);

// 4. SPA fallback + disable Jekyll processing.
fs.writeFileSync(path.join(outDir, "404.html"), html);
fs.writeFileSync(path.join(outDir, ".nojekyll"), "");

console.log(`\nDone. Export written to ${path.relative(root, outDir)}/`);
console.log(
  "Copy everything INSIDE github-pages-export/ to the root of your Pages repo and push.",
);
