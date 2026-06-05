"use client";

import { useState } from "react";
import { site } from "@/shared/config/site";
import { Button } from "@/shared/components/ui/Button";
import { quoteContent } from "../data/quote.content";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-ink " +
  "placeholder:text-slate-400 focus-visible:border-brand focus-visible:outline-none";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm" role="status">
        <span className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <p className="text-xl font-bold text-brand-dark">{quoteContent.successTitle}</p>
        <p className="mt-2 text-muted">{quoteContent.successBody}</p>
        <a href={site.phoneHref} className="mt-4 inline-block font-semibold text-brand">
          Or call {site.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      <div className="grid gap-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Name <span className="text-red-600">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} placeholder="Your name" />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone <span className="text-red-600">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={fieldClass} placeholder="(540) 555-0123" />
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
            Service needed
          </label>
          <select id="service" name="service" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a service
            </option>
            {quoteContent.serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
            Anything else? <span className="text-muted">(optional)</span>
          </label>
          <textarea id="message" name="message" rows={3} className={fieldClass} placeholder="Tell us what needs cleaning, address, preferred date…" />
        </div>

        {status === "error" && error && (
          <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}

        <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"} className="w-full">
          {status === "submitting" ? "Sending…" : "Request My Free Estimate"}
        </Button>
        <p className="text-center text-xs text-muted">
          Prefer to talk now? Call{" "}
          <a href={site.phoneHref} className="font-semibold text-brand">
            {site.phoneDisplay}
          </a>
        </p>
      </div>
    </form>
  );
}
