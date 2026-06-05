import Link from "next/link";
import { site } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-8 w-8 shrink-0 text-brand"
        fill="currentColor"
      >
        <path d="M12 2.5s6.5 7.2 6.5 11.5a6.5 6.5 0 1 1-13 0C5.5 9.7 12 2.5 12 2.5z" />
        <path
          d="M9.2 13.8a2.8 2.8 0 0 0 2.8 2.8"
          fill="none"
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={cn(
          "text-lg font-extrabold leading-none tracking-tight sm:text-xl",
          onDark ? "text-white" : "text-brand-dark",
        )}
      >
        Neighborhood
        <span className="text-brand">Wash</span>
      </span>
    </Link>
  );
}
