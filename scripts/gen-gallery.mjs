import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

const W = 800;
const H = 600;

function splotches(seed, count, color, opacity) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  let out = "";
  for (let i = 0; i < count; i++) {
    const cx = Math.round(rand() * W);
    const cy = Math.round(120 + rand() * (H - 140));
    const r = Math.round(12 + rand() * 46);
    out += `<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${Math.round(r * 0.6)}" fill="${color}" opacity="${opacity}"/>`;
  }
  return out;
}

function svg(body, label, labelColor) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${body}<rect x="24" y="24" width="${label.length * 13 + 28}" height="40" rx="8" fill="${labelColor}"/><text x="38" y="51" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#ffffff">${label}</text></svg>`;
}

const scenes = {
  "driveway-before": svg(
    `<rect width="${W}" height="${H}" fill="#8c8c84"/>` +
    `<rect width="${W}" height="${H}" fill="#6f6f67" opacity="0.25"/>` +
    splotches(11, 14, "#4d4a3f", 0.4) +
    splotches(29, 8, "#2e2b22", 0.45) +
    `<rect x="395" y="0" width="10" height="${H}" fill="#5c5950" opacity="0.5"/>`,
    "BEFORE",
    "#b91c1c",
  ),
  "driveway-after": svg(
    `<rect width="${W}" height="${H}" fill="#d8d4cc"/>` +
    `<rect width="${W}" height="${H}" fill="#e7e3db" opacity="0.5"/>` +
    `<rect x="395" y="0" width="6" height="${H}" fill="#c4c0b6" opacity="0.6"/>` +
    `<rect x="0" y="298" width="${W}" height="5" fill="#c4c0b6" opacity="0.6"/>`,
    "AFTER",
    "#15803d",
  ),
  "siding-before": svg(
    `<rect width="${W}" height="${H}" fill="#c9cdbb"/>` +
    Array.from({ length: 12 }, (_, i) => `<rect x="0" y="${i * 50}" width="${W}" height="3" fill="#a9ad9b" opacity="0.6"/>`).join("") +
    splotches(7, 18, "#6f8a52", 0.4) +
    splotches(41, 10, "#4f6638", 0.4),
    "BEFORE",
    "#b91c1c",
  ),
  "siding-after": svg(
    `<rect width="${W}" height="${H}" fill="#f3f6f2"/>` +
    Array.from({ length: 12 }, (_, i) => `<rect x="0" y="${i * 50}" width="${W}" height="3" fill="#dfe6df" opacity="0.8"/>`).join("") +
    `<path d="M620 90 l8 20 20 8 -20 8 -8 20 -8 -20 -20 -8 20 -8 z" fill="#ffffff"/>`,
    "AFTER",
    "#15803d",
  ),
  "deck-before": svg(
    `<rect width="${W}" height="${H}" fill="#8a7d68"/>` +
    Array.from({ length: 10 }, (_, i) => `<rect x="${i * 80}" y="0" width="6" height="${H}" fill="#6f6451" opacity="0.7"/>`).join("") +
    splotches(17, 16, "#4a4234", 0.4) +
    splotches(53, 8, "#3a3327", 0.4),
    "BEFORE",
    "#b91c1c",
  ),
  "deck-after": svg(
    `<rect width="${W}" height="${H}" fill="#c8a877"/>` +
    Array.from({ length: 10 }, (_, i) => `<rect x="${i * 80}" y="0" width="6" height="${H}" fill="#b08f5e" opacity="0.6"/>`).join("") +
    `<path d="M640 90 l8 20 20 8 -20 8 -8 20 -8 -20 -20 -8 20 -8 z" fill="#fff6e6"/>`,
    "AFTER",
    "#15803d",
  ),
};

for (const [name, content] of Object.entries(scenes)) {
  writeFileSync(join(outDir, `${name}.svg`), content);
  console.log("wrote", `${name}.svg`);
}
