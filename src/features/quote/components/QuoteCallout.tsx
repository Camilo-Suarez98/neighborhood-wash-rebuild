import { Section } from "@/shared/components/ui/Section";
import { Heading } from "@/shared/components/ui/Heading";
import { PhoneLink } from "@/shared/components/ui/PhoneLink";
import { site } from "@/shared/config/site";
import { QuoteForm } from "./QuoteForm";
import { quoteContent } from "../data/quote.content";

export function QuoteCallout() {
  return (
    <Section id="quote" ariaLabel="Request a free estimate" tint="dark">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Heading level={2} className="text-white">
            {quoteContent.heading}
          </Heading>
          <p className="mt-4 text-lg text-white/85">{quoteContent.subheading}</p>

          <ul className="mt-8 space-y-3">
            {quoteContent.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-white/90">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="currentColor" aria-hidden="true">
                  <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.3-6.3a1 1 0 0 1 1.4 0z" />
                </svg>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl bg-white/10 p-5">
            <p className="text-sm text-white/70">Rather call?</p>
            <PhoneLink className="mt-1 text-2xl font-bold text-white hover:text-brand-light">
              {site.phoneDisplay}
            </PhoneLink>
            <p className="mt-1 text-sm text-white/70">
              {site.hours[0].days}: {site.hours[0].time}
            </p>
            <p className="mt-1 text-sm text-white/70">
              {site.hours[1].days}: {site.hours[1].time}
            </p>
          </div>
        </div>

        <QuoteForm />
      </div>
    </Section>
  );
}
