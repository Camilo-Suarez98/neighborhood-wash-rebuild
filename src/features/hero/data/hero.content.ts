import { site } from "@/shared/config/site";
import type { ImageAsset } from "@/types";

export const heroContent = {
  headline: `Pressure Washing in ${site.address.city}, ${site.address.state}`,
  subheadline:
    "Driveways, siding, roofs and decks brought back to like-new — without damaging your property. Fast, friendly, and 100% satisfaction guaranteed.",
  trust: ["100% Satisfaction Guarantee", "Licensed & Insured", "Locally Owned"],
  image: {
    src: "/images/hero.webp",
    width: 1600,
    height: 1000,
    alt: `Exterior of a freshly pressure-washed home being cleaned in ${site.address.city}, ${site.address.state}`,
  } satisfies ImageAsset,
} as const;
