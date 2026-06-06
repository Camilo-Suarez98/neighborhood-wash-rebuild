import Image from "next/image";
import { site } from "@/shared/config/site";
import { Container } from "@/shared/components/ui/Container";
import { Heading } from "@/shared/components/ui/Heading";
import { ButtonLink } from "@/shared/components/ui/Button";
import { heroContent } from "../data/hero.content";

export function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden bg-brand-light">
      <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <div className="text-center lg:text-left">
          <p className="mb-4 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-sm font-semibold uppercase tracking-[0.08em] text-brand lg:justify-start">
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-accent" fill="currentColor" aria-hidden="true">
              <path d="M12 2a6.5 6.5 0 0 0-6.5 6.5c0 4.6 5.5 11.4 6 12.1a.7.7 0 0 0 1.1 0c.5-.7 6-7.5 6-12.1A6.5 6.5 0 0 0 12 2zm0 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
            <span className="tracking-[0.08em] text-brand-dark">
              {site.areasServed.join(" · ")}
            </span>
          </p>

          <Heading level={1} className="text-brand-dark">
            {heroContent.headline}
          </Heading>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-normal text-muted lg:mx-0">
            {heroContent.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <ButtonLink
              href={site.phoneHref}
              variant="primary"
              size="lg"
              aria-label={`Call ${site.name} at ${site.phoneDisplay}`}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.3a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1 1 0 0 1-.25 1l-2.2 2.3z" />
              </svg>
              Call {site.phoneDisplay}
            </ButtonLink>
            <ButtonLink href="#quote" variant="secondary" size="lg">
              Get Free Estimate
            </ButtonLink>
          </div>

          <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-brand-dark lg:justify-start">
            {heroContent.trust.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <svg viewBox="0 0 20 20" className="h-4 w-4 text-accent" fill="currentColor" aria-hidden="true">
                  <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.3-6.3a1 1 0 0 1 1.4 0z" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
            <Image
              src={heroContent.image.src}
              alt={heroContent.image.alt}
              width={heroContent.image.width}
              height={heroContent.image.height}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
