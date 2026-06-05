import type { ReactNode } from "react";
import { Heading } from "@/shared/components/ui/Heading";
import type { FeaturedService } from "../types";

const icons: Record<FeaturedService["iconKey"], ReactNode> = {
  house: (
    <path d="M3 11.5L12 4l9 7.5M5 10v9h5v-5h4v5h5v-9" />
  ),
  roof: (
    <path d="M2 12L12 5l10 7M6 11.5V20h12v-8.5M9.5 20v-4h5v4" />
  ),
  building: (
    <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 21V9h4a1 1 0 0 1 1 1v11M8 8h3M8 12h3M8 16h3" />
  ),
};

export function ServiceCard({ service }: { service: FeaturedService }) {
  return (
    <a
      href={service.href}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md focus-visible:shadow-md"
    >
      <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icons[service.iconKey]}
        </svg>
      </span>
      <Heading level={3} className="text-brand-dark">
        {service.title}
      </Heading>
      <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
        {service.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1 font-semibold text-brand group-hover:gap-2 transition-[gap]">
        Get a free quote
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}
