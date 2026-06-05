import { Hero } from "@/features/hero";
import { ServicesSection } from "@/features/services";
import { WhyChooseUs } from "@/features/why-choose-us";
import { Testimonials } from "@/features/social-proof";
import { WorkGallery } from "@/features/gallery";
import { QuoteCallout } from "@/features/quote";
import { AreasServed } from "@/features/areas-served";
import { ContactInfo } from "@/features/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <WorkGallery />
      <QuoteCallout />
      <AreasServed />
      <ContactInfo />
    </>
  );
}
