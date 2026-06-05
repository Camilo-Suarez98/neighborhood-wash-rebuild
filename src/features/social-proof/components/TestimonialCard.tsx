import { Rating } from "@/shared/components/ui/Rating";
import type { Testimonial } from "../data/testimonials.content";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <Rating
        value={t.rating}
        label={`Rated ${t.rating} out of 5 stars`}
        className="mb-4"
      />
      <blockquote className="flex-1 text-[15px] leading-relaxed text-ink">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 border-t border-slate-100 pt-4">
        <span className="block font-semibold text-brand-dark">{t.author}</span>
        <span className="text-sm text-muted">
          {t.location} · {t.service}
        </span>
      </figcaption>
    </figure>
  );
}
