"use client";

import { useEffect, useState } from "react";
import { site } from "@/shared/config/site";
import { PhoneLink } from "@/shared/components/ui/PhoneLink";
import { ButtonLink } from "@/shared/components/ui/Button";
import { cn } from "@/shared/lib/cn";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setOpenSub(null);
  };

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
          className="fixed inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-slate-200 bg-white shadow-lg"
        >
          <nav aria-label="Mobile" className="flex flex-col px-4 py-3">
            {site.nav.map((item) =>
              "children" in item ? (
                <div key={item.label} className="border-b border-slate-100">
                  <button
                    type="button"
                    aria-expanded={openSub === item.label}
                    onClick={() =>
                      setOpenSub((cur) => (cur === item.label ? null : item.label))
                    }
                    className="flex min-h-[48px] w-full items-center justify-between text-base font-medium text-ink"
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 20 20"
                      className={cn(
                        "h-5 w-5 text-muted transition-transform",
                        openSub === item.label && "rotate-180",
                      )}
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M5.2 7.5 10 12.3l4.8-4.8z" />
                    </svg>
                  </button>
                  {openSub === item.label && (
                    <ul className="pb-2 pl-3">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            onClick={close}
                            className="flex min-h-[44px] items-center text-sm text-muted hover:text-brand"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={close}
                  className="flex min-h-[48px] items-center border-b border-slate-100 text-base font-medium text-ink"
                >
                  {item.label}
                </a>
              ),
            )}
            <div className="mt-4 flex flex-col gap-3 pb-2">
              <ButtonLink href={site.phoneHref} variant="primary" size="lg" onClick={close}>
                Call {site.phoneDisplay}
              </ButtonLink>
              <ButtonLink href="#quote" variant="secondary" size="lg" onClick={close}>
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
