/**
 * Bundle ES modules into a single classic script for file:// usage.
 * Run: node build.js
 */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const entry = path.join(root, "js", "app.js");
const out = path.join(root, "js", "bundle.js");

execSync(
  `npx --yes esbuild@0.24.0 "${entry}" --bundle --format=iife --outfile="${out}" --target=es2020 --charset=utf8`,
  { stdio: "inherit", cwd: root }
);

const size = fs.statSync(out).size;
console.log(`Bundled → js/bundle.js (${(size / 1024).toFixed(1)} KB)`);
