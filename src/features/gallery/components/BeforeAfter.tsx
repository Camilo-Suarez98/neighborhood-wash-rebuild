"use client";

import { useState } from "react";
import Image from "next/image";
import type { BeforeAfterPair } from "../data/gallery.content";

export function BeforeAfter({ pair }: { pair: BeforeAfterPair }) {
  const [pct, setPct] = useState(50);

  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-4/3 select-none">
        <Image
          src={pair.after.src}
          alt={pair.after.alt}
          width={pair.after.width}
          height={pair.after.height}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        >
          <Image
            src={pair.before.src}
            alt={pair.before.alt}
            width={pair.before.width}
            height={pair.before.height}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 33vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <span className="absolute left-3 top-3 rounded-md bg-red-600/90 px-2 py-0.5 text-xs font-bold text-white">
          BEFORE
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-accent/95 px-2 py-0.5 text-xs font-bold text-white">
          AFTER
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow"
          style={{ left: `${pct}%` }}
        />

        <input
          type="range"
          min={0}
          max={100}
          value={pct}
          onChange={(e) => setPct(Number(e.target.value))}
          aria-label={`Reveal before and after: ${pair.label}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent [&::-webkit-slider-thumb]:h-9 [&::-webkit-slider-thumb]:w-9 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-brand [&::-webkit-slider-thumb]:bg-white [&::-moz-range-thumb]:h-9 [&::-moz-range-thumb]:w-9 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-brand [&::-moz-range-thumb]:bg-white"
        />
      </div>
      <figcaption className="px-4 py-3 text-center text-sm font-semibold text-brand-dark">
        {pair.label}
      </figcaption>
    </figure>
  );
}
