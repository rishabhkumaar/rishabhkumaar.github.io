"use client";

import Image from "next/image";
import { identity } from "@/data/portfolio";
import Reveal from "./Reveal";
import BrowserMockup from "./BrowserMockup";

export default function Hero() {
  return (
    <section
      id="intro"
      className="relative min-h-[95vh] flex items-center overflow-hidden pt-20 lg:pt-16 pb-16"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background Ghost Typography */}
      <div className="watermark-text top-4 right-[2%] opacity-[0.035]">
        SYSTEMS // BUILD
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Editorial Header Strip */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-border">
            <div className="section-meta-label !mb-0">
              <span>01 // SYSTEM IDENTITY</span>
            </div>
            <div className="font-mono text-xs text-text-tertiary">
              CSE UNDERGRADUATE // FULL-STACK DEVELOPER
            </div>
          </div>
        </Reveal>

        {/* Asymmetric Magazine Cover Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column — 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <h1 className="hero-title text-text-primary tracking-tight">
                RISHABH
                <br />
                <span className="text-accent">KUMAR</span>
              </h1>
            </Reveal>

            <Reveal>
              <div className="space-y-1 font-mono">
                <p className="text-sm sm:text-base font-bold text-text-primary uppercase tracking-wider">
                  2ND-YEAR B.TECH CSE STUDENT // LPU
                </p>
                <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest">
                  FULL-STACK &amp; SOFTWARE DEVELOPER
                </p>
              </div>
            </Reveal>

            <Reveal>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
                {identity.tagline}
              </p>
            </Reveal>

            <Reveal>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href="#projects" className="btn-editorial btn-editorial-primary">
                  <span>VIEW PROJECTS</span>
                  <span className="arrow-icon">→</span>
                </a>
                <a
                  href={identity.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial"
                >
                  <span>VIEW RESUME</span>
                  <span className="arrow-icon">↗</span>
                </a>
                <a
                  href={identity.resumeDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial"
                  title="Download Resume PDF"
                >
                  <span>DOWNLOAD RESUME</span>
                  <span className="arrow-icon">↓</span>
                </a>
              </div>
            </Reveal>

            {/* Technical Stack Pills */}
            <Reveal>
              <div className="pt-2 flex flex-wrap items-center gap-2 font-mono text-xs text-text-tertiary">
                <span className="text-text-secondary font-bold">STACK:</span>
                <span className="tech-pill">Python</span>
                <span className="tech-pill">TypeScript</span>
                <span className="tech-pill">Next.js</span>
                <span className="tech-pill">PostgreSQL</span>
                <span className="tech-pill">Prisma</span>
              </div>
            </Reveal>
          </div>

          {/* Right Column — 7 cols Digital Profile & Portrait Showcase Scene */}
          <div className="lg:col-span-7 relative">
            <Reveal>
              <div className="relative pt-4 pb-8 sm:py-6">

                {/* 1. Primary GitHub Profile Browser Mockup */}
                <div className="relative z-10 transform lg:rotate-[-1deg] hover:rotate-0 transition-transform duration-500 max-w-xl ml-auto">
                  <BrowserMockup
                    src="/images/profiles/github.webp"
                    alt="GitHub Profile — Rishabh Kumar"
                    url="https://github.com/rishabhkumaar"
                    priority
                  />
                </div>

                {/* 2. Secondary Overlapping LeetCode Profile View */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 w-3/4 sm:w-2/3 transform -rotate-2 hover:rotate-0 transition-transform duration-500 hidden sm:block">
                  <BrowserMockup
                    src="/images/profiles/leetcode.webp"
                    alt="LeetCode Profile — Rishabh Kumar"
                    url="https://leetcode.com/u/rishabhkumaaar"
                    className="shadow-2xl border-2 border-white/80"
                  />
                </div>

                {/* 3. Real Profile Portrait Floating Card */}
                <div className="absolute -bottom-6 right-4 sm:right-12 z-30 w-44 sm:w-52 transform hover:scale-[1.03] transition-transform duration-300">
                  <div className="relative rounded-xl overflow-hidden border-2 border-white shadow-2xl bg-card p-1.5">
                    <div className="relative h-48 sm:h-56 w-full rounded-lg overflow-hidden bg-bg-secondary">
                      <Image
                        src="/images/profile/profile-photo.webp"
                        alt="Rishabh Kumar — Profile Photo"
                        fill
                        priority
                        className="object-cover object-top"
                        unoptimized
                      />
                    </div>

                    <div className="p-2.5 bg-card font-mono text-[0.65rem] flex items-center justify-between border-t border-border mt-1">
                      <div>
                        <p className="font-bold text-text-primary">RISHABH KUMAR</p>
                        <p className="text-text-tertiary">@rishabhkumaar</p>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Technical Metadata Stamp */}
                <div className="absolute top-0 right-0 z-0 font-mono text-[0.65rem] text-text-tertiary uppercase tracking-widest hidden lg:block">
                  {`// DIGITAL PROFILE COMPOSITION`}
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
