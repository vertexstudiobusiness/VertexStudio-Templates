const fs = require("fs");
const path = require("path");

const base = "D:\\Templetes\\Cafes\\VS-CF-004 — Sunday Social";
const dst = path.join(base, "public", "img");

function findImg(dir, depth = 0) {
  if (depth > 4) return null;
  let entries = [];
  try { entries = fs.readdirSync(dir); } catch { return null; }
  for (const e of entries) {
    const full = path.join(dir, e);
    let st;
    try { st = fs.statSync(full); } catch { continue; }
    if (st.isDirectory()) {
      if (e === "img") return full;
      const r = findImg(full, depth + 1);
      if (r) return r;
    }
  }
  return null;
}

const imgDir = findImg(base);
if (!imgDir) { console.error("no img dir found"); process.exit(1); }

fs.rmSync(dst, { recursive: true, force: true });
fs.mkdirSync(dst, { recursive: true });

let n = 0;
for (const f of fs.readdirSync(imgDir)) {
  const s = path.join(imgDir, f);
  if (fs.statSync(s).isFile()) { fs.copyFileSync(s, path.join(dst, f)); n++; }
}

console.log(`copied ${n} files into ${dst}`);
console.log("dst sample:", fs.readdirSync(dst).slice(0, 5));