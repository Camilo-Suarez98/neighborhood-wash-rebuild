import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type Level = 1 | 2 | 3 | 4;

const styles: Record<Level, string> = {
  1: "text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl",
  2: "text-3xl font-bold tracking-tight sm:text-4xl",
  3: "text-xl font-semibold tracking-tight sm:text-2xl",
  4: "text-lg font-semibold",
};

export function Heading({
  level,
  visualLevel,
  children,
  className,
  id,
}: {
  level: Level;
  visualLevel?: Level;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const Tag = `h${level}` as const;
  return (
    <Tag id={id} className={cn(styles[visualLevel ?? level], className)}>
      {children}
    </Tag>
  );
}
