import type { ImageAsset } from "@/types";

export interface BeforeAfterPair {
  id: string;
  label: string;
  before: ImageAsset;
  after: ImageAsset;
}

export const galleryContent = {
  heading: "See the Difference",
  intro:
    "Real surfaces, brought back to life. Drag the slider to reveal the before and after.",
  pairs: [
    {
      id: "driveway",
      label: "Concrete Driveway",
      before: {
        src: "/images/driveway-before.svg",
        width: 800,
        height: 600,
        alt: "Concrete driveway in Roanoke, VA stained with dirt and oil before pressure washing",
      },
      after: {
        src: "/images/driveway-after.svg",
        width: 800,
        height: 600,
        alt: "The same Roanoke, VA concrete driveway clean and bright after pressure washing",
      },
    },
    {
      id: "siding",
      label: "House Siding",
      before: {
        src: "/images/siding-before.svg",
        width: 800,
        height: 600,
        alt: "House siding in Roanoke, VA covered in green algae streaks before soft washing",
      },
      after: {
        src: "/images/siding-after.svg",
        width: 800,
        height: 600,
        alt: "The same Roanoke, VA house siding clean and bright white after soft washing",
      },
    },
    {
      id: "deck",
      label: "Wood Deck",
      before: {
        src: "/images/deck-before.svg",
        width: 800,
        height: 600,
        alt: "Weathered, graying wood deck in Roanoke, VA before pressure washing",
      },
      after: {
        src: "/images/deck-after.svg",
        width: 800,
        height: 600,
        alt: "The same Roanoke, VA wood deck restored to a warm clean finish after pressure washing",
      },
    },
  ] satisfies BeforeAfterPair[],
} as const;
