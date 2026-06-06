export const tokens = {
  colors: {
    brand: "#005981",
    brandDark: "#00405d",
    brandLight: "#e3eff4",
    accent: "#0c8100",
    accentDark: "#0a6a00",
    ink: "#000000",
    muted: "#475569",
  },
} as const;

export type Tokens = typeof tokens;
