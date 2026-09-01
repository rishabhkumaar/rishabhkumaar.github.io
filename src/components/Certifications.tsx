"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { certifications, type Certification } from "@/data/portfolio";
import Reveal from "./Reveal";

/* ─── Certificate Lightbox Modal ────────────── */
function CertificateModal({
  cert,
  onClose,
}: {
  cert: Certification;
  onClose: () => void;
}) {
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
      aria-label={`Certificate: ${cert.title}`}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-border">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-bg-secondary/50">
          <div>
            <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              {cert.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
              {cert.title}
            </h3>
            <p className="text-xs text-text-secondary">
              Issued by {cert.issuer} {cert.date ? `• ${cert.date}` : ""}
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

        {/* Certificate Image View */}
        <div className="flex-1 p-4 sm:p-6 overflow-auto flex items-center justify-center bg-zinc-950/5">
          <Image
            src={cert.imagePath}
            alt={`${cert.title} — ${cert.issuer}`}
            width={1200}
            height={850}
            className="max-h-[65vh] w-auto h-auto object-contain rounded-lg border border-border/80 shadow-md"
            unoptimized
          />
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-border bg-bg-secondary/30 text-xs font-mono">
          <div className="flex items-center gap-3 text-text-secondary">
            {cert.hours && <span>Hours: {cert.hours}</span>}
            {cert.grade && (
              <span className="text-accent font-semibold">
                Grade: {cert.grade}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={cert.imagePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial !text-xs !py-1.5 !px-3"
            >
              Open Full Image
            </a>
            {cert.url && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial btn-editorial-primary !text-xs !py-1.5 !px-3"
              >
                Verify Certificate →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Certifications Main Component ─────────── */
export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const groups: Array<Certification["issuerGroup"]> = [
    "Saylor Academy",
    "Infosys Springboard",
    "iamneo / LPU",
    "HackerRank",
  ];

  return (
    <section
      id="credentials"
      className="relative py-20 lg:py-28 overflow-hidden border-t border-border"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="watermark-text top-10 left-[2%] opacity-[0.03]">
        CREDENTIALS // 05
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <Reveal>
          <div className="section-meta-label">
            <span>05 // VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="section-editorial-title text-text-primary mb-12">
            ACADEMIC &amp; TECHNICAL <span className="text-accent">CERTIFICATIONS</span>
          </h2>
        </Reveal>

        <div className="space-y-12">
          {groups.map((group) => {
            const groupCerts = certifications.filter(
              (c) => c.issuerGroup === group
            );
            if (groupCerts.length === 0) return null;

            return (
              <Reveal key={group}>
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-2 border-b border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                    <h3 className="text-base font-bold text-text-primary font-mono uppercase tracking-wider">
                      {group}
                    </h3>
                    <span className="text-xs text-text-tertiary font-mono">
                      ({groupCerts.length})
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {groupCerts.map((cert) => (
                      <div
                        key={cert.id}
                        className="bg-card border border-border rounded-xl p-4 flex flex-col justify-between group hover:border-accent/50 transition-colors shadow-sm"
                      >
                        <div>
                          {/* Thumbnail */}
                          <div
                            onClick={() => setSelectedCert(cert)}
                            className="relative w-full h-36 mb-4 rounded-lg overflow-hidden border border-border bg-white flex items-center justify-center p-2 cursor-pointer group-hover:shadow-md transition-shadow"
                          >
                            <Image
                              src={cert.imagePath}
                              alt={`${cert.title} thumbnail`}
                              fill
                              className="object-contain p-1 group-hover:scale-[1.02] transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, 25vw"
                              unoptimized
                            />
                            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 bg-card/95 text-accent text-xs font-semibold px-3 py-1.5 rounded-full shadow border border-accent/20">
                                View Certificate
                              </span>
                            </div>
                          </div>

                          <span className="inline-block font-mono text-[0.65rem] uppercase tracking-wider font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full mb-2">
                            {cert.category}
                          </span>

                          <h4 className="text-sm font-bold text-text-primary mb-1 leading-snug group-hover:text-accent transition-colors">
                            {cert.title}
                          </h4>
                          <p className="text-xs text-text-secondary mb-3">
                            {cert.issuer}
                          </p>

                          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-text-tertiary">
                            {cert.hours && (
                              <span className="bg-bg-secondary px-2 py-0.5 rounded">
                                {cert.hours}
                              </span>
                            )}
                            {cert.date && (
                              <span className="bg-bg-secondary px-2 py-0.5 rounded">
                                {cert.date}
                              </span>
                            )}
                            {cert.grade && (
                              <span className="bg-accent/10 text-accent font-semibold px-2 py-0.5 rounded">
                                Grade: {cert.grade}
                              </span>
                            )}
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedCert(cert)}
                          className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-mono font-semibold text-accent hover:underline w-full"
                        >
                          <span>VIEW CERTIFICATE</span>
                          <span>→</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}
