import type { ElementType, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";
import { Container } from "./Container";

export function Section({
  id,
  ariaLabel,
  as: Tag = "section",
  tint,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  ariaLabel?: string;
  as?: ElementType;
  tint?: "light" | "dark";
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        tint === "light" && "bg-brand-light",
        tint === "dark" && "bg-brand-dark text-white",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}
