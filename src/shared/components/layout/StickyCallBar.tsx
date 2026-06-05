"use client";

import { useEffect, useState } from "react";
import { site } from "@/shared/config/site";

/**
 * Mobile-only sticky bottom bar — the single highest-impact CRO element for a
 * visitor who searched "pressure washing near me" on a phone. One-tap Call and
 * one-tap Quote, always reachable. Appears after the user scrolls past the
 * hero (where those CTAs already live) to avoid redundant clutter up top.
 */
export function StickyCallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-slate-200 bg-slate-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] transition-transform duration-200 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      // hidden from a11y tree until shown so it isn't a dangling focus target
      aria-hidden={!show}
    >
      <a
        href={site.phoneHref}
        className="flex min-h-[56px] items-center justify-center gap-2 bg-accent font-semibold text-white"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.3a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1 1 0 0 1-.25 1l-2.2 2.3z" />
        </svg>
        Call Now
      </a>
      <a
        href="#quote"
        className="flex min-h-[56px] items-center justify-center gap-2 bg-brand font-semibold text-white"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h10" />
        </svg>
        Free Estimate
      </a>
    </div>
  );
}
