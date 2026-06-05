import { Section } from "@/shared/components/ui/Section";
import { Heading } from "@/shared/components/ui/Heading";
import { TestimonialCard } from "./TestimonialCard";
import { socialProof } from "../data/testimonials.content";

export function Testimonials() {
  return (
    <Section id="reviews" ariaLabel="Customer reviews and guarantee">
      <div className="mx-auto max-w-2xl text-center">
        <Heading level={2} className="text-brand-dark">
          {socialProof.heading}
        </Heading>
        <p className="mt-3 text-sm font-medium uppercase tracking-wide text-muted">
          {socialProof.disclaimer}
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {socialProof.testimonials.map((t) => (
          <TestimonialCard key={t.author} t={t} />
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-brand-dark px-6 py-8 text-center text-white sm:flex-row sm:gap-6 sm:text-left">
        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3l7 3v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6l7-3zM9 12l2 2 4-4" />
          </svg>
        </span>
        <div>
          <Heading level={3} className="text-white">
            {socialProof.guarantee.title}
          </Heading>
          <p className="mt-2 max-w-2xl text-white/85">{socialProof.guarantee.body}</p>
        </div>
      </div>
    </Section>
  );
}
