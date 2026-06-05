import { Section } from "@/shared/components/ui/Section";
import { Heading } from "@/shared/components/ui/Heading";
import { areasContent } from "../data/areas.content";

export function AreasServed() {
  return (
    <Section id="areas" ariaLabel="Areas we serve">
      <div className="mx-auto max-w-2xl text-center">
        <Heading level={2} className="text-brand-dark">
          {areasContent.heading}
        </Heading>
        <p className="mt-4 text-lg text-muted">{areasContent.intro}</p>
      </div>

      <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
        {areasContent.areas.map((area) => (
          <li key={area}>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 font-semibold text-brand-dark transition-colors hover:border-brand hover:text-brand"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand" fill="currentColor" aria-hidden="true">
                <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
              </svg>
              {area}, VA
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
