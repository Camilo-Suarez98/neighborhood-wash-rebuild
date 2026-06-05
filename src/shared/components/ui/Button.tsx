import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/shared/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  // min-height 44px keeps tap targets accessible on mobile
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg font-semibold " +
  "transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  // primary = the "call now" action (green converts for high-intent visitors)
  primary: "bg-accent text-white hover:bg-accent-dark shadow-sm",
  // secondary = "get free estimate"
  secondary: "bg-brand text-white hover:bg-brand-dark shadow-sm",
  ghost: "border border-white/30 text-white hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-base sm:text-lg",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

/** Anchor/Link button: internal hrefs use next/link, external + tel/mailto use <a>. */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & { href: string } & Omit<ComponentProps<"a">, "href" | "className">) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}

/** Real <button> for form actions / interactive triggers. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
