"use client";

import { useEffect, useState } from "react";
import { brand, navLinks, waLink } from "@/lib/site";
import Logo from "./Logo";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav
          aria-label="Navigasi utama"
          className="flex w-full max-w-5xl items-center justify-between gap-4 rounded-2xl border border-white/40 bg-white/75 py-2 pl-3 pr-2 shadow-lg shadow-black/5 backdrop-blur-xl"
        >
          <a href="#home" className="flex items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy">
            <Logo className="size-8" />
            <span className="title-2 text-ink">{brand}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={active === l.href ? "true" : undefined}
                  className={`title-4 rounded-lg px-3 py-2 transition-colors duration-300 ease-base hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-navy ${
                    active === l.href ? "bg-navy/10 text-navy" : "text-ink-soft"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button-sm hidden rounded-xl bg-accent px-3 py-2 text-white transition duration-300 ease-base hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:inline-block"
            >
              Jadwalkan survey
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              className="relative size-10 rounded-xl transition-colors duration-300 hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-navy md:hidden"
            >
              <span
                className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-ink transition-transform duration-500 ease-base ${
                  open ? "rotate-45" : "-translate-y-1"
                }`}
              />
              <span
                className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-ink transition-transform duration-500 ease-base ${
                  open ? "-rotate-45" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 bg-white/90 px-4 pt-24 backdrop-blur-2xl md:hidden"
      >
        <ul className="flex flex-col gap-2">
          {[...navLinks, { href: "#kontak", label: "Kontak" }].map((l, idx) => (
            <li
              key={l.href}
              className="opacity-0 animate-[menu-in_500ms_var(--ease-base)_forwards]"
              style={{ animationDelay: `${Math.min(idx * 60, 340)}ms` }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="heading-5 block rounded-xl px-3 py-3 text-ink transition-colors duration-300 hover:bg-black/5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="button-md mt-8 block rounded-xl bg-accent px-3 py-3 text-center text-white"
        >
          Jadwalkan survey lokasi
        </a>
        <style>{`@keyframes menu-in{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}`}</style>
      </div>
    </>
  );
}
