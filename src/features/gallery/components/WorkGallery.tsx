import { Section } from "@/shared/components/ui/Section";
import { Heading } from "@/shared/components/ui/Heading";
import { ButtonLink } from "@/shared/components/ui/Button";
import { BeforeAfter } from "./BeforeAfter";
import { galleryContent } from "../data/gallery.content";

export function WorkGallery() {
  return (
    <Section id="our-work" ariaLabel="Our work — before and after">
      <div className="mx-auto max-w-2xl text-center">
        <Heading level={2} className="text-brand-dark">
          {galleryContent.heading}
        </Heading>
        <p className="mt-4 text-lg text-muted leading-normal">{galleryContent.intro}</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleryContent.items.map((item) => (
          <BeforeAfter key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <ButtonLink href="#quote" variant="secondary" size="lg">
          Get My Free Estimate
        </ButtonLink>
      </div>
    </Section>
  );
}
