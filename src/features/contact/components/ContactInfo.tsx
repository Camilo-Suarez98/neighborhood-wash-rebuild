import { Section } from "@/shared/components/ui/Section";
import { Heading } from "@/shared/components/ui/Heading";
import { PhoneLink } from "@/shared/components/ui/PhoneLink";
import { site } from "@/shared/config/site";
import { contactContent } from "../data/contact.content";
import { MapEmbed } from "./MapEmbed";

function Row({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">{label}</p>
        <div className="mt-0.5 text-lg text-ink">{children}</div>
      </div>
    </div>
  );
}

const ic = "h-5 w-5";

export function ContactInfo() {
  return (
    <Section id="contact" ariaLabel="Contact us" tint="light">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <Heading level={2} className="text-brand-dark">
            {contactContent.heading}
          </Heading>
          <p className="mt-4 text-lg text-muted leading-normal">{contactContent.intro}</p>

          <div className="mt-8 space-y-6">
            <Row
              label="Call or text"
              icon={
                <svg viewBox="0 0 24 24" className={ic} fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.3a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1 1 0 0 1-.25 1l-2.2 2.3z" />
                </svg>
              }
            >
              <PhoneLink className="font-bold text-brand-dark hover:text-brand" />
            </Row>

            <Row
              label="Email"
              icon={
                <svg viewBox="0 0 24 24" className={ic} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
                </svg>
              }
            >
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </Row>

            <Row
              label="Address"
              icon={
                <svg viewBox="0 0 24 24" className={ic} fill="currentColor" aria-hidden="true">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                </svg>
              }
            >
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                {contactContent.fullAddress}
              </a>
            </Row>

            <Row
              label="Hours"
              icon={
                <svg viewBox="0 0 24 24" className={ic} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
                </svg>
              }
            >
              <ul className="text-base">
                {site.hours.map((h) => (
                  <li key={h.days}>
                    <span className="font-medium">{h.days}:</span> {h.time}
                  </li>
                ))}
              </ul>
            </Row>
          </div>
        </div>

        <MapEmbed />
      </div>
    </Section>
  );
}
