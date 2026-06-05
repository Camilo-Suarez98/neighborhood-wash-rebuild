import { Section } from "@/shared/components/ui/Section";
import { Heading } from "@/shared/components/ui/Heading";
import { ValueProp } from "./ValueProp";
import { valueProps } from "../data/value-props.content";

export function WhyChooseUs() {
  return (
    <Section id="why-us" ariaLabel="Why choose us" tint="light">
      <div className="mx-auto max-w-2xl text-center">
        <Heading level={2} className="text-brand-dark">
          {valueProps.heading}
        </Heading>
        <p className="mt-4 text-lg text-muted">{valueProps.intro}</p>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {valueProps.items.map((item) => (
          <ValueProp key={item.title} item={item} />
        ))}
      </div>
    </Section>
  );
}
