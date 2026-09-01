"use client";

import { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function Reveal({
  children,
  className = "",
  stagger = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      el.classList.add("visible");
      const children = el.querySelectorAll(".reveal");
      children.forEach((child) => child.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    if (stagger) {
      const children = el.querySelectorAll(".reveal");
      children.forEach((child) => observer.observe(child));
    } else {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [stagger]);

  const baseClass = stagger
    ? `reveal-stagger ${className}`
    : `reveal ${className}`;

  return (
    <div ref={ref} className={baseClass}>
      {children}
    </div>
  );
}
