import Image from "next/image";
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
      href="home"
      aria-label={`${site.name} — home`}
      className={cn(
        "inline-flex items-center",
        onDark && "rounded-lg bg-white p-2",
        className,
      )}
    >
      <Image
        src="/images/logo-pressure-wash.png"
        alt={`${site.name} logo`}
        width={200}
        height={95}
        priority={!onDark}
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
