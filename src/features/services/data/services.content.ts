import { site } from "@/shared/config/site";
import type { FeaturedService } from "../types";

export const servicesContent = {
  heading: "Exterior Cleaning Services",
  intro:
    "From a single dirty driveway to a whole storefront, we use the right pressure and biodegradable cleaners for each surface — never blasting away your paint, shingles, or wood.",
  featured: [
    {
      title: "House Washing",
      description:
        "Soft-wash siding, brick, and stucco to strip away mildew, algae, and grime — restoring curb appeal without high-pressure damage.",
      iconKey: "house",
      href: "#quote",
    },
    {
      title: "Roof Cleaning",
      description:
        "Gentle, no-pressure treatment that kills the black streaks and moss shortening your roof's life — safe for shingles and gutters.",
      iconKey: "roof",
      href: "#quote",
    },
    {
      title: "Building Washing",
      description:
        "Keep storefronts, offices, and complexes looking sharp for customers and tenants with scheduled commercial exterior cleaning.",
      iconKey: "building",
      href: "#quote",
    },
  ] satisfies FeaturedService[],
  residential: site.services.residential,
  commercial: site.services.commercial,
} as const;
