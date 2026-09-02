"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { type Project } from "@/data/portfolio";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
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

  // Close on overlay click
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) onClose();
    },
    [onClose]
  );

  // Focus modal on mount
  useEffect(() => {
    panelRef.current?.focus();
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} project details`}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-2xl shadow-2xl overflow-y-auto outline-none border border-border"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-accent-light hover:text-accent transition-colors shadow"
          aria-label="Close project details"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Hero Image */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-zinc-900/5 border-b border-border">
          <Image
            src={project.heroImage}
            alt={project.heroImageAlt}
            fill
            className="object-cover object-top"
            unoptimized
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="mb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              {project.name}
            </h2>
            <p className="text-base font-semibold text-accent mt-0.5">{project.subtitle}</p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-pill font-mono">
                {tech}
              </span>
            ))}
          </div>

          {/* Explicit P → T → R → L Case Study Breakdown */}
          <div className="mb-8 p-5 bg-bg-secondary/60 rounded-xl border border-border space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-bold pb-2 border-b border-border">
              PROJECT CASE STUDY (P → T → R → L)
            </h3>

            {/* P — Problem */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold text-white bg-red-600 px-2 py-0.5 rounded">
                  P — PROBLEM
                </span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed pl-1">
                {project.problem}
              </p>
            </div>

            {/* T — Technology */}
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-xs font-bold text-white bg-blue-600 px-2 py-0.5 rounded">
                  T — TECHNOLOGY
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 pl-1">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-pill font-mono text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* R — Result */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold text-white bg-green-600 px-2 py-0.5 rounded">
                  R — RESULT / BUILT
                </span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed pl-1">
                {project.result}
              </p>
            </div>

            {/* L — Learning */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold text-white bg-purple-600 px-2 py-0.5 rounded">
                  L — KEY LEARNING
                </span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed pl-1">
                {project.learning}
              </p>
            </div>
          </div>

          {/* Key Engineering Work */}
          <div className="mb-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-text-tertiary mb-3 font-semibold">
              Key Engineering Work &amp; Features
            </h3>
            <ul className="space-y-3">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Real Screenshots Gallery */}
          {project.screenshots.length > 0 && (
            <div className="mb-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-text-tertiary mb-3 font-semibold">
                Screenshots &amp; Interfaces
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.screenshots.map((ss, i) => (
                  <div
                    key={i}
                    className="relative h-48 sm:h-56 rounded-xl overflow-hidden border border-border bg-zinc-900/5 shadow-sm"
                  >
                    <Image
                      src={ss.path}
                      alt={ss.alt}
                      fill
                      className="object-cover object-top"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-5 border-t border-border">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                View Repository on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
