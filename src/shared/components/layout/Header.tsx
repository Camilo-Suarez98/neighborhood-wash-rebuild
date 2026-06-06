import { site } from "@/shared/config/site";
import { PhoneLink } from "@/shared/components/ui/PhoneLink";
import { ButtonLink } from "@/shared/components/ui/Button";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {site.nav.map((item) =>
            "children" in item ? (
              <div key={item.label} className="group relative">
                <a
                  href={item.href}
                  aria-haspopup="true"
                  className="inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-brand"
                >
                  {item.label}
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4 transition-transform group-hover:rotate-180"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.2 7.5 10 12.3l4.8-4.8z" />
                  </svg>
                </a>
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="min-w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/60">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-ink transition-colors hover:bg-brand-light hover:text-brand"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-ink transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ),
          )}
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
