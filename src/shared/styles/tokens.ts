/**
 * Brand design tokens. The canonical color values also live in
 * `app/globals.css` (`@theme`) so Tailwind generates utility classes
 * like `bg-brand` / `text-brand-dark`. This file exists for any TS that
 * needs a raw value (e.g. theme-color metadata, inline SVG fills).
 */
export const tokens = {
  colors: {
    brand: "#0b6bcb", // water blue — primary brand
    brandDark: "#073b6b", // deep navy — headings / footer
    brandLight: "#e6f1fb", // pale wash — section tints
    accent: "#16a34a", // fresh green — "call now" / success
    accentDark: "#15803d",
    ink: "#0f172a", // near-black body text
    muted: "#475569", // secondary text
  },
} as const;

export type Tokens = typeof tokens;
