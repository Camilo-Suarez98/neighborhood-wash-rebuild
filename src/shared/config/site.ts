export const site = {
  name: "Neighborhood Wash",
  tagline: "Pressure Washing in Roanoke, VA",
  phoneDisplay: "(540) 595-8008",
  phoneHref: "tel:+5405958008",
  email: "kyla.neighborhoodwash@gmail.com",
  address: {
    street: "5340 Cooper St",
    city: "Roanoke",
    state: "VA",
    zip: "24019",
  },
  mapsUrl: "https://maps.google.com/?q=5340+Cooper+St+Roanoke+VA+24019",
  hours: [
    { days: "Mon – Sat", time: "8:00 AM – 8:00 PM" },
    { days: "Sun", time: "9:00 AM – 12:00 PM" },
  ],
  areasServed: ["Roanoke", "Vinton", "Salem", "Hollins", "Cave Spring"],
  nav: [
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#our-work" },
    { label: "Areas", href: "#areas" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type Site = typeof site;