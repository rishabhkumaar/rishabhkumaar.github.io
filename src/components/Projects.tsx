"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, type Project } from "@/data/portfolio";
import Reveal from "./Reveal";
import BrowserMockup from "./BrowserMockup";
import ProjectDetail from "./ProjectDetail";

/* ─── Rishource Architecture Tree ─── */
function RishourceTree() {
  return (
    <div className="p-5 bg-card border border-border rounded-xl font-mono text-xs text-text-secondary space-y-1 my-6 shadow-sm">
      <div className="font-bold text-accent mb-2">
        RISHOURCE ARCHITECTURE (AutoShardedBot)
      </div>
      <div className="pl-2 space-y-0.5 text-[0.7rem]">
        <p>├─ MODERATION <span className="text-text-tertiary">(Auto-warn, mutes, bans)</span></p>
        <p>├─ AI COGS <span className="text-text-tertiary">(OpenAI conversational)</span></p>
        <p>├─ WEATHER &amp; AIR <span className="text-text-tertiary">(Real-time telemetry)</span></p>
        <p>├─ GAMES &amp; LEADERBOARDS <span className="text-text-tertiary">(XP tracking)</span></p>
        <p>├─ TICKETING <span className="text-text-tertiary">(Support categories)</span></p>
        <p>├─ LOGGING <span className="text-text-tertiary">(5 log levels &amp; rotation)</span></p>
        <p>└─ WEB DASHBOARD <span className="text-text-tertiary">(OAuth2 + Prisma + Node-Cache)</span></p>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const rishource = projects.find((p) => p.id === "rishource")!;
  const coursesGlance = projects.find((p) => p.id === "courses-glance")!;
  const portfolioOS = projects.find((p) => p.id === "portfolio-os")!;
  const weatherNow = projects.find((p) => p.id === "weather-now")!;

  return (
    <>
      <section
        id="projects"
        className="relative py-20 lg:py-28 overflow-hidden border-t border-border"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="watermark-text top-10 right-[2%] opacity-[0.03]">
          SHOWCASE // 04
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-24 lg:space-y-32">
          
          {/* Header */}
          <Reveal>
            <div>
              <div className="section-meta-label">
                <span>04 // FEATURED CASE STUDIES</span>
              </div>
              <h2 className="section-editorial-title text-text-primary">
                FLAGSHIP &amp; <span className="text-accent">ENGINEERING PROJECTS</span>
              </h2>
            </div>
          </Reveal>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* SCENE 01: RISHOURCE (FLAGSHIP) */}
          {/* ─────────────────────────────────────────────────────────── */}
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-bg-secondary/50 p-6 sm:p-10 rounded-2xl border border-border">
              {/* Text Left — 5 cols */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-accent text-white font-mono text-[0.65rem] font-bold uppercase rounded-full">
                    01 // FLAGSHIP
                  </span>
                  <span className="font-mono text-xs text-text-tertiary">DISCORD PLATFORM</span>
                </div>

                <h3 className="project-editorial-title text-text-primary">
                  RISHOURCE
                </h3>
                <p className="text-base font-semibold text-accent">
                  Discord Bot &amp; Full-Stack Management Platform
                </p>

                <p className="text-sm text-text-secondary leading-relaxed">
                  Architected a sharded Discord infrastructure organized into dynamic Cogs with an asynchronous PostgreSQL backend, OAuth2 web management dashboard, and Node-Cache TTL rate limiting.
                </p>

                <RishourceTree />

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {rishource.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setSelectedProject(rishource)}
                    className="btn-editorial btn-editorial-primary"
                  >
                    <span>EXPLORE RISHOURCE DETAILS</span>
                    <span className="arrow-icon">→</span>
                  </button>
                </div>
              </div>

              {/* 60% Area Image Right — 7 cols */}
              <div className="lg:col-span-7">
                <div
                  onClick={() => setSelectedProject(rishource)}
                  className="cursor-pointer group transform lg:hover:scale-[1.01] transition-transform duration-300"
                >
                  <BrowserMockup
                    src={rishource.heroImage}
                    alt={rishource.heroImageAlt}
                    url="https://rishource.app/guilds"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* SCENE 02: COURSES GLANCE */}
          {/* ─────────────────────────────────────────────────────────── */}
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Image Left with Secondary Overlap — 7 cols */}
              <div className="lg:col-span-7 relative order-2 lg:order-1">
                <div
                  onClick={() => setSelectedProject(coursesGlance)}
                  className="cursor-pointer relative z-10 group"
                >
                  <BrowserMockup
                    src={coursesGlance.heroImage}
                    alt={coursesGlance.heroImageAlt}
                    url="https://courses-glance.app/dashboard"
                  />
                </div>

                {/* Overlapping Secondary PDF Viewer Screenshot */}
                <div className="absolute -bottom-6 -right-4 sm:-right-8 z-20 w-3/5 shadow-2xl rounded-lg overflow-hidden border border-border hidden sm:block">
                  <Image
                    src={coursesGlance.screenshots[0].path}
                    alt="PDF Viewer"
                    width={600}
                    height={340}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                </div>
              </div>

              {/* Text Right — 5 cols */}
              <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-accent uppercase">
                    02 // ACADEMIC PLATFORM
                  </span>
                </div>

                <h3 className="project-editorial-title text-text-primary">
                  COURSES GLANCE
                </h3>
                <p className="text-base font-semibold text-accent">
                  Academic Knowledge Hub &amp; PDF Annotations
                </p>

                <p className="text-sm text-text-secondary leading-relaxed">
                  Integrated PDF.js browser document rendering with lazy loading, page navigation, text search, bookmarks, and persistent Firestore annotations scoped across user accounts.
                </p>

                <div className="space-y-2 font-mono text-xs text-text-secondary py-2 border-y border-border">
                  <p>• PDF.js Browser Document Engine</p>
                  <p>• Normalized Coordinate Highlight Capture</p>
                  <p>• Firebase Firestore &amp; Scoped Auth Rules</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {coursesGlance.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setSelectedProject(coursesGlance)}
                    className="btn-editorial"
                  >
                    <span>VIEW COURSES GLANCE</span>
                    <span className="arrow-icon">→</span>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* SCENE 03: PORTFOLIO 2.0 (UBUNTU OS) */}
          {/* ─────────────────────────────────────────────────────────── */}
          <Reveal>
            <div className="bg-bg-secondary/40 p-6 sm:p-10 rounded-2xl border border-border space-y-8">
              <div className="max-w-2xl">
                <span className="font-mono text-xs font-bold text-accent uppercase">
                  03 // OPERATING SYSTEM ENVIRONMENT
                </span>
                <h3 className="project-editorial-title text-text-primary mt-1">
                  PORTFOLIO 2.0
                </h3>
                <p className="text-base font-semibold text-accent">
                  UbuntuOS Web Environment &amp; Window Manager
                </p>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                  Engineered a desktop environment supporting dragging, minimizing, maximizing, restoring, closing, focus z-index orchestration, terminal simulations, and dynamic app registries.
                </p>
              </div>

              {/* Large Centered Image Showcase */}
              <div
                onClick={() => setSelectedProject(portfolioOS)}
                className="cursor-pointer group max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform duration-300"
              >
                <BrowserMockup
                  src={portfolioOS.heroImage}
                  alt={portfolioOS.heroImageAlt}
                  url="https://portfolio-2-0.app"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
                <div className="flex flex-wrap gap-1.5">
                  {portfolioOS.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(portfolioOS)}
                  className="btn-editorial"
                >
                  <span>VIEW OS ENVIRONMENT</span>
                  <span className="arrow-icon">→</span>
                </button>
              </div>
            </div>
          </Reveal>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* SCENE 04: WEATHER NOW */}
          {/* ─────────────────────────────────────────────────────────── */}
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Text Left — 5 cols */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-accent uppercase">
                    04 // METEOROLOGICAL DATA
                  </span>
                </div>

                <h3 className="project-editorial-title text-text-primary">
                  WEATHER NOW
                </h3>
                <p className="text-base font-semibold text-accent">
                  Dual-Axis Meteorological Telemetry Dashboard
                </p>

                <p className="text-sm text-text-secondary leading-relaxed">
                  Engineered a responsive telemetry dashboard retrieving 5-day / 3-hour forecast intervals and rendering a dual-axis Chart.js temperature/humidity visualization alongside atmospheric metrics.
                </p>

                <div className="space-y-2 font-mono text-xs text-text-secondary py-2 border-y border-border">
                  <p>• OpenWeatherMap API Integration</p>
                  <p>• Dual-Axis Chart.js Temperature &amp; Humidity Graph</p>
                  <p>• 10+ Environmental Attributes &amp; Wind Telemetry</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {weatherNow.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setSelectedProject(weatherNow)}
                    className="btn-editorial"
                  >
                    <span>VIEW WEATHER NOW</span>
                    <span className="arrow-icon">→</span>
                  </button>
                </div>
              </div>

              {/* Image Right — 7 cols */}
              <div className="lg:col-span-7">
                <div
                  onClick={() => setSelectedProject(weatherNow)}
                  className="cursor-pointer group transform lg:hover:scale-[1.01] transition-transform duration-300"
                >
                  <BrowserMockup
                    src={weatherNow.heroImage}
                    alt={weatherNow.heroImageAlt}
                    url="https://weather-now.app"
                  />
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
