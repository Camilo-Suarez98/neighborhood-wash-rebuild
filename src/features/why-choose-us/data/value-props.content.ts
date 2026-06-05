export type ValuePropIcon = "shield" | "leaf" | "calendar";

export interface ValuePropItem {
  title: string;
  description: string;
  icon: ValuePropIcon;
}

export const valueProps = {
  heading: "Why Homeowners Choose Neighborhood Wash",
  intro:
    "You're trusting someone with your home's exterior. Here's how we make that an easy decision.",
  items: [
    {
      title: "100% Satisfaction Guaranteed",
      description:
        "If you're not thrilled with how it looks, we make it right — no arguing, no upcharge. The risk is on us, not on your home.",
      icon: "shield",
    },
    {
      title: "Safe, Environmentally Friendly Cleaning",
      description:
        "We match the right pressure and biodegradable products to each surface, so your plants, pets, paint, and shingles stay protected.",
      icon: "leaf",
    },
    {
      title: "On Your Schedule",
      description:
        "You pick the date and time that works for you, and we show up when we say we will — no waiting around for a no-show contractor.",
      icon: "calendar",
    },
  ] satisfies ValuePropItem[],
} as const;
