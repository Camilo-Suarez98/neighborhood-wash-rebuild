import { Section } from "@/shared/components/ui/Section";
import { Heading } from "@/shared/components/ui/Heading";
import { ServiceCard } from "./ServiceCard";
import { servicesContent } from "../data/services.content";

function ServiceList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <Heading level={3} visualLevel={4} className="text-brand-dark">
        {title}
      </Heading>
      <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
        {items.map((s) => (
          <li key={s}>
            <a
              href="#quote"
              className="flex items-center gap-2 py-1 text-[15px] text-ink hover:text-brand"
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-brand" fill="currentColor" aria-hidden="true">
                <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.3-6.3a1 1 0 0 1 1.4 0z" />
              </svg>
              {s}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServicesSection() {
  return (
    <Section id="services" ariaLabel="Our services">
      <div className="mx-auto max-w-2xl text-center">
        <Heading level={2} className="text-brand-dark">
          {servicesContent.heading}
        </Heading>
        <p className="mt-4 text-lg text-muted leading-normal">{servicesContent.intro}</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {servicesContent.featured.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <ServiceList title="Residential Services" items={servicesContent.residential} />
        <ServiceList title="Commercial Services" items={servicesContent.commercial} />
      </div>
    </Section>
  );
}
