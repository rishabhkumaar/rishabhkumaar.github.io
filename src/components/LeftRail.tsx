"use client";

import { useEffect, useState } from "react";
import { identity } from "@/data/portfolio";

const railItems = [
  { id: "intro", label: "01 INTRO" },
  { id: "journey", label: "02 JOURNEY" },
  { id: "systems", label: "03 SYSTEMS" },
  { id: "projects", label: "04 PROJECTS" },
  { id: "credentials", label: "05 CREDENTIALS" },
  { id: "contact", label: "06 CONTACT" },
];

export default function LeftRail() {
  const [activeSection, setActiveSection] = useState("intro");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = railItems.map((item) =>
        document.getElementById(item.id)
      );

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(railItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Fixed Left Rail */}
      <aside
        className="hidden lg:flex fixed top-0 left-0 bottom-0 w-[220px] z-50 flex-col justify-between p-8 border-r border-border bg-bg-primary/90 backdrop-blur-md select-none"
        aria-label="Portfolio Section Rail Navigation"
      >
        {/* Top identity */}
        <div>
          <a
            href="#intro"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("intro");
            }}
            className="group block"
          >
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary group-hover:text-accent transition-colors">
              Rishabh Kumar
            </span>
            <span className="block font-mono text-[0.65rem] text-text-tertiary mt-0.5">
              CSE Undergraduate
            </span>
          </a>

          <div className="w-6 h-[1px] bg-border my-6" />

          {/* Nav Rail List */}
          <nav className="space-y-4">
            {railItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex items-center gap-3 w-full text-left transition-all duration-200 ${
                    isActive
                      ? "text-accent font-bold"
                      : "text-text-tertiary hover:text-text-primary"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span
                    className={`h-[2px] transition-all duration-200 ${
                      isActive
                        ? "w-6 bg-accent"
                        : "w-2 bg-text-tertiary/40 group-hover:w-4 group-hover:bg-text-secondary"
                    }`}
                  />
                  <span className="font-mono text-[0.7rem] uppercase tracking-wider">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Metadata */}
        <div className="font-mono text-[0.65rem] text-text-tertiary space-y-1">
          <p className="font-semibold text-text-secondary">SYSTEM PORTFOLIO</p>
          <p>LOC: IN // PHAGWARA</p>
          <p>STATUS: ACTIVE</p>
        </div>
      </aside>

      {/* Mobile Top Navigation Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-bg-primary/90 backdrop-blur-md border-b border-border px-5 py-3.5 flex items-center justify-between">
        <a
          href="#intro"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("intro");
          }}
          className="font-mono text-xs font-bold text-text-primary"
        >
          RISHABH KUMAR <span className="text-accent">{`// CSE`}</span>
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-text-primary font-mono text-xs border border-border rounded bg-card flex items-center gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>NAV</span>
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm pt-16 px-6 pb-8 flex flex-col justify-between animate-in fade-in">
          <div className="bg-card border border-border rounded-xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
                Sections Navigation
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-xs text-text-tertiary"
              >
                ✕ CLOSE
              </button>
            </div>

            <div className="space-y-3">
              {railItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left font-mono text-sm py-2 px-3 rounded transition-colors ${
                    activeSection === item.id
                      ? "bg-accent/10 text-accent font-bold"
                      : "text-text-secondary hover:bg-bg-secondary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-border flex justify-between text-xs font-mono text-text-tertiary">
              <a
                href={identity.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Resume →
              </a>
              <a
                href={`mailto:${identity.email}`}
                className="text-accent hover:underline"
              >
                Email →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
