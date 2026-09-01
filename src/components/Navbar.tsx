"use client";

import { useState, useEffect } from "react";
import { navItems, identity } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex items-center justify-between px-6 py-3"
        style={{ maxWidth: "var(--max-width)" }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-mono text-sm font-bold tracking-wider text-foreground hover:text-accent transition-colors"
          aria-label="Home"
        >
          RK<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors rounded-lg hover:bg-accent-light/40"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={identity.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !py-2 !px-4 !text-xs"
          >
            Resume
          </a>
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2 !px-4 !text-xs"
            aria-label="GitHub profile"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-accent-light/40 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[52px] z-40 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-lg" />
        <nav className="relative flex flex-col items-center justify-center gap-6 pt-16 px-6" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium text-text-secondary hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-3 mt-4">
            <a
              href={identity.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              onClick={() => setMobileOpen(false)}
            >
              Resume
            </a>
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={() => setMobileOpen(false)}
            >
              GitHub
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
