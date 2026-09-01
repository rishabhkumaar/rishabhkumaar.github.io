"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { achievements, leetcodeBadges, participation } from "@/data/portfolio";
import Reveal from "./Reveal";

/* ─── Participation Certificate Modal ─── */
function ParticipationModal({ onClose }: { onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) onClose();
    },
    [onClose]
  );

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Participation Certificate: ${participation.title}`}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-border">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-bg-secondary/50">
          <div>
            <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              {participation.type}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-text-primary">
              {participation.title}
            </h3>
            <p className="text-xs text-text-secondary">
              Organized by {participation.organizers}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-background border border-border hover:bg-accent-light hover:text-accent transition-colors"
            aria-label="Close modal"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 p-4 sm:p-6 overflow-auto flex items-center justify-center bg-zinc-950/5">
          <Image
            src={participation.imagePath}
            alt={participation.title}
            width={1200}
            height={850}
            className="max-h-[65vh] w-auto h-auto object-contain rounded-lg border border-border/80 shadow-md"
            unoptimized
          />
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-bg-secondary/30 text-xs font-mono">
          <span className="text-text-secondary">
            Participation Milestone (Global Hackathon Node)
          </span>
          <a
            href={participation.imagePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial !text-xs !py-1.5 !px-3"
          >
            Open Full Image
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Achievements() {
  const [showPartModal, setShowPartModal] = useState(false);

  return (
    <section
      id="achievements"
      className="relative py-16 lg:py-24 overflow-hidden border-t border-border"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <Reveal>
          <div className="section-meta-label">
            <span>05.1 // MILESTONES &amp; BADGES</span>
          </div>
        </Reveal>

        {/* Large Typography-Driven Metrics */}
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 my-8 pb-10 border-b border-border">
            {achievements.map((ach) => (
              <div key={ach.label} className="space-y-1">
                <p className="font-mono text-4xl sm:text-5xl font-black text-accent tracking-tight">
                  {ach.metric}
                </p>
                <p className="font-mono text-sm font-bold text-text-primary uppercase tracking-wider">
                  {ach.label}
                </p>
                <p className="text-xs text-text-tertiary">{ach.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Participation Card & LeetCode Badges */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Hackathon Participation Card — 8 cols */}
            <div className="lg:col-span-8 bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row items-center gap-6 group hover:border-accent/40 transition-colors shadow-sm">
              <div
                onClick={() => setShowPartModal(true)}
                className="relative w-full sm:w-48 h-32 rounded-lg overflow-hidden border border-border bg-white shrink-0 cursor-pointer p-1"
              >
                <Image
                  src={participation.imagePath}
                  alt={participation.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-card/95 text-accent text-[0.65rem] font-mono font-bold px-2.5 py-1 rounded-full shadow border border-accent/20">
                    View Certificate
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <span className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full mb-1 inline-block">
                  {participation.type}
                </span>
                <h4 className="text-base font-bold text-text-primary mb-1 group-hover:text-accent transition-colors">
                  {participation.title}
                </h4>
                <p className="text-xs text-text-secondary mb-2">
                  Organized by <strong className="text-text-primary">{participation.organizers}</strong>
                </p>
                <button
                  onClick={() => setShowPartModal(true)}
                  className="font-mono text-xs text-accent hover:underline font-bold inline-flex items-center gap-1"
                >
                  VIEW PARTICIPATION CERTIFICATE →
                </button>
              </div>
            </div>

            {/* Badges — 4 cols */}
            <div className="lg:col-span-4 space-y-3">
              <p className="font-mono text-xs font-bold text-text-tertiary uppercase tracking-widest">
                LeetCode Badges:
              </p>
              <div className="flex flex-wrap gap-2">
                {leetcodeBadges.map((badge) => (
                  <span key={badge} className="tech-pill font-mono text-xs font-semibold">
                    🏆 {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {showPartModal && (
        <ParticipationModal onClose={() => setShowPartModal(false)} />
      )}
    </section>
  );
}
