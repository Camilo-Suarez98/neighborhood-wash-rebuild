const residentialServices = [
  "House Washing",
  "Roof Cleaning",
  "Window Cleaning",
  "Gutter Cleaning",
  "Driveway Cleaning",
  "Fence Cleaning",
  "Deck and Patio Cleaning",
  "Pool Deck Cleaning",
  "Rust Removal",
  "Solar Panel Cleaning",
  "Christmas Light Installation",
] as const;

const commercialServices = [
  "Building Washing",
  "Storefront Cleaning",
  "Drive Through Cleaning",
  "Parking Lot and Garage Cleaning",
  "Apartment Complex Pressure Washing",
  "Graffiti Removal",
  "Dumpster Pad Cleaning",
  "Gum Removal",
  "Awning Cleaning",
  "Gas Station Cleaning",
  "Post Construction Clean Up",
] as const;

export const site = {
  name: "Neighborhood Wash",
  tagline: "Pressure Washing in Roanoke, VA",
  url: "https://neighborhood-wash-rebuild.vercel.app",
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
    { label: "Home", href: "#home" },
    { label: "About", href: "#why-us" },
    {
      label: "Residential",
      href: "#services",
      children: residentialServices.map((s) => ({ label: s, href: "#services" })),
    },
    {
      label: "Commercial",
      href: "#services",
      children: commercialServices.map((s) => ({ label: s, href: "#services" })),
    },
    { label: "Areas", href: "#areas" },
    { label: "Contact", href: "#contact" },
  ],
  services: {
    featured: ["House Washing", "Roof Cleaning", "Building Washing"],
    residential: residentialServices,
    commercial: commercialServices,
  },
} as const;

export type Site = typeof site;