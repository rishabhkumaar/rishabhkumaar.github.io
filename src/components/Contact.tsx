import { identity } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-36 overflow-hidden border-t border-border"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="watermark-text bottom-6 right-[2%] opacity-[0.03]">
        CONTACT // 06
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <Reveal>
          <div className="section-meta-label justify-center">
            <span>06 // INITIATE COLLABORATION</span>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="section-editorial-title text-text-primary mb-6 max-w-4xl mx-auto">
            LET&apos;S BUILD <span className="text-accent">SOMETHING USEFUL.</span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed font-normal">
            Open to full-stack engineering opportunities, software architecture roles, and technical collaborations.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href={`mailto:${identity.email}`}
              className="btn-editorial btn-editorial-primary !text-sm !px-8 !py-4 shadow-lg"
            >
              <span>{identity.email}</span>
              <span className="arrow-icon">→</span>
            </a>

            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial !text-sm !px-6 !py-4"
            >
              <span>GITHUB</span>
              <span className="arrow-icon">→</span>
            </a>

            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial !text-sm !px-6 !py-4"
            >
              <span>LINKEDIN</span>
              <span className="arrow-icon">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
