import type { ReactNode } from "react";
import { site } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

/**
 * THE single source for `tel:` links across the site.
 *
 * The original WordPress site showed 540-595-8008 but several `tel:` links
 * pointed at the WRONG number (801-696-8011). Here both the visible text and
 * the href are derived from `site.phoneHref` / `site.phoneDisplay`, so they
 * can never drift apart. Never hardcode a `tel:` anywhere else — use this.
 */
export function PhoneLink({
  className,
  children,
  "aria-label": ariaLabel,
}: {
  className?: string;
  /** Override the visible content (defaults to the formatted number). */
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
