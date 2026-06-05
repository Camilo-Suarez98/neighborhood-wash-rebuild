import { site } from "@/shared/config/site";

/**
 * LocalBusiness structured data (schema.org) built from the single NAP source.
 * Helps Google show the business in local/maps results for "pressure washing
 * near me" searches. Rendered as a <script type="application/ld+json">.
 */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    image: `${site.url}/og.svg`,
    "@id": site.url,
    url: site.url,
    telephone: site.phoneDisplay,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    areaServed: site.areasServed.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "12:00",
      },
    ],
    makesOffer: [...site.services.residential, ...site.services.commercial].map(
      (s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } }),
    ),
  };

  return (
    <script
      type="application/ld+json"
      // structured data must reach the DOM as text, not be JSX-escaped
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
