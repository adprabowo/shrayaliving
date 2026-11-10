"use client";

import { useEffect, useRef, type ReactNode, type ElementType } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  id?: string;
};

export default function Reveal({ children, as: Tag = "div", className = "", delay = 0, id }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag id={id} ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}
