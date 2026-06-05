export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
  service: string;
}

export const socialProof = {
  heading: "What Neighbors Are Saying",
  disclaimer: "Sample reviews shown — verified Google reviews coming soon.",
  testimonials: [
    {
      quote:
        "Our driveway and walkway looked brand new the same afternoon. They were careful around the flower beds and even swept up after. Booking was easy and they showed up right on time.",
      author: "Sarah M.",
      location: "Roanoke, VA",
      rating: 5,
      service: "Driveway Cleaning",
    },
    {
      quote:
        "We were prepping the house to sell and the siding had green streaks everywhere. The soft-wash made a huge difference and our agent said it bumped the curb appeal instantly.",
      author: "David & Karen T.",
      location: "Salem, VA",
      rating: 5,
      service: "House Washing",
    },
    {
      quote:
        "Honest, friendly, and they clearly knew what pressure to use so nothing got damaged. The roof streaks are gone and they didn't try to upsell me on things I didn't need.",
      author: "Marcus R.",
      location: "Vinton, VA",
      rating: 5,
      service: "Roof Cleaning",
    },
  ] satisfies Testimonial[],
  guarantee: {
    title: "Our 100% Satisfaction Guarantee",
    body: "If any surface we clean doesn't meet your expectations, tell us and we'll re-treat it at no extra charge. You should love the result before you pay it another thought.",
  },
} as const;
