import Image from "next/image";
import type { GalleryItem } from "../data/gallery.content";

export function BeforeAfter({ item }: { item: GalleryItem }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-4/3">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          width={item.image.width}
          height={item.image.height}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <span className="absolute left-3 top-3 rounded-md bg-red-600/90 px-2 py-0.5 text-xs font-bold text-white">
          BEFORE
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-accent/95 px-2 py-0.5 text-xs font-bold text-white">
          AFTER
        </span>
      </div>
      <figcaption className="px-4 py-3 text-center text-sm font-semibold text-brand-dark">
        {item.label}
      </figcaption>
    </figure>
  );
}
