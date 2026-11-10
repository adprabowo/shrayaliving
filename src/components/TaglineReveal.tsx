"use client";

import { useEffect, useRef } from "react";

const lines = [
  "Dekat dengan kampus, kantor, dan rumah sakit.",
  "Waktu yang biasanya habis di jalan",
  "kini kembali untuk keluarga.",
];

export default function TaglineReveal() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const words = root.querySelectorAll<HTMLElement>(".tagline-word");
    // Trigger line sits at 55% of the viewport height; each word lights up once as it crosses it.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -45% 0px", threshold: 1 }
    );
    words.forEach((w) => io.observe(w));
    return () => io.disconnect();
  }, []);

  return (
    <section aria-label="Tagline" className="bg-surface py-24 md:py-24">
      <div className="mx-auto max-w-[680px] px-4 md:max-w-[880px]">
        <p ref={ref} className="heading-4 md:heading-2 leading-tight md:leading-tight">
          {lines.map((line, li) => (
            <span key={li} className="block">
              {line.split(" ").map((word, wi) => (
                <span key={`${li}-${wi}`} className="tagline-word">
                  {word}{" "}
                </span>
              ))}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
