import { site } from "@/shared/config/site";

const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

export const contactContent = {
  heading: "Get in Touch",
  intro: "Call, email, or stop by — we're local and happy to help.",
  fullAddress,
  mapEmbedSrc: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
} as const;
