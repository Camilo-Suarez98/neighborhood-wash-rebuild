import { site } from "@/shared/config/site";

export const areasContent = {
  heading: "Proudly Serving the Roanoke Valley",
  intro:
    "Locally owned and based right here in the Roanoke Valley — if you're in one of these towns, we'll come to you.",
  areas: site.areasServed,
} as const;
