import type { ImageAsset } from "@/types";

export interface GalleryItem {
  id: string;
  label: string;
  image: ImageAsset;
}

export const galleryContent = {
  heading: "See the Difference",
  intro: "Real surfaces, brought back to life — see the before and after, side by side.",
  items: [
    {
      id: "driveway",
      label: "Concrete Driveway",
      image: {
        src: "/images/concrete.webp",
        width: 800,
        height: 600,
        alt: "Before and after pressure washing a concrete driveway in Roanoke, VA — dirt- and oil-stained on one side, clean and bright on the other",
      },
    },
    {
      id: "siding",
      label: "House Siding",
      image: {
        src: "/images/house.webp",
        width: 800,
        height: 600,
        alt: "Before and after soft washing house siding in Roanoke, VA — green algae streaks on one side, clean and bright white on the other",
      },
    },
    {
      id: "deck",
      label: "Wood Deck",
      image: {
        src: "/images/wood.webp",
        width: 800,
        height: 600,
        alt: "Before and after pressure washing a wood deck in Roanoke, VA — weathered and graying on one side, restored to a warm clean finish on the other",
      },
    },
  ] satisfies GalleryItem[],
} as const;
