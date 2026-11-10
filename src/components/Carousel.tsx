"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

type Slide = { src: string; alt: string; caption?: string };

export default function Carousel({
  slides,
  label,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  slides: Slide[];
  label: string;
  className?: string;
  sizes?: string;
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % n), 5000);
    return () => clearInterval(t);
  }, [paused, n]);

  const go = (d: number) => setI((p) => (p + d + n) % n);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className={`relative overflow-hidden rounded-3xl bg-navy-deep ${className}`}
    >
      {slides.map((s, idx) => (
        <div
          key={s.src}
          aria-hidden={idx !== i}
          className={`absolute inset-0 transition-opacity duration-700 ease-base ${idx === i ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={s.src} alt={s.alt} fill sizes={sizes} className="object-cover" priority={idx === 0} />
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-black/45 p-4 backdrop-blur-sm md:p-6">
        <p className="title-3 text-white" aria-live="polite">
          {slides[i].caption ?? slides[i].alt}
          <span className="caption-5 ml-2 text-white/70">
            {i + 1} / {n}
          </span>
        </p>
        <div className="flex shrink-0 gap-2">
          {[
            { d: -1, Icon: CaretLeft, l: "Sebelumnya" },
            { d: 1, Icon: CaretRight, l: "Berikutnya" },
          ].map(({ d, Icon, l }) => (
            <button
              key={l}
              type="button"
              onClick={() => go(d)}
              aria-label={l}
              className="grid size-10 place-items-center rounded-full bg-white/15 text-white transition duration-300 ease-base hover:bg-white/30 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-white"
            >
              <Icon size={20} weight="bold" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
