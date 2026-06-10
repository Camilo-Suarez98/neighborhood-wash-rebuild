import { cn } from "@/shared/lib/cn";

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={cn("h-5 w-5", filled ? "text-amber-400" : "text-slate-300")}
      fill="currentColor"
    >
      <path d="M10 1.5l2.6 5.27 5.82.846-4.21 4.105.994 5.79L10 14.99l-5.204 2.736.994-5.79L1.58 7.616l5.82-.846L10 1.5z" />
    </svg>
  );
}

export function Rating({
  value,
  outOf = 5,
  label,
  className,
}: {
  value: number;
  outOf?: number;
  label?: string;
  className?: string;
}) {
  const rounded = Math.round(value);
  return (
    <span
      className={cn("inline-flex items-center gap-0.5", className)}
      role="img"
      aria-label={label ?? `Rated ${value} out of ${outOf} stars`}
    >
      {Array.from({ length: outOf }, (_, i) => (
        <Star key={i} filled={i < rounded} />
      ))}
    </span>
  );
}
