import { site } from "@/shared/config/site";

export const quoteContent = {
  heading: "Get Your Free Estimate",
  subheading:
    "Tell us what needs cleaning and we'll get back to you fast — usually the same day. No obligation, no pressure.",
  serviceOptions: [
    ...site.services.residential,
    ...site.services.commercial,
    "Other / Not sure yet",
  ],
  bullets: [
    "Same-day response during business hours",
    "Free, no-obligation quote",
    "Licensed & insured, satisfaction guaranteed",
  ],
  successTitle: "Thanks — we got it!",
  successBody:
    "We'll reach out shortly with your free estimate. Need it sooner? Just give us a call.",
} as const;
