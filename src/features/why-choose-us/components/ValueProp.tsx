import type { ReactNode } from "react";
import { Heading } from "@/shared/components/ui/Heading";
import type { ValuePropIcon, ValuePropItem } from "../data/value-props.content";

const icons: Record<ValuePropIcon, ReactNode> = {
  shield: <path d="M12 3l7 3v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6l7-3zM9 12l2 2 4-4" />,
  leaf: <path d="M5 19c0-7 5-12 14-12 0 9-5 14-12 14-1.5 0-2 0-2 0zM9 15c2-3 4.5-5 8-6" />,
  calendar: <path d="M4 6h16v14H4zM4 9h16M8 3v4M16 3v4M9 13l2 2 4-4" />,
};

export function ValueProp({ item }: { item: ValuePropItem }) {
  return (
    <div className="text-center sm:text-left">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icons[item.icon]}
        </svg>
      </span>
      <Heading level={3} className="mt-5 text-brand-dark">
        {item.title}
      </Heading>
      <p className="mt-3 text-base leading-normal text-muted">{item.description}</p>
    </div>
  );
}
