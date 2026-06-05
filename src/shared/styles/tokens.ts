export const tokens = {
  colors: {
    brand: "#0b6bcb",
    brandDark: "#073b6b",
    brandLight: "#e6f1fb",
    accent: "#16a34a",
    accentDark: "#15803d",
    ink: "#0f172a",
    muted: "#475569",
  },
} as const;

export type Tokens = typeof tokens;
