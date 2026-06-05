"use client";

import { useEffect, useState } from "react";
import { site } from "@/shared/config/site";
import { PhoneLink } from "@/shared/components/ui/PhoneLink";
import { ButtonLink } from "@/shared/components/ui/Button";

/**
 * Mobile hamburger + slide-down menu. This is the ONLY interactive part of
 * the header, so it's the only piece that needs to be a Client Component —
 * the rest of the header stays a Server Component (zero JS).
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  // Lock background scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-brand-dark hover:bg-brand-light"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          {open ? (
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 z-40 border-t border-slate-200 bg-white shadow-lg"
        >
          <nav aria-label="Mobile" className="flex flex-col px-4 py-3">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center border-b border-slate-100 text-base font-medium text-ink"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3 pb-2">
              <ButtonLink href={site.phoneHref} variant="primary" size="lg" onClick={() => setOpen(false)}>
                Call {site.phoneDisplay}
              </ButtonLink>
              <ButtonLink href="#quote" variant="secondary" size="lg" onClick={() => setOpen(false)}>
                Get Free Estimate
              </ButtonLink>
            </div>
            <p className="py-3 text-center text-sm text-muted">
              Or tap to call <PhoneLink className="font-semibold text-brand" />
            </p>
          </nav>
        </div>
      )}
    </div>
  );
}
