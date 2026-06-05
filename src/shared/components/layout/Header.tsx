import { site } from "@/shared/config/site";
import { PhoneLink } from "@/shared/components/ui/PhoneLink";
import { ButtonLink } from "@/shared/components/ui/Button";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

/**
 * Sticky site header. Server Component — no client JS except the mobile menu.
 * For the high-intent "pressure washing near me" visitor the phone number is
 * always one tap away and the estimate CTA is always visible.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <PhoneLink className="text-sm font-bold text-brand-dark hover:text-brand">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-accent" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.3a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1 1 0 0 1-.25 1l-2.2 2.3z" />
            </svg>
            {site.phoneDisplay}
          </PhoneLink>
          <ButtonLink href="#quote" variant="secondary">
            Get Free Estimate
          </ButtonLink>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
