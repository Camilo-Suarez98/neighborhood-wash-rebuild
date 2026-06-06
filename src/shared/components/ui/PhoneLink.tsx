import type { ReactNode } from "react";
import { site } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

export function PhoneLink({
  className,
  children,
  "aria-label": ariaLabel,
}: {
  className?: string;
  children?: ReactNode;
  "aria-label"?: string;
}) {
  return (
    <a
      href={site.phoneHref}
      aria-label={ariaLabel ?? `Call ${site.name} at ${site.phoneDisplay}`}
      className={cn("inline-flex items-center gap-2", className)}
    >
      {children ?? site.phoneDisplay}
    </a>
  );
}
