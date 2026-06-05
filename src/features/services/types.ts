import type { ReactNode } from "react";

export interface FeaturedService {
  title: string;
  description: string;
  iconKey: "house" | "roof" | "building";
  href: string;
}

export type IconRenderer = (className?: string) => ReactNode;
