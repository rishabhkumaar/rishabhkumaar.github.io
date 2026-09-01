"use client";

import { identity } from "@/data/portfolio";
import { ASSETS } from "@/data/assets";
import Reveal from "./Reveal";
import BrowserMockup from "./BrowserMockup";

export default function Hero() {
  return (
    <section
      id="intro"
      className="relative min-h-[92vh] flex items-center overflow-hidden pt-20 lg:pt-12 pb-16"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background Watermark Typography */}
      <div className="watermark-text top-10 right-[5%] opacity-[0.035]">
        SYSTEM // 01
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Column — 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="section-meta-label">
                <span>01 // SYSTEM IDENTITY</span>
              </div>
            </Reveal>

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
                  COMPUTER SCIENCE UNDERGRADUATE
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
              <div className="flex flex-wrap items-center gap-4 pt-2">
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
                  <span className="arrow-icon">→</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Immersive Product Showcase Scene — 5 cols */}
          <div className="lg:col-span-5 relative">
            <Reveal>
              <div className="relative">
                {/* Decorative technical accent bar */}
                <div className="absolute -top-6 -left-6 z-0 w-24 h-24 border-l-2 border-t-2 border-accent/30 pointer-events-none" />
                
                {/* Rishource Browser Mockup */}
                <div className="relative z-10 transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
                  <BrowserMockup
                    src={ASSETS.RISHOURCE_HERO.path}
                    alt={ASSETS.RISHOURCE_HERO.alt}
                    url="https://rishource.app/dashboard"
                    priority
                  />
                </div>

                {/* Floating Meta Tag */}
                <div className="absolute -bottom-4 -right-4 z-20 bg-card border border-border px-4 py-2 rounded-lg shadow-lg hidden sm:flex items-center gap-3 font-mono text-xs">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-bold text-text-primary">RISHOURCE DISCORD PLATFORM</span>
                  <span className="text-text-tertiary">| v2.4</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
